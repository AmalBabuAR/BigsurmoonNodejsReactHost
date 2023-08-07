import mongoose from "mongoose";

const projectDetailsSchema = new mongoose.Schema(
    {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Replace 'User' with the actual model name for your users.
    },
    name: String,
  },
  {
    timestamps: true,
  });
  
  const ProjectDetails = mongoose.model('ProjectDetails', projectDetailsSchema);
  
  export default ProjectDetails;