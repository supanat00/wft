import mongoose, { Schema } from 'mongoose';

const PostSchema: Schema = new Schema({
  name: { type: String, required: true },
  prompt: { type: String, required: true },
  photo: { type: String, required: true },
});

const PostModel = mongoose.model('Post', PostSchema);

export default PostModel;
