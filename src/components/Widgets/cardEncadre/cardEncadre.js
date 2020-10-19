import React from "react";
import {Box} from "../../Box";
import {Heading, Paragraph} from "../../Typography";
import {Image} from "../../Image";
import {Permalink} from "../../Button/Button";

const Encadre = ({ sx, children, ...rest }) => {
    return (<Box sx={sx} __css={{
        border: '2px solid black',
        borderWidth: "10px 3px 3px 3px",
        padding: "30px 20px",
        marginBottom: '15px',
    }}>
        {children}
    </Box>)
}


export const CardEncadre = ({title, description, cta_url, cta_text, pictoImg}) => {
    return (
        <Encadre>
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
        </Encadre>
    )
}