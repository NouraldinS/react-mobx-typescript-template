/**
 * @description Service files call the fetchQuery function on the required query, and select the required properties from the response/error objects
 */

import { fetchQuery } from '../../environment';
import { FetchRequest } from '../../utils/globalTypes.types';
import { getAlphaDataQuery } from './graphql';

export const getAlphaData: FetchRequest<any, any> = (params, body) => {
  return fetchQuery(getAlphaDataQuery, { variables: { params, body }})
    .then((response) => {
      return response?.data.alphaData;
    });
}