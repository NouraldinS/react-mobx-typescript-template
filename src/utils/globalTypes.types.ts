export type FetchRequest<ParamsType, BodyType, ErrorType = never> = (params?: ParamsType, body?: BodyType) => Promise<any | ErrorType>;

export type ServiceCall<ParamsType, BodyType, ErrorType = never> = (
  fetchQuery: FetchRequest<ParamsType, BodyType, ErrorType>, 
  { params, body }: { params?: ParamsType, body?: BodyType }
) => Promise<any> | ErrorType;