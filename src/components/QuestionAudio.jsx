import * as React from 'react';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/system';

import QuestionPlayer from './QuestionPlayer';

export default function QuestionAudio({ question }) {
  const theme = createTheme({
    typography: {
      fontFamily: [
        'sans-serif',
      ].join(','),
    },
  });

  return (
    <center>
      <ThemeProvider theme={theme}>
        <QuestionPlayer question={question} />
      </ThemeProvider>
    </center>
  );
}
