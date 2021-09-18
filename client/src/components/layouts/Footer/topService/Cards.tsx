import { FC } from "hoist-non-react-statics/node_modules/@types/react";
import styled from "styled-components";
import tw from "twin.macro";
import { BookBtn } from "../../Home/Main/left/Buttons/Buttons";

interface IProps {
  data: {
    image: string;
    title: string;
    priceOfDay: number;
    priceOfMonth: number;
    gear: number;
  };
}

const CardsWrapper = styled.div`
  ${tw`
    flex
    flex-col
    justify-between
    border[1px solid rgba(230,230,230,08)]
    border-radius[15px]
    box-shadow[0 2px 2px rgba(0, 0, 0, 0.2)]
    width[350px]
    height[460px]
    p-10
    m-6
    max-lg:(width[250px] height[300px])
  `}

  img {
    ${tw`
        -mt-10
        max-lg:(width[200px])
    `}
  }

  h2 {
    ${tw`
        text-center
        font-bold
        max-lg:(text-base font-bold)
    `}
  }
`;

const PriceWrapper = styled.div`
  ${tw`
        max-lg:(text-base)
        `}
`;

const StyledButton = styled(BookBtn)`
  ${tw`
        p-2
        width[150px]
        block
        mx-auto
        max-lg:(width[100px] text-base)
   `}
`;

const Cards: FC<IProps> = ({
  data: { image, title, priceOfDay, priceOfMonth, gear },
}) => {
  return (
    <CardsWrapper>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <PriceWrapper>
        <h4>{priceOfDay}</h4>
        <h4>{priceOfMonth}</h4>
      </PriceWrapper>
      <h4>{gear}</h4>
      <StyledButton>Buy Now</StyledButton>
    </CardsWrapper>
  );
};

export default Cards;
