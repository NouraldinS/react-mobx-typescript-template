export type GqlRequestFunction<TypeOfFetchResult, TypeOfFetchParams, TypeOfFetchBody> = (params: TypeOfFetchParams, body: TypeOfFetchBody) => TypeOfFetchResult;
