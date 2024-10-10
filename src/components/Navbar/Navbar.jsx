import { Link } from '@mui/material';
import './Navbar.css'
function Navbar(){
    return(
        <>
        <div className="nav-container">
            <div className="nav-left">Sunil</div>
            <div className="nav-right">
            <Link href="#home">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#experience">Experience</Link>
            <Link href="#skills">Skills</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#contact">Contact</Link>
            </div>
        </div>
        </>
    )
}
export default Navbar;