import React, { useRef, forwardRef } from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'
import { Link } from 'gatsby'

import ButtonArrow from './Buttons/ButtonArrow'
import Tags from './Tags'

import { generatePath } from './../utils/helpers'
import TextRenderer from './TextRenderer'

const StyledItem = styled.li`
    &:hover {
        img {
            transform: scale(1.05);
        }
    }
`

const ImageWrapper = styled(Link)`
    display: block;
    
    position: relative;

    margin-bottom: calc(${props => props.theme.sizes.mobile} / 1.5);
    padding-bottom: 116.66%;

    ${props => props.theme.above.desktop`
        margin-bottom: ${props.theme.sizes.desktop};
    `}
`

const StyledImage = styled(Image)`
    ${props => props.theme.styles.element.fill};

    position: absolute !important;

    img {
        transition: transform 5.0s ease-out !important;
    }
`

const Header = styled.div`
    position: relative;

    margin-bottom: calc(${props => props.theme.sizes.mobile} / 1.5);

    ${props => props.theme.above.desktop`
        margin-bottom: calc(${props.theme.sizes.desktop} / 2);
    `}
`

const Heading = styled(Link)`
    display: block;

    font-family: ${props => props.theme.fontFamilies.plainLight};
    font-size: ${props => props.theme.fontSizes.mobile.h5};
    line-height: 1.3;

    ${props => props.theme.above.desktop`
        font-size: ${props.theme.fontSizes.desktop.h5};
    `}
`

const StyledTags = styled(Tags)`
    margin-top: calc(${props => props.theme.sizes.mobile} / 1.5);

    ${props => props.theme.above.desktop`
        margin-top: calc(${props.theme.sizes.desktop} / 1.5);
    `}
`

const Description = styled(TextRenderer)`
    margin-bottom: calc(${props => props.theme.sizes.mobile} / 1.5) !important;
    
    font-size: ${props => props.theme.fontSizes.mobile.m};

    ${props => props.theme.above.desktop`
        margin-bottom: calc(${props.theme.sizes.desktop} / 1.5) !important;

        font-size: ${props.theme.fontSizes.desktop.p};
    `}
`

const Footer = styled.div`
    ${props => props.theme.styles.flexBox.horCen};
`

const Category = styled.span`
    display: block;
    
    margin-bottom: calc(${props => props.theme.sizes.mobile} / 1.5);

    opacity: 0.5;
    
    font-family: ${props => props.theme.fontFamilies.nbRegular};
    font-size: ${props => props.theme.fontSizes.mobile.s};
    line-height: 1.5;

    text-transform: uppercase;

    ${props => props.theme.above.desktop`
        margin-bottom: calc(${props.theme.sizes.desktop} / 3);

        font-size: ${props.theme.fontSizes.desktop.m};
    `}
`

const GridItem = ({ 
    lang, 
    gridCategory,
    data: { 
        title,
        slug,
        category,
        featuredImage,
        buttonLabel,
        excerpt,
        components
    } 
}, ref) => {
    
    // Refs
    const buttonRef = useRef(null)

    let link 

    if (gridCategory == 'Events and Trips') {
        link = `events-and-trips/${category.toLowerCase()}/${slug}`
    } else if (gridCategory == 'Trainers') {
        link = `performance/${category.toLowerCase()}/${slug}`
    } else {
        link = `${category.toLowerCase()}/${slug}`
    }

    return (
        <StyledItem
            ref={ref}
            onMouseEnter={() => buttonRef.current.classList.add('hover')} 
            onMouseLeave={() => buttonRef.current.classList.remove('hover')}
        >
            <ImageWrapper to={generatePath(lang, link)}>
                <StyledImage fluid={featuredImage.fluid} alt={featuredImage.title} />
            </ImageWrapper>
            <Header>
                {gridCategory == 'Events and Trips' && (
                    <Category>{category}</Category>
                )}
                <Heading to={generatePath(lang, link)}>{title}</Heading>
                {gridCategory == 'Careers' && components && components[0].tags && (
                    <StyledTags data={components[0].tags} slice={1}/>
                )}
            </Header>
            {gridCategory != 'Events and Trips' && (
                <Description data={excerpt} />
            )}
            <Footer>
                <ButtonArrow 
                    ref={buttonRef}
                    label={buttonLabel || 'Read more'} 
                    to={generatePath(lang, link)} 
                />
            </Footer>
        </StyledItem>
    )
}

export default forwardRef(GridItem)