import styled from "styled-components";

export const Wrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.darkGrey};
  background-color: white;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  color: ${({ theme }) => theme.colors.darkGrey};
  margin-top: 25px;
`;

export const HeaderWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkGrey};
  background-color: ${({ theme }) => theme.colors.grey};
  padding: 20px 25px;
`;

export const Title = styled.h4`
  margin-bottom: 5px;
`;

export const ContentP = styled.p`
  padding: 7px;
`;
