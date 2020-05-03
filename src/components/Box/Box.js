import styled from 'styled-components';
import {
  boxShadow,
  shadow,
  color, 
  space,
  layout,
  flexbox,
  border,
  compose,
  typography } from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';
import { variant, base, sx } from '../../core';


export const Box = styled('div', {shouldForwardProp})(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  base,
  variant,
  sx,
  props => props.css,
  props => props.styledCss,
  compose(
    space,
    color,
    layout,
    flexbox,
    border,
    typography,
    boxShadow 
  ),
);

export const Flex = styled(Box)({
  display: 'flex'
})

export default Box;

