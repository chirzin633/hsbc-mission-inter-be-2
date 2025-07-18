const express = require('express');
const app = express();
const userRoutes = require('./src/routes/userRoute');
const categoryRoutes = require('./src/routes/categoryRoute');
const tutorRoutes = require('./src/routes/tutorRoute');
const port = 3000;

app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', categoryRoutes);
app.use('/api', tutorRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});