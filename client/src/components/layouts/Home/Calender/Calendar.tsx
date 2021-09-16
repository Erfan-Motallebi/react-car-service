// LIBRARIES:
import { FC, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Calendar from "react-calendar";

// FILES:
import { BookBtn } from "../Main/left/Buttons/Buttons";
import "react-calendar/dist/Calendar.css";

const DateWrapper = styled.div`
  ${tw`
        max-w-screen-3xl
        mx-auto
        p-2
        capitalize
        grid
        grid-cols-1
        gap-56
`}
`;

const DateBox = styled.div`
  ${tw`
        flex
        justify-between
        items-center
        font-light
        width[500px]
        border-0
        border-radius[5px]
        background-color[#FEFBF3]
        p-2
        -mt-5
        pl-3
        ml-7
        mx-auto
        box-shadow[-1px -1px 10px 2px #7e683e, 1px 1px 10px 2px #535151]
        max-lg:(mx-auto width[400px] mt-10)
`}
`;

const PickDateBox = styled.button`
  ${tw`
`}
`;
const ReturndateBox = styled.button`
  ${tw`

`}
`;

const DateSubmitBtn = styled(BookBtn)`
  ${tw`
        p-2
        border-2
`}
`;

const TextBox = styled.div`
  ${tw`
    text-center
    font-extrabold
    text-6xl
    mt-16
    max-lg:(text-4xl mt-28)
`}
`;

const CalendarWrapper = styled.div<{ date: string }>`
  ${tw`
      absolute
      p-8
      mt-8
      margin-left[28%]
      max-lg:(mt-24)
      mobile:(-ml-0)
  `}
`;

const CalendarFC: FC = () => {
  const [dateOfPick, setDateOfPick] = useState(new Date());
  const [dateOfReturn, setDateOfReturn] = useState(new Date());
  const [pickState, setPickState] = useState(false);
  const [returnState, setReturnState] = useState(false);
  const [selectDate, setSelectDate] = useState("pick");
  console.log({ dateOfReturn, dateOfPick });

  return (
    <DateWrapper>
      <DateBox>
        <PickDateBox
          onClick={() => {
            setPickState(!pickState);
          }}
        >
          Pick your date
        </PickDateBox>
        <ReturndateBox onClick={() => setReturnState(!returnState)}>
          Return date
        </ReturndateBox>
        <DateSubmitBtn>Book your car</DateSubmitBtn>
      </DateBox>
      {pickState && (
        <CalendarWrapper date={selectDate}>
          <Calendar
            value={dateOfPick}
            onChange={setDateOfPick}
            onClickDay={() => setPickState(false)}
          />
        </CalendarWrapper>
      )}
      {returnState && (
        <CalendarWrapper date={selectDate}>
          <Calendar
            value={dateOfReturn}
            onChange={setDateOfReturn}
            onClickDay={() => setReturnState(false)}
          />
        </CalendarWrapper>
      )}
      <TextBox>Our Working Steps</TextBox>
    </DateWrapper>
  );
};

export default CalendarFC;
