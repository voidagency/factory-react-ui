import React from "react";
import {Col, Container, Row} from "../../Grid";
import {CardPicto} from "./cardPicto";
import {Box} from "../../Box";
import {Heading, Paragraph} from "../../Typography";

export const CardPictoContainer = ({data}) => {
    const contentTextAlignClass = data.centercontent ? 'center' : 'left'
    const number_cols = 12 / data.colCount
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
                {
                    data.items.map((item, index) => {
                        return (
                            <Col key={index} xs={12} sm={6} md={number_cols} textAlign={contentTextAlignClass}>
                                <CardPicto {...item} />
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
}