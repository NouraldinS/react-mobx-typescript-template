import { makeAutoObservable } from 'mobx';
import { fetchQuery } from '../environment';
import { serviceFetch } from '../services';
import { ServiceCall } from '../utils/globalTypes.types';

class BasicStore {
  data = null;

  constructor() {
    makeAutoObservable(this);
  }

  // The <never, any> should be the types of params and body respectively, optimally from API.ts file
  fetchData: ServiceCall<never, any> = (fetchQuery, {params, body}) => {
    return fetchQuery(params, body)
      .then(data => {
        this.data = data;
        return data;
      });
  };
}

export default BasicStore;
