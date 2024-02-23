import UserInterface from "./UserInterface.ts";

export default interface PostInterface {
  uuid: string
  text: string
  created_at: string
  user: UserInterface,
  images: Array<object>,
  selfLiked: boolean,
  share: object,
}
