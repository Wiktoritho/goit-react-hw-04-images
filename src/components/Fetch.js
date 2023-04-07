import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const API_KEY = '33087074-fea826eb02b341782481a92ce';
export const PER_PAGE = 12;

export const fetchPhotosWithQuery = async (query, page) => {
  const response = await axios({
    method: 'get',
    url: URL,
    params: {
      q: query,
      page: page,
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: PER_PAGE,
    },
  })
    .then(response => {
      const { totalHits, hits } = response.data;
      const photos = { totalHits, hits };
      return photos;
    })
    .catch(error => {
      console.log('rest api error', error);
    });
  return response;
};

