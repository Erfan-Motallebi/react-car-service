import { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const ButtonsWrapper = styled.div`
  ${tw`
    lg:p-3
    `}
`;

export const BookBtn = styled.button`
  ${tw`
        p-4 px-8 border-2 m-2 capitalize border-radius[.2rem] border-pink-500 bg-pink-500 text-white
        hover:(bg-pink-50 text-pink-700 cursor-pointer)
        max-lg:(p-2 px-5 hover:(cursor-pointer))
    `}
`;
const SellBtn = styled(BookBtn)`
  ${tw`
        transition-colors
        bg-pink-50
        px-6
        hover:(bg-pink-600 text-white cursor-pointer)
        text-pink-600
    `}
`;

const Buttons: FC = () => {
  return (
    <ButtonsWrapper>
      <BookBtn>book your car</BookBtn>
      <SellBtn>Sell your car</SellBtn>
    </ButtonsWrapper>
  );
};

export default Buttons;
