import { FunctionComponent } from "react";
import { Fragment } from "react";
import CalendarFC from "./Calender/Calendar";
import Main from "./Main/Main";

import Navbar from "./Navbar/Navbar";

const Home: FunctionComponent = () => {
  return (
    <Fragment>
      <Navbar />
      <Main />
      <CalendarFC />
    </Fragment>
  );
};

export default Home;
