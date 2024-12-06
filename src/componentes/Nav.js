import {Link} from 'react-router-dom'

function Nav(){
    return (
        <nav id='nav'>
            <Link to="/tentativa-1-react/" id='linkum'>Home</Link>
            <Link to="/tentativa-1-react/sobre" id='linkdois'>Sobre min</Link>
        </nav>
    )
}

export default Nav