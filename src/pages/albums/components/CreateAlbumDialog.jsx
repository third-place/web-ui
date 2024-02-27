import {
  Button, Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from '@mui/material';
import { useState } from 'react';

export default function CreateAlbumDialog({ open, onClose, onSubmit }) {
  const [albumName, setAlbumName] = useState();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        component: 'form',
        onSubmit: (event) => {
          event.preventDefault();
          onSubmit(albumName);
          setAlbumName('');
        }
      }}
    >
      <DialogTitle>New Album</DialogTitle>
      <DialogContent>
        <DialogContentText color="text">
          Please provide a name for your new album.
        </DialogContentText>
        <TextField
          autoFocus
          required
          margin="dense"
          id="name"
          name="name"
          label="Name"
          fullWidth
          variant="standard"
          value={albumName}
          onChange={(event) => setAlbumName(event.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button type="submit">Create</Button>
      </DialogActions>
    </Dialog>
  );
}
