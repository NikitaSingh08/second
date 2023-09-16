import React from 'react';

function Bcards(props){
    return(
    <>
    <div className="bcards">
        <div className="bcard">
       <img src= {props.imgsrc} alt="pic" className="bcard_img"></img>
        <div className="bcard_info">
          <span className="flex flex-col justify-center items-center mt-0 ml-2 mx-4 px-0">{props.bltitle}</span>
          <h3 className="flex flex-row -indent-5 fontWeight:'500' mt-0 ml-0 mx-4 px-0">{props.bname}</h3>
          <h6 className='space'></h6>
          <a href={props.link} target="_blank" className='buttonn'>
          <button className='read'>Read Now</button>
          </a>
        </div>
    </div>
  </div>
    </>)
}
export default Bcards;