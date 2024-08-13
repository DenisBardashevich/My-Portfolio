import { useState, useEffect } from 'react';
import notebook from '/notebook.png'


const Welcom = () => {
    
    const [isOrange, setIsOrange] = useState(false);
    const [text, setText] = useState("Frontend Developer"); 
    const [shake, setShake] = useState(false); // Состояние для дрожания

    useEffect(() => {
        const interval = setInterval(() => {
            setIsOrange(prev => !prev);
            setText(prev => prev === "Frontend Developer" ? "Denis" : "Frontend Developer");
            setShake(true); 

            
            setTimeout(() => {
                setShake(false);
            }, 300); 
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="welcom">
                <div className="welcom_i">
                <div className={`welcom_portfolio ${shake ? 'shake' : ''}`}>
                        Welcome to my portfolio website!
                    </div>
                    <div className="welcom_name">
                        Hey folks, I'm <span className='name_color' style={{ color: isOrange ? 'orange' : '' }}>{text}</span>
                    </div>
                    <div className="welcom_about">
                        Building a successful product is a challenge. I am always looking to improve my skills and learn new tools and frameworks to create innovative and effective solutions.
                    </div>
                </div>
                <div className="welcom_img">
                    <img className='img_notebook' src={notebook} alt="A notebook showcasing code" />
                </div>
            </div>
        </>
    );
};

export default Welcom;
