import { makeAutoObservable } from 'mobx';
import { fetchQuery } from '../environment';
import { serviceFetch } from '../services';
import { FetchRequest, ServiceCall } from '../utils/globalTypes.types';

class BasicStore {
  data = null;

  constructor() {
    makeAutoObservable(this);
  }

  // The <never, any> should be the types of params and body respectively, optimally from API.ts file
  fetchData
    <ParamsType, BodyType, ErrorType = never>
    (
      fetchQuery: FetchRequest<ParamsType, BodyType, ErrorType>,
      { params, body }: { params?: ParamsType, body?: BodyType }
  ): Promise<any | ErrorType> {
    return fetchQuery(params, body)
      .then(data => {
        this.data = data;
        return data;
      });
  };
}

export default BasicStore;
