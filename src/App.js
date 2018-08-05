import React, { Component } from "react";
import {Route} from "react-router-dom";
import Content from "./content";
import GrowingDiv from "./growingDiv/growingDiv";
import Container from "./cssUtilis/reusableCss";
import "./App.css";
import SpecialNav from "./specialNav"
class App extends Component {
  componentWillMount() {}

  render() {
    return (
      <div className="App">
      <SpecialNav/>
        <Route path="/Home" component={Content} />
        <Route path="/CssTraining" component={GrowingDiv} />
      </div>
    );
  }
}

export default App;

export function NavBanner(props) {
  return <div className="nav-banner" />;
}
