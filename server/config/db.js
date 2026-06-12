const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // This hardcoded fallback string completely bypasses dotenvx and your network DNS lookup issue
    const explicitURI = "mongodb://pooji:pooji1443@ac-rus8kwi-shard-00-00.rj10kvo.mongodb.net:27017,ac-rus8kwi-shard-00-01.rj10kvo.mongodb.net:27017,ac-rus8kwi-shard-00-02.rj10kvo.mongodb.net:27017/employeeDB?ssl=true&authSource=admin&retryWrites=true&w=majority";
    
    await mongoose.connect(explicitURI);
    console.log('🚀 MongoDB Connected Successfully');
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
