import express from "express";
import router from "./routes/routes";
import cors from "cors";


function createApp(){
  const app = express();
  // Middleware to parse JSON request bodies
  app.use(express.json());
  app.use("/api", router);

  const corsOptions = {
    origin: "http://localhost:9000",
    methods: "GET, POST, PUT, DELETE",
    allowedHeaders: "Content-Type, Authorization",
    preflightContinue: false,
    credentials: true,
    optionsSuccessStatus: 200,
  }
  app.use(cors())
  
  return app;
}

export default createApp;

