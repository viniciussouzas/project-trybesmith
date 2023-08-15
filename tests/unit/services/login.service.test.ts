import { expect } from 'chai';
import sinon from 'sinon';
import loginMocks from '../../mocks/login.mocks';
import UserModel from '../../../src/database/models/user.model';
import loginService from '../../../src/services/login.service';

describe('LoginService', function () {
  beforeEach(function () { sinon.restore(); });

  it('Testa se a função getLogin retorna o status e data esperados ao inserir login válido', async function () {
    const userObj = loginMocks.userObj;
    const mockLoginReturn = UserModel.build(loginMocks.validLoginResponse);

    sinon.stub(UserModel, 'findOne').resolves(mockLoginReturn);

    const { status, data } = await loginService.getLogin(userObj);

    expect(status).to.eq('SUCCESSFUL');
    expect(data).to.have.key('token');
  });

  it('Testa se a função getLogin retorna o status e data esperados ao inserir login inválido, com username e password incorretos', async function () {
    const userObj = loginMocks.invalidUserObj;
    const mockLoginReturn = UserModel.build(loginMocks.invalidLoginResponse);

    sinon.stub(UserModel, 'findOne').resolves(mockLoginReturn);

    const { status, data } = await loginService.getLogin(userObj);

    expect(status).to.eq('UNAUTHORIZED');
    expect(data).to.be.deep.eq({ message: "Username or password invalid" });
  });
});
