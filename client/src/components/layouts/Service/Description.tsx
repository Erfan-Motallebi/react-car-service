import { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const DescWrapper = styled.div`
  ${tw`
        bg-red-500
        border-2
        text-3xl
    `}
`;

const Description: FC = () => {
  return (
    <DescWrapper>
      <h1>Hi there</h1>
    </DescWrapper>
  );
};

export default Description;
