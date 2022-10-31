//import logo from './logo.svg';
//import './App.css';

import Header from "./component/header";

import Mainpage from "./mainpage/mainpage";
import About from "./branch/about";
import History from "./branch/history";
import Org from "./branch/org";
import Partner from "./branch/partner";
import Recruit from "./branch/recruit";
import Smartfactory from "./smartfactory/smartfactory";
import Smartcity from "./smartservice/smartcity";
import Safe from "./smartservice/safe";
import Sims from "./smartservice/sims";
import Ai from "./ai&big/ai";
import Bigdata from "./ai&big/bigdata";
import Fusion from "./ai&big/fusion";
import Map from "./branch/map";

import Footer from ".//component/footer";

//import Detail from "./component/tap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import Home from "./component/ss";

// div를 묶어서 return해주기때문에
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      {/* 항상 보여야하는 상단바 */}
      <Header />

      <Routes>
        {/* 홈페이지 첫화면에 보여야하는 slider,defaultsection,contactus 모여있음 */}
        <Route path="/" element={<Mainpage />} />
        {/*AI&BIG DATA bar*/}
        <Route path="/ai" element={<Ai />} />
        <Route path="/bigdata" element={<Bigdata />} />
        <Route path="/fusion" element={<Fusion />} />

        {/* 스마트 서비스 bar */}
        <Route path="/smartcity" element={<Smartcity />} />
        <Route path="/safe" element={<Safe />} />
        <Route path="/sims" element={<Sims />} />

        {/* 스마트 팩토리 bar */}
        <Route path="/smartfactory" element={<Smartfactory />} />

        {/* 회사소개 bar */}
        <Route path="/about" element={<About />} />
        <Route path="/history" element={<History />} />
        <Route path="/org" element={<Org />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/recruit" element={<Recruit />} />
        <Route path="/map" element={<Map />} />
      </Routes>

      {/* 항상 보여야하는 footer */}
      <Footer />
    </Fragment>
  );
}
export default App;
