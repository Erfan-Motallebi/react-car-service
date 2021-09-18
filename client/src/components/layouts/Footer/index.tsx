import { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const IndexWrapper = styled.div`
  ${tw`
        height[200px]
        `}
`;

const Index: FC = () => {
  return <IndexWrapper></IndexWrapper>;
};

export default Index;
