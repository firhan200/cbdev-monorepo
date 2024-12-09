import { calculate } from '@checkbox/common';
import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(calculate(1, 2).toString());
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});