import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';


function Section({title, desc, leftBtn, rightBtn, backgroundImg }) {
    return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
                <ItemText>
                <h1>{ title }</h1>
                <p>{ desc }</p>
                </ItemText>
            </Fade>  
            <Buttons>
            <Fade bottom>      
                <ButtonGroup>
                    <LeftButton>
                    { leftBtn }
                    </LeftButton>
                    {rightBtn &&
                            <RightButton>
                            { rightBtn }
                            </RightButton>
                    }
                </ButtonGroup>
            </Fade>  
                <ArrowDown src="/images/down-arrow.svg">
    
                </ArrowDown>
            </Buttons>

        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/model-3.jpg");
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImage}")`};
`

const ItemText = styled.div`
    z-index: 10;
    padding-top: 15vh;
    text-align: center;
    
    h1{
        padding-top: 50px;
        font-size: 40px;
        padding-bottom: 5px;
    }
`

const ButtonGroup = styled.div`
    z-index: 10;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    @media (max-width: 768px) {
          flex-direction: column;
      }
`

const LeftButton = styled.div`
    color:white;
    height: 40px;
    width: 256px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    background-color: rgba(23,26,32,0.8);
    cursor: pointer;
    margin: 10px;
 `

const RightButton = styled(LeftButton)`
      background-color:white;
      color: black;
      opacity: 0.65;
 `
const ArrowDown = styled.img`
    margin-top:20px;
    height: 40px;
    color: rgba(23,26,32,0.8);
    cursor:pointer;
 `

 const Buttons = styled.div`
 `