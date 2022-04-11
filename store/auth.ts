export const state = () => ({
  user: null,
  pass: null
})

export const mutations = {
  setUser(state: { user: any }, user: any) {
    state.user = user
  },
  setPass(state: { user: any }, user: any) {
    state.user = user
  }
}
