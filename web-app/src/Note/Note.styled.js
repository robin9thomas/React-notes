import styled from "styled-components";

const INPUT_PADDING = 12;

export const Form = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const Title = styled.input`
  height: 60px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.asideBackgroundColor};
  padding: ${INPUT_PADDING}px;
  font-size: 24px;
  color: inherit;
  background: transparent;
`;

export const Content = styled.textarea`
  padding: ${INPUT_PADDING}px;
  font-size: inherit;
  flex: 1;
  border: none;
  font-family: inherit;
  color: inherit;
  background: transparent;
`;

export const SaveAndStatus = styled.div`
  height: 60px;
  padding: ${INPUT_PADDING}px;
  border-top: 1px solid ${({ theme }) => theme.asideBackgroundColor};
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SaveButton = styled.button`
  height: 40px;
  border: 1px solid ${({ theme }) => theme.asideBackgroundColor};
  font-size: inherit;
  color: inherit;
  background-color: ${({ theme }) => theme.asideBackgroundColor};
`;
