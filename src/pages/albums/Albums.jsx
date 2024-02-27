import { Button } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { createAlbum, getAlbums } from '../../actions/album';
import Album from '../../components/Album';
import Context from '../../utils/Context';
import CreateAlbumDialog from './components/CreateAlbumDialog';

export default function Albums({ username }) {
  const [albums, setAlbums] = useState([]);
  const [showNewAlbum, setShowNewAlbum] = useState(false);
  const { sessionToken } = useContext(Context);

  const reloadAlbums = async () => {
    const response = await getAlbums(username);
    const data = await response.json();
    setAlbums(data);
  };

  const closeAddAlbumDialog = () => {
    setShowNewAlbum(false);
  }

  const tryCreateAlbum = async (newAlbumName) => {
    await createAlbum(sessionToken, newAlbumName);
    closeAddAlbumDialog();
    await reloadAlbums();
  };

  useEffect(() => {
    (async function() {
      await reloadAlbums();
    })();
  }, []);

  return (
    <div>
      <Button variant="outlined" onClick={() => setShowNewAlbum(true)}>
        Add Album
      </Button>
      <CreateAlbumDialog
        open={showNewAlbum}
        onClose={closeAddAlbumDialog}
        onSubmit={tryCreateAlbum}
      />
      {albums.map((album) => (
        <Album album={album} key={album.uuid} />
      ))}
    </div>
  );
}
