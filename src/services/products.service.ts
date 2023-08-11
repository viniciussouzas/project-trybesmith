import ProductModel from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceType';

const create = async (newProduct: Product) : Promise<ServiceResponse<Product>> => {
  const product = await ProductModel.create(newProduct);

  return { status: 'CREATED', data: product.dataValues };
};

export default {  
  create,
};