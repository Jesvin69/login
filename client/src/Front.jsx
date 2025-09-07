import './Front.css';
import { Link } from 'react-router-dom';
function Front() {
return (

    <div>
        <h1>Welcome</h1>
        <div>
            <Link to="/Signup"><button>Sign Up</button></Link>
            <Link to="/Login"><button>Log In</button></Link>
        </div>
    </div>

);

}

export default Front;
