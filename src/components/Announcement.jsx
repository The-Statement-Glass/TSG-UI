import styled from "styled-components";
import { Link } from "react-router-dom";

const Center = styled.div`
  padding-top: 10px;
  background-color: rgba(0, 0, 0, 0.99);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 97px;
`;

const Logo = styled.h1`
  font-weight: bold;
  color: transparent;
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmRgBaqjHijEf8C9AkJXp5k0kfEFsRm0RdpQ&usqp=CAU');
  background-size: cover;
  -webkit-background-clip: text;
  font-style: bold;
  background-clip: text;
  word-spacing: 8px;
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

const StyledLink = styled(Link)`
  color: yellow;
  text-decoration: none;
`;

export const Announcement = () => {
  return (
    <Center>
      <StyledLink to="/">
        <Logo>
          𝒯𝐻𝐸 𝒮𝒯𝒜𝒯𝐸𝑀𝐸𝒩𝒯 𝒢𝐿𝒜𝒮𝒮
          <center>
            <SmallText>Iconic <DotText>.</DotText> Classic <DotText>.</DotText> Timeless</SmallText>
          </center>
        </Logo>
      </StyledLink>
    </Center>
  );
};

export default Announcement;
