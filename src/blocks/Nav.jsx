import close_btn from "/icon/Close-Btn.svg";

const Nav = ({onClose}) => {
    
    return (
        <>
            <div className="mobile_nav-open" onClick={onClose}></div>
            <div className="mobile_nav">
                <button onClick={onClose} className="nav_btn-close">
                    <img src={close_btn} alt="" />
                </button>
                <ul className="nav_list">
                    <li><a onClick={close_btn} href="#Denis">Denis</a></li>
                    <li><a href="#skill">Skills</a></li>
                    <li><a href="#projects">Project</a></li>
                    <li><a href="#contact">Contact</a></li>
                    
                </ul>
            </div>
        </>
    );
};

export default Nav;
