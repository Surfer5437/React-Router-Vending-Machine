import './Soda.css';
import chips from './chips.gif'
import GoBack from './GoBack';
import { useState } from 'react';
function Chips() {
  const [eaten,setEaten] = useState(0)
  const msg=`Bags eaten: ${eaten}`
  const addToCount = () =>{
    setEaten(eaten => eaten + 1)
  }
  return (
    <>
    <GoBack message={msg} func={addToCount}/>
        <h1>Chips</h1>
        <img src={chips} alt='vending-machine'/>
    </>
  );
}

export default Chips;
