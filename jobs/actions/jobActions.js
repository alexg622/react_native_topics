import axios from 'axios'
import reverseGeocode from 'latlng-to-zip';
import {
  FETCH_JOBS,
  LIKE_JOB
} from './types'
import qs from 'qs'
// 4201738803816157

const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?';
const JOB_QUERY_PARAMS = {
  publisher: 4201738803816157,
  format: 'json',
  v: '2',
  latlong: 1,
  radius: 10,
  q: 'javascript'
};

const buildJobsUrl = zip => {
  const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: zip})
  console.log(query)
  return `${JOB_ROOT_URL}${query}`
}

export const fetchJobs = (region, callback) => async dispatch => {
   try {
     // need google maps api key
     // let zip = await reverseGeocode(region, key)
     let zip = 94132
     const url = buildJobsUrl(zip)
     let { data } = await axios.get(url)
     console.log(data)
     dispatch({
       type: FETCH_JOBS,
       payload: data
     })
     callback()
   } catch(e) {
     console.log(e)
   }
}

export const likeJob = (job) => {
  return {
    payload: job,
    type: LIKE_JOB
  }
}
