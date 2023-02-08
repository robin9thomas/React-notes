import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Form, Title, Content } from "./Note.styled";

const Note = () => {
  const { id } = useParams();

  const [note, setNote] = useState(null);

  const fetchNote = useCallback(async () => {
    const response = await fetch(`/notes/${id}`);
    const note = await response.json();
    setNote(note);
  }, [id]);

  useEffect(() => {
    fetchNote();
  }, [id, fetchNote]);

  return (
    <Form>
      <Title type="text" value={note ? note.title : ""} />
      <Content value={note ? note.content : ""} />
      <button>Enregistrer</button>
    </Form>
  );
};

export default Note;
