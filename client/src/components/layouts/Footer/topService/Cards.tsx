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
        letter-spacing[1px]
        font-extrabold
        text-3xl
        max-lg:(text-base font-bold)
    `}
  }
`;

const PriceWrapper = styled.div`
  ${tw`
        flex
        justify-between
        lg:(font-size[20px])
        max-lg:(text-base)
     `}
  & > h5:first-child {
    ${tw`
        text-red-700
        font-bold
      `}
  }

  & > h5:nth-child(2) {
    ${tw`
        font-bold
      `}
  }
`;

const StyledButton = styled(BookBtn)`
  ${tw`
        p-2
        width[150px]
        block
        mx-auto
        mt-5
        bg-red-800
        border[2px red solid]
        transition[all .4s ease-in-out]
        hover:(border[2px red solid])
        box-shadow[1px 1xp 30xp 5px lightcoral -1px -1px 20px 10px lightblue]
        max-lg:(width[100px] text-base)
   `}
`;

const StyledGear = styled.div`
  ${tw`
          flex
          justify-between
    `}
  & > h4 {
    ${tw`
      border[none]
      border-radius[5px]
      font-bold
      px-5
      background[pink]
     `}
  }
`;

const Cards: FC<IProps> = ({
  data: { image, title, priceOfDay, priceOfMonth, gear },
}) => {
  return (
    <CardsWrapper>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <PriceWrapper>
        <h5>${priceOfDay}/Day</h5>
        <h5>${priceOfMonth}/Month</h5>
      </PriceWrapper>
      <StyledGear>
        <h4>Gear</h4>
        <h4>{gear}</h4>
      </StyledGear>
      <StyledButton>Buy Now</StyledButton>
    </CardsWrapper>
  );
};

export default Cards;
