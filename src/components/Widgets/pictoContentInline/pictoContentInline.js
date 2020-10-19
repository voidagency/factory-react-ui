import React from "react";
import {Box, Flex} from "../../Box";
import {Image} from "../../Image";
import {Heading, Paragraph} from "../../Typography";

export const PictoContentInline = ({imgUrl, title, description, centercontent}) => {
    return (
        <Flex flexDirection={['column', 'row']} mb="15px" alignItems={centercontent ? 'center' : 'flex-start'}>
            {imgUrl &&
            <Box sx={{maxWidth: '100px'}} mx={['auto', '0']}>
                <Image src={imgUrl}/>
            </Box>
            }
            <Box paddingLeft={15}>
                {title &&
                    <Heading level={4}>{title}</Heading>
                }
                {description &&
                    <Paragraph>{description}</Paragraph>
                }
            </Box>
        </Flex>
    )
}