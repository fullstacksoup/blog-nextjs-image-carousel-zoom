import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import Link from 'next/link';
export default function Index() {
  return (
    <Container maxWidth="md" align="center">
      <Box sx={{ my: 4 }} >
         <Typography variant="h3" component="h3"  gutterBottom>
          Next.js 13 with MUI 5.11.4
        </Typography>
        <Typography variant="h5" component="h5"  gutterBottom>
          Image Carousel
        </Typography>
        <Stack direction="row" spacing={1} justifyContent="center" alignItems="center" sx={{mt: 4, mb: 6}}>
          
          <Chip label="Material UI"  />
          <Chip label="Pure React Carousel"  />                    
        </Stack>
        <Button variant="contained" 
                color="primary" 
                component={Link}                           
        
                href={`/image-carousel`}> 
                Open Image Carousel
        </Button>
      </Box>
    </Container>
  );
}
