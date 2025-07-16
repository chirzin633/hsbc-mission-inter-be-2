const express = require('express');
const app = express();
const userRoutes = require('./src/routes/userRoute');
const port = 3000;

app.use(express.json());
app.use('/api', userRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})