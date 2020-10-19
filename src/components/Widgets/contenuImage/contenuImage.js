import React from "react";
import {Col, Container, Row} from "../../Grid";
import {Image} from "../../Image";
import {Box} from "../../Box";
import {Heading, Paragraph} from "../../Typography";
import {Permalink} from "../../Button/Button";
import styled, {css} from "styled-components";


const StyledRow = styled(Row)`
    ${props => props.inversed === true && css`
        flex-direction: row-reverse;
    `}
    ${props => props.inversed === false && css`
        flex-direction: row;
    `}
`

export const ContenuImage = ({imgUrl, title, description, cta_text, cta_url, colImage, activeBorder, activeBorderImage, inversed}) => {
    return (
        <Container
            p={activeBorder ? [10, 10, 30] : 'inherit'}
            border={activeBorder ? '5px solid black' : 'none'}
        >
            <StyledRow alignItems="center" inversed={inversed}>
                {imgUrl &&
                <Col xs={12} sm={4} md={colImage}
                >
                    <Box mb={['20px', "0px"]} p={activeBorderImage ? ['10px', '20px'] : ''} border={activeBorderImage ? '3px solid black': 'none'}>
                        <Image src={imgUrl} width={[1]}/>
                    </Box>
                </Col>
                }
                <Col xs={12} sm={5} md={12 - colImage}>
                    <Box>
                        {title &&
                        <Heading level={3}>{title}s</Heading>
                        }
                        {description &&
                        <Paragraph>{description}</Paragraph>
                        }
                        {(cta_text && cta_url) &&
                        <Box>
                            <Permalink>{cta_text}</Permalink>
                        </Box>
                        }
                    </Box>
                </Col>
            </StyledRow>
        </Container>
    )
}