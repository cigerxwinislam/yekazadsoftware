// Bismillahramanirahim

"use client"

import React from 'react'

import { useState } from 'react';
import { Button } from 'react-bootstrap';
 function page() 
 {

async function mmmmm(params) {
  
  const  gotinaxer=(await fetch("http://localhost:3000/api/malper")).json();
 console.log(gotinaxer)
  
}

 
        
    
  return (
    <div>


<Button onClick={mmmmm}>..........</Button>

   

 
    </div>
     )
};

export default page;