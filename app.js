const express = require('express');
const router = require('./router.js');
const productsController = require('./Controllers/productsController.js');
const morgan = require('morgan');
const app = express();

app.use(express.json());
app.use(morgan(':method :url :date[web] | status: :status '));
app.use('/api', router);

app.listen(3000, async () => {
    const data = await productsController.getData()
    console.log(data);
});

