import { FC } from "react";
import Home from "./components/layouts/Home/Home";
import Services from "./components/layouts/Service/Services";

const App: FC = () => {
  return (
    <div>
      <Home />
      <Services />
    </div>
  );
};

export default App;
