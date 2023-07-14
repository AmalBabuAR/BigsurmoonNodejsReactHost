import mongoose from "mongoose";

const threeDataSchema = new mongoose.Schema({}, { strict: false });

const ThreejsData = mongoose.model('ThreejsData', threeDataSchema);

export default ThreejsData;
