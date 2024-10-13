import createApp from "./app";

const app = createApp();

// Start the server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server running at port http://localhost:${port}`);
});

