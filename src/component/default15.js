import React from "react";


function Default15(props){
    return(
<div class="slide">
                    <div class="content">
                        <div class="icon-box"><span class={props.iconclass}></span></div>
                        <div class="text"><a href = {props.link}>{props.title}</a></div>
                    </div>
                </div>
    );
}

export default Default15;




