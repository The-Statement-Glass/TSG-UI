import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Center = styled(motion.div)`
  padding-top: 10px;
  background-color: rgba(0, 0, 0, 0.99);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 97px;
  /* Add animation effect */
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
    top: 0;
    left: -100%;
    animation: slide 4s linear infinite;
  }

  @keyframes slide {
    0% {
      left: -100%;
    }
    100% {
      left: 100%;
    }
  }
`;


const Logo = styled.h1`
  font-weight: bold;
  color: transparent;
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmRgBaqjHijEf8C9AkJXp5k0kfEFsRm0RdpQ&usqp=CAU');
  background-size: cover;
  -webkit-background-clip: text;
  font-style: bold;
  font-size: 30px;
  background-clip: text;
  word-spacing: 8px;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

//https://e1.pxfuel.com/desktop-wallpaper/939/27/desktop-wallpaper-iphone-gold-glitter-resolution-gold-sparkle.jpg
const SmallText = styled.small`
  font-size: 0.6em;
  background-image: url('https://e1.pxfuel.com/desktop-wallpaper/939/27/desktop-wallpaper-iphone-gold-glitter-resolution-gold-sparkle.jpg');
  background-size: cover;
  -webkit-background-clip: text;
  word-spacing: 1px;
`;

const DotText = styled.small`
  font-size: 2em;
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmfiFzg2a6N-RXphF2r2b2DMoFFAqanzSJ1w&usqp=CAU');
  // background-size: cover;
  -webkit-background-clip: text;
`;

const CustomStyledLink = styled(Link)`
  color: yellow;
  text-decoration: none;
`;


export const Announcement = () => {
  return (
    <Center>
      <CustomStyledLink to="/">
        <Logo>
          𝒯𝐻𝐸 𝒮𝒯𝒜𝒯𝐸𝑀𝐸𝒩𝒯 𝒢𝐿𝒜𝒮𝒮
          <center>
            <SmallText>Iconic <DotText>.</DotText> Classic <DotText>.</DotText> Timeless</SmallText>
          </center>
        </Logo>
        </CustomStyledLink>
    </Center>
  );
};

export default Announcement;
