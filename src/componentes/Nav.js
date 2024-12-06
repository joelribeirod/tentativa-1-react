import {Link} from 'react-router-dom'

function Nav(){
    return (
        <nav id='nav'>
            <Link to="/" id='linkum'>Home</Link>
            <Link to="/sobre" id='linkdois'>Sobre min</Link>
        </nav>
    )
}

export default Nav