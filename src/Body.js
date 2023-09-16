import React from "react";
import Maincard from "./Maincard";
import Searchform from "./searchbar/Searchform";
function Main(){
    return(
        <>
<div className="float">

    <div className="cont" id="float1"><div className="img" id="image1">
        <div className="body_img">
         <h1 className='bg-transparent text-white mx-3'><br></br>
             {/* <div className= "header-bg" > */}
            <div className= "header-text bg-transparent">
                Welcome to the place where you can escape the reality and form your own world...<br></br>
                Here, you can read, write and explore...<br></br>
                So, what are we waiting for...<br></br> lets get started!!!
                <br></br>
                <br></br>
                
                <h2 class="text-white bg-transparent fs-18 fw-3">
                    <Searchform />
                </h2>
            </div>
             {/* </div> */}
         </h1>
        </div>
    </div>
</div>
        </div>
        <br></br>
        <div>
     <h1 className="heading_style"> Trendings...</h1>
     </div>
     <div>
        <Maincard />
        </div>
        </>
    )
}
export default Main;