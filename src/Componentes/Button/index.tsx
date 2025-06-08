import React from 'react'
import style from "./style.module.css"

interface Props {
    children: React.ReactNode;
};

export default function Button ({children}: Props) {
  return (
  
  <button type='submit'  
  
  className={style.button}>{children}
  
  </button>

  );
};


