import React from "react";

function Try(props){
    return(
        <>
       <div className="bcards">
        <div className="bcard">
       <img src= {props.imgsrc} alt="pic" className="bcard_img"></img>
        <div className="bcard_info">
          <span className="flex flex-col justify-center items-center mt-0 ml-2 mx-4 px-0">{props.bltitle}</span>
          <h3 className="flex flex-row justify-stretch indent-1 items-center text-l  fontWeight: '400' mt-0 ml-0 mx-4 px-0">{props.bname}</h3>
          <a href={props.link} target="_blank" className='buttonn'>
          <button className='read'>Read Now</button>
          </a>
        </div>
    </div>
  </div> 
        
        </>
    )
}
export default Try;

 

//   <div className="cards">
//         <div className="card">
//        <img src= {props.imgsrc} alt="pic" className="card_img"></img>
//         <div className="card_info">
//           <span className="flex flex-col justify-center items-center mt-0 ml-2 mx-4 px-0">{props.title}</span>
//           <h3 className="flex flex-col justify-center items-center text-2xl  fontWeight: '500' mt-0 ml-0 mx-4 px-0">{props.sname}</h3>
//           <a href={props.link} target="_blank">
//           <button>Read Now</button>
//           </a>
//         </div>
//     </div>
//   </div>