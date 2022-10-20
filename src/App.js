//import logo from './logo.svg';
//import './App.css';
import Main from "./component/main";

import Mainpage from "./component/mainpage";
import Header from "./component/header";
import About from "./component/about";
import History from "./component/history";
import Org from "./component/org";
import Partner from "./component/partner";
import Recruit from "./component/recruit";
import Smartfactory from "./component/smartfactory";
import Smartcity from "./component/smartcity";
import Safe from "./component/safe";
import Sims from "./component/sims";
import Ai from "./component/ai";
import Bigdata from "./component/bigdata";
import Fusion from "./component/fusion";
import Tmap from "./component/tmap";
import Contactus from "./component/contactus";
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
        <Route path="/about" element={<About />} />
        <Route path="/history" element={<History />} />
        <Route path="/org" element={<Org />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/recruit" element={<Recruit />} />
        {/* 스마트 팩토리 bar */}
        <Route path="/smartfactory" element={<Smartfactory />} />
        {/* 스마트 서비스 bar */}
        <Route path="/smartcity" element={<Smartcity />} />
        <Route path="/safe" element={<Safe />} />
        <Route path="/sims" element={<Sims />} />
        {/*AI&BIG DATA bar*/}
        <Route path="/ai" element={<Ai />} />
        <Route path="/bigdata" element={<Bigdata />} />
        <Route path="/fusion" element={<Fusion />} />
        <Route path="/tmap" element={<Tmap />} />
        {/*contactus bttn*/}
        <Route path="/contactus" element={<Contactus />} />
      </Routes>

      <Footer />
    </Fragment>
  );
}
export default App;
