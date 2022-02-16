import { fetchQuery } from '../../environment';
import { FetchRequest } from '../../utils/globalTypes.types';
import { getAlphaDataQuery } from './graphql';

export const getAlphaData: FetchRequest = (params, body) => {
  return fetchQuery(getAlphaDataQuery, { variables: { params, body }})
    .then((response) => {
      return response?.data.alphaData;
    });
}