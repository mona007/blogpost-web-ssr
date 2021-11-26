export const state = () => {
  return {
    auth: {
      isAuth: false,
    },
  };
};

export const mutations = {
  SET_PROFILE(state, payload) {
    state.auth = { ...payload };
  },
  CLEAR_PROFILE(state) {
    state.auth = { isAuth: false };
  },
};

export const getters = {
  IS_AUTH: (state) => state.auth.isAuth,
};
