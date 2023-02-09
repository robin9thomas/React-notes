import styled from "styled-components";

const SIDE_WIDTH = 240;

export const Side = styled.aside`
  position: fixed;
  width: ${SIDE_WIDTH}px;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.asideBackgroundColor};
`;

export const Main = styled.main`
  height: 100vh;
  margin-inline-start: ${SIDE_WIDTH}px;
`;

export const MessageNoNoteSelected = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
