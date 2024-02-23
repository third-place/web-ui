import { Button } from '@mui/material';
import { useContext } from 'react';
import { createFollow, deleteFollow } from '../../../actions/follow';
import Context from '../../../../src/utils/Context';
import UserContext from "../../../utils/UserContext.ts";

export default function FollowButtonToggle({
 isSelf,
 user,
 follow,
 addFollow,
 removeFollow,
}: {
  isSelf: boolean,
  user: { uuid: string },
  follow: { uuid: string },
  addFollow: () => void,
  removeFollow: () => void,
}) {
  const {
    isLoggedIn,
    sessionToken,
    loggedInUser,
  }: UserContext = useContext(Context);

  const followUser = async () => {
    await createFollow(sessionToken, loggedInUser.uuid, user.uuid);
    addFollow();
  };

  const unfollowUser = async () => {
    await deleteFollow(sessionToken, follow.uuid);
    removeFollow();
  };

  return isLoggedIn && !isSelf && (
    follow ? (
      <Button onClick={unfollowUser}>
        Unfollow
      </Button>
    ) : (
      <Button onClick={followUser}>
        Follow
      </Button>
    )
  )
}
