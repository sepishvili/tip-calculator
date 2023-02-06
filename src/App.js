import Logo from './images/Logo';
import ImputContainer from "./components/InputContainer";
import ResultContainer from "./components/ResultContainer";
import { useState } from "react";

import './App.css';

function App() {

  const   [bill, setBill] = useState('');
  const   [personAmount, setPersonAmount] = useState('');
  const   tips = [5,10,15,25,50];
  const   [currentTip,setCurrentTip]= useState('');
  const   [customTip, setCustomTip]=useState(false)
  const   [currentCustomTip, setCurrentCustomTip]= useState('')

  function reset(){
    setBill("")
    setPersonAmount("")
    setCurrentTip('')
    setCustomTip(false)
    setCurrentCustomTip('')
  }

  return (
    <div className=" flex flex-col gap-[88px] items-center bg-[#C5E4E7] w-full h-screen  " >
        <Logo />
        <div className="flex gap-[32px] justify-between max-w-[974px]  rounded-[25px] w-[920px] h-[481px] bg-[#FFFFFF] " style={styles.calculatorContainer}>
          <ImputContainer 
            setBill={setBill}
            bill={bill}
            personAmount={personAmount}
            setPersonAmount={setPersonAmount}
            tips={tips}
            setCurrentTip={setCurrentTip}
            customTip={customTip}
            setCustomTip={setCustomTip}
            setCurrentCustomTip={setCurrentCustomTip}
            currentCustomTip={currentCustomTip}
           />
          <ResultContainer 
            value={bill}
            personAmount={personAmount}
            currentTip={currentTip}
            onClick={reset}
          />
        </div>
    </div>
  );
}

export default App;


const styles ={
  calculatorContainer:{
    boxShadow: '0px 32px 43px rgba(79, 166, 175, 0.200735)'
  }
}