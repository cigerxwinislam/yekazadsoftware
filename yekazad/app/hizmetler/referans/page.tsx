// Bismillahirahmaniraahim



import React from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import KitchenSinkExample from '../../components/card'

import m1 from '../../../public/m1.jpeg'

import m2 from '../../../public/m2.jpeg'

import m3 from '../../../public/m3.jpeg'

import m4 from '../../../public/m4.jpeg'

import m5 from '../../../public/m5.jpeg'

import m6 from '../../../public/m6.jpeg'

function page() {
  return (
    <div>
<Container>

<Row>
<Col> <KitchenSinkExample wene={m1}/> </Col>

<Col> <KitchenSinkExample wene={m3}/> </Col>

</Row>

<Row>

<Col> <KitchenSinkExample wene={m5}/> </Col>

<Col> <KitchenSinkExample wene={m6}/> </Col>

</Row>







</Container>


    </div>
  )
}

export default page