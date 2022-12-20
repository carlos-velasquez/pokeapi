import { NavLink } from 'react-router-dom'


const Navbar = () => {

    const setActive = ({isActive}) => (isActive ? "active" : undefined);

    return (
        <div >
            <NavLink className={setActive} to="/">
                HOME
            </NavLink>
            {' - '}
            <NavLink className={setActive} to="/pokemon">
                POKEMON
            </NavLink>
        </div>
    )
}

export default Navbar;