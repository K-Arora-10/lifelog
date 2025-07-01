import { NextResponse } from 'next/server';
const fs = require('node:fs/promises');


export async function GET(request) {
  try {
    const searchParams = request.nextUrl.searchParams
    const title = searchParams.get('title')
    const titleFull=title.replace(/-/g, ' ')
    const data = await fs.readFile('/Users/KRISH/Desktop/NextJS/huntingcoder/blogdata.json', { encoding: 'utf8' });
    const parsedData=JSON.parse(data)
    const result = parsedData.filter(item => item.title.toLowerCase() === titleFull.toLowerCase());

    return NextResponse.json(result);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
  
  
}