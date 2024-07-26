import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'animate.css/animate.min.css';
import classes from './carousel.module.css';
import hello from '../images/hello.jpg';
import ToDo from '../images/ToDo.jpg';
import { FaArrowCircleDown } from 'react-icons/fa';

export default function CarouselImg(){    
    return(
        <div className={classes.carousel_container} id='start'>
        <Carousel
          className={classes.carousel}
          dynamicHeight
          infiniteLoop={true}
          interval={6000}
          useKeyboardArrows={true}
          transitionTime={1700}
          emulateTouch
          showArrows={false}
          autoPlay
          showStatus={false}
          showThumbs={false}
        >
          <div className={classes.image_container}>
            <img className={classes.image} src={hello} alt='myImage' />
            <div className={classes.h1}>
              <h1 className={classes.name}>I'm Ray</h1>
              <a
                href='https://drive.google.com/file/d/1t4WKh9_BDbuF9NeCHuUQyCjzdJRCLn9f/view?usp=sharing'
                rel='opener noreferrer'
                target='_blank'
              >
                VIEW my Resume <FaArrowCircleDown />
              </a>
            </div>
          </div>
          <div className={classes.image_container}>
            <img className={classes.image} src={ToDo} alt='myImage' />
            <div className={classes.h2}>
              <h1> OUTPUT is more effective</h1>
              <h1>than input!!</h1>
              <a
                href='https://www.youtube.com/watch?v=YmJeZ7NKUIE&feature=youtu.be'
                rel='opener noreferrer'
                target='_blank'
              >
                VIEW WEB APP
              </a>
              <div className={classes.secondButton}>
                <a
                  href='https://www.youtube.com/watch?v=DNl63juSbwc'
                  rel='opener noreferrer'
                  target='_blank'
                >
                  VIEW IOS APP
                </a>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    );
}