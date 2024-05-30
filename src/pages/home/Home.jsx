import { Typography } from '@mui/material';
import React, {
  useContext,
  useEffect,
} from 'react';
import { Link } from 'react-router-dom';
import { getPosts as requestGetPosts } from '../../actions/post';
import Container from '../../components/Container';
import PaperContainer from '../../components/PaperContainer';
import NewPost from './components/NewPost';
import PostCollection from '../../components/PostCollection';
import Context from '../../utils/Context';

export default function Home() {
  const {
    sessionToken,
    loggedInUser,
    isLoggedIn,
    posts,
    setPosts,
    isAppLoaded,
  } = useContext(Context);

  const getPosts = async () => {
    const response = await requestGetPosts(sessionToken);
    const data = await response.json();
    setPosts(data ?? []);
  };

  useEffect(() => {
    if (isLoggedIn) {
      getPosts();
    }
  }, [isLoggedIn]);

  const removePost = (post) => {
    setPosts(posts.filter((p) => p !== post));
  };

  if (!isAppLoaded) {
    return (
      <Container />
    );
  }

  return (
    <Container title="Home">
      { !loggedInUser && (
        <PaperContainer>
          <Typography variant="h1">
            A New Social Network
          </Typography>
          <Typography>
            Third place is an open source social network. The <Link to="https://github.com/third-place">code that powers this site</Link> is free for anyone to download, view, and modify. We embrace open source because that is how we learned to program, and we hope others find this project useful in their learning journey.
          </Typography>
          <Typography sx={{paddingTop: 1}}>
            While Third place is in closed beta, invite codes are required for signing up.
          </Typography>
          <Typography>
            There is still a lot of work to do in order to get Third place ready for prime time. Here are some of the features we need before we can launch to the public:
          </Typography>
        </PaperContainer>
      )}
      { loggedInUser && (
        <NewPost onPostCreated={getPosts} />
      )}
      <h2>Public Posts</h2>
      { posts && (
        <PostCollection
          posts={posts}
          reloadPosts={getPosts}
          onDelete={removePost}
        />
      )}
    </Container>
  );
}
