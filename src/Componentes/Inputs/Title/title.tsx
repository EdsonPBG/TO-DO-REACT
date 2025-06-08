// import React from 'react'
import style from "./title.module.css"

export default function InputTitle () {

  return (
    <div className={style.title}>
        
        <label htmlFor="title">Titulo:</label>
        <input id="title" name="title" type="text" required />

    </div>
  
  );
};
