import { NextResponse } from 'next/server';
const fs = require('node:fs/promises');


export async function GET(request) {
  try {
    const data = await fs.readFile('/Users/KRISH/Desktop/NextJS/huntingcoder/blogdata.json', { encoding: 'utf8' });
    const parsedData=JSON.parse(data)

    return NextResponse.json(parsedData);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
  
  
}