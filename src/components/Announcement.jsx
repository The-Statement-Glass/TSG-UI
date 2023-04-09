import styled from "styled-components";
import { Link } from "react-router-dom";

const Center = styled.div`
  padding-top: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 97px;
`;

const Logo = styled.h1`
  font-weight: bold;
  color: gold;
  margin: auto 0;
  // text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px gold, 0 0 70px gold, 0 0 80px gold, 0 0 100px gold, 0 0 150px gold;
  // animation: shine 2s infinite;

  // @keyframes shine {
  //   0% {
  //     text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px gold, 0 0 70px gold, 0 0 80px gold, 0 0 100px gold, 0 0 150px gold;
  //   }
  //   50% {
  //     text-shadow: none;
  //   }
  //   100% {
  //     text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px gold, 0 0 70px gold, 0 0 80px gold, 0 0 100px gold, 0 0 150px gold;
  //   }
  // }
`;

const SmallText = styled.small`
  font-size: 0.6em;
`;

const StyledLink = styled(Link)`
  color: yellow;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const Announcement = () => {
  return (
    <Center>
      <StyledLink to="/">
        <Logo>
          THE STATEMENT GLASS
          <center>
            <SmallText>Iconic. Classic. Timeless.</SmallText>
          </center>
        </Logo>
      </StyledLink>
    </Center>
  );
};

export default Announcement;
