import './Soda.css';
import coffee from './coffee.gif'
import GoBack from './GoBack';
function Coffee() {
  return (
    <>
        <GoBack message='Now thats some good coffee!!!'/>
        <h1>Coffee</h1>
        <img src={coffee} alt='vending-machine'/>
    </>
  );
}

export default Coffee;
