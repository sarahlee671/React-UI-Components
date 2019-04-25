import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';


const App = () => {
  

  
    return (
      <div className="wrapper">

        <CalculatorDisplay />
        <buttonContainer>
          <ActionButton className="bigButton" text="clear" />
          <NumberButton buttonStyle="red-button" text="÷" />
        </buttonContainer>
        <buttonContainer>
          <NumberButton buttonStyle="number-button" text="7" />
          <NumberButton buttonStyle="number-button" text="8" />
          <NumberButton buttonStyle="number-button" text="9" />
          <NumberButton buttonStyle="red-button" text="x" />
        </buttonContainer>
        <buttonContainer>
          <NumberButton buttonStyle="number-button" text="4" />
          <NumberButton buttonStyle="number-button" text="5" />
          <NumberButton buttonStyle="number-button" text="6" />
          <NumberButton buttonStyle="red-button" text="-" />

        </buttonContainer>
        <buttonContainer>
          <NumberButton buttonStyle="number-button" text="1" />
          <NumberButton buttonStyle="number-button" text="2" />
          <NumberButton buttonStyle="number-button" text="3" />
          <NumberButton buttonStyle="red-button" text="+" />
        </buttonContainer>
        <buttonContainer>
          <ActionButton className="bigButton" text="0" />
          <NumberButton buttonStyle="red-button" text="=" />
        </buttonContainer>
      </div>
  );
  
}

export default App;



      

 