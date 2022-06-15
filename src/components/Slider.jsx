import React from "react";
import styled from "styled-components"
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import  {useState}  from "react";
import  {Slideritems}  from '../data'


const Container = styled.div`
width : 100%;
height: 100vh;
display:flex;
// background-color:coral; //ye sirf container ka area check krne ke liye and arrow ko postion karne ke liye use kara tha thats all.
position:left;
overflow:hidden;
`;

const Arrow = styled.div`
width:50px;
height:50px;
background-color: #fff7f7;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
position:absolute; //yaha se arrows ka left and right ka code start hua hai.
top:0;
bottom:0;
left:${(props)=> props.direction === "left" && "10px"}; //this is how we use props in styled components
right:${(props)=> props.direction === "right" && "10px"};
margin:auto;
cursor:pointer;
opacity:0.5;
z-index:2;
`;

const Wrapper = styled.div`
height:100%;
display: flex;
transition: all 1.5s ease;
transform :translateX((${props=> props.slideIndex * -100}vw));
`;

const Slide = styled.div`
width:100vw;//realtive unit to 1 percent width of the viewport. 
height:100vh;
display:flex; //since the images and the information will be horizontal hene this property.
align-items:center;
background-color : #${(props) =>props.bg};
`;
const ImgContainer = styled.div`
height:100%;
flex:1; //since the information and the image will be of the same size hence flex will be equal to 1.
`;

const Title= styled.h1`
font-size:70px;
`;
const Desc = styled.h3`
margin:50px 0px; //here 50px is the margin from top and bottom and 0 is from left and right.
font-size:20px;
font-weight:600;
letter-spacing:3px;
`;
const Button = styled.button`
padding:10px;
font-size:20px;
background-color:transparent;
cursor:pointer;
`;

const Image = styled.img`
height:80%;
`;

const InfoContainer = styled.div`
flex:1; //since the information and the image will be of the same size hence flex will be equal to 1.
padding:50px;
`;



const Slider = ()=> {

  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) =>{

    if(direction==="left"){
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    }else{
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ArrowLeftIcon />
      </Arrow>
      <Wrapper SlideIndex={slideIndex}>
        {Slideritems.map((item)=>
        <Slide bg={item.bg}>
        <ImgContainer>
          <Image src= {item.img}/> 
        </ImgContainer>
        <InfoContainer>
          <Title>{item.title}</Title>
          <Desc>{item.desc}</Desc>
          <Button>SHOW NOW</Button>
        </InfoContainer>
        </Slide>
        )};
      </Wrapper>
      <Arrow direction="right" onClick={()=>handleClick("right")}>
        <ArrowRightIcon/>
      </Arrow>
      </Container>
  )
}

export default Slider