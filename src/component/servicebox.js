import React from "react";
import { Link } from "react-router-dom";
// import APP from "app";
import Smartfactory from "./smartfactory";



function ServiceBox(props){
    return(
<div className="default-service-block col-md-4 col-sm-6 col-xs-12">

    {/* defalt에 바뀌는 부분을 {}쳐서 계속해서 바뀌게하기 */}
<div className="inner-box">
    <div className="icon-box"><span className={props.iconclass}></span></div>
    <h3>{props.title}</h3>
    <div className="text">{props.content}</div>
    <Link className="read-more" to="/smartfactory" >자세히보기 <span className="fa fa-angle-right"></span></Link>
</div>


</div>
    );
}


export default ServiceBox;