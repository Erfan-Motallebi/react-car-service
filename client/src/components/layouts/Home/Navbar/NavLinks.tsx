import { FunctionComponent } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const NavLinkWrapper = styled.div``;

const UlWrapper = styled.ul`
  ${tw`
    relative
    z-50
    lg:flex
    `}
  li {
    ${tw`
       max-lg:(pt-8 hover:(transition-all transform[translate(20px)] ))
       max-lg:transition-all
       `}
    a {
      ${tw`
         transition
         duration-500
         ease-in-out
         lg:(transition-colors pr-5 border-none p-3 m-1 rounded-2xl)
         hover:text-link
        `}
    }
  }
`;

const NavLinks: FunctionComponent = () => {
  return (
    <NavLinkWrapper>
      <UlWrapper>
        <li>
          <a href="home">Home</a>
        </li>
        <li>
          <a href="cars">Cars</a>
        </li>
        <li>
          <a href="services">Services</a>
        </li>
        <li>
          <a href="Contact">Contact Us</a>
        </li>
      </UlWrapper>
    </NavLinkWrapper>
  );
};

export default NavLinks;
