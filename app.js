import express from 'express';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World 🌎',
    });
});


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} 🚀`);
});