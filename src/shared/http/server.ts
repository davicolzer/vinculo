import express from 'express';
import { router } from './router';
import cors from "cors";
import * as dotenv from 'dotenv'
dotenv.config();


const app = express();

app.use(cors({origin: "*"}))
app.use(express.json());

app.use(router)

const port = Number(process.env.SERVER_PORT)

app.listen(port, async () => {
  console.log(`Server Started on port ${port}`);
});
