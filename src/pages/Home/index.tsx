import React from 'react';
import logo from '../../assets/logo.svg';
import './index.css';
import {Box, Button, Stack, Typography} from "@mui/joy";


const Home = () =>
    <Stack
      display="flex"
      minWidth="100vh"
      minHeight="100vh"
      direction="column"
    >
      <Box
        width="100%"
        sx={{'&:hover': {backgroundColor: 'blue'} }}
      >
        <Stack
          direction="row"
          justifyContent="flex-end"
          spacing={1}
          margin='10px'
          sx={{'&:hover': {backgroundColor: 'cyan'} }}
        >
          <Button
            onClick={()=> null}
            size="lg"
            sx={{'&:hover': {backgroundColor: 'red'} }}
          />
          <Button
            onClick={()=> null}
            size="lg"
            sx={{'&:hover': {backgroundColor: 'red'} }}
          />
        </Stack>
      </Box>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
        flexGrow="1"
      >
        {/*LOGO*/}
        <Typography level='h1'>
          Wordle
        </Typography>
        <Typography level='h2'>
          Get X chances to guess a (X-1)-letter word.
        </Typography>
        <Stack
          direction="row"
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
    </Stack>

export default React.memo(Home);
