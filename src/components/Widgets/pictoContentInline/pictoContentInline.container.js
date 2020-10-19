import React from "react";
import {Col, Container, Row} from "../../Grid";
import {PictoContentInline} from "./pictoContentInline";
import {Box} from "../../Box";
import {Heading, Paragraph} from "../../Typography";

export const PictoContentInlineContainer = ({data}) => {
    const colCount = 12 / data.colCount
    const centercontent = data.centercontent
    return (
        <Container>
            {(data.bigTitle || data.intro)&&
            <Box mb={30}>
                {data.bigTitle &&
                <Heading level={2}>{data.bigTitle}</Heading>
                }
                {data.intro &&
                <Paragraph fontSize="title" lineHeight="title">{data.intro}</Paragraph>
                }
            </Box>
            }
            <Row>
                {data.items.map((item, index) => {
                    return (
                        <Col key={index} xs={12} sm={12} md={colCount}>
                            <PictoContentInline {...item} centercontent={centercontent}/>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}