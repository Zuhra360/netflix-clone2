import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.png'
import downicon from '../images/down-icon.png'



export const Home = () => {
    const navigate= useNavigate();
    return (
    <>
        <div className="header" >
            
            <nav>
                <img src={logo} className="logo" />
                <div>
                    <button className="lang-btn">English <img src={downicon} /></button>
                    <button >
                    <a href="/Signin">Sign In</a>
                    </button>
                </div>
            </nav>
            <div className="header-content">
                <h1>Unlimited movies, TV shows and more.</h1>
                <h3>Watch anywhere. Cancel anytime.</h3>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                <form className="email-signup">
                    <input type="email" placeholder="Email address" required/>
                    <button type="submit">Get Started</button>
                </form>
            </div>
    </div>
    </>
);
};
