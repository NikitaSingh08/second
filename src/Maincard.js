import React from "react";
import Card from "./Card";
import sdata from "./data";

const Maincard = ()=> {
  return (
sdata.map((val, index) => {
    console.log(index);
    return(
      <Card
      key = {val.id}
     imgsrc={val.imgsrc}
     title = {val.title}
     sname = {val.sname}
     link = {val.link}
    />
    )
  })
  )
};
export default Maincard;