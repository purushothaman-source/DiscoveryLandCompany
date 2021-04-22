import React from 'react';
import './slideshow.css';
import image from '../../Assets/discovery-communities.jpg';
import image1 from '../../Assets/Chileno-Bay-Golf-Beach-Club.jpg';
import image2 from '../../Assets/Kukio-OurWorlds_2cbd80a0345be3b5a0b7649a1a2d057f.jpg';




const slideImages = [
    image,
    image1,
    image2
];

const delay = 2500;

function Slideshow() {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === slideImages.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="slideshow">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {slideImages.map((backgroundColor, index) => (
                    <div
                        className="slide"
                        key={index}

                        style={{ "backgroundImage": `url(${backgroundColor})` }}>

                    </div>
                ))}
            </div>
           
         {/* <div className="discover">
                Discover<br/>your world
            </div>  */}

        </div>
    );
}



export default class SlideShow extends React.Component {

    render() {
        return (
            < Slideshow />
        
        )
    }
}