import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { darkTheme, GlobalStyle } from "./GlobalStyle";
import { Side, Main, MessageNoNoteSelected } from "./App.styled";
import { NoteList } from "./NoteList/NoteList.styled";
import LinkToNote from "./LinkToNote";
import Note from "./Note";

function App() {
  const [notes, setNotes] = useState(null);

  const fetchNotes = async () => {
    const response = await fetch("/notes");
    const notes = await response.json();
    setNotes(notes);
  };

  const updateNote = (noteToUpdate) => {
    setNotes(
      notes.map((note) => (note.id === noteToUpdate.id ? noteToUpdate : note))
    );
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Side>
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
              <MessageNoNoteSelected>
                Sélectionnez une note pour l'éditer
              </MessageNoNoteSelected>
            }
          />
          <Route path="/notes/:id" element={<Note onSave={updateNote} />} />
        </Routes>
      </Main>
    </ThemeProvider>
  );
}

export default App;
