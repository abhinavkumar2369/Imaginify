import './Navbar.css'

import Logo from '.././assets/logo.svg'
import GithubIcon from '.././assets/github-logo.svg'

const openLinkInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

function Navbar(){
    return(
        <>
            <div className="navbar">
                <div id="navbar">
                    <span className="logo">
                        <img src={Logo} alt="" id="logo" />
                        Imaginify
                    </span>
                    <span className="buttons">
                        <img 
                            src={GithubIcon} 
                            alt="a" 
                            onClick={()=> openLinkInNewTab('https://github.com/abhinavkumar2369/Imaginify/')} 
                            id="github"
                        />
                    </span>
                </div>
            </div>
        </>
    )
}

export default Navbar;