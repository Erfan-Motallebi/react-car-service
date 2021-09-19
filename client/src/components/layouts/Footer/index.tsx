import { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const IndexWrapper = styled.div`
  ${tw`
        w-full
        height[220px]
        bg-gray-800
      `}
`;

const Index: FC = () => {
  return <IndexWrapper></IndexWrapper>;
};

export default Index;
