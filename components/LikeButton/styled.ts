import styled from "styled-components";

export const LikeButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 9999px;
  border: 1px solid ${(props) => (props.isToggle ? "transparent" : "#c4c4c4")};
  background-color: ${(props) => (props.isToggle ? "#6bbbff" : "transparent")};
`;