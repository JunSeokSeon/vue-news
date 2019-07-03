import axios from 'axios';

const config = {
  baseUrl : 'https://api.hnpwa.com/v0'
}

/* 목록 조회*/
async function fetchList(name) {
  try {
    const response = await axios.get(`${config.baseUrl}/${name}/1.json`);
    return response;
  } catch(error) {
    console.log(error);
  }
}
/* 유저 정보 조회*/
function fetchUserInfo(name) {
  try {
    return axios.get(`${config.baseUrl}/user/${name}.json`);
  } catch(error) {
    console.log(error);
  }
}
/* 질문 상세 조회 */
function fetchItemInfo(id) {
  try {
    return axios.get(`${config.baseUrl}/item/${id}.json`);
  } catch(error) {
    console.log(error);
  }
}

export {
  fetchList,
  fetchUserInfo,
  fetchItemInfo
}
