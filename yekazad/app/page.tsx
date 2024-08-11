// Bismillahirahmanirahim

"use client"

import Image from 'next/image'

import dudu from '/public/m.jpeg'


import { Container, Row,Col, Alert } from 'react-bootstrap'
import KitchenSinkExample from './components/card'

import mmdudu from '/public/mm1.jpg'

import mmsise from '/public/mm.jpg'

import mmm from '/public/f1.jpg'












function page() {
  return (
    <div>

     
<Container>
<Alert style={{justifyContent:'center',background:'white',margin:'7px'}}>
  



</Alert>







<Row>
<Col> <KitchenSinkExample wene={mmdudu} bttn="daha fazlası .." nav="" nivis=" "/> </Col>

<Col> <KitchenSinkExample wene={mmm} bttn="daha fazlası .." nav="" nivis=" "/> </Col>
<Col> <KitchenSinkExample wene={mmsise} bttn="daha fazlası .." nav="" nivis=""/></Col>


</Row>










</Container>


    </div>
  )
}

export default page;


