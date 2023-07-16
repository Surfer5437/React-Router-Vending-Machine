
import { Link, useNavigate } from 'react-router-dom';

export default function GoBack({message='enjoy', func}) {
    const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }
    return (
        <nav>
            
            <ul>
                
                <li><h3>{message}</h3></li>
                {func && <button onClick={func}>Add bag!</button>}
                <li onClick={goBack}><Link>Go back</Link></li>
                
            </ul>
        </nav>
    );
  }