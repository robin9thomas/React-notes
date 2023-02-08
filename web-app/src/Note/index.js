import { Form, Title, Content } from "./Note.styled";

const Note = () => {
  return (
    <Form>
      <Title type="text" />
      <Content>Contenu</Content>
      <button>Enregistrer</button>
    </Form>
  );
};

export default Note;
