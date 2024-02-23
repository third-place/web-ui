import {Alert as MuiAlert, AlertColor} from '@mui/material';
import {ReactNode} from "react";

export default function Alert({
  severity,
  children,
}: {
  severity: AlertColor,
  children: ReactNode,
}) {
  return (
    <div style={{marginBottom: 10}}>
      <MuiAlert severity={severity}>
        {children}
      </MuiAlert>
    </div>
  );
}
