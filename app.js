const express = require('express');
const app = express();
const userRoutes = require('./src/routes/userRoute');
const categoryRoutes = require('./src/routes/categoryRoute');
const port = 3000;

app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', categoryRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})