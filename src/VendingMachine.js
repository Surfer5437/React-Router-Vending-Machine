import './VendingMachine.css';
import vendingPic from './vending.jpg'
import NavBar from './NavBar';


function VendingMachine() {
  return (
    <>
    <NavBar />
        <h1>Vending Machine</h1>
        <img src={vendingPic} alt='vending-machine'/>
        
    </>
  );
}

export default VendingMachine;
