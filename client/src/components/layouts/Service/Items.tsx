import { FunctionComponent } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCarSide,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
const ItemsWrapper = styled.div`
  ${tw`
    lg:(grid grid-cols-3 place-content-center mr-20)
    max-lg:( grid grid-cols-1 mx-auto -ml-28)
  `}
`;

const StepWrapper = styled.div`
  ${tw`
    w-full
    flex
    flex-col
    items-center
    mt-16
    transition[.3s all ease-in]
    
    hover:(transform[scale(1.1)])
    max-lg:( pt-10 pl-28 mx-auto)
    `}
`;

const LocationWrapper = styled.div`
  ${tw`
    cursor-pointer
    text-2xl
    bg-white
    w-max
    text-center
    box-shadow[2px 1px 5px 1px lightgray, -1px -1px 3px 1px darkgray]
    border-radius[.2rem]
    py-8
    px-9
    `}
`;

const ItemText = styled.h2`
  ${tw`
  p-2
  text-xl
  font-semibold
  capitalize
    `}
`;

const ItemDesc = styled(ItemText)`
  ${tw`
      text-base
      font-light
    `}
`;

const Items: FunctionComponent = () => {
  return (
    <ItemsWrapper>
      <StepWrapper>
        <button>
          <LocationWrapper>
            <FontAwesomeIcon icon={faCalendar} color="red" size="lg" />
            <ItemText>Pick-up Date</ItemText>
            <ItemDesc>Pick a date that fits you </ItemDesc>
          </LocationWrapper>
        </button>
      </StepWrapper>

      <StepWrapper>
        <button>
          <LocationWrapper>
            <FontAwesomeIcon icon={faCarSide} color="red" size="lg" />
            <ItemText>Book your car</ItemText>
            <ItemDesc>Pick a date that fits you </ItemDesc>
          </LocationWrapper>
        </button>
      </StepWrapper>

      <StepWrapper>
        <button>
          <LocationWrapper>
            <FontAwesomeIcon icon={faLocationArrow} color="red" size="lg" />
            <ItemText>choose location</ItemText>
            <ItemDesc>Pick up the best location</ItemDesc>
          </LocationWrapper>
        </button>
      </StepWrapper>
    </ItemsWrapper>
  );
};

export default Items;
