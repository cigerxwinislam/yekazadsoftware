// Bismillahramanirahim

"use client"

import React from 'react'

import { useState } from 'react';
import { Button } from 'react-bootstrap';
 function page() 
 {

  const [mm, setmm] = useState("")
async function mmmmm(params) {
  
  const {gotin}=(await fetch("http://localhost:3000/api/malper")).json().then((gotin)=>setmm(gotin));
  
}

 
        
    
  return (
    <div>


<Button onClick={mmmmm}>..........</Button>

   

    {mm}
    </div>
     )
};

export default page;