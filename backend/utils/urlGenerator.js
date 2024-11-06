import DataUriParser from "datauri/parser.js";
import path from "path";

const getDataurl = (file) => {
  const parser = new DataUriParser();

  const ext = path.extname(file.originalname).toString();
  return parser.format(ext, file.buffer);
};

export default getDataurl;