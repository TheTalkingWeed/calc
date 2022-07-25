
import './App.css';
import Wrapper from "../src/components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from './components/Button';
import React , { useState } from "react";


const btnValues = [
["C","+-","%","/"],
[7,8,9,"X"],
[4,5,6,"-"],
[1,2,3,"+"],
[0,".","="],


];

function App() {
  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });




  return (
  <Wrapper>
    <Screen value={calc.num ? calc.num : calc.res}/>
    <ButtonBox>
      {
        btnValues.flat().map((btn,i)=>{
          return(
            <Button key={i}
            className = {btn === "=" ? "equals" : ""}
            value={btn}
            onClick={
              btn === "C"
                ? resetScreenClicked
                : btn === "+-"
                ? invertInputClicked
                : btn === "%"
                ? percentClicked 
                : btn === "="
                ? equalsClicked
                : btn === "/"  || btn === "X" || btn === "+" || btn === "-"
                ? signedClicked
                :commaClicked
                ?numClicked
            }
            />
          );
        })
      }
    </ButtonBox>
  </Wrapper>
  );
}

export default App;
