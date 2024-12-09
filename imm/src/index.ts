import express from 'express';
import { calculate } from '@checkbox/common';

const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send(calculate(5, 4).toString());
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});