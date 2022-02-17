import { makeAutoObservable } from "mobx";
import { FetchRequest, ServiceCall } from "../../utils/globalTypes.types";
import BasicStore from "../basicStore";

class DataAlphaStore extends BasicStore {
  /**
   * @param [data] and @action [fetchData] are both implicitly owned by extension of [BasicStore]
   */

  constructor() {
    super();
    makeAutoObservable(this);
  }
  
  fetchData
  <ParamsType, BodyType, ErrorType = never>
  (
    fetchQuery: FetchRequest<ParamsType, BodyType, ErrorType>,
    { params, body }: { params?: ParamsType, body?: BodyType }
  ): Promise<any | ErrorType> {
    return super.fetchData(fetchQuery, { params, body })
      .then(data => {
        // store some other value than the [data]
        return data;
      })
  }
}