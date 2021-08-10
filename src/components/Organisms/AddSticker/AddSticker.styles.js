import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

export const StyledH2 = styled.h2`
  top: 75px;
  left: 30px;
  color: ${({ theme }) => theme.colors.darkGrey};
  margin-bottom: 20px;
`;

export const ErrorP = styled.p`
  color: ${({ theme }) => theme.colors.error};
  position: absolute;
  top: 0;
`;

export const StyledForm = styled.form`
  padding: 30px 50px;
  position: relative;

  button {
    margin-top: 20px;
    background-color: ${({ theme }) => theme.colors.grey};
    padding: 10px 40px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;
