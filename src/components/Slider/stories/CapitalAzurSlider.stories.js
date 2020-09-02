import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import {
	Anchor,
	Box,
	Container as DefaultContainer,
	Flex,
	Header,
	Icon,
    Image,
    Heading as DefaultHeading,
	Nav as DefaultNav,
	Navs ,
	Text,
} from '../../../components';
import { MotionBox } from '../../Animation';
import { Slider, Arrow } from '../Slider';
import {theme} from '../../../theme'

const Heading = props => <DefaultHeading sx={{
    position: 'relative',
    pl: '60px',
    color: 'black',

    '&::before': {
        content: '""',
        display: 'block',
        width: '44px',
        height: '2px',
        backgroundColor: 'lightBlue',
        position: 'absolute',
        top: '33px',
        left: 0,
    }
}} {...props} />


// because __css, sx, props style does not take effect on Container
const Container = styled(DefaultContainer)`
    position: relative;
    height: 100%;
`

const arrowStyle = {
    color: 'lightBlue',
    transition: '.2s',
    '&:not(:hover)': {
        opacity:  .38,
    }
}

const PrevArrow = props => <Arrow sx={{left: 'calc(50% - 1200px/2 - 32px)', ...arrowStyle}} {...props}>
    <Icon name="chevron-left" size="36px" />
</Arrow>


const NextArrow = props => <Arrow sx={{right: 'calc(50% - 1200px/2 - 32px)', ...arrowStyle}} {...props}>
    <Icon name="chevron-right" size="36px" />
</Arrow>


const Dots = dots => <Box
    as="ul"
    __css={{
        width: '100%',
        height: '4px',
        display: 'flex',
        alignItems: 'center',
        transform: 'translateY(-100%)',

        '& > li': {
            flex: 1,
            height: '4px',
            transition: '.2s',

            'button': {
                display: 'block',
                width: '100%',
                height: '100%',
                bg: 'rgba(0, 0, 0, .24)',
                border: 0,
                borderRadius: 0,
                font: '0/0 none',
                transition: 'inherit',
            },
        },

        '& > li:hover': {
            height: '9px',

            'button': {
                cursor: 'pointer',
                bg: 'rgba(0, 0, 0, .3)',
                borderRadius: '10px',
            }
        },

        '& > li.slick-active': {
            height: '9px',

            'button': {
                background: 'linear-gradient(to right, #017CFE 0%, #A2CFFF 100%);',
                boxShadow: '0 6px 17px 4px rgba(33,168,255,0.20)',
                borderRadius: '10px',
            }
        }

    }}
>
    {dots}
</Box>



const Slide = ({title, description, image, link, linkLabel="En Savoir Plus", ...rest}) => {
    return <Box sx={{
        position: 'relative',
        height: '490px',
    }}>
        <Box sx={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            width: '100%',
            height: '100%',
            position: 'absolute',
        }} />
        <Container>
            <Box sx={{
                backgroundColor: 'white',
                padding: '30px',
                position: 'absolute',
                width: '570px',
                top: '50%',
                left: 0,
                transform: 'translateY(-50%)',
                borderRadius: 'large',
            }}>
                <Heading level="2">{title}</Heading>
                <Text>{description}</Text>
                <Box mt='medium'>
                    <Anchor href={link} sx={{
                        color: 'lightBlue',
                        '&:hover': {
                            color: 'darkBlue',
                        }
                    }} >{linkLabel}</Anchor>
                </Box>
            </Box>
        </Container>
    </Box>;
}



export const CapitalAzurSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        appendDots: Dots,

        responsive: [
          {
            breakpoint: theme.breakpoints.md,
            settings: {
              arrows: false,
              dots: true,
              dotsClass: 'slick-dots',
            },
    
          }
        ]
      }
    return <Slider {...settings}>
        <Slide 
            title="Covid-19"
            description="Capital Azur accompagne ses clients Professionnels"
            image="https://capital-azur.com/sites/default/files/2020-05/3.jpg"
            link="://" />
        <Slide 
            title="Capital Azur, votre banque en ligne"
            description=" Application mobile, Banque en ligne : Découvrez une nouvelle expérience de navigation au cœur de vos comptes bancaires."
            image="https://capital-azur.com/sites/default/files/2020-05/1.jpg"
            linkLabel="Gerer vos comptes"
            link="://" />
        <Slide 
            title="COVID-19 : Professionnels et Entreprises : Capital Azur vous accompagne"
            description="COVID-19 : Professionnels et Entreprises : Capital Azur vous accompagne"
            image="https://capital-azur.com/sites/default/files/2020-05/slider-pro.png"
            link="://" />
        <Slide />

    </Slider>
}




export default {
  title: 'Components/Slider',
};