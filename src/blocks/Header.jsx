import people from '/people.png'
import Nav_btn from '/icon/Nav-btn.png'


const Header = ({onOpen}) => {
    return ( 
        <div className="Header" id='Denis'>
            <div className="header_people">
                <img src={people} alt="people" />
                <h1 ><a className='header_name' href="#">Denis</a></h1>
            </div>
            <div className="header_social">
                <ul>
                    <li> <a href="#skill">Skills</a></li>
                    <li> <a href="#projects">Project</a></li>
                    <li> <a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div className="header_nav">
                <button onClick={onOpen} className='nav_btn'>
                    <img  src={Nav_btn} alt="btn" />
                </button>
            </div>

        </div>
     );
}
 
export default Header;