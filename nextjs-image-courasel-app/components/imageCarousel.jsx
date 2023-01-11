import React, {  useEffect, useState } from 'react';
import { useKeenSlider } from "keen-slider/react"
import { styled } from '@mui/material/styles';
import "keen-slider/keen-slider.min.css"
import '@/styles/products.module.css'
import { Container } from "@mui/system"
import { CarouselProvider, Slider, Slide, ImageWithZoom, DotGroup,   ButtonBack, ButtonNext  } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import Image from 'next/image';
import ButtonBase from '@mui/material/ButtonBase';
import s from './ImageCarousel.module.css'
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    zIndex: 99,
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.15,
      },
      '& .MuiImageMarked-root': {
        opacity: 0,
      },
      '& .MuiTypography-root': {
        border: '4px solid currentColor',
      },
    },
  }));
  


export default function ImageCarousel(props) {
  const [sliderRef] = useKeenSlider({
    loop: false,
    mode: "snap",
    rtl: false,
    slides: { perView: "auto" },
  })

  // const carouselContext = useContext(CarouselContext);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageData, setImageData] = useState(props.images);

  const handleClickPreviousEvent = (event) => {
    setCurrentSlide(currentSlide - 1)
    if(currentSlide <= 0) {
        setCurrentSlide(imageData.length - 1)
    }
  }

  const handleClickNextEvent = (event) => {
    setCurrentSlide(currentSlide + 1)
    if(currentSlide >= imageData.length - 1) {
        setCurrentSlide(0)
    }
  }

  // useEffect(() => {
  //   function onChange() {
  //     setCurrentSlide(carouselContext.state.currentSlide);
  //   }
  //   carouselContext.subscribe(onChange);
  //   return () => carouselContext.unsubscribe(onChange);
  // }, [carouselContext]);
  

  return (
    <Container maxWidth='sm'>
      <Grid container spacing={2}>
         <Grid item xs={2}>

           <Stack direction="column" spacing={2} sx={{ maxHeight: 60 }} >
            {props.images.map((item, index) => (
              <Box sx={{ maxWidth: 50, maxHeight: 40, cursor: 'pointer' }}  onClick={() => setCurrentSlide(index)}>
                <Image src={item} width="50" height="50" className={index===currentSlide && s.glow}/>
              </Box>
            ))}            
          </Stack>

         </Grid>
         <Grid item xs={10}>
         
          <CarouselProvider
            visibleSlides={1}
            totalSlides={props.images.length}
            currentSlide={currentSlide}
            step={2}
            naturalSlideWidth={200}
            naturalSlideHeight={300}
            hasMasterSpinner
            infinite            
          >
          <div className={s.container}>       
            <Slider className={s.slider}>

            {props.images.map((item, index) => (                
                <Slide key={index}>
                
                   <ImageWithZoom  src={item} key={index}/>
                
                </Slide>
                              
              ))}            
            </Slider>
            <ButtonBack className={s.buttonBack} onClick={(e) => handleClickPreviousEvent(e)}><ArrowBackIosIcon/></ButtonBack>
            <ButtonNext className={s.buttonNext}  onClick={(e) => handleClickNextEvent(e)}> <ArrowForwardIosIcon/></ButtonNext>
            </div>
            {/* <DotGroup dotNumbers /> */}
            
         </CarouselProvider>
       
        </Grid>
      </Grid>
    </Container>
  )
}
