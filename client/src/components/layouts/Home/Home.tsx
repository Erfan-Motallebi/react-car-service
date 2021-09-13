import { FunctionComponent } from "react";
import { Fragment } from "react";
import Main from "./Main/Main";

import Navbar from "./Navbar/Navbar";

const Home: FunctionComponent = () => {
  return (
    <Fragment>
      <Navbar />
      <Main />
    </Fragment>
  );
};

export default Home;
