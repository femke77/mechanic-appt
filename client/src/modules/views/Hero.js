import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import HeroLayout from './HeroLayout';

const backgroundImage =
  'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/a-man-mechanic-and-woman-customer-discussing-repairs-anek-suwannaphoom.jpg';

export default function Hero() {
  return (
    <HeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        a stress free appointment awaits
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        Get your maintenance service or repairs done quickly and at your convenience.
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="http://localhost:3000/signup"
        sx={{ minWidth: 200 }}
      >
        Register
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography>
    </HeroLayout>
  );
}
