import styled from "@emotion/styled";

const SubmitButton = styled.button`
  display: block;
  height: 40px;
  width: 100%;
  font-size: inherit;
  background-color: #0a66c2;
  border-radius: 4px;
  color: #fff;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
  border: none;
`;

export default SubmitButton;

// background-color: ${props => (props.disabled ? "#7795f8" : "#f6a4eb")};