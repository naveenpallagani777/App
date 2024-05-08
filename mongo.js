const express = require('express');
const mongoose = require('mongoose');
const app = express();
const route = require('./MongoRoutes/routes');



app.use(express.json());

app.use('/api/movies',route);

mongoose.connect("mongodb+srv://admin:B5Kp27Up0AMo1vK8@cluster0.mk3wexz.mongodb.net/cinflex?retryWrites=true&w=majority&appName=Cluster0",
).then((conn) => {
    // console.log(conn);
    console.log('DB connect successful');
}).catch((error) => {
    console.log(error);
})

app.listen('3030',() => {
    console.log('server is started...');
    console.log('At localhost:3030');
})