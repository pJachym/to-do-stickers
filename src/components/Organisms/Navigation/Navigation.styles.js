import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.nav`
  height: 100vh;
  border-right: 1px solid ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  margin: 0;
  padding: 0;
`;

export const Logo = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  margin: 30px 0;
  letter-spacing: 2px;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

export const activeClassName = "active-link";
export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  font-size: ${({ theme }) => theme.fontSize.l};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  margin-right: 30px;
  margin-top: 25px;
  position: relative;

  &.${activeClassName} {
    &::after {
      opacity: 1;
    }
  }

  &::after {
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    content: "";
    position: absolute;
    width: 18px;
    height: 3px;
    top: 50%;
    transform: translateY(-50%);
    right: -30px;
    background-color: ${({ theme }) => theme.colors.darkPurple};
  }
`;
