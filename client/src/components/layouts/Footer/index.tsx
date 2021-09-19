import { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const IndexWrapper = styled.div`
  ${tw`
        w-full
        height[220px]
        background[#2c2929]
      `}
`;

const Index: FC = () => {
  return <IndexWrapper></IndexWrapper>;
};

export default Index;
