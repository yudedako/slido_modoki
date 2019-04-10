import Vuex from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'

const createStore = () => {
  return new Vuex.Store({
    state: {
      users: [],
    },

    mutations: {
      ...vuexfireMutations 
    },

    actions: {
      setUsersRef: firebaseAction(({ bindFirebaseRef }, ref) => {
        bindFirebaseRef('users', ref)
      })
    },

    getters: {
      getUsers: (state) => {
        return state.users
      },
    },
  })
}

export default createStore
