import axios from "axios";
import config from "../config";

function prepareTokenHeader() {
  const token = sessionStorage.getItem("token");
  if (!token || token.length === 0) {
    return {};
  }

  return {
    headers: {
      "x-token": token,
    },
  };
}

export function loadAllFeedBacks(callback) {
  const url = config.server + "/feedback/all";
  axios.get(url, prepareTokenHeader()).then((response) => {
    const result = response.data;
    console.log(result);
    callback(result);
  });
}

export function createFeedback(course, sdate, edate, type, uid, callback) {
  const url = config.server + "/feedback";
  axios.post(url, {course, sdate, edate, type, uid}, prepareTokenHeader()).then((response) => {
    const result = response.data;
    console.log(result);
    callback(result);
  });
}
