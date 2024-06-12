"use client"
import React from 'react'
import { useState } from 'react';

const dummys=[
    {id:1,name:"dalda oil",category:"oil",price:400},
    {id:2,name:"dalda ghee",category:"ghee",price:400},
    {id:3,name:"mezan oil",category:"oil",price:500},
    {id:4,name:"mezan ghee",category:"ghee",price:500},
    {id:5,name:"olpers milk",category:"milk",price:300},
    {id:6,name:"milkpak",category:"milk",price:300},
    {id:7,name:"pepsi",category:"colddrink",price:200},
    {id:8,name:"7up",category:"colddrink",price:200},
    {id:9,name:"prince",category:"biscuit",price:40},
    {id:10,name:"super",category:"biscuit",price:40},
]



const Search = () => {

    const[input,setInput]=useState("");


    const changeInput=(e)=>{
        e.preventDefault()
        setInput(e.target.value)
    }

    const filterProducts= dummys.filter((dummy)=>{
        return dummy.name === input;
    })

  return (
    <>
      <div>
        <form action="">
            <input type="text" placeholder='Search here' onChange={changeInput} />
        </form>
      </div>
      {!filterProducts ? <div>no products</div> : <div>{
        filterProducts.map((product)=>{
            return <>
                <h1>{product.name}</h1>
                <h1>{product.category}</h1>
                <h1>{product.price}</h1>
            </>
        })
      }
        </div> }
    
    </>
  )
}

export default Search
