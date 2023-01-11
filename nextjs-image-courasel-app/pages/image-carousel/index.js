import React, { useContext, useEffect, useState } from 'react';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import '@/styles/products.module.css'
import { CarouselContext } from 'pure-react-carousel';
import { Container } from "@mui/system"
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, ImageWithZoom, DotGroup  } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import Image from 'next/image';
import ImageCarousel from '@/components/imageCarousel';
export default () => {
  const [sliderRef] = useKeenSlider({
    loop: false,
    mode: "snap",
    rtl: false,
    slides: { perView: "auto" },
  })

  // https://picsum.photos/2400

  // const carouselContext = useContext(CarouselContext);
  const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect(() => {
  //   function onChange() {
  //     setCurrentSlide(carouselContext.state.currentSlide);
  //   }
  //   carouselContext.subscribe(onChange);
  //   return () => carouselContext.unsubscribe(onChange);
  // }, [carouselContext]);
  const imgArr = ['/images/image_1.jpg', 
                  '/images/image_2.jpg', 
                  '/images/image_3.jpg', 
                  '/images/image_4.jpg', 
                  '/images/image_5.jpg', 
                  '/images/image_6.jpg']

  return (
    <Container maxWidth='sm'>
      <ImageCarousel images={imgArr}/>
    </Container>
  )
}
