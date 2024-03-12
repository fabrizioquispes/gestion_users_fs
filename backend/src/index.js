import express from "express";
import cors from "cors";
import morgan from "morgan";
import { user_router } from "./users.router.js";

const app = express();
const PORT = 3000;

const optionsCors = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(cors(optionsCors));
app.use(express.json());
app.use('/api',user_router);
app.use(morgan('dev'));

app.listen(PORT, () => {
    console.log(`Server Listening in PORT: ${PORT}`);
});