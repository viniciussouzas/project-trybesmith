import { expect } from 'chai';
import sinon from 'sinon';
import ordersMocks from '../../mocks/orders.mocks';
import OrderModel from '../../../src/database/models/order.model';
import ordersService from '../../../src/services/orders.service';

describe('OrdersService', function () {
  beforeEach(function () { sinon.restore(); });

  it('Testa se a função getAll retorna o status e data esperados', async function () {
    sinon.stub(ordersService, 'getAll').resolves({ status: 'SUCCESSFUL', data: ordersMocks.getAllResponse });

    const { status, data } = await ordersService.getAll();

    expect(status).to.eq('SUCCESSFUL');
    expect(data).to.be.deep.eq(ordersMocks.getAllResponse);
  });
});
