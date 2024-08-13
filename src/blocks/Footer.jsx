import git from '/icon/socials/git.png'
import insta from '/icon/socials/insta.png'
import linkin from '/icon/socials/linkin.png'
import telegram from '/icon/socials/telegram.png'
import vk from '/icon/socials/vk.png'


const social_icon = [
    { src: insta, alt: "Instagram", title: "Instagram", href: "https://www.instagram.com/denis___ka/" },
    { src: telegram, alt: "Telegram", title: "Telegram", href : "https://t.me/Deniska_aa/"},
    { src: linkin, alt: "LinkedIn", title: "LinkedIn", href: "http://linkedin.com/in/денис-бардашевич-042003304" },
    { src: vk, alt: "VK", title: "VK", href : "https://vk.com/deniskin_1"},
    { src: git, alt: "GitHub", title: "GitHub", href: "https://github.com/DenisBardashevich"},
];

const Footer = () => {
    return (
        <>
            <div className="footer" id='contact'>
                <div className="footer_name">
                    <div className="footer_name_i">Denis Bardashevich</div>
                    <div className="footer_name_frontend">Frontend Developer</div>
                </div>
                <div className="socials">
                    <div className="socials_name">Contacts</div>
                    <div className="socials_icons">
                        {social_icon.map((icon, index) => (
                            <a href={icon.href} key={index} title={icon.title}>
                                <img src={icon.src} alt={icon.alt} />
                            </a>
                        ))}
                    </div>
                </div>
                <div className="footer_date">All rights reserved ©</div>
            </div>
        </>
    );
};

export default Footer;