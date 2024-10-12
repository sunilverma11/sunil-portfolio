import { Link } from '@mui/material';
import Brightness from '@mui/icons-material/Brightness2';
import Darkness from '@mui/icons-material/WbSunnyRounded';
import './Navbar.css'

function Navbar({themeName, setThemeName}){
    // const [themeName, setThemeName] = useState(localStorage.getItem("portfolioTheme")?localStorage.getItem("portfolioTheme"):'dark')
    const toggleTheme = ()=>{
        localStorage.setItem("portfolioTheme",themeName==='dark'?'light':'dark')
        setThemeName(themeName==='dark'?'light':'dark')
    }
    return(
        <>
        <div className="nav-container">
            <div className="nav-left">Sunil</div>
            <div className="nav-right">
            {/* <Link href="#home">Home</Link> */}
            <Link href="#home">About</Link>
            <Link href="#experience">Experience</Link>
            <Link href="#skills">Skills</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#contact">Contact</Link>
            <button
                type='button'
                onClick={toggleTheme}
                className='btn btn--icon nav__theme'
                aria-label='toggle theme'
            >
                {themeName === 'dark' ? <Darkness /> : <Brightness />}
            </button>
            </div>
        </div>
        </>
    )
}
export default Navbar;