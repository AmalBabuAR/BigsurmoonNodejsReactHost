import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const __parentDir = path.resolve(__dirname, "../..");

export const euroGuardController = (req, res) => {
  res.sendFile(__parentDir + "/views/customeViewer/euroGuardViewer.html");
};
