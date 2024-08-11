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
  
<h3>Yakutlar Peyzaj</h3>

<p>Kurumsal hizmet anlayışı ile bahçe peyzaj düzenleme,otomatik sulama sistemi,hazır rulo çim, ve drenaj uygulamaları hizmetlerini vermekteyiz </p>




</Alert>







<Row>
<Col> <KitchenSinkExample wene={mmdudu} bttn="daha fazlası .." nav="Çiçekçilik ve Bakım Faaliyetleri" nivis="Bahçenizi güzelleştirmek yakutlar peyzaj ile çok kolay.Herdemyeşil veya ibreli ağaç ve çalılar,yerörtücüler, hazır rulo çim,vb bitki türlerinin temin ve uygulamasını yapıyoruz."/> </Col>

<Col> <KitchenSinkExample wene={mmm} bttn="daha fazlası .." nav="Yapısal Peyzaj" nivis="Yapısal peyzaj uygulamaları kapsamında doğal ve prekast elemanlarla zemin döşemesi, duvar kaplaması, araç ve yaya yolları, otoparklar, çocuk oyun alanları, spor alanları gibi fonksiyonların imalatını yapıyoruz."/> </Col>
<Col> <KitchenSinkExample wene={mmsise} bttn="daha fazlası .." nav="Yapısal Peyzaj" nivis="Yapısal peyzaj uygulamaları kapsamında doğal ve prekast elemanlarla zemin döşemesi, duvar kaplaması, araç ve yaya yolları, otoparklar, çocuk oyun alanları, spor alanları gibi fonksiyonların imalatını yapıyoruz."/> </Col>



</Row>










</Container>


    </div>
  )
}

export default page;


