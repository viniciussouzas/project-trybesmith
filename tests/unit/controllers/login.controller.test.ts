import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import loginMocks from '../../mocks/login.mocks';
import { ServiceResponse } from '../../../src/types/ServiceType';
import { TokenType } from '../../../src/types/TokenType';
import loginService from '../../../src/services/login.service';
import loginController from '../../../src/controllers/login.controller';

chai.use(sinonChai);

describe('LoginController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('Testa se retorna SUCCESFUL / status 200, ao logar com sucesso', async function () {
    const serviceResponse: ServiceResponse<TokenType> = {
      status: 'SUCCESSFUL',
      data: loginMocks.tokenMock,
    };

    sinon.stub(loginService, 'getLogin').resolves(serviceResponse);

    await loginController.getLogin(req,res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(loginMocks.tokenMock);
  });
});
