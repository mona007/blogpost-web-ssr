export const actions = {
  nuxtServerInit({ commit }, { $cookies }) {
    const token = $cookies.get('xa');

    if (token) {
      /** request api to get profile info */
      // return $axios
      //   .$get('/me', {
      //     headers: {
      //       common: {
      //         Authorization: token,
      //       },
      //     },
      //   })
      //   .then(({ data }) => {
      //     commit('me/SET_PROFILE', { ...data, token });
      //   })
      //   .catch((e) => {
      //     $cookies.remove('xa');
      //   });

      commit('admin/SET_PROFILE', { isAuth: true });
    }
  },
};
