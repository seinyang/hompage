////////////////////////////////////////////////////////////////
//  @author  :양세인                                           //
//  @version :0.1                                             //
//  @Note    :  리엑트 기본 설정                               //
//                                                            //
//  @Date    : 2022-10-09                                     //
////////////////////////////////////////////////////////////////

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

//index.js는 메인프로그램
//index.html과 index.js는 같이 움직이는것.root해놓은것에 삽입됨
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <React.StrictMode>
      {/* app.js는 불려와서 여기 렌더링됨 */}
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
