import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
// import { NewOrder } from '../types/Order';
import { ServiceResponse } from '../types/ServiceType';

interface OrdersNProductIds {
  id: number;
  userId: number;
  productIds: { id: number }[];
}

const getAll = async () : Promise<ServiceResponse<Array<object>>> => {
  const orders = await OrderModel.findAll({
    include: 
      [{
        model: ProductModel,
        attributes: ['id'], 
        as: 'productIds',
      }],
  }) as unknown as OrdersNProductIds[];

  const ordersNproducts = orders.map((order) => ({
    id: order.id,
    userId: order.userId,
    productIds: order.productIds.map((product) => product.id),
  }));

  return { status: 'SUCCESSFUL', data: ordersNproducts };
};

export default {
  getAll,
};