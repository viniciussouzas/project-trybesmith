type ServiceStatusError = 'INVALID_DATA' | 'UNAUTHORIZED' | 'NOT_FOUND' | 'BAD_REQUEST';

type ServiceStatusOK = 'CREATED' | 'SUCCESSFUL';

export type ServiceError = {
  status: ServiceStatusError,
  data: { message: string },
};

export type ServiceOK<T> = {
  status: ServiceStatusOK,
  data: T
};

export type ServiceResponse<T> = ServiceError | ServiceOK<T>;