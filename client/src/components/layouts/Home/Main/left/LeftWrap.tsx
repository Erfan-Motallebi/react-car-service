import { FunctionComponent } from "react";
import MediaQuery from "react-responsive";
import styled from "styled-components";
import tw from "twin.macro";
import Buttons from "./Buttons/Buttons";

const LeftWrapper = styled.div`
  ${tw`
        flex
        flex-col
        w-4/5
    `}
`;

const LeftHeader = styled.div`
  ${tw`
     capitalize
     lg:(text-6xl leading-normal font-extrabold)
     max-lg:(text-5xl leading-normal font-extrabold)
    `}

  & > h1 {
    ${tw`
          text-3xl
          mb-5
          text-justify
        `};
  }
`;

const LeftMotto = styled.p`
  ${tw`
        lg:(leading-relaxed capitalize)
        max-lg:(p-3)
       mobile:(text-sm text-justify)
    `}
`;

const LeftWrap: FunctionComponent = () => {
  return (
    <LeftWrapper>
      <MediaQuery minWidth="580px">
        <LeftHeader>Pick the best sports car of your lifetime.</LeftHeader>
      </MediaQuery>
      <MediaQuery maxWidth="580px">
        <LeftHeader>
          <h1>Pick the best sports car of your lifetime.</h1>
        </LeftHeader>
      </MediaQuery>
      <LeftMotto>
        this is the best place in where you can find you <span>Sports Car</span>
        . take a look around and pick the one which appeals to you the most.
      </LeftMotto>
      <Buttons />
    </LeftWrapper>
  );
};

export default LeftWrap;
