import mongoose from 'mongoose';
import Product from './models/Product.js';

async function removeHospitalProducts() {
  try {
    // Connect to MongoDB using the same connection string as in your .env
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'quickcart' // Make sure this matches your database name
    });

    console.log('Connected to MongoDB');

    // Delete all products with 'hospital' in the name (case insensitive)
    const result = await Product.deleteMany({
      name: { $regex: 'hospital', $options: 'i' }
    });

    console.log(`Successfully removed ${result.deletedCount} hospital-related products`);
    
  } catch (error) {
    console.error('Error removing hospital products:', error);
  } finally {
    // Close the connection
    await mongoose.connection.close();
    process.exit(0);
  }
}

// Load environment variables
import dotenv from 'dotenv';
dotenv.config();

// Run the function
removeHospitalProducts();
