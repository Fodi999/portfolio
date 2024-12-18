import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

// Обслуживание статических файлов из папки build
app.use(express.static(path.join(__dirname, "dist")));

// Обработка маршрутов
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
