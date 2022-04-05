import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Display from './controller/display';
// import Numbers from './controller/numbers';
// import ActionBtn from './controller/actionBtn';
import Board from './controller/board';
import SnapShot from './controller/snapShot';

function App() {
  // const [num, setNum] = React.useState([]);
  // const [operation, setOperation] = React.useState(null);
  // const [numList, setNumList] = React.useState(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])
  // const [optionsList, setOptionsList] = React.useState([
  //   {'value':'+', 'operation': 'add'},
  //   {'value':'-', 'operation': 'subtract'},
  //   {'value':'*', 'operation': 'multiply'},
  //   {'value':'/', 'operation': 'divide'},
  //   {'value':'C', 'operation': 'clear'},
  //   {'value':'=', 'operation': 'equalto'}
  // ])
  
  // const numbersCallBack = (props) => setNum(oldValue => [...oldValue, props]);
  
  // const symbolCallBack = (props) => {
  //   // setNum(oldValue => [...oldValue, props]);
  //   if (props.operation === "equalto") {
  //     switch (operation) {
  //       case 'add':
  //         console.log(num);
  //         let addresult = num.join('').split('+')
  //         const addres = Number(addresult[0]) + Number(addresult[1]);
  //         setNum( (oldValue) => [addres]);
  //         break;
          
  //       case 'subtract':
  //         console.log(num);
  //         let subtractresult = num.join('').split('-')
  //         const subres = Number(subtractresult[0]) - Number(subtractresult[1]);
  //         setNum( (oldValue) => [subres]);
  //         break;

  //       case 'multiply':
  //         console.log(num);
  //         let multiplyresult = num.join('').split('*')
  //         const multiplyres = Number(multiplyresult[0]) * Number(multiplyresult[1]);
  //         setNum( (oldValue) => [multiplyres]);
  //         break;

  //       case 'divide':
  //         console.log(num);
  //         let divideresult = num.join('').split('/')
  //         const divideres = Number(divideresult[0]) / Number(divideresult[1]);
  //         setNum( (oldValue) => [divideres]);
  //         break;
      
  //       default:
  //         break;
  //     }
  //   } else {
  //     if(props.operation === "clear"){
  //       setOperation(() => props.operation);
  //       setNum( () => [0]);
  //     } else {
  //       setNum(oldValue => [...oldValue, props.value]);
  //       setOperation(() => props.operation);
  //     }
  //   }
  // }

  return (
    <div className="App">
      {/* <p>Calculator App</p>
      <div className="NumberContainer" >
        <Display value={num} ></Display>
        <div className="keyContainer" >
          {numList.map((value, index) => <Numbers value={value} key={index} parentCB = {numbersCallBack} /> )}
          {optionsList.map( (val, ind) => <ActionBtn value={val.value} key={ind} operation={val.operation} actionCB = {symbolCallBack} />)}
        </div>
      </div> */}

        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        {/** Tic toc toe */}
        {/* <Board /> */}
        <SnapShot />
    </div>
  );
}

export default App;
