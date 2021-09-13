import { FunctionComponent } from "react";
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
`;

const LeftMotto = styled.p`
  ${tw`
        lg:(leading-relaxed capitalize)
        max-lg:(p-3)
    `}

  span {
  }
`;

const LeftWrap: FunctionComponent = () => {
  return (
    <LeftWrapper>
      <LeftHeader>Pick the best sports car of your lifetime.</LeftHeader>
      <LeftMotto>
        this is the best place in where you can find you <span>Sports Car</span>
        . take a look around and pick the one which appeals to you the most.
      </LeftMotto>
      <Buttons />
    </LeftWrapper>
  );
};

export default LeftWrap;
