import './Socials.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

<script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
function Socials () {
    return (
        <section className='social'>
            {socialMedia.map((link)=>{
                return <Single namee={link.namee} logo={link.logo} url={link.url}/>
            })}
        </section>
    );
}

const socialMedia = [
    {
        namee: 'github',
        logo: '',
        link: '\'https://github.com/AnushkaKundu\'',
    },
    {
        namee: 'linkedin',
        logo: '',
        link: "'https://www.linkedin.com/in/anushka-kundu-691518229/'",
    },
    {
        namee: 'instagram',
        logo: '',
        link: "'https://www.instagram.com/a.nush.ka.k/'",
    },
    {
        namee: 'discord',
        logo: '',
        link: "'discordapp.com/users/Anu_K#1640'",
    },
    
]

const Single = ({namee, logo, url}) => {
    let part1='fab fa-';
    let part2={namee}.namee; // hard
    let classNamee=part1.concat(part2);
    // console.log(classNamee);
    namee= namee.replace(/^./, namee[0].toUpperCase()); //hard
    return (
        <div className='creds'>
            <i className={classNamee}></i>
            <a href='{url}'>{namee}</a> 
            {/*//hard*/}
        </div>
    )
}

export default Socials;