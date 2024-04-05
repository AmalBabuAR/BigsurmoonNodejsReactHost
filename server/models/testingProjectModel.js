import mongoose from "mongoose";

const testingProjectSchema = new mongoose.Schema(
  {
    name: String,
    userId: String,
    model: { type: Object },
    poster: { type: Object },
    hotspot: [mongoose.Schema.Types.Mixed], // Assuming hotspot is an array of strings
    config: { type: Object },
    bestPractices: { type: Object },
  },
  {
    timestamps: true,
  }
);

const TestingProject = mongoose.model("TestingProject", testingProjectSchema);

export default TestingProject;
