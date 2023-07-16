import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            
            <ul>
                
            <li><Link to='/'>Vending Machine</Link></li>
            <li><Link to='/soda'>Soda</Link></li>
            <li><Link to='/coffee'>Coffee</Link></li>
            <li><Link to='/chips'>Chips</Link></li>
            
        </ul>
        </nav>
    )
}
export default NavBar;