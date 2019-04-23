import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';


class App extends React.Component {
  render() {
    const numberButtons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(number => {
      return <NumberButton number={number}></NumberButton>
    })


  
    return (
      <div className="wrapper">
        <CalculatorDisplay />
        <ButtonContainer className="clear-button">
          <ActionButton />
          <NumberButton />
        </ButtonContainer>


      

        <h3>Welcome to React Calculator</h3>
        <p>
          We have given you a starter project. You'll want to build out your
          components in their respective files, remove this code and replace it
          with the proper components.
      </p>
        <p>
          <strong>
            Don't forget to `default export` your components and import them here
            inside of this file in order to make them work.
        </strong>
        </p>
        {numberButtons}
      </div>

    );
  };
}

export default App;
