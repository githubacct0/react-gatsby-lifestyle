import React from 'react'
import styled from 'styled-components'

import Scroller from './Scroller'
import HorizontalTitle from './HorizontalTitle'
import Card from './Card'

const StyledSection = styled.div`
    position: relative;
    
    width: 100%;
    min-height: 100vh;

    padding: ${props => props.theme.desktopVW(350)} 0;
`

const StyledHorizontalTitle = styled(HorizontalTitle)`
    position: sticky;
    
    top: 0;
    left: 0;

    width: 100%;
    height: auto;
    
    padding-top: ${props => props.theme.desktopVW(80)};
`

const CardsContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    
    position: relative;
    
    height: 100%;
    
    padding: ${props => props.theme.desktopVW(160)} 0 0 ${props => props.theme.desktopVW(160)};
`

const HorizontalSection = ({
    lang, 
    inView,
    items,
    type,
    information,
    component,
    title, 
    description
}) => {
    return (
        <StyledSection>
            <StyledHorizontalTitle 
                lang={lang}
                title={title} 
                description={description} 
                size='normal' 
            />
            <Scroller title={title} description={description}>
                <CardsContainer>
                    {items.map((item, i) => (
                        <Card 
                            key={i} 
                            lang={lang}
                            data={item}
                            component={component}
                            information={information}
                            type={type}
                        />
                    ))}
                </CardsContainer>
            </Scroller>
        </StyledSection>
    )
}

export default HorizontalSection