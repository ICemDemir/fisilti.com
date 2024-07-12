import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { LiaFacebookF } from "react-icons/lia";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialInstagram } from "react-icons/sl";

import Logo from "./Logo";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  background-color: var(--color-brand-900);
  padding-top: 3rem;

  @media (max-width: 700px) {
    font-size: 1.2rem;
  }

  @media (max-width: 500px) {
    font-size: 1rem;
  }

  .heading {
    display: flex;
    justify-content: center;
    width: 70%;
    border-top: 2px solid #fff;
    margin: 1rem;
    padding: 1rem;
  }

  .row {
    display: flex;
    width: 70%;
    justify-content: space-between;
    margin-bottom: 2rem;

    &--1 {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      grid-gap: 10rem;

      @media (max-width: 700px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
      }
    }

    &--2 {
      justify-content: flex-start;
      gap: 2rem;
      @media (max-width: 700px) {
        justify-content: center;
      }
    }

    &--3 {
      font-size: 1.2rem;
      color: var(--color-grey-300);

      @media (max-width: 500px) {
        flex-direction: column;
        align-items: center;
      }
    }
  }
`;

function Footer({ onClick }) {
  return (
    <StyledFooter>
      <div className="heading">
        <Logo />
      </div>
      <div className="row row--1">
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam a ex
            temporibus id possimus neque, maxime laborum accusamus culpa. Fuga
            saepe excepturi odit
          </p>
        </div>
        <div>
          <div>
            <NavLink to="/about">About Fısıltı</NavLink>
          </div>
          <div>
            <NavLink to="/staff">Staff</NavLink>
          </div>
          <div>
            <NavLink to="/jobOpportunities">Jobs</NavLink>
          </div>
          <div>
            <NavLink to="/contact-us" onClick={onClick}>
              Contact us
            </NavLink>
          </div>
        </div>
        <div>
          <div>
            <NavLink to="/subscription">Subscription</NavLink>
          </div>
          <div>
            <NavLink to="/all-deals">Deals</NavLink>
          </div>
        </div>
      </div>
      <div className="row row--2">
        <NavLink to="https://www.facebook.com/" target="_blank">
          <LiaFacebookF />
        </NavLink>
        <NavLink to="https://twitter.com/" target="_blank">
          <FaXTwitter />
        </NavLink>
        <NavLink to="https://www.instagram.com/" target="_blank">
          <SlSocialInstagram />
        </NavLink>
      </div>
      <div className="row row--3">
        <div>&#169; 2024 Fısıltı, Inc</div>
        <NavLink to="/privacyPolicy">Privacy Policy</NavLink>
        <NavLink to="/termsOfUse">Terms of use</NavLink>
        <NavLink to="/cookies">Cookie Policy</NavLink>
        <NavLink to="/partnership">Partnership & Advertising</NavLink>
      </div>
    </StyledFooter>
  );
}

export default Footer;
