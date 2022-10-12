//import logo from './logo.svg';
//import './App.css';

import Header from "./component/header";
import Slider from "./component/slider";
import Defaultsection from "./component/defaultsection";
import Defaultsection2 from "./component/defaultsection2";
import News1 from "./component/news1";
import Download from "./component/download";
import Footer from ".//component/footer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//import Home from "./component/ss";

// div를 묶어서 return해주기때문에
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/Header"
            element={
              <div>
                <Link to="#">ai&big data</Link>

                <ul>
                  <li>
                    <Link to="nexmore/about.html">넥스모어소개</Link>
                  </li>
                </ul>
              </div>
            }
          />
          <Route
            path="/Header"
            element={
              <div>
                <li>
                  <Link to="nexmore/ceo.html">CEO인사말</Link>
                </li>
              </div>
            }
          />

          <Route
            path="/Header"
            element={
              <div>
                <li>
                  <Link to="nexmore/history.html">회사연혁</Link>
                </li>
              </div>
            }
          />

          <Route
            path="/Header"
            element={
              <div>
                <li>
                  <Link to="nexmore/org.html">조직도</Link>
                </li>
              </div>
            }
          />

          <Route
            path="/Header"
            element={
              <div>
                <li>
                  <Link to="nexmore/partner.html">파트너</Link>
                </li>
              </div>
            }
          />

          <Route
            path="/Header"
            element={
              <div>
                <li>
                  <Link to="nexmore/recruit.html">인재채용</Link>
                </li>
              </div>
            }
          />

          <Route
            path="/Header"
            element={
              <div>
                <li>
                  <Link to="nexmore/map.html">오시는길</Link>
                </li>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
      <Slider />

      <Defaultsection />

      <Defaultsection2 />

      <News1 />

      <Download />

      <Footer />
    </Fragment>
  );
}
export default App;
