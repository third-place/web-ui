import { Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { timeAgo } from '../utils/timeAgo';
import React from 'react';

export default function TitleSlug({ name, username, created }) {
  const margin = name ? "0 20px" : "0 20px 0 0";
  return (
    <Typography variant="h6">
      <Link component={RouterLink} to={`/u/${username}`}>
        <b>{name}</b>
        <span style={{color: "#f17887", margin }}>@{username}</span>
        <span style={{fontSize: "smaller"}}>{timeAgo.format(created)}</span>
      </Link>
    </Typography>
  );
}
