//import logo from './logo.svg';
//import './App.css';

import Header from "./component/header";
import Slider from "./component/slider";
import Defaultsection from"./component/defaultsection";
import Defaultsection2 from"./component/defaultsection2";
import News1 from"./component/news1";
import Download from "./component/download";
import Footer from ".//component/footer";
import {BrowserRouter,Link,Route} from "react-router-dom";


// div를 묶어서 return해주기때문에
import {Fragment} from "react";




function App() {
  return (
   
    <Fragment>
<BrowserRouter>
      <Route>
    <Header />
    
      <Route path="./nexmore/about.html" element={}></Route>
      <Route path="nexmore/ceo.html" element={<Header />}>CEO인사말</Route>
      <Route path=".nexmore/history.html" element={<Header />}>회사연혁</Route>
      
    <Slider />

    <Defaultsection />

    <Defaultsection2 />

    <News1 />

    <Download />
    
    <Footer />
    </Route>
</BrowserRouter>
    </Fragment>
    
  );
}

export default App;
