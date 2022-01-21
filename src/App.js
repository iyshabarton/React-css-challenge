import React from 'react'
import styled from 'styled-components'


const Title = styled.h1`
display:flex;
justify-content: center;
background: pink;
font-family:Verdana, Geneva, Tahoma, sans-serif;
font-size: 20px;
color: red;
width: 100%;
`;

const Text = styled.h3`
text-align: center;
justify-content: center;
font-size: 30px;
font-family:Georgia, 'Times New Roman', Times, serif
color: blue;
width: 100%;

`
const List = styled.li`
 display: flex;
 justify-content: center;
 font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
 font-size: 25px;
 background: lightgreen;
 width: 100%;

`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 50px;
  color: #444;
  
`;



export default function App() {
  return (
    <Container><div className="App">
      <Title><h1>Welcome to my card component!</h1></Title>
      <Text><h3>This is the final count down !!</h3></Text>
      <List><ul>
        <li>Get low - Lil Jon</li>
        <li>Gangsta's Paradise - Coolio</li>
        <li>Mom's Spaghetti - Eminem</li>
        <li>I'll be Missing You - Puff Daddy ft Faith Evans</li>
        <li>Ghetto Gospel - 2pac</li>
      </ul></List>
      <div>
        <img src='https://images.unsplash.com/photo-1605184020655-61fce68d4a15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1078&q=80'></img>
      </div>
    </div></Container>
  );
}


