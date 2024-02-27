import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  Link, Card, IconButton, Typography,
} from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RepeatIcon from '@mui/icons-material/Repeat';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import LinkIcon from '@mui/icons-material/Link';
import { createPostLike, deletePostLike } from '../actions/like';
import { deletePost } from '../actions/post';
import { imageBaseUrl } from '../utils/config';
import Context from '../utils/Context';
import PostMenu from './PostMenu';
import TitleSlug from './TitleSlug';
import { timeAgo } from '../utils/timeAgo';

export default function Post({
  post: {
    uuid,
    text,
    created_at,
    user: author,
    images,
    selfLiked,
    share,
  },
  onDelete,
  onUnlike,
  showReply,
  showShare,
  sharePostClick,
  compact,
}) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSelfLiked, setIsSelfLiked] = useState(selfLiked);
  const [isExpanded, setIsExpanded] = useState(!compact);
  const [element, setElement] = useState(null);
  const [overflows, setOverflows] = useState(false);
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);
  const { isLoggedIn, sessionToken, loggedInUser } = useContext(Context);
  const created = new Date(created_at);
  showShare = showShare === undefined || Boolean(showShare);
  onUnlike = onUnlike === undefined ? () => {} : onUnlike;
  const navigate = useNavigate();

  const tryDelete = async () => {
    await deletePost(sessionToken, uuid);
    onDelete();
    handleClose();
  };

  const handleClose = () => {
    setIsDialogOpen(false);
  };

  const tryLikePost = async () => {
    await createPostLike(sessionToken, uuid);
    setIsSelfLiked(true);
  };

  const tryUnlikePost = async () => {
    await deletePostLike(sessionToken, uuid);
    onUnlike();
    setIsSelfLiked(false);
  };

  useEffect(() => {
    if (element && compact) {
      setOverflows(element.scrollHeight > element.clientHeight);
    }
  }, [element]);

  const authorDisplayName = author.name ? author.name : "";
  const profilePic = author.profile_pic ? `${imageBaseUrl}/${author.profile_pic}` : '';

  const onClickExpand = () => {
    if (compact) {
      setIsExpanded(!isExpanded);
    }
  };

  const copyLinkToClipboard = (url) => {
    navigator.clipboard.writeText(url);
    setShowCopiedMessage(true);
    setTimeout(() => {
      setShowCopiedMessage(false);
    }, 2000);
  };

  return (
    <Card sx={{ p: 1, mb: 1 }}>
      { isLoggedIn && loggedInUser.uuid === author.uuid && (
        <PostMenu
          handleDelete={() => setIsDialogOpen(true)}
          handleEdit={() => navigate(`/p-edit/${uuid}`)}
        />
      )}
      <Avatar
        alt={authorDisplayName}
        src={profilePic}
        style={{ float: "left", marginRight: 10 }}
        sx={{ width: 56, height: 56 }}
      />
      <div style={{width: "90%", paddingLeft: 72}}>
        <TitleSlug
          name={author.name}
          username={author.username}
          created={created}
          uuid={uuid}
        />
        <Typography variant="subtitle1">
          {timeAgo.format(created)}
        </Typography>
        <div onClick={onClickExpand}>
          <div
            style={{
              maxHeight: isExpanded ? "inherit" : 190,
              cursor: overflows ? "pointer" : "auto",
            }}
            className="post"
            ref={(el) => setElement(el)}
          >
            <ReactMarkdown>
              {text}
            </ReactMarkdown>
          </div>
          <div style={{width: "100%", textAlign: "center"}}>
            { !isExpanded && overflows && (
              <IconButton>
                <ExpandMoreIcon cursor="pointer" />
              </IconButton>
            )}
            { isExpanded && overflows && (
              <IconButton>
                <ExpandLessIcon cursor="pointer" />
              </IconButton>
            )}
          </div>
        </div>
        { share && (
          <Paper
            sx={{p: 1, mb: 1,}}
            elevation={2}
            variant="outlined"
          >
            <Avatar
              alt={share.user.name}
              src={share.user.profile_pic ? `${imageBaseUrl}/${share.user.profile_pic}` : ''}
              style={{float: "left", marginRight: 10}}
            />
            <TitleSlug
              name={share.user.name}
              username={share.user.username}
              created={new Date(share.created_at)}
            />
            <Typography variant="subtitle1">
              {timeAgo.format(created)}
            </Typography>
            <div className="post">
              <ReactMarkdown>
                {share.text}
              </ReactMarkdown>
            </div>
          </Paper>
        )}
        <div>
          {images && images.map((i) => (
            <Link component={RouterLink} to={`/i/${i.uuid}`} key={i.uuid}>
              <img src={`${imageBaseUrl}/${i.s3_key}`} className="post-gallery" alt="" />
            </Link>
          ))}
        </div>
      </div>
      { isLoggedIn && (
        <div style={{display: "flex", justifyContent: "space-evenly"}}>
          { showReply && (
            <IconButton aria-label="reply" component={RouterLink} to={`/p/${uuid}`}>
              <ChatBubbleOutlineIcon fontSize="small" />
            </IconButton>
          )}
          { !isSelfLiked && (
            <IconButton aria-label="like" onClick={tryLikePost}>
              <FavoriteBorderIcon fontSize="small" />
            </IconButton>
          )}
          { isSelfLiked && (
            <IconButton aria-label="unlike" onClick={tryUnlikePost}>
              <FavoriteIcon fontSize="small" />
            </IconButton>
          )}
          { showShare && (
            <IconButton aria-label="share" onClick={sharePostClick}>
              <RepeatIcon fontSize="small" />
            </IconButton>
          )}
          <IconButton aria-label="link" onClick={() => copyLinkToClipboard(`${window.location.hostname}/p/${uuid}`)}>
            <LinkIcon fontSize="small" />
            { showCopiedMessage && (
              <span style={{
                position: "absolute",
                left: 24,
                fontSize: "12pt",
                width: 120,
              }}>
                Link copied!
              </span>
            )}
          </IconButton>
        </div>
      )}
      <Dialog
        open={isDialogOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Delete this post?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure? This cannot be undone!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={tryDelete} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}
