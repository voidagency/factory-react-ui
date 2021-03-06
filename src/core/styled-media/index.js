import { css } from "styled-components";
export const DEFAULT_BREAKPOINTS = {
    xs: '0',  
    sm: '500px', 
    md: '960px', 
    lg: '1280px', 
    xl: '1920px'
};


const getSizeFromBreakpoint = (breakpointValue, breakpoints = {})  => {
    if (breakpoints[breakpointValue]) {
      return breakpoints[breakpointValue];
    } else if (parseInt(breakpointValue)) {
      return breakpointValue;
    } else {
      console.error('No valid breakpoint or size specified for media.');
      return '0';
    }
}


export const lessThan = (breakpoint) => (...args) => {

  return css`
    ${
      props => {
        const breakpoints =  props ? props.theme.breakpoints :  DEFAULT_BREAKPOINTS;
        return css`
                  @media (max-width: ${getSizeFromBreakpoint(breakpoint, breakpoints)}) {
                    ${css(...args)}
                  }
                `;
      }
    }
  `;
}

export const greaterThan = (breakpoint) => (...args) => {

  return css`
    ${
      props => {
        const breakpoints =  props ? props.theme.breakpoints :  DEFAULT_BREAKPOINTS;
        return css`
                  @media (min-width: ${getSizeFromBreakpoint(breakpoint, breakpoints)}) {
                    ${css(...args)}
                  }
                `;
      }
    }
  `;
}

export const between = (firstBreakpoint, secondBreakpoint)  => (...args) => {

  return css`
    ${
      props => {
        const breakpoints =  props ? props.theme.breakpoints :  DEFAULT_BREAKPOINTS;
        return css`
                  @media (min-width: ${getSizeFromBreakpoint(firstBreakpoint, breakpoints)}) and (max-width: ${getSizeFromBreakpoint(secondBreakpoint, breakpoints)}) {
                    ${css(...args)}
                  }
                `;
      }
    }
  `;
};

export const  generateMedia = (props) => {
  
    const breakpoints =  props ? props.theme.breakpoints :  DEFAULT_BREAKPOINTS;
    
    const lessThan = (breakpoint) => (...args) => {
      console.warn("[vactory-ui] generateMedia(props).lessThan("+breakpoint+") ne sera pas prise en charge dans les versions à venir, utiliser plutot lessThan("+breakpoint+")");
      return css`
      @media (max-width: ${getSizeFromBreakpoint(breakpoint, breakpoints)}) {
        ${css(...args)}
      }
    `};
  
    const greaterThan = (breakpoint) => (...args) => {

      console.warn("[vactory-ui] generateMedia(props).greaterThan("+breakpoint+") ne sera pas prise en charge dans les versions à venir, utiliser plutot greaterThan("+breakpoint+")");
      return  css`
        @media (min-width: ${getSizeFromBreakpoint(breakpoint, breakpoints)}) {
          ${css(...args)}
        }
      `
    };
  
    const between = (firstBreakpoint, secondBreakpoint) => (...args) => {
      console.warn("[vactory-ui] generateMedia(props).between("+firstBreakpoint+", "+secondBreakpoint+") ne sera pas prise en charge dans les versions à venir, utiliser plutot greaterThan("+firstBreakpoint+", "+secondBreakpoint+")");
      
      return css`
      @media (min-width: ${getSizeFromBreakpoint(firstBreakpoint, breakpoints)}) and
        (max-width: ${getSizeFromBreakpoint(secondBreakpoint, breakpoints)}) {
        ${css(...args)}
      }
    `};

    return  {
        lessThan,
        greaterThan,
        between,
      };
}

export default generateMedia;