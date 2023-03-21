import './Box.css';
function Constellations () {
    return (
        <>
        <section className='constellations outer'>
            {boxes.map((svgBox) => {
                return (
                    <>
                    
                    <div className="gooey"></div>
                    {/* <div class='line'/> */}
                    <Box heading={svgBox.heading} content={svgBox.content}/>
                    </>
                )
            })}
        </section>
        </>
    );
}

const boxes = [
    {
        // img: '',
        heading: 'Ursa Major',
        content: 'Ursa Major also called the big dipper is a group of stars that can be seen in the sky at night. It\'s also known as the Big Dipper because it looks like a ladle or spoon. Ursa Major is located in the northern part of the sky and is one of the most recognizable constellations. People have been looking at Ursa Major for thousands of years and it has many stories and myths associated with it.',
    },
    {
        // img: '',
        heading: 'Ursa Minor',
        content: 'Ursa Minor also called litle dipper is a group of stars that can be seen in the sky at night. It\'s located in the northern part of the sky and looks like a small bear. The two brightest stars in Ursa Minor are called Polaris, also known as the North Star, which helps people find their way when they\'re lost. People have been looking up at Ursa Minor for thousands of years and it\'s still one of the most recognizable constellations today!',
    },
    {
        // img: '',
        heading: 'Draco',
        content: "Draco is a constellation in the northern part of the sky. It looks like a dragon and has been named after this mythical creature. You can see it during certain times of the year if you look up at the stars at night. People have been looking at Draco for thousands of years and it's one of many constellations that make up our universe!",
    },
    {
        // img: '',
        heading: 'Cepheus',
        content: "Cepheus is a group of stars that form a shape in the sky called a constellation. It's located in the northern part of the sky and can be seen during certain times of the year. People have been looking at constellations for thousands of years and they often tell stories about them. Cepheus is named after a king from ancient Greek mythology who was turned into a constellation by the gods.",
    },
    {
        // img: '',
        heading: 'Cassiopeia',
        content: "Cassiopeia is a group of stars that form a shape like the letter \"W\" in the sky. It's located in the northern part of the sky and can be seen during certain times of the year. People have been looking at Cassiopeia for thousands of years and it has many interesting stories and myths associated with it. Some people even use Cassiopeia to help them find their way around at night!",
    },
]

const Box = ({heading, content}) => {
    return (
        <div className='box'>
            <div className='heading'>
                <div className="blob"></div>
                {heading}
            </div>
            <div className='content'>
                {content}
            </div>
            
        </div>
    );
}

export default Constellations;