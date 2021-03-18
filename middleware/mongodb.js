import {connections, connect} from 'mongoose';

const connectDB = handler => async (req,res) => {
    try{
        if(connections[0].readyState) {
            console.log('handler');
            return handler(req, res);
        }
        console.log(process.env.mongodburl);
        await connect(process.env.mongodburl, {
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
            useNewUrlParser: true
          });
        return handler(req, res);
    }
    catch(err) {
        console.log('smth went wrong with mongo' + err);
    }
}

export default connectDB;