import {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchCommentItem,
  fetchList
} from "../api/index.js";

export default {
  FETCH_NEWS({ commit }) {
    fetchNewsList()
      .then(({ data }) => {
        commit("SET_NEWS", data);
        return data;
      })
      .catch(error => console.log(error));
  },
  FETCH_JOBS({ commit }) {
    fetchJobsList()
      .then(({ data }) => {
        commit("SET_JOBS", data);
        return data;
      })
      .catch(error => console.log(error));
  },
  FETCH_ASK({ commit }) {
    fetchAskList()
      .then(({ data }) => {
        commit("SET_ASK", data);
        return data;
      })
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
  },
  FETCH_LIST({ commit }, pageName) {
    fetchList(pageName)
      .then(({ data }) => commit('SET_LIST', data))
      .catch(error => console.log(error));
  }
};
