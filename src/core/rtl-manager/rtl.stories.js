import React from 'react';
import styled from 'styled-components'
import { border, typography } from 'styled-system';
import { DirectionManager } from './index';
import markdown from './rtl.notes.md'
const Box = styled.div`
  background: mediumseagreen;
  margin-bottom: 10px;
  ${border}
`

const BoxTextRight = styled.div`
    background: green;
    margin-bottom: 10px;
    /* @noflip */
    ${typography}
    /* @noflip */
    border-left: 20px solid red;
`;

export const LTR = () => {

    return (<DirectionManager>
                <Box borderLeft="20px solid red">My border is now on the left!</Box>
                <BoxTextRight textAlign="right">Content aligns along the right side.</BoxTextRight>
            </DirectionManager>
            
    );
}
export const RTL = () => {

    return (
        <DirectionManager dir="rtl">
                <Box borderLeft="20px solid red">My border is now on the right!</Box>
                <BoxTextRight textAlign="right">Content aligns along the right side.</BoxTextRight>
        </DirectionManager>
    );
}


export default {
  title: 'Direction Manager',
  parameters: {
    notes: { markdown },
  },
};
