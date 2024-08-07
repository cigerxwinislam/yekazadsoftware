// Bismillahirahmanirahim



import { NextRequest, NextResponse } from 'next/server'

export var gotinaxer :any="Selam Aleykum";
export  async function POST(
  req: NextRequest,
 
) {

  const  {  Agahi }  = await req.json();
 


gotinaxer=Agahi
  console.log(Agahi)
  return NextResponse.json({Agahi})
}

