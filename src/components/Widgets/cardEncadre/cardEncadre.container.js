import React from "react";
import {CardEncadre} from "./cardEncadre";
import {Col, Container, Row} from "../../Grid";
import {Heading, Paragraph} from "../../Typography";
import {Box} from "../../Box";

export const CardEncadreContainer = ({data}) => {
    const contentTextAlignClass = data.centercontent ? 'center' : 'left';
    const number_cols = 12 / data.colCount;
    const items = data.items;
    return (
        <Container>
            {(data.bigTitle || data.intro) &&
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
                    items.map((item, index) => {
                        return (
                            <Col key={index} xs={12} sm={6} md={number_cols} textAlign={contentTextAlignClass}>
                                <CardEncadre {...item} />
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
}