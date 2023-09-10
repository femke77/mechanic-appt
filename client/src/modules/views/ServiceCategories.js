import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const images = [
  {
    url: 'https://cloud.autel.com/wp-content/themes/cloud_home/images/home/autel-cloud-home-4.jpg?v=2.1',
    title: 'Diagnostics',
    width: '40%',
  },
  {
    url: 'https://vintageautosc.com/oil-change-greenville/images/oil-change-and-lube.jpg',
    title: 'Oil Change & Tune ups',
    width: '20%',
  },
  {
    url: 'https://pictures.dealer.com/h/huntingtonsubarusoa/0493/d12d647d9d5b659ae26e23ad3fcd1ac0x.jpg',
    title: 'Brakes',
    width: '40%',
  },
  {
    url: 'https://www.brothersautocollision.com/wp-content/uploads/2022/11/AutoBodyShopAkron-604x270.jpg',
    title: 'Collision',
    width: '38%',
  },
  {
    url: 'https://d3hvs2gyy8n2xz.cloudfront.net/blog/wp-content/uploads/2016/07/12110021/wheel-alignment-vs-front-end-alignment-is-there-a-difference.jpg',
    title: 'Tires & Alignment',
    width: '38%',
  },
  {
    url: 'https://simplycoolusa.com/wp-content/uploads/2022/04/autowindowtint-Large.jpeg',
    title: 'Window Tinting',
    width: '24%',
  },
  {
    url: 'https://i0.wp.com/studentlesson.com/wp-content/uploads/2023/06/How-Much-Does-An-Engine-Swap-Cost.jpg?fit=786%2C392&ssl=1',
    title: 'Engine/Transmission Replacement',
    width: '40%',
  },
  {
    url: 'https://lirp.cdn-website.com/263ba0d9/dms3rep/multi/opt/car+wash-1920w.jpg',
    title: 'Wash & Detailing',
    width: '20%',
  },
  {
    url: 'https://cdn.shopify.com/s/files/1/0108/3044/6655/files/73023169_1996559910447117_6533051479517822976_o.jpg?v=1576579386',
    title: 'performance/ fabrication',
    width: '40%',
  },
];

export default function ServiceCategories() {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" marked="center" align="center" component="h2">
        For all your service needs
      </Typography>
      <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.white',
              }}
            >
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
              >
                {image.title}
                <div className="imageMarked" />
              </Typography>
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}
