import TitleMessage from "./TitleMessage";
import download from "../icons/download.svg"

function Home() {
    return(
        <div id="home">
            {/* <h2>Home</h2> */}
            <TitleMessage/>
            <div style={{width:'100%',display:'flex', justifyContent:'center'}}>
            <div className="ctas">
            <a
                className="primary"
                href="#home"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                src={download}
                alt="resume logomark"
                width={20}
                height={20}
                />
                Resume
            </a>
                {/* <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="secondary"
                >
                    Home
                </a> */}
      
            </div>
            </div>
        </div>
    )
}
export default Home;