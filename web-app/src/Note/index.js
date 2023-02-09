import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Form, Title, Content, SaveButton, SaveAndStatus } from "./Note.styled";

const Note = () => {
  const { id } = useParams();

  const [note, setNote] = useState(null);

  const fetchNote = useCallback(async () => {
    const response = await fetch(`/notes/${id}`);
    const note = await response.json();
    setNote(note);
  }, [id]);

  const saveNote = async () => {
    const response = await fetch(`/notes/${note.id}`, {
      method: "PUT",
      body: JSON.stringify(note),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      console.log("Erreur lors de la mise à jour de la note.");
    }
  };

  useEffect(() => {
    fetchNote();
  }, [id, fetchNote]);

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        saveNote();
      }}
    >
      <Title
        type="text"
        value={note ? note.title : ""}
        onChange={(event) => {
          setNote({
            ...note,
            title: event.target.value,
          });
        }}
      />
      <Content
        value={note ? note.content : ""}
        onChange={(event) => {
          setNote({
            ...note,
            content: event.target.value,
          });
        }}
      />
      <SaveAndStatus>
        <SaveButton>Enregistrer</SaveButton>
      </SaveAndStatus>
    </Form>
  );
};

export default Note;
