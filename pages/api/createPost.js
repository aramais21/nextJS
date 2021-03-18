import {} from 'mongoose';
import connectDB from '../../middleware/mongodb';
import Post from '../posts/post';

const creatPostHandler = async (req, res) => {
    try{
        if(req.method === 'POST') {
            console.log('as');
            const {title, desc} = req.body;
            const isUnique = await Post.find({title});
            if (!isUnique) {
                res.status(400).send('this post already exists')
            }
            const newPost = new Post({title, desc});
            await newPost.save();
            res.status(200).send('user created');
        }
    }
    catch(err) {
        console.log(err);
    }
}

export default connectDB(creatPostHandler);