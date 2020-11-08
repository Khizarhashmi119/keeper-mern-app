import React, { Fragment } from "react";

import Header from "./components/Header/Header.component";
import Main from "./components/Main/Main.component";
import Footer from "./components/Footer/Footer.component";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Main />
      <Footer />
    </Fragment>
  );
};

export default App;
