import { FC, Fragment } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import LeftWrap from "./left/LeftWrap";
import RightWrap from "./Right/RightWrap";
import MediaQuery from "react-responsive";

const MainWrapper = styled.div`
  ${tw`
     grid
     grid-cols-2
     mt-28
     max-w-screen-3xl
     mx-auto
     p-5
     max-lg:grid-cols-1
     max-lg:(mt-16 ml-16)
    `}
`;

const Main: FC = () => {
  return (
    <Fragment>
      <MediaQuery minWidth="975px">
        <MainWrapper>
          <LeftWrap />
          <RightWrap />
        </MainWrapper>
      </MediaQuery>
      <MediaQuery maxWidth="975px">
        <MainWrapper>
          <LeftWrap />
          <RightWrap mobile={true} />
        </MainWrapper>
      </MediaQuery>
    </Fragment>
  );
};

export default Main;
