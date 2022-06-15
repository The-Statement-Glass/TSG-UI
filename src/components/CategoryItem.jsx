import styled from "styled-components"

const Container = styled.div`
flex: 1;
margin: 3px;//this basically adds margin between the images in categories.
height: 70vh; //this sets the height for the container images.
position: relative;
`;
const Image = styled.img`
width: 100%;
object-fit: cover; //the image will not look cropped.
`;
const Info = styled.div`
position: absolute; //the code after this is used to contain the container.
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column; //used to bring the info in a column shape.
align-items: center;
justify-content: center;

`
const Title = styled.h1`
color: white;
margin-bottom: 20px;
`
const Button = styled.button`
background-color: white;
border: none;
padding: 10px;
color:grey;
cursor: pointer;
font-weight: 600;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Image src = {item.img}/>
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem
