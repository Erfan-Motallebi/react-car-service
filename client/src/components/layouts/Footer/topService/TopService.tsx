import { FC, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Slider from "react-slick";
import Cards from "./Cards";
import { data } from "./data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MediaQuery from "react-responsive";
import { settings } from "./settings";

export interface IData {
  image: string;
  title: string;
  priceOfDay: number;
  priceOfMonth: number;
  gear: number;
}

const TopServiceWrapper = styled.div`
  ${tw`
    w-5/6
    mx-auto
    text-2xl
    `}
`;

const ServiceText = styled.h1`
  ${tw`
     text-center
     capitalize
     2xl:(text-5xl font-extrabold)
     mobile:(font-extrabold text-3xl)
    `}
`;

const ServiceCards = styled.div`
  ${tw`
        // m-16
        p-10
        // mobile:()
    `}
`;

const TopService: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cardsInfo, setCardsInfo] = useState(data as IData[]);
  // ! Slider

  return (
    <TopServiceWrapper>
      <ServiceText>Scrutinize our high-level services </ServiceText>
      <ServiceCards>
        <MediaQuery minWidth="1550px">
          <Slider {...settings.xxxl}>
            {cardsInfo &&
              cardsInfo.map((card: IData) => {
                return <Cards data={card} />;
              })}
          </Slider>
        </MediaQuery>
        <MediaQuery minWidth="1269px" maxWidth="1549px">
          <Slider {...settings.xxl}>
            {cardsInfo &&
              cardsInfo.map((card: IData) => {
                return <Cards data={card} />;
              })}
          </Slider>
        </MediaQuery>
        <MediaQuery minWidth="1092px" maxWidth="1268px">
          <Slider {...settings.xl}>
            {cardsInfo &&
              cardsInfo.map((card: IData) => {
                return <Cards data={card} />;
              })}
          </Slider>
        </MediaQuery>
        <MediaQuery minWidth="857px" maxWidth="1091px">
          <Slider {...settings.lg}>
            {cardsInfo &&
              cardsInfo.map((card: IData) => {
                return <Cards data={card} />;
              })}
          </Slider>
        </MediaQuery>
        <MediaQuery minWidth="783px" maxWidth="856px">
          <Slider {...settings.md}>
            {cardsInfo &&
              cardsInfo.map((card: IData) => {
                return <Cards data={card} />;
              })}
          </Slider>
        </MediaQuery>
        <MediaQuery maxWidth="782px">
          <Slider {...settings.sm}>
            {cardsInfo &&
              cardsInfo.map((card: IData) => {
                return <Cards data={card} />;
              })}
          </Slider>
        </MediaQuery>
      </ServiceCards>
    </TopServiceWrapper>
  );
};

export default TopService;
