import styled from "styled-components";
import { FiLoader } from "react-icons/fi";
import { IoCreateOutline } from "react-icons/io5";

const INPUT_PADDING = 8;

export const Form = styled.form`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: stretch;
`;

export const Title = styled.input`
    height: 40px;
    border: none;
    font-size: 24px;
    padding: ${INPUT_PADDING}px;
    color: ${( props ) => props.theme.mainTextColor};
    border-bottom: 1px solid ${(props) => props.theme.asideBackgroundColor};
    background: transparent;
`;

export const Content = styled.textarea`
    flex: 1;
    font-size: inherit;
    background: transparent;
    padding: ${INPUT_PADDING}px;
    font-family: inherit;
    color: ${( props ) => props.theme.mainTextColor};
    border: none;
    resize: none;
`;

export const SaveAndStatus = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    padding: ${INPUT_PADDING}px;
    border-top: 1px solid ${( props ) => props.theme.asideBackgroundColor};
    gap: 8px;
`;

export const SaveButton = styled.button`
    color: inherit;
    border: none;
    font-family: inherit;
    padding: ${INPUT_PADDING}px;
    height: 40px;
    background-color: ${( props ) => props.theme.asideBackgroundColor};
    border-top: 1px solid ${( props ) => props.theme.asideBackgroundColor};
`;

export const Loader = styled(FiLoader)`
    -webkit-animation: icon-spin 2s infinite linear;
              animation: icon-spin 2s infinite linear;

    @-webkit-keyframes icon-spin {
      0% {
        -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(359deg);
                transform: rotate(359deg);
      }
    }

    @keyframes icon-spin {
      0% {
        -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(359deg);
                transform: rotate(359deg);
      }
    }
`;

export const ErrorMessage = styled.div`
    color: ${( props ) => props.theme.errorColor};
`;

export const IconNoteCreate = styled(IoCreateOutline)`
  padding: ${INPUT_PADDING}px;
  height: 40px;
  width: 40px;
`;

export const DeleteNoteIcon = styled.button`
  color: inherit;
  border: none;
  padding: ${INPUT_PADDING}px;
  height: 40px;
  background-color: ${( props ) => props.theme.asideBackgroundColor};
  border-top: 1px solid ${( props ) => props.theme.asideBackgroundColor};
`;