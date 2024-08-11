import { useState, useEffect } from "react";
import React from "react";
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Crousel() {
  
  const [data, setData]=useState();

  const handleGetProducts=()=>{
    try {
      fetch(`https://fakestoreapi.com/products`)
        .then((res) => res.json())
        .then((json) => {
          setData(json);
        });
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    handleGetProducts();
  }, []);

  console.log(data,"list")

// Test Code
var items = [
  {
    url:"https://carltonlondon.co.in/cdn/shop/collections/a_03243a2e-63c6-460f-b56a-c08c7b7eb3ab.jpg?v=1689566336"
  },
  {
    url:"https://i0.wp.com/nordwear.com/wp-content/uploads/2024/03/Website-Banner-1600-x-400-px-2.png?fit=1600%2C400&ssl=1"
  },
  {
    url:"https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/dbce2b685f6472f2.jpeg?q=20"
  }
]

  return (
    <Carousel>
      {
        items.map((item,i)=><Item key={i} item={item} />)
      }
    </Carousel>
  );
}

function Item(props)
{
  const navigate = useNavigate();
  return(
    <Paper>
      <img className="banner" src={props.item.url} alt="img123" />
    </Paper>
  )
}

export default Crousel;
