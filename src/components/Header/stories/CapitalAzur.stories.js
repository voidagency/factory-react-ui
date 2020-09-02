import React from 'react';

import {
	Anchor,
	Box,
	Container,
	Flex,
	Header,
	Icon,
	Image,
	Nav as DefaultNav,
	Navs ,
	Text,
} from '../../../components';
import capital_azur_logo from '../../../assets/images/capital-azur-logo.png';

const Nav = ({asButton, ...props}) => {

	let styleProperties = {
		fontSize: '11px',
		lineHeight: '30px',
		fontWeight: '800',
		textTransform: 'uppercase',
		position: 'relative',
		paddingX: 'medium',
		paddingY: 'xsmall',
		color: 'black',
		transition: '.2s',

		'&:not(:first-of-type)::before': {
			content: '""',
			display: 'block',
			width: '1px',
			height: '16px',
			top: 'calc(50% - 16px/2)',
			left: '-1px',
			bg: 'rgba(0, 0, 0, .16)',
			position: 'absolute',
		},

		'&:hover': {
			color: 'primary',
		}
	}

	let ButtonStyleProperties = {
		bg: 'info900',
		color: 'white',
		borderRadius: 'large',
		ml: 'small',
		boxShadow: '0 10px 14px -5px rgba(191, 191, 191, .67)',

		'&:not(:first-of-type)::before': {
			content: 'none',
		},

		'&:hover': {
			color: 'white',
			boxShadow: '0 10px 14px 5px rgba(191, 191, 191, .67)',
		},
	}

	if ( asButton ) {
		return (<DefaultNav 
				sx={{...styleProperties, ...ButtonStyleProperties}} 
				{...props}>
			{props.children}
		</DefaultNav>);
	}
	else {
		return (
			<DefaultNav sx={styleProperties} {...props}>
				{props.children}
			</DefaultNav>
		)
	}
}

export const CapitalAzur = () => {
	return (<>
		<Header fixed={true} px="large" py="xsmall" bg="white" boxShadow={1}>
			<Container as={Flex}>
				<Anchor href="//void.fr" ml="small" mr="auto">
					<Image src={capital_azur_logo} alt="Capital Azur Logo" height="64px" display="block" />
				</Anchor>

				<Navs className="navs" p={0}>
					<Nav href="#">Produits & Services</Nav>
					<Nav href="#">Nous connaître</Nav>
					<Nav href="#" active={true}>Insights</Nav>
					<Nav href="#" asButton={true}>
						Banque digitale
						<Icon name="twitter" size="15px" ml="medium" />
					</Nav>
				</Navs>
			</Container>
		</Header>

		<Box py="150px" bg="gray200" px="32px" height="3000px"></Box>

		</>);
}

export default {
	title: 'Components/Header'
}