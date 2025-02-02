import app from "./app.js";
import { PORT } from "./config.js";
import { connectDB } from "./db.js";

async function main() {
  try {
    await connectDB();
    app.listen(PORT);
    console.log(`Escuchando en puerto http://localhost:${PORT}`);
    console.log(`Ambiente: ${process.env.NODE_ENV}`)
  } catch (error) {
    console.error(error);
  }
}

main();
