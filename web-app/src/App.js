import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { BsMoon } from "react-icons/bs";
import { darkTheme, GlobalStyles, lightTheme } from "./GlobalStyles";
import { Side, Main, FullHeightAndWidthCentered, LoaderWrapper, IconNoteCreateWrapper, HeadButtons, Search } from "./App.style";
import { NoteList } from "./NoteList/NoteList.styled";
import Note from "./Note";
import LinkToNote from "./LinkToNote";
import { Route, Routes } from "react-router-dom";
import { Loader, IconNoteCreate, DeleteNoteIcon } from "./Note/Note.styled";
import { IoCreateOutline } from "react-icons/io5";

function App() {
  const [notes, setNotes] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const [theme, setTheme] = useState('dark');
  const CurrentTheme = theme === 'dark' ? darkTheme : lightTheme;
  const fetchNotes = async () => {
    const response = await fetch("/notes");
    const notes = await response.json();
    setIsLoading(false);
    setNotes(notes);
  };

  const searchNotes = async (query) => {
    const notes = await fetch(`/notes?q=${query}`)
      .then(res => res.json());

    setIsLoading(false);
    setNotes(notes);
  }


  const createNote = async () => {
    const response = await fetch(`/notes/`, {
      method: "POST",
      body: JSON.stringify({
        title: "Nouvelle Note",
        content: ""
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const newNote = await response.json();
      setNotes(notes.concat([newNote]));
    };
  };

  const updateNote = (noteToUpdate) => {
    setNotes(
      notes.map((note) => note.id === noteToUpdate.id ? noteToUpdate : note)
    );
  };

  const updateDeleteNote = (noteToDelete) => {
    notes.map((note) => note.id === noteToDelete.id ? noteToDelete : note)
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <>
      <ThemeProvider theme={CurrentTheme} >
        <GlobalStyles />
        <Side>
          <Search placeholder="Rechercher..." onInput={(event) => {
            searchNotes(event.target.value);
          }}></Search>

          <BsMoon onClick={(event) => {
            if (theme === 'dark') {
              setTheme('light');
            }
            else {
              setTheme('dark')
            }

          }} />
          <IconNoteCreateWrapper onClick={(event) => {
            createNote();
          }}>
            <IconNoteCreate />
          </IconNoteCreateWrapper>

          {isLoading && (
            <LoaderWrapper>
              <Loader />
            </LoaderWrapper>
          )}
          {notes && (
            <NoteList>
              {notes.map((note) => (
                <li key={note.id}>
                  <LinkToNote id={note.id} title={note.title} />
                </li>
              ))}
            </NoteList>
          )}
        </Side>
        <Main>
          <Routes>
            <Route
              path="/"
              element={
                <FullHeightAndWidthCentered>
                  {!isLoading && "Séléctionnez une note pour l'éditer"}
                </FullHeightAndWidthCentered>
              }
            />
            <Route path="/notes/:id" element={<Note onDelete={updateDeleteNote} onSave={updateNote} />} />
          </Routes>
        </Main>
      </ThemeProvider>
    </>
  );
}

export default App;