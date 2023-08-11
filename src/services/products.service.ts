import ProductModel from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceType';

const create = async (newProduct: Product) : Promise<ServiceResponse<Product>> => {
  const product = await ProductModel.create(newProduct);

  return { status: 'CREATED', data: product.dataValues };
};

const getAll = async () : Promise<ServiceResponse<Array<object>>> => {
  const products = await ProductModel.findAll();

  return { status: 'SUCCESSFUL', data: products };
};

export default {  
  create,
  getAll,
};