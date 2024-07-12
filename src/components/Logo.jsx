import { NavLink } from "react-router-dom";

import StyledLogo from "./StyledLogo";

function Logo() {
  function ScrollToTop() {
    window.scrollTo(0, 0);
  }
  return (
    <NavLink to="/" onClick={() => ScrollToTop()}>
      <StyledLogo src="../../public/favicon_io/logo.png" />
    </NavLink>
  );
}

export default Logo;
