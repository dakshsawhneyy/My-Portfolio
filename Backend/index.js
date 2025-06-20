import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDB from './config/mongodb.js';
import msgRouter from './routes/messageRoute.js';
import visitorRouter from './routes/visitorRoute.js';

const app = express();
const port = process.env.PORT || 4000
connectDB()

// Middlewares
app.use(cors())
app.use(express.json())

// Api's
app.use("/api/message", msgRouter)
app.use("/api/visitor", visitorRouter)

app.get('/', (req,res) => {
    res.send("Server is running")
})

app.listen(port, () => console.log(`Server is running on port ${port}`))