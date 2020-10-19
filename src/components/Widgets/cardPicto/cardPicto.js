import React from "react";
import {Box} from "../../Box";
import {Heading, Paragraph} from "../../Typography";
import {Image} from "../../Image";
import {Permalink} from "../../Button/Button";


export const CardPicto = ({title, description, cta_url, cta_text, pictoImg}) => {
    return (
        <Box mb={20}>
            {pictoImg &&
                <Image src={pictoImg} width="60px"/>
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