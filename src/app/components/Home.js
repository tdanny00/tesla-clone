import React from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section
            title="Model 3"
            desc="Order Online for Touchless Delivery"
            backgroundImg="model-3.jpg"
            leftBtn="Custom Order"
            rightBtn="Existing Inventory"
        />
        <Section
            title="Model Y"
            desc="Order Online for Touchless Delivery"
            backgroundImg="model-y.jpg"
            leftBtn="Custom Order"
            rightBtn="Existing Inventory"
        />
        <Section
            title="Model S"
            desc="Order Online for Touchless Delivery"
            backgroundImg="model-s.jpg"
            leftBtn="Custom Order"
            rightBtn="Existing Inventory"
        />
        <Section
            title="Model X"
            desc="Order Online for Touchless Delivery"
            backgroundImg="model-x.jpg"
            leftBtn="Custom Order"
            rightBtn="Existing Inventory"
        />
        <Section
            title="Solar Panels"
            desc="Lowest Cost Solar Panels in America"
            backgroundImg="solar-panel.jpg"
            leftBtn="Order Now"
            rightBtn="Learn More"
        />
        <Section
            title="Solar Roof"
            desc="Produce Clean Energy From Your Roof"
            backgroundImg="solar-roof.jpg"
            leftBtn="Order Now"
            rightBtn="Learn More"
        />
        <Section
            title="Accessories"
            backgroundImg="accessories.jpg"
            leftBtn="Shop Now"
        />
        <Footer/>
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
    z-index:1;    
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    overflow-x: hidden

`