import React from 'react';
import logo from '../../assets/logo.svg';
import './index.css';
import {Box, Button, Stack, Typography} from "@mui/joy";


const Home = () =>
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    minWidth="100vh"
    minHeight="100vh"
  >
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      spacing={2}
    >
      {/*LOGO*/}
      <Typography level='h1'>
        Wordle
      </Typography>
      <Typography level='h2'>
        Get 6 chances to guess a 5-letter word.
      </Typography>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={1}
      >
        <Button
          onClick={()=>null}
          variant="solid"
          color="primary"
          size="lg"
        >
          Jouer
        </Button>
        <Button
          onClick={()=>null}
          variant="outlined"
          color="neutral"
          size="lg"
        >
          Comment Jouer
        </Button>
        <Button
          onClick={()=>null}
          variant="outlined"
          color="neutral"
          size="lg"
        >
          A propos
        </Button>
      </Stack>
      <Typography level='h3'>
        {new Date().toLocaleDateString()}
      </Typography>
    </Stack>
  </Box>

export default React.memo(Home);
