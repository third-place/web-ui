import { Paper } from '@mui/material';

export default function PaperContainer({ children }) {
  return (
    <Paper style={{padding: 8, paddingTop: 24, paddingBottom: 24}}>
      {children}
    </Paper>
  );
}
