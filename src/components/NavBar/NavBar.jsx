import { Link } from 'react-router-dom'

const NavBar = () => {

    return (
        <>
            <Link to="/">Search</Link><br></br>
            <Link to="/library">Library</Link>
        </>
    )
}

export default NavBar