import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

// Setup __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());

// Serve static files for images
app.use('/images', express.static(path.join(__dirname, 'images')));

// API endpoint for products
app.get('/api/products', (req, res) => {
  const products = [
    { id: 1, name: 'HONDA SCOOTER', price: 1200, image: '/honda1.jpg' },
    { id: 2, name: 'HONDA CBR1000', price: 1500, image: '/honda2.jpg' },
    { id: 3, name: 'HONDA CRF150', price: 1800, image: '/honda3.jpg' },
    { id: 4, name: 'HONDA FOUR WHEEL', price: 1500, image: '/honda4.jpg' },
    { id: 5, name: 'HONDA REBEL250', price: 1500, image: '/honda5.jpg' },
    { id: 6, name: 'HONDA RS125', price: 1500, image: '/honda6.jpg' },
  ];
  res.json(products);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
