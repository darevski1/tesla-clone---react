import React from 'react'
import styled from 'styled-components'
import Section from './Section'

export default function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                desctiption="Order Online for Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom Order" 
                rightBtnText="Existing invertory" 
            />
        
            <Section
                title="Model Y"
                desctiption="Order Online for Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom Order" 
                rightBtnText="Existing invertory" 
            />
        
            <Section
                title="Model 3"
                desctiption="Order Online for Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom Order" 
                rightBtnText="Existing invertory" 
            />
        
            <Section
                title="Model X"
                desctiption="Order Online for Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom Order" 
                rightBtnText="Existing invertory" 
            />
        
            <Section
                title="Solar Panel"
                desctiption="Lower Cost Solar Panels in America"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Order Now" 
                rightBtnText="Learn More" 
            />
            <Section
                title="Solar Roof"
                desctiption=" Produce Clean Energy From Your Roof"
                backgroundImg="solar-roof.jpg"
                leftBtnText="Order Now" 
                rightBtnText="Learn More" 
            />
            <Section
                title="Accessories"
                desctiption=""
                backgroundImg="accessories.jpg"
                leftBtnText="Shop Now" 
            />
        
        </Container>
    )
}


const Container = styled.div `
    height:100vh
`
