import React from 'react';
import styled from 'styled-components';
import { shadow, color, space, layout, flexbox, border, compose, typography } from 'styled-system';

const Box = styled('div')(
  compose(
    space,
    color,
    layout,
    flexbox,
    border,
    typography,
    shadow
  )
);

const ColorToken = ({ colorType, colorShade = '' }) => {
  return (<Box mr='1rem' flexDirection='column' alignItems='center'>
    <Box borderRadius="4px" width="4rem" height="4rem" backgroundColor={`${colorType}${colorShade}`}></Box>
    <Box textAlign="center">
      {/* {colorType}<br />{colorShade} */}
    </Box>
  </Box>)
}

const ColorTokenList = (props) => {
  const { colorType, ...rest } = props;
  return (
    <Box mb="1rem" display="flex" width="100%" {...rest}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => <ColorToken key={n} colorType={colorType} colorShade={`${n}00`}></ColorToken>)}
    </Box>
  )
}

export const Colors = (props) => {
  console.log(props);
  return (
    <Box>
      <Box mb="1rem" display="flex" width="100%">
        <ColorToken colorType="black"></ColorToken>
        <ColorToken colorType="white"></ColorToken>
        <ColorToken colorType="transparent"></ColorToken>
      </Box>
      <ColorTokenList colorType="black"></ColorTokenList>
      <ColorTokenList colorType="brand"></ColorTokenList>
      <ColorTokenList colorType="gray"></ColorTokenList>
      <ColorTokenList colorType="success"></ColorTokenList>
      <ColorTokenList colorType="info"></ColorTokenList>
      <ColorTokenList colorType="warning"></ColorTokenList>
      <ColorTokenList colorType="danger"></ColorTokenList>
    </Box>
  )
};
export const FontFamily = (props) => {
  return (
    <Box>
    </Box>
  )
};

export const FontSize = (props) => {
  return (
    <Box>
   
    </Box>
  )
};



export const Sizing = (props) => {
  return (
    <Box>
      <Box mb="1rem" display="flex" width="100%">
        <Box mr="1rem" width="sizeXXXSmall" height="sizeXXXSmall" backgroundColor="gray800" ></Box>
        <Box mr="1rem" width="sizeXXSmall" height="sizeXXSmall" backgroundColor="gray800" ></Box>
        <Box mr="1rem" width="sizeXSmall" height="sizeXSmall" backgroundColor="gray800" ></Box>
        <Box mr="1rem" width="sizeSmall" height="sizeSmall" backgroundColor="gray800" ></Box>
        <Box mr="1rem" width="sizeMedium" height="sizeMedium" backgroundColor="gray800" ></Box>
        <Box mr="1rem" width="sizeLarge" height="sizeLarge" backgroundColor="gray800" ></Box>
        <Box mr="1rem" width="sizeXLarge" height="sizeXLarge" backgroundColor="gray800" ></Box>
        <Box mr="1rem" width="sizeXXLarge" height="sizeXXLarge" backgroundColor="gray800" ></Box>
        <Box mr="1rem" width="sizeXXXLarge" height="sizeXXXLarge" backgroundColor="gray800" ></Box>
      </Box>
    </Box>
  )
};

export const Shadows = (props) => {
  return (
    <Box>
      <Box mb="1rem" display="flex" width="100%">
        <Box borderRadius="4px" mr="2rem" boxShadow={0} width="6rem" height="6rem" backgroundColor="white" ></Box>
        <Box borderRadius="4px" mr="2rem" boxShadow={1} width="6rem" height="6rem" backgroundColor="white" ></Box>
        <Box borderRadius="4px" mr="2rem" boxShadow={2} width="6rem" height="6rem" backgroundColor="white" ></Box>
        <Box borderRadius="4px" mr="2rem" boxShadow={3} width="6rem" height="6rem" backgroundColor="white" ></Box>
        <Box borderRadius="4px" mr="2rem" boxShadow={4} width="6rem" height="6rem" backgroundColor="white" ></Box>
      </Box>
    </Box>
  )
}


export default {
  title: 'Design Tokens',
  component: Colors
};
