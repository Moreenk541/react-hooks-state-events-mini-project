import { useState } from "react";
import React from "react";
function Task({category,text,onDeleteTask}) {
  // function handleClick(){
  //   onDeleteTask(text); 
  // }

  return (
    <div className="task">

      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={onDeleteTask}>X</button>
    </div>
  );
}

export default Task;
