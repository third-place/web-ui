import { Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';

export default function TitleSlug({ name, username }) {
  const margin = name ? "0 20px" : "0 20px 0 0";
  return (
    <Typography variant="h6">
      <Link component={RouterLink} to={`/u/${username}`}>
        <b>{name ?? `@${username}`}</b>
      </Link>
    </Typography>
  );
}
