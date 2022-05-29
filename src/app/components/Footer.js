import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <WebFooter>
        <FooterText>
            <a href="">Tesla © 2022</a>
            <a href="">Contact</a>
            <a href="">Careers</a>
            <a href="">News</a>
        </FooterText>
    </WebFooter>
  )
}

export default Footer


const WebFooter = styled.div`
    background-color: rgba(0,0,0,1);
    z-index: 17;
    height: 50px;
    display: flex;
    align-items: center;
    bottom:0;
    left: 0;
    right:0;
    justify-content: center;
`
const FooterText = styled.div`
    a{
        padding:15px;
    }
    a:hover{
        color:white;
        transition: 400ms all ease;
    }
`