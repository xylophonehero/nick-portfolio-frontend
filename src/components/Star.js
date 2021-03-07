import { Box } from '@chakra-ui/react';
import React from 'react';

import { star } from '../styles/backdrop.module.css'
import useWindowSize from '../hooks/useWindowSize'

const phi = 0.61803398875

function Star({ id })
{
  const initialValues = {
    size: Math.random(),
    red: Math.random(),
    blue: Math.random(),
    green: Math.random(),
    flickerRate: Math.random(),
  }


  const smallnumber = Math.sqrt(useWindowSize().width) / 20;
  const startnumber = useWindowSize().width / 200;

  const colorful = 100
  const spread = phi
  const starSize = 5
  const sameSizeStars = false
  const flickerRate = 5


  const red = Math.floor(initialValues.red * colorful)
  const green = Math.floor(initialValues.blue * colorful)
  const blue = Math.floor(initialValues.green * colorful)
  const colorRatio = colorful / (red + green + blue)
  // const size = sameSizeStars ? starSize : Math.floor(Math.random() * starSize + 2);
  const size = sameSizeStars ? starSize : Math.floor(initialValues.size * starSize + 2);
  const rotation = (spread * id - Math.floor(spread * id)) * Math.PI * 2;
  // const length = 15 + (id * smallnumber * Math.pow(0.95, Math.sqrt(id)));
  const length = startnumber + (id * smallnumber)
  const xpos = length * Math.cos(rotation);
  const ypos = length * Math.sin(rotation);
  // const seedColor = `rgba(${255 - Math.floor(Math.random() * 30)}, ${255 - Math.floor(Math.random() * 100)}, ${255 - Math.floor(Math.random() * 50)}, 1)`;
  const seedColor = `rgba(${255 - Math.floor(red * colorRatio)}, ${255 - Math.floor(green * colorRatio)}, ${255 - Math.floor(blue * colorRatio)}, 1)`;
  const seedpos = {
    height: `${size}px`,
    width: `${size}px`,
    transform: `translate(${xpos}px, ${ypos}px)`,
    animationDelay: `${id / 100}s`,
    // animationDuration: `${size / 20 * (initialValues.flickerRate + 1) * (11 - flickerRate)}s`,
    animationDuration: `${1 / 5 * (initialValues.flickerRate + 1) * (11 - flickerRate)}s`,
    animationIterationCount: flickerRate === '0' ? 1 : 'infinite',
    backgroundImage: `radial-gradient(circle, ${seedColor} 0%, #000000 100%)`,
    // backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 1) 0 %, rgba(0, 0, 0, 0) 100 %)'
  }

  return (
    <Box
      className={star}
      top="50%"
      left="50%"
      style={{
        position: "absolute",
        borderRadius: "50%",
        ...seedpos
      }}
    />
  );
}

export default Star;