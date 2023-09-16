import React from 'react';
import image from '../image/book.jpg';
import "./Bheader.css";
const BHeader = () => {
    return(
        <div className='bheader'>
           <div className='bheadTitles'>
            <span className='btitle'>Blogs</span>
           </div>
           <img src={image} alt="" className='bimg'></img>
        </div>
    );
};

export default BHeader;