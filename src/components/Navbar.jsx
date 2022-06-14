import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import styled from 'styled-components';
import Badge from '@mui/material/Badge';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';




const Container = styled.div` //this is a way of using styled components instead of using css.
height : 97px;

`
const Wrapper = styled.div`
padding : 10px 20px;
display:flex;
align-items:center;
justify-content:space-between; //first 10px is paddding from top and bottom and the next 20 px is from left and right.
`

const Left = styled.div`
flex:1;
display:flex;
align-items:center;
`;
const SearchContainer = styled.div`
border:1px solid lightgray;
display:flex;
margin-left:25px;
padding:5px; //the area between the border and the text basically.
align-items:center;

`

const Input = styled.input`
border:none;
`

const Language = styled.span`
font-size:14px;
cursor:pointer;
`;
const Center = styled.div`
flex:1;
text-align:center;
`;
const Logo = styled.h1`
font-weight:bold;
`

const Right = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
`;

const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;

`
const Navbar = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <SearchIcon style={{color:"gray" , fontSize:16}}/>
                    </SearchContainer>
                </Left>
                <Center><Logo>LAMA.EN</Logo></Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlinedIcon />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    </div>
  )
}

export default Navbar;