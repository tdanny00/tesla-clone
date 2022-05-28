import React, {useState} from 'react'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close';

function Header() {
    const [sideMenuStatus, setSideMenuStatus] = useState(false);
  return (
    <Container>
        <p>
            <img src="/images/tesla.svg"></img>
        </p>
        <Menu>
            <a href="#">Model S</a>
            <p><a href="#">Model 3</a></p>
            <p><a href="#">Model X</a></p>
            <p><a href="#">Model Y</a></p>
            <p><a href="#">Solar Roof</a></p>
            <p><a href="#">Solar Panels</a></p>
        </Menu>
        <RightMenu>
            <a href="#">Shop</a>
            <a href="#">Account</a>
        </RightMenu>
        <CostumeMenu onClick={() => setSideMenuStatus(true)}>
                <a>Menu</a>
        </CostumeMenu>
        <SideMenu show={sideMenuStatus}>
            <SideMenuWrapper>
                <SideMenuClose onClick={() => setSideMenuStatus(false)}/>
            </SideMenuWrapper>    
                <li><a href="">Existing Inventory</a></li>
                <li><a href="">Used Inventory</a></li>
                <li><a href="">Existing Inventory</a></li>
                <li><a href="">Existing Inventory</a></li>
                <li><a href="">Existing Inventory</a></li>
                <li><a href="">Existing Inventory</a></li>
        </SideMenu>
    </Container>
  )
}

export default Header

const Container = styled.div`
    min-height: 10px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding 30px 30px;
    top: 0;
    left: 0;
    right:0;
    z-index:1;

`

const Menu = styled.div`
    padding-left:80px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex:1;
    a{
        padding:10px;
    }
    a:hover{
        background-color: rgba(0,0,0, 0.1);
        border-radius: 10px;
        transition: 200ms all ease;
        padding: 10px;
      }
    @media (max-width: 820px) {
        display:none;
    }
    

`
const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a{
        padding:10px;
    }
    a:hover{
        background-color: rgba(0,0,0, 0.1);
        border-radius: 10px;
        transition: 200ms all ease;
    }
    @media (max-width: 820px) {
        display:none;
    }
`
const CostumeMenu = styled.div`
    cursor:pointer;
    display: flex;
    align-items: center;
    a{
        padding:10px;
    }
    a:hover{
        background-color: rgba(0,0,0, 0.1);
        border-radius: 10px;
        transition: 200ms all ease;
    }
    @media (max-width: 768px) {
        background-color: rgba(0,0,0, 0.1);
        border-radius: 10px;
        a:hover{
            background-color: rgba(0,0,0, 0.2);
        }
    }

`
const SideMenu = styled.div`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background-color:white;
    width: 300px;
    z-index:100;
    list-style: none;
    padding: 20px;
    display:flex;
    flex-direction: column;
    text-align:start;
    transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
    
    li{
        padding: 15px 0;
        margin-left: 15px;
        a:hover{
            background-color: rgba(0,0,0, 0.1);

            border-radius: 10px;
        }
    }
`
const SideMenuClose = styled(CloseIcon)`
    cursor:pointer;
`
const SideMenuWrapper = styled.div`
    display: flex; 
    justify-content: flex-end;
    padding: 10px;
`