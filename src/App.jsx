import { useState } from 'react';
import './App.css';
import Card from './components/Card';


function App() {
  const [count, setCount] = useState(0);
  let myObj={
    userName:"prachi",
    age:20
  }
  let newArr=[1,2,3,4]

  return (
    <>
    
      {/* Title */}
      <h1 className="bg-green-400 text-black p-4 rounded-xl">
        Tailwind test
      </h1>
<Card userName="prachi"/>
<Card/>

      
    
  </>
  );
}

export default App;
