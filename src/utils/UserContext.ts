export default interface UserContext {
  isLoggedIn: boolean,
    sessionToken: string,
  loggedInUser: {
    uuid: string,
  },
}
