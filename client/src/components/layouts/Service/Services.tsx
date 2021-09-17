import { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Description from "./Description";
import Items from "./Items";

const ServiceWrapper = styled.div`
  ${tw`
      height[100vh]
      max-w-screen-3xl
      mx-auto
    `}
`;

const Services: FC = () => {
  return (
    <ServiceWrapper>
      <Items />
      <Description />
    </ServiceWrapper>
  );
};

export default Services;
