import { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import imgCarLogo from "../../../assets/images/lambo-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Link from "./Link";

const IndexWrapper = styled.div`
  ${tw`
        w-full
        grid-cols-5
        background[#2c2929]
        mobile:(place-items-center)
      `}
`;

const FooterWrapper = styled.div`
  ${tw`
        grid
        max-height[830px]
        w-10/12
        pt-10
        mx-auto
        text-white
        2xl:grid-cols-5
        lg:grid-cols-3
        md:(grid-cols-3 mr-5)
        sm:(grid-cols-3 )
      
    `}
`;

const SectionOne = styled.div`
  ${tw`
      width[220px]
      justify-center
      max-lg:(pr-10)
    `}

  img {
    ${tw`
          width[30px]
      `}
  }
`;
const LogoFooter = styled.div`
  ${tw`
      flex
      `}
`;
const LogoText = styled.div`
  ${tw`
      items-center
      lg:(text-2xl)
    `}
`;
const LogoDesc = styled.div`
  ${tw`
      p-2
      color[]
      `}
`;
const SectionTwo = styled.div`
  & > h3 {
    ${tw`
      text-3xl
      font-bold
    `}
  }
  & > ul {
    ${tw`
      py-1
      px-3
    `}
    & > li {
      ${tw`
       pb-2
      `}
    }
  }
`;
const SectionThree = styled(SectionTwo)`
  ${tw`

    `}
`;

const Info = styled.div`
  h1 {
    ${tw`
      text-3xl
      font-bold
    `}
  }
  span {
    ${tw`
      pl-3
    `}
  }
`;

const Call = styled.div`
  ${tw`
      mt-1
      max-lg:(width[250px])
    `}
  & .footer-icon {
    ${tw`
      bg-red-500
      p-2
      border-radius[50%]
    `}
  }
`;

const Index: FC = () => {
  return (
    <IndexWrapper>
      <FooterWrapper>
        <SectionOne>
          <LogoFooter>
            <img src={imgCarLogo} alt="" />
            <LogoText>CarSports</LogoText>
          </LogoFooter>
          <LogoDesc>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
            dolore labore recusandae in, doloribus,
          </LogoDesc>
        </SectionOne>
        <SectionTwo>
          <Link />
        </SectionTwo>
        <SectionThree>
          <Link />
        </SectionThree>
        <Info>
          <h1>Call Now</h1>
          <Call>
            <i className="footer-icon">
              <FontAwesomeIcon icon={faPhone} />
            </i>
            <span>+56 755-642-8687</span>
          </Call>
        </Info>
        <Info>
          <h1>Mail Now</h1>
          <Call>
            <i className="footer-icon">
              <FontAwesomeIcon icon={faPhone} />
            </i>
            <span>carSports@gmail.com</span>
          </Call>
        </Info>
      </FooterWrapper>
    </IndexWrapper>
  );
};

export default Index;
