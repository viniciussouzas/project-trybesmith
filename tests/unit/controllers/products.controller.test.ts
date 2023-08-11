import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import productsMocks from '../../mocks/products.mocks';
import { ServiceResponse } from '../../../src/types/ServiceType';
import { Product } from '../../../src/types/Product';
import productsService from '../../../src/services/products.service';
import productsController from '../../../src/controllers/products.controller';

chai.use(sinonChai);

describe('ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('Testa se retorna CREATED / status 201, ao cadastrar um novo produto', async function () {
    req.body = productsMocks.createMock;

    const serviceResponse: ServiceResponse<Product> = {
      status: 'CREATED',
      data: productsMocks.createResponse,
    }

    sinon.stub(productsService, 'create').resolves(serviceResponse);

    await productsController.create(req,res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(productsMocks.createResponse);
  });

  it('Testa se retorna SUCCESFUL / status 200, ao listar produtos', async function () {
    const serviceResponse: ServiceResponse<Array<object>> = {
      status: 'SUCCESSFUL',
      data: productsMocks.getAllResponse,
    };

    sinon.stub(productsService, 'getAll').resolves(serviceResponse);

    await productsController.getAll(req,res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productsMocks.getAllResponse);
  });
});
