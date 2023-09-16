import React from 'react';
import Bcards from './Bcards';
import bdata from './Cardata';

const Cardlinks = () => {
    return(
    bdata.map((val,index)=>{
        console.log(index);
        return(
            <Bcards
            key = {val.id}
            imgsrc = {val.imgsrc}
            title = {val.bltitle}
            bname = {val.bname}
            link = {val.link}
            />
        )
    })
    )
};
export default Cardlinks;