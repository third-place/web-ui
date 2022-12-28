import Container from '../components/Container';
import { useContext, useEffect, useState } from 'react';
import { getUsers } from '../actions/user';
import Context from '../utils/Context';
import {
  Paper,
  Table,
  TableBody, TableCell,
  TableContainer, TableHead,
  TableRow
} from '@mui/material';
import { timeAgo } from '../utils/timeAgo';

export default function Users() {
  const [users, setUsers] = useState([]);
  const { sessionToken } = useContext(Context);

  useEffect(() => {
    (async function () {
      const response = await getUsers(sessionToken);
      setUsers(await response.json());
    })();
  }, []);
  console.log(users)

  return (
    <Container title="Users">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="users">
          <TableHead>
            <TableRow>
              <TableCell>
                Username
              </TableCell>
              <TableCell>
                Standing
              </TableCell>
              <TableCell>
                Role
              </TableCell>
              <TableCell>
                Created
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(user => (
              <TableRow key={user.uuid}>
                <TableCell>
                  {user.username}
                </TableCell>
                <TableCell>
                  {user.is_banned ? "Banned" : "Good"}
                </TableCell>
                <TableCell>
                  {user.role}
                </TableCell>
                <TableCell>
                  {timeAgo.format(new Date(user.created_at))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}
