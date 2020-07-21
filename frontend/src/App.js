import React from "react";

import Header from "./components/Header/Header.component";
import Main from "./components/Main/Main.component";
import Footer from "./components/Footer/Footer.component";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
