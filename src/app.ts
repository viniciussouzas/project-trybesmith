import express from 'express';
import productsRouter from './routes/product.routes';
import ordersRouter from './routes/orders.routes';

const app = express();

app.use(express.json());
app.use(productsRouter);
app.use(ordersRouter);

export default app;
