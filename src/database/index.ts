import mongoose from 'mongoose';

const connectToDataBase = async () => {
  try {
    const query = process.env.MONGO_QUERY as string;
    await mongoose.connect(query);

    /* eslint no-console: "off" */
    console.log('¡successful connection to database!');
  } catch (error) {
    /* eslint no-console: "off" */
    console.log(error);
  }
};

export default connectToDataBase;
