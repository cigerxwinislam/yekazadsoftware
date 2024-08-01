// Bismillahirahmanirahim



import { NextRequest, NextResponse } from 'next/server'

export  async function POST(
  req: NextRequest,
 
) {

  const  name  = await req.json();
 



  console.log(name)
  return 
}

