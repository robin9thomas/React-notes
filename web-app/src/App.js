import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { darkTheme, GlobalStyle } from "./GlobalStyle";
import { Side, Main } from "./App.styled";
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
            element={<div>Sélectionnez une note pour l'éditer</div>}
          />
          <Route path="/notes/:id" element={<Note />} />
        </Routes>
      </Main>
    </ThemeProvider>
  );
}

export default App;
