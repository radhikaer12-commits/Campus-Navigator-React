import { useState } from "react";
import './landingpage.css';
// import MobileMenu from "./MobileMenu";
import { useNavigate } from "react-router-dom";
function LandingPage() {
    const [videoStarted, setVideoStarted] = useState(false);
    const [videoEnded, setVideoEnded] = useState(false);
    const navigate = useNavigate();


    const [leaving, setLeaving] = useState(false);
    function handleExplore() {
        setLeaving(true);
        navigate("/campus-navigator");
    }
    return (
        <div className={`landing-page ${leaving ? "leaving" : ""}`}>
            <video
                className={`landing-video ${videoStarted ? "visible" : ""}`}
                autoPlay
                muted
                playsInline
                onPlay={() => setVideoStarted(true)}
                onEnded={() => setVideoEnded(true)}
            ><source src="/campus-intro.mp4" type="video/mp4" /></video>
          
            <div className={`welcome-text ${videoStarted ? "show" : ""
                } ${videoEnded ? "hide" : ""}`}>
                <h1>
                    Welcome to <br />
                    Chitkara University
                </h1>
            </div>
            <div className={`landing-final ${videoEnded ? "show" : ""
                }`}>
                <p id="landing-tagline">
                    Explore. Experience. Navigate.
                </p>
                <h2>
                    Discover Chitkara
                </h2>
                <p id="landing-subtitle">
                    Your campus. Your journey. Your experience.
                </p>
                <br />
                <button id="landing-explore-btn" onClick={handleExplore}>Explore Campus</button>
                {/* <MobileMenu/> */}
            </div>
            <button id="landing-skip-btn" onClick={()=>{
                navigate("/campus-navigator");
            }}
            style={{zIndex:10000}}>Skip...</button>
        </div>
    );
}
export default LandingPage;