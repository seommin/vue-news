import {
  fetchUserInfo,
  fetchCommentItem,
  fetchList
} from "../api/index.js";

export default {
  FETCH_LIST({ commit }, pageName) {
    return fetchList(pageName)
      .then(({ data }) => {
        commit('SET_LIST', data);
        return data;
      })
      .catch(error => console.log(error));
  },
  FETCH_USER({ commit }, name) {
    return fetchUserInfo(name)
      .then(({ data }) => {
        commit("SET_USER", data);
        return data;
      })
      .catch(error => console.log(error));
  },
  FETCH_ITEM({ commit }, id) {
    return fetchCommentItem(id)
      .then(({ data }) => {
        commit("SET_ITEM", data);
        return data;
      })
      .catch(error => console.log(error));
  }
};
