import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'sequelize';
import ProductModel from '../../../src/database/models/product.model';
import productsMocks from '../../mocks/products.mocks';
import productsService from '../../../src/services/products.service';

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });

  it('Testa se a função create retorna o status e data esperados', async function () {
    const newProduct = productsMocks.createMock;
    const mockCreateReturn = ProductModel.build(productsMocks.createResponse);

    sinon.stub(ProductModel, 'create').resolves(mockCreateReturn);

    const { status, data } = await productsService.create(newProduct);

    expect(status).to.eq('CREATED');
    expect(data).to.be.deep.eq(mockCreateReturn.dataValues);
  });

  it('Testa se a função getAll retorna o status e data esperados', async function () {
    const mockGetAllReturn = productsMocks.getAllResponse.map((product) => ProductModel.build(product));

    sinon.stub(ProductModel, 'findAll').resolves(mockGetAllReturn);

    const { status, data } = await productsService.getAll();

    expect(status).to.eq('SUCCESSFUL');
    expect(data).to.be.deep.eq(mockGetAllReturn);
  });
});
