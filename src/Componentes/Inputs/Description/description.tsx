// import React from 'react'
import style from "./description.module.css"

export default function InputDescription () {

  return (
    <div className={style.description}>

        <label htmlFor="description">Descrição:</label>
        <input id="description" name="descriprion" type="text" required />

    </div>
  
  );
};