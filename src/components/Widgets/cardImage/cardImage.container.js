import React from "react";
import {Col, Container, Row} from "../../Grid";
import {CardImage} from "./cardImage";
import {Box} from "../../Box";
import {Heading, Paragraph} from "../../Typography";

export const CardImageContainer = ({data}) => {
    const contentTextAlignClass = data.centercontent ? "center" : "left"
    const number_cols = 12 / data.colCount
    const activeBorder = data.activeBorder
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
                                <CardImage {...item} activeBorder={activeBorder} />
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
}