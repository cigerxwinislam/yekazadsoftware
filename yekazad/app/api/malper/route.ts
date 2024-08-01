// Bismillahirahmanirahim



import { NextRequest, NextResponse } from 'next/server';

const nav="Selam Aleykum hindik ma dadmendi"

export  function GET(req:NextRequest) {

  

return NextResponse.json(nav) 

}