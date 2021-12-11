import React from 'react'
import styled from 'styled-components'

export default function Section({title, desctiption, leftBtnText, rightBtnText, backgroundImg}) {
    return (
        <Wrap bgImage={backgroundImg}>
            <ItemText>
                <h1>{title}</h1>
                <p>{desctiption}</p>
            </ItemText>
           <Buttons>
                 <ButtonGroup>
                    <LeftButton>{leftBtnText}</LeftButton>
                    { rightBtnText && 
                        <RightButton>
                            {rightBtnText}
                        </RightButton>
                    }
                </ButtonGroup>
                <DownArrow src="./../images/down-arrow.svg" />
           </Buttons>
        </Wrap>
    )
}

const Wrap = styled.div `
    width:100vw;
    height:100vh;
    background-size: cover;
    background-position: center;
    background-repeat:no-repeat;
    background-image: ${props => `url("./../images/${props.bgImage}")`};
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
`
const ItemText = styled.div`
    padding-top:15vh;
    text-align:center
`
const ButtonGroup = styled.div `
    display:flex;
    @media (max-width:768px){
        flex-direction:column;
    }
`
const LeftButton = styled.div `
    background-color:#313136;
    border-radius:100px;
    color:#fff;
    height:40px;
    width:256px;
    display:flex;
    justify-content:center;
    align-items:center;
    opacity:0.85;
    text-transform:uppercase;
    font-size:12px;
    cursor:pointer;
    margin:8px;
`
const RightButton = styled(LeftButton) `
    background:white;
    color:black;
    opacity:0.65;
`
const DownArrow = styled.img `
    margin-top:20px;
    height:40px;
    overflow-x:hidden;
    animation:animateDown infinite 1.5s;
`
const Buttons = styled.div ``