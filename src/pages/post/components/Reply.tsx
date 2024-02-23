import { Paper, Typography } from '@mui/material';
import Avatar from './Avatar';
import TitleSlug from '../../../components/TitleSlug';

export default function Reply({
  reply: {
    text,
    created_at,
    user
  }
}: {
  reply: {
    text: string,
    created_at: string,
    user: {
      name: string,
      username: string,
      profile_pic: string,
    }
  }
}) {
  const created = new Date(created_at);
  return (
    <Paper sx={{p: 1, mb: 1}}>
      <Avatar name={user.name} profilePic={user.profile_pic} username={user.username} />
      <TitleSlug
        name={user.name}
        username={user.username}
        created={created}
      />
      <Typography>{text}</Typography>
    </Paper>
  );
}
