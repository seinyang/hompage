//import logo from './logo.svg';
//import './App.css';

import Mainpage from "./component/mainpage";
import Header from "./component/header";
import About from "./component/about";
import History from "./component/history";
import Org from "./component/org";
import Partner from "./component/partner";
import Recruit from "./component/recruit";
import Map from "./component/map";
import Footer from ".//component/footer";

//import Detail from "./component/tap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import Home from "./component/ss";

// div를 묶어서 return해주기때문에
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Header />

      <Routes>
        <Route path="/" element={<Mainpage />} />
        {/* 회사소개 bar */}
        <Route path="/aa" element={<About />} />
        <Route path="/bb" element={<History />} />
        <Route path="/cc" element={<Org />} />
        <Route path="/dd" element={<Partner />} />
        <Route path="/ee" element={<Recruit />} />
        <Route path="/ff" element={<Map />} />
      </Routes>

      <Footer />
    </Fragment>
  );
}
export default App;
