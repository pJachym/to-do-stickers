import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  border-left: 1px solid ${({ theme }) => theme.colors.darkGrey};
  overflow: hidden;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.darkGrey};
  margin-bottom: 30px;
`;

export const ContentWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;
