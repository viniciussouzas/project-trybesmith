import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import { ServiceResponse } from '../../../src/types/ServiceType';
import ordersMocks from '../../mocks/orders.mocks';
import ordersService from '../../../src/services/orders.service';
import ordersController from '../../../src/controllers/orders.controller';

chai.use(sinonChai);

describe('OrdersController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('Testa se retorna SUCCESFUL / status 200, ao listar orders', async function () {
    const serviceResponse: ServiceResponse<Array<object>> = {
      status: 'SUCCESSFUL',
      data: ordersMocks.getAllResponse,
    };

    sinon.stub(ordersService, 'getAll').resolves(serviceResponse);

    await ordersController.getAll(req,res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(ordersMocks.getAllResponse);
  });
});
