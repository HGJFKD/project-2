const express = require('express');
const router = require('./routings/productRouter.js');
const productsDal = require('./DL/productsDal.js');
const productsService = require('./BL/productsService.js');
const cors = require('cors')
const morgan = require('morgan');
const app = express();

app.use(cors())
app.use(express.json());
app.use(morgan(':method :url :date[web] | status: :status '));
app.use('/api', router);

app.listen(3000, async () => {
    // const data = await productsService.addRandomQuantity()
    // await productsDal.writeToData(data)
    // console.log(data);
});

