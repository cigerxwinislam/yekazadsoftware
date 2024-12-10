// Bismillahirahmanirahim

"use client"

import { MdWhatsapp } from "react-icons/md";

import { Alert, Button } from "react-bootstrap";
import { FaPhone } from "react-icons/fa";
import { WhatsAppWidget } from 'react-whatsapp-widget';
export function Tegihistin() {
  return (<div>



<div style={{position:"fixed",bottom:"0px"}}>
    <Alert style={{margin:7,color:"white",background:"gray"}} >
     <Button  href="tel:905436840504"><FaPhone  /></Button> Merkez <span></span>
     </Alert>


     


 
    </div>

<div style={{position:"fixed",bottom:"0px",right:"0px"}}>
    <Alert style={{margin:7,color:"white",background:"gray"}} >
   
     <Button  href="tel:905436840504"><FaPhone  /></Button> Ağrı

     </Alert>


     </div>
  </div>
  );
}