import './Soda.css';
import soda from './soda.gif'
import GoBack from './GoBack';
function Soda() {
  return (
    <>
    <GoBack message='Yum Sugar!!!'/>
        <h1>Soda</h1>
        <img src={soda} alt='vending-machine'/>
    </>
  );
}

export default Soda;
