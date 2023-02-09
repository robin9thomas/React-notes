import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import {
  Form,
  Title,
  Content,
  SaveButton,
  SaveAndStatus,
  Loader,
  ErrorMessage,
} from "./Note.styled";
import { FiCheck } from "react-icons/fi";
import { IconAndLabel } from "../IconAndLabel/IconAndLabel.styled";

const Note = ({ onSave }) => {
  const { id } = useParams();

  const [note, setNote] = useState(null);
  const [status, setStatus] = useState("IDLE");

  const fetchNote = useCallback(async () => {
    const response = await fetch(`/notes/${id}`);
    const note = await response.json();
    setNote(note);
  }, [id]);

  const saveNote = async () => {
    setStatus("LOADING");
    const response = await fetch(`/notes/${note.id}`, {
      method: "PUT",
      body: JSON.stringify(note),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      setStatus("SAVED");
      onSave(note);
    } else {
      setStatus("ERROR");
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
          setStatus("IDLE");
          setNote({
            ...note,
            title: event.target.value,
          });
        }}
      />
      <Content
        value={note ? note.content : ""}
        onChange={(event) => {
          setStatus("IDLE");
          setNote({
            ...note,
            content: event.target.value,
          });
        }}
      />
      <SaveAndStatus>
        <SaveButton>Enregistrer</SaveButton>
        {status === "SAVED" ? (
          <IconAndLabel>
            <FiCheck />
            Enregistré
          </IconAndLabel>
        ) : status === "ERROR" ? (
          <ErrorMessage>Erreur lors de la sauvegarde</ErrorMessage>
        ) : status === "LOADING" ? (
          <Loader />
        ) : null}
      </SaveAndStatus>
    </Form>
  );
};

export default Note;
