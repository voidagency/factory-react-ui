import React from "react";
import {Box} from "../../Box";
import {Heading, Paragraph} from "../../Typography";
import {Image} from "../../Image";
import {Permalink} from "../../Button/Button";


export const CardImage = ({title, description, cta_url, cta_text, pictoImg, activeBorder}) => {
    return (
        <Box mb={20} padding={activeBorder? "30px" : "inherit"} border={activeBorder ? '5px solid black' : 'none'}>
            {pictoImg &&
            <Image src={pictoImg} mb="20px" width="100%"/>
            }
            {title  &&
            <Heading level={3}>{title}</Heading>
            }
            {description &&
            <Paragraph>{description}</Paragraph>
            }
            {(cta_text && cta_url) &&
            <Permalink>{cta_text}</Permalink>
            }
        </Box>
    )
}