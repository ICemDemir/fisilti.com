import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { useUser } from "../features/authentication/useUser";
import { useLogout } from "../features/authentication/useLogout";

import Logo from "./Logo";
import SearchBar from "./SearchBar";

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20rem;
  background-color: #fed766;
  height: 10vh;

  @media (max-width: 1200px) {
    gap: 8rem;
  }

  @media (max-width: 1050px) {
    gap: 5rem;
  }

  @media (max-width: 950px) {
    gap: 2rem;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 10rem;
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 0 2rem;

  @media (max-width: 900px) {
    gap: 0 1rem;
  }

  @media (max-width: 500px) {
    gap: 0;
  }
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    padding: 1.2rem 1.6rem;
    transition: background-color 0.3s ease, color 0.3s ease;

    @media (max-width: 950px) {
      font-size: 1.4rem;
      padding: 1.2rem;
    }

    @media (max-width: 500px) {
      font-size: 1rem;
      padding: 0.8rem;
    }
  }

  &:hover,
  &:active,
  &:active:link,
  &:active:visited {
    background-color: var(--color-brand-900);
    color: #fff;
  }
`;

const OnUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  padding: 1.2rem 1.6rem;
  transition: background-color 0.3s ease, color 0.3s ease;
  color: #fff;
  font-weight: 700;
  cursor: pointer;

  @media (max-width: 950px) {
    font-size: 1.4rem;
    padding: 1.2rem;
  }

  @media (max-width: 500px) {
    font-size: 1.2rem;
    padding: 0.6rem;
  }
`;

function PageNav() {
  const { isAuthenticated, activeUser } = useUser();

  const { isLoading, logout } = useLogout();

  return (
    <StyledNav>
      <Logo />
      <SearchBar />
      <NavList>
        <li>
          <StyledNavLink to="/makaleler">Articles</StyledNavLink>
        </li>
        <li>
          {activeUser?.role === "admin" || activeUser?.role === "writer" ? (
            <StyledNavLink to="/myProfile">My Profile</StyledNavLink>
          ) : (
            <StyledNavLink to="/authors">Authors</StyledNavLink>
          )}
        </li>
        <li>
          {isAuthenticated ? (
            <OnUser disabled={isLoading} onClick={logout}>
              Log out
            </OnUser>
          ) : (
            <StyledNavLink to="/login">Log in</StyledNavLink>
          )}
        </li>
      </NavList>
    </StyledNav>
  );
}

export default PageNav;
