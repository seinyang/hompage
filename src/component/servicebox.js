import React from "react";


function ServiceBox(props){
    return(
<div class="default-service-block col-md-4 col-sm-6 col-xs-12">

    {/* defalt에 바뀌는 부분을 {}쳐서 계속해서 바뀌게하기 */}
<div class="inner-box">
    <div class="icon-box"><span class={props.iconclass}></span></div>
    <h3>{props.title}</h3>
    <div class="text">{props.content}</div>
    <a class="read-more" href={props.link}>자세히보기 <span class="fa fa-angle-right"></span></a>
</div>
</div>
    );
}


export default ServiceBox;