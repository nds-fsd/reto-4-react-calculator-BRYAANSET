import React, { useState } from 'react';
import './App.css'
import styles from "./App.module.css"


const  App = () => {
  const [display, setDisplay] = useState("");
  const numbuttons = ["7","8","9","4","5","6","1","2","3","0",".","C"];
  const numbttnsclick = (element) =>{
    if (element == "C"){
      setDisplay('');
    } else {
      setDisplay(display+element);
    }
  };
  const operatbuttons = ["+","-","x","/"];
  const equalbttn = ["="];
  
  const resulonclick = () => {
    debugger;
    var inputString = display;
    var numbers = inputString.split(/\+|\-|\x|\//g);
    var operators = inputString.replace(/[0-9]|\./g, "").split("");
    var divide = operators.indexOf("/");

    while (divide != -1) {
      numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
      operators.splice(divide, 1);
      divide = operators.indexOf("/");
    }

    var multiply = operators.indexOf("x");
    while (multiply != -1) {
      numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
      operators.splice(multiply, 1);
      multiply = operators.indexOf("x");
    }

    var subtract = operators.indexOf("-");
    while (subtract != -1) {
      numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
      operators.splice(subtract, 1);
      subtract = operators.indexOf("-");
    }

    var add = operators.indexOf("+");
    while (add != -1) {
      
      numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
      operators.splice(add, 1);
      add = operators.indexOf("+");
    }

    setDisplay(numbers[0]);

  };

  return (
    <>
      <div className={styles.calcontainer}>
        <div className={styles.display}>{display}</div>
          
        <div className={styles.buttons}>
          <div className={styles.operators}>
          {operatbuttons.map(element => 
                <button 
                  className={styles.operatbuttons} 
                  onClick={() => setDisplay(display+element)}>
                    {element}
                </button>)}
          </div>
          
          <div className={styles.lowerbuttons}>
            
            <div className={styles.operands}>
              {numbuttons.map(element => 
                <button 
                  className={styles.numbuttons} 
                  onClick={() => numbttnsclick(element)}>
                    {element}
                </button>)}
            </div>
            <div className={styles.equalbutton}>
            {equalbttn.map(element => 
                <button 
                  className={styles.equalbttn} 
                  onClick={() => resulonclick()}>
                    {element}
                </button>)}
            </div>
          </div>
        </div>

      </div>  
    </>
  
  );
}

export default App;
