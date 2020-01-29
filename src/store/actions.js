import {
  fetchUserInfo,
  fetchCommentItem,
  fetchList
} from "../api/index.js";

export default {
  FETCH_LIST({ commit }, pageName) {
    fetchList(pageName)
      .then(({ data }) => commit('SET_LIST', data))
      .catch(error => console.log(error));
  },
  FETCH_USER({ commit }, name) {
    fetchUserInfo(name)
      .then(({ data }) => {
        commit("SET_USER", data);
        return data;
      })
      .catch(error => console.log(error));
  },
  FETCH_ITEM({ commit }, id) {
    fetchCommentItem(id)
      .then(({ data }) => {
        commit("SET_ITEM", data);
        return data;
      })
      .catch(error => console.log(error));
  }
};
