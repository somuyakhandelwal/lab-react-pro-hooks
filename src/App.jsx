import React, { useEffect, useState } from 'react';
import './App.css';

const LARGE_NUMBER = 1000000000;

function App() {
  const [value, setValue] = useState(0);
  const [dark, setTheme] = useState(true);
  const [themeName, setThemeName] = useState('dark');
  const [currentList, setList] = useState([]);

  const delayFunction = () => {
    console.log('Delay Function Ran');
    for (let index = 0; index < LARGE_NUMBER; index++) {}
    return value + 2;
  };

  const testFunction = () => [value * 3, value * 4];

  useEffect(() => {
    console.log('Callback Function was called');
  }, [testFunction]);

  useEffect(() => {
    setThemeName(dark ? 'dark' : 'light');
  }, [dark]);

  const handleClick = () => {
    setTheme((prevDark) => !prevDark);
  };

  const handleChangeValue = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const handleList = () => {
    setList(testFunction);
  };

  const styleTheme = {
    backgroundColor: dark ? 'black' : '#ccc7c7',
  };

  return (
    <div className="page" style={styleTheme}>
      <button onClick={handleClick}>{themeName}</button>
      <h1>{value}</h1>
      <button onClick={handleChangeValue}>Change Value</button>
      <button onClick={handleList}>Show List</button>
      <h2>{delayFunction()}</h2>
      <div>
        {currentList.map((item, index) => (
          <h2 key={index}>{item}</h2>
        ))}
      </div>
    </div>
  );
}

export default App;
