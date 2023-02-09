import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Form, Title, Content, SaveButton, SaveAndStatus } from "./Note.styled";
import { FiCheck } from "react-icons/fi";
import { IconAndLabel } from "../IconAndLabel/IconAndLabel.styled";

const Note = () => {
  const { id } = useParams();

  const [note, setNote] = useState(null);
  const [isSaved, setIsSaved] = useState(false);

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
    if (response.ok) {
      setIsSaved(true);
    } else {
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
          setIsSaved(false);
          setNote({
            ...note,
            title: event.target.value,
          });
        }}
      />
      <Content
        value={note ? note.content : ""}
        onChange={(event) => {
          setIsSaved(false);
          setNote({
            ...note,
            content: event.target.value,
          });
        }}
      />
      <SaveAndStatus>
        <SaveButton>Enregistrer</SaveButton>
        {isSaved && (
          <IconAndLabel>
            <FiCheck />
            Enregistré
          </IconAndLabel>
        )}
      </SaveAndStatus>
    </Form>
  );
};

export default Note;
