import React from "react";
import {Container} from "../../Grid";
import {CardInversed} from "./cardInversed";
import {Box} from "../../Box";
import {Heading, Paragraph} from "../../Typography";

export const CardInversedContainer = ({data}) => {
    const contentTextAlignClass = data.centercontent ? "center" : "left"
    const contentWithBorder = data.activeBorder
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
            <Box
                border={contentWithBorder ? '5px solid black' : 'none'}
                borderRadius={contentWithBorder ? '20px' : '0'}
            >
                {
                    data.items.map((item, index) => {
                        const inversed = index % 2;
                        return (
                            <CardInversed key={index} {...item} inversed={inversed}
                                          textAlign={contentTextAlignClass}
                                          activeBorder={contentWithBorder}
                            />
                        )
                    })
                }
            </Box>
        </Container>
    )
}