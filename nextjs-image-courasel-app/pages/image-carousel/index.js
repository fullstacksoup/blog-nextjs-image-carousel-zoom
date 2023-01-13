import React from 'react';
import { Container } from "@mui/system"

import ImageCarousel from '@/components/image-carousel/imageCarousel';

export default function Index() {

  return (
    <Container maxWidth='sm'>
      <ImageCarousel images={imgArr}/>
    </Container>
  )
}

const imgArr = ['/images/image_1.jpg', 
'/images/image_2.jpg', 
'/images/image_3.jpg', 
'/images/image_4.jpg', 
'/images/image_5.jpg', 
'/images/image_6.jpg']
