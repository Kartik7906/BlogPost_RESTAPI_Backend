import express from 'express';
import { getallblogs, addblog, updateblog, getbyid, deleteblog} from '../controllers/blog-controller.js';
const blogrouter = express.Router();

blogrouter.get("/", getallblogs);
blogrouter.post("/add", addblog);
blogrouter.put('/update:id',updateblog);
blogrouter.get("/:id", getbyid);
blogrouter.delete("/:id", deleteblog);


export default blogrouter;