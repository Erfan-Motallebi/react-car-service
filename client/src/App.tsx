import { FC } from "react";
import Footer from "./components/layouts/Footer/Footer";
import Home from "./components/layouts/Home/Home";
import Services from "./components/layouts/Service/Services";

const App: FC = () => {
  return (
    <div>
      <Home />
      <Services />
      <Footer />
    </div>
  );
};

export default App;
