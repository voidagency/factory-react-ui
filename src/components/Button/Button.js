import styled from "styled-components";
import { flexbox, color, space, typography, compose, background, position, shadow, border, variant as StyledVariant, buttonStyle, width, height, display } from "styled-system";
import { sx, variant } from "../../core";


const fillVariants = StyledVariant({
    scale: 'buttons.fill',
    prop: 'fill',
    variants: {
        primary: {
        }
    }
});

const sizeVariants = StyledVariant({
    scale: 'buttons.size',
    prop: 'size',
    variants: {
        medium: {
        }
    }
});

const outlineVariants = StyledVariant({
    scale: 'buttons.outline',
    prop: 'outline',
    variants: {
        primary: {
        }
    }
})


 export const Button = styled.button`

    display: inline-flex;
    align-items: center;
    flex-direction: row;
    box-sizing: border-box;
    cursor: pointer;
    outline: none;
    font: inherit;
    text-decoration: none;
    margin: 0;
    background: transparent;
    overflow: visible;
    text-transform: none;
    border-style: solid;

    
    ${buttonStyle}
    ${fillVariants}
    ${outlineVariants}
    ${sizeVariants}
    ${variant}
    ${sx}
    ${compose(
        width,
        height,
        display,
        space,
        color,
        typography,
        flexbox,
        background,
        border,
        position,
        shadow
    )}


    &:disabled {
       cursor: not-allowed;
       pointer-events: all !important;
    }

`;

export const Permalink = styled.button`    
    position: relative;
    color: ${props => props.theme.colors.primary600};
    display: inline-flex;
    font-size: 14px;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    text-transform: uppercase;
    border: none;
    padding: 0;
    margin: 0;
    padding-bottom: 8px;
    background: transparent;
    &:after {
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 3px;
        background: ${props => props.theme.colors.primary600};
        transition: width .3s ease-in;
    }
    &:hover {
        cursor: pointer;
        &:after {
            width: 0;
        }
    }

    
    ${buttonStyle}
    ${fillVariants}
    ${outlineVariants}
    ${sizeVariants}
    ${variant}
    ${sx}
    ${compose(
    width,
    height,
    display,
    space,
    color,
    typography,
    flexbox,
    background,
    border,
    position,
    shadow
)}

`;


Button.defaultProps = {
    fill: 'primary',
    size: 'medium',
    borderRadius: 'small'
}
export default Button;
