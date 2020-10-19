import React from "react";
import {Col, Container, Row} from "../../Grid";
import {Image} from "../../Image";
import {Heading, Paragraph} from "../../Typography";
import {Permalink} from "../../Button/Button";


export const ContenuLibre = ({imageUrl, title, description, cardImage, cta_text, cta_link, centercontent}) => {
    const contentTextAlignClass = centercontent ? 'center' : "left";
    return (
        <Container>
            <Row justifyContent="center">
                <Col xs={12} sm={12} md={10} textAlign={contentTextAlignClass}>
                    {imageUrl &&
                    <Image src={imageUrl} width="100px"/>
                    }
                    {title &&
                    <Heading level={3}>{title}</Heading>
                    }
                    {description &&
                    <Paragraph mb="20px">{description}</Paragraph>
                    }
                    {cardImage &&
                    <Image src={cardImage}/>
                    }
                    {}
                    {(cta_text && cta_link) &&
                    <Permalink to={cta_link}>{cta_text}</Permalink>
                    }
                </Col>
            </Row>
        </Container>
    )
}
