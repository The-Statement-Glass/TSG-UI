import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import styled from "styled-components";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Container = styled.div`
  height: 39px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  margin-left: 25px;
  padding: 5px;
  align-items: center;
`;

const Input = styled.input`
  border: none;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const MenuItem = styled.div`
  font-size: 20px;
  font-weight: 900;
  cursor: pointer;
  white-space: nowrap;
  margin-left: 190px;
  // margin-right: 2px;
  a {
    color: black;
    text-decoration: none;
  }
  a:visited {
    color: black;
  }
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #FFD700;
  }
`;

const Navbar = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <div className="-mr-78">
          <MenuItem>
            <Link to="/">HOME</Link>
          </MenuItem>
          </div>
          <div className="-mr-78">
          <MenuItem className="ml-99">
            <Link to="/our-inspiration">OUR INSPIRATION</Link>
          </MenuItem>
          </div>
          <div className="-mr-78">
          <MenuItem className="ml-99">
            <Link to="/collections">COLLECTION</Link>
          </MenuItem>
          </div>
          <div className="-mr-78">
          <MenuItem className="ml-99">
            <Link to="/get-in-touch">GET IN TOUCH</Link>
          </MenuItem>
          </div>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Navbar;
