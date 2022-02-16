export type FetchRequest<ParamsType, BodyType> = (params?: ParamsType, body?: BodyType) => Promise<any>;

export type ServiceCall<ParamsType, BodyType> = (
  fetchQuery: FetchRequest<ParamsType, BodyType>, 
  { params, body }: { params?: ParamsType, body?: BodyType }
) => Promise<any>;