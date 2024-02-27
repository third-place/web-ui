import { Link as RouterLink } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Album({album: {name, uuid}}) {
  return (
    <div>
      <RouterLink component={Link} to={`/a/${uuid}`}>{name}</RouterLink>
    </div>
  );
}
