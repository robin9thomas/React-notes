import styled from "styled-components";

const INPUT_PADDING = 8;

export const Form = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const Title = styled.input`
  height: 40px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.asideBackgroundColor};
  padding: ${INPUT_PADDING}px;
  font-size: 20px;
  color: inherit;
  background: transparent;
`;

export const Content = styled.textarea`
  padding: ${INPUT_PADDING}px;
  flex: 1;
  border: none;
  font-family: inherit;
  color: inherit;
  background: transparent;
`;
