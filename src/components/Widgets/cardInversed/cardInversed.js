import React from "react";
import {Box,} from "../../Box";
import {Heading, Paragraph} from "../../Typography";
import {Permalink} from "../../Button/Button";
import {Row, Col} from "../../Grid";
import {Image} from "../../Image";
import styled, {css} from "styled-components";
import {greaterThan} from "../../../core/styled-media";

const StyledRow = styled(Row)`
    text-align: ${props => props.textAlign};
    margin-left: 0;
    margin-right: 0;
     ${props => props.activeBorder && css`
        &:not(:last-child) {
            border-bottom: 5px solid black;
        }
     `}
    ${props => !props.inversed && css`
        flex-direction: row-reverse;
    `}
    ${props => props.inversed && css`
        flex-direction: row;
    `}
`

const ColImg = styled(Col)`
    padding: 0;
    ${props => greaterThan('md')`
        ${props => (props.inversed && props.activeBorder) && css`
            border-right: 5px solid black;
        `}  
    `
}
`
const ColContent = styled(Col)`
    padding: 30px;    
    ${props => greaterThan('md')`
        ${props => (!props.inversed && props.activeBorder) && css`
            border-right: 5px solid black;
        `}
    `
}
`


export const CardInversed = ({imgUrl, title, description, cta_text, cta_url, textAlign, inversed, activeBorder}) => {

    return (
        <StyledRow textAlign={textAlign} inversed={inversed} activeBorder={activeBorder}>
            {imgUrl &&
            <ColImg xs={12} sm={12} md={6}
                    p="0"
                    inversed={inversed}
                    activeBorder={activeBorder}>
                <Image src={imgUrl}
                    sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
            </ColImg>
            }
            <ColContent xs={12} sm={12} md={6}
                        inversed={inversed} activeBorder={activeBorder}
                        display="flex !important"
                        flexDirection="column"
                        justifyContent="center">
                {title &&
                <Heading level={4}>{title}</Heading>
                }
                {description &&
                <Paragraph>{description}</Paragraph>
                }
                {(cta_text && cta_url) &&
                <Box>
                    <Permalink>{cta_text}</Permalink>
                </Box>
                }
            </ColContent>
        </StyledRow>
    )
}
