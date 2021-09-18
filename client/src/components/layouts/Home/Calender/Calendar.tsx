// LIBRARIES:
import { FC, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Calendar from "react-calendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faArrowCircleUp,
  faArrowCircleDown,
} from "@fortawesome/free-solid-svg-icons";

// FILES:
import { BookBtn } from "../Main/left/Buttons/Buttons";
import "react-calendar/dist/Calendar.css";
import MediaQuery from "react-responsive";

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
  transition-colors
  hover:(text-pink-600)
`}
`;
const ReturndateBox = styled.button`
  ${tw`
  transition-colors
  hover:(text-pink-600)
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
    mt-8
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

const FaCalendar = styled.i`
  ${tw`
    text-red-500
    pr-2
  `}
`;

const FaArrowCircle = styled.i`
  ${tw`
    text-red-500
    pl-2
  `}
`;

const CalendarFC: FC = () => {
  const [dateOfPick, setDateOfPick] = useState(new Date());
  const [dateOfReturn, setDateOfReturn] = useState(new Date());
  const [pickState, setPickState] = useState(false);
  const [returnState, setReturnState] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectDate, setSelectDate] = useState("pick");

  return (
    <DateWrapper>
      <DateBox>
        <PickDateBox
          onClick={() => {
            setPickState(!pickState);
          }}
        >
          <MediaQuery minWidth="987px">
            <FaCalendar>
              <FontAwesomeIcon icon={faCalendar} size="lg" />
            </FaCalendar>
          </MediaQuery>
          <MediaQuery maxWidth="987px">
            <FaCalendar>
              <FontAwesomeIcon icon={faCalendar} size="sm" />
            </FaCalendar>
          </MediaQuery>
          Pick your date
          <MediaQuery minWidth="975px">
            <FaArrowCircle>
              <FontAwesomeIcon
                icon={pickState ? faArrowCircleDown : faArrowCircleUp}
                size="1x"
              />
            </FaArrowCircle>
          </MediaQuery>
        </PickDateBox>
        <ReturndateBox onClick={() => setReturnState(!returnState)}>
          <MediaQuery minWidth="987px">
            <FaCalendar>
              <FontAwesomeIcon icon={faCalendar} size="lg" />
            </FaCalendar>
          </MediaQuery>
          <MediaQuery maxWidth="987px">
            <FaCalendar>
              <FontAwesomeIcon icon={faCalendar} size="sm" />
            </FaCalendar>
          </MediaQuery>
          Return date
          <MediaQuery minWidth="975px">
            <FaArrowCircle>
              <FontAwesomeIcon
                icon={returnState ? faArrowCircleDown : faArrowCircleUp}
                size="1x"
              />
            </FaArrowCircle>
          </MediaQuery>
        </ReturndateBox>
        <MediaQuery minWidth="975px">
          <DateSubmitBtn>Book your car</DateSubmitBtn>
        </MediaQuery>
        <MediaQuery maxWidth="975px">
          <DateSubmitBtn>Book</DateSubmitBtn>
        </MediaQuery>
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
