import React from "react";

function Card(props){
    return(
        <>
       
        <div className="cards">
        <div className="card">
       <img src= {props.imgsrc} alt="pic" className="card_img"></img>
        <div className="card_info">
          <span className="flex flex-col justify-center items-center mt-0 ml-2 mx-4 px-0">{props.title}</span>
          <h3 className="flex flex-row -indent-5 text-2xl  fontWeight: '500' mt-0 ml-0 mx-4 px-0">{props.sname}</h3>
          <h6 className="space"></h6>
          <a href={props.link} target="_blank">
          <button>Read Now</button>
          </a>
        </div>
    </div>
  </div>
        </>
    )
}
export default Card;