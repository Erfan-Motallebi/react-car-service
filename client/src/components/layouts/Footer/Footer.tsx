import { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Index from ".";
import TopService from "./topService/TopService";

const FooterWrapper = styled.div`
  ${tw`
    max-w-screen-3xl
    mx-auto
    pt-32
    `}
`;

const Footer: FC = () => {
  return (
    <FooterWrapper>
      <TopService />
      <Index />
    </FooterWrapper>
  );
};

export default Footer;
