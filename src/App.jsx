import React from 'react';
import './App.css'
import styles from "./App.module.css"


const  App = () => {
  
  return (
    <>
      <div className={styles.calcontainer}>
        <div className={styles.display}>
          pantalla
        </div>
          
        <div className={styles.buttons}>
          <div className={styles.operators}>
          <button>+</button>
          <button>-</button>
          <button>&times;</button>
          <button>&divide;</button>
          </div>
          
          <div className={styles.lowerbuttons}>
            
            <div className={styles.operands}>
              
            </div>
            <div className={styles.equalbutton}>
              igual
            </div>
          </div>
        </div>

      </div>  
    </>
  
  );
}

export default App;
