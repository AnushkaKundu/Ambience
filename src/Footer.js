import './Footer.css'
import wave2 from './Wave2.svg'
import Socials from './Socials';
import face from './face.png'
function Footer() {
    return (
        <>
        <img src={wave2} style={{marginBottom: '-8px'}}></img>
            <footer>
            <About/>
            <Socials/>
            </footer>
        </>
    );
}
const About = () => {
    return (
      <div className='about'>
        <div >
          <img src={face} className='imgg'/>
        </div>
        <div className='about-text'>
          I am a 19-year-old fascinated by new and rapidly evolving technologies. My way to go is learning by doing. Whether building a project or leading it, I am always up to learn more. I am currently pursuing my dream at SVNIT, Surat. My skills include but are not limited to C++, C, HTML5, CSS3, JavaScript, Python, Bootstrap, and React.JS.
        </div>
      </div>
    );
}
export default Footer;