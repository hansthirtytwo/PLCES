import { useState } from 'react';
import { 
  createTheme, Divider, Stack, ThemeProvider, IconButton, ListItemText, List, ListItem, ListItemButton, CardContent, 
  Grid, Stepper, Step, StepLabel, Button, AvatarGroup, Avatar, CardActionArea, CardActions, ButtonGroup, 
  Table, TableBody, TableContainer, TableCell, TableRow, TableHead, 
  Box, Tab, Paper, Modal, Typography, MenuList, MenuItem, Chip, Alert, Card,
  Collapse
} from '@mui/material';
import { orange, blue } from '@mui/material/colors';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Link } from 'react-router-dom';
import MilitaryTechRoundedIcon from '@mui/icons-material/MilitaryTechRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import FastfoodRoundedIcon from '@mui/icons-material/FastfoodRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export default function Day1() {
  const [value, setValue] = useState('1');
  const [selectedModal, setSelectedModal] = useState(null);
  const [leftTeam, setLeftTeam] = useState(null);
  const [rightTeam, setRightTeam] = useState(null);
  const [team1, setTeam1] = useState(null);
  const [team2, setTeam2] = useState(null);
  const [open, setOpen] = React.useState(false);



  const handleOpen = (modalId) => () => {
    setSelectedModal(modalId);
  };

  const handleClose = () => {
    setSelectedModal(null);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: orange,
      secondary: blue,
    },
  });

  
  

  return (
    <ThemeProvider theme={theme}>

      <Modal open={Boolean(selectedModal)} onClose={handleClose}>
        <Card
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            color: 'text.primary',
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
            width: '80%',
            maxWidth: 800,
          }}
        >
          {selectedModal === 'genrel' && (
            <Stack spacing={1}>
              <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <Typography variant='h6'>General Assembly</Typography>
                <Typography>7:30-8:00 AM</Typography>
              </Stack>
              <Divider/>

              <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                
                <Stack sx={{textTransform: 'uppercase', textAlign: 'center', mt: '10px', mb: '10px'}}>
                  <Typography variant='h5' sx={{fontWeight: 'bold'}}>Venue</Typography>
                  <Typography variant='h6' sx={{fontWeight: '400'}}>court</Typography>
                </Stack>

                <Stack sx={{textTransform: 'uppercase', textAlign: 'center', mt: '10px', mb: '10px'}}>
                  <Typography variant='h5' sx={{fontWeight: 'bold'}}>Host</Typography>
                  <Typography variant='h6' sx={{fontWeight: '400'}}>Green Rams</Typography>
                </Stack>

              </Stack>


              <Stack direction='row'>
                <Chip color="success" icon={<CheckRoundedIcon />} label="GG" />
              </Stack>

            </Stack>

          )}

          {selectedModal === 'db' && (
            <Stack spacing={1}>
              <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <Typography variant='h6'>Dodgeball JR</Typography>
                <Typography>8:30-10:00 AM</Typography>
              </Stack>
              <Divider/>

              <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                
                <Stack sx={{textTransform: 'uppercase', textAlign: 'center', mt: '10px', mb: '10px'}}>
                  <Typography variant='h5' sx={{fontWeight: 'bold'}}>Venue</Typography>
                  <Typography variant='h6' sx={{fontWeight: '400'}}>court</Typography>
                </Stack>

                <Stack sx={{textTransform: 'uppercase', textAlign: 'center', mt: '10px', mb: '10px'}}>
                  <Typography variant='h5' sx={{fontWeight: 'bold'}}>Game</Typography>
                  <Typography variant='h6' sx={{fontWeight: '400'}}>Single Round Robin</Typography>
                </Stack>

                <Stack sx={{textTransform: 'uppercase', textAlign: 'center', mt: '10px', mb: '10px'}}>
                  <Typography variant='h5' sx={{fontWeight: 'bold'}}>Host</Typography>
                  <Typography variant='h6' sx={{fontWeight: '400'}}>
                    <Chip sx={{backgroundColor: "#aa42ff", m: 0.2}} size="small" label="* Referee" />
                    <Chip sx={{backgroundColor: "#aa42ff", m: 0.2}} size="small" label="* Commitee" />
                  </Typography>
                </Stack>

              </Stack>

              <Divider/>

              <Stack direction={{ xs: 'column', sm: 'row' }}
              spacing={1}
              sx={{
                mt: '3px',
                mb: '3px',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
              }}>
                <ButtonGroup >
                  {['Blue', 'Green', 'Black', 'Red'].map((team) => (
                    <Button
                      key={team}
                      disabled={team === team2} // disable if selected on the other side
                      variant={team1 === team ? 'contained' : 'outlined'}
                      onClick={() => setTeam1(team)}
                    >
                      {team}
                    </Button>
                  ))}
                </ButtonGroup>
                
                <Typography color='primary.main'>VS</Typography>
                
                <ButtonGroup>
                  {['Blue', 'Green', 'Black', 'Red'].map((team) => (
                    <Button
                      key={team}
                      disabled={team === team1} // disable if selected on the other side
                      variant={team2 === team ? 'contained' : 'outlined'}
                      onClick={() => setTeam2(team)}
                    >
                      {team}
                    </Button>
                  ))}
                </ButtonGroup>
              </Stack>


              <Card variant='outlined'>
                <CardContent sx={{ textAlign: 'center' }}>
                  {team1 && team2 ? (
                    <>
                      <Typography variant="h5" sx={{ mb: 2 }}>
                        {team1} VS {team2}
                      </Typography>
                      <Typography variant="body1">
                      {((team1 === 'Blue' && team2 === 'Red') || (team1 === 'Red' && team2 === 'Blue')) && (
                        <Stack>

                          <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                            <Stack textAlign='center' color='primary.main'>
                              <Typography variant='h6'>Blue</Typography>
                              <Typography variant='h5'>2</Typography>
                            </Stack>
                            <Typography variant='h6' color='gray'>vs</Typography>
                            <Stack textAlign='center'>
                              <Typography variant='h6'>Red</Typography>
                              <Typography variant='h5'>1</Typography>
                            </Stack>
                          </Stack>

                          
                        </Stack>

                        
                      )}
                      </Typography>
                    </>
                  ) : (
                    <Typography variant="body2" color="text.secondary">
                      Select Team vs Team to view!
                    </Typography>
                  )}
                </CardContent>

              </Card>


              <Stack direction='row'>
                <Chip color="success" icon={<CheckRoundedIcon />} label="GG" />
              </Stack>

            </Stack>

          )}


        </Card>
      </Modal>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100vw',
          height: '100vh',
          alignItems: 'center',
        }}
      >
        <Stack>
          <Typography textAlign="center" typography="h2" fontWeight="500" sx={{ mb: 2 }}>
            PLCES
          </Typography>
          <Paper
            elevation={2}
            sx={{
              p: { xs: 1, sm: 2 },
              width: { xs: '95vw', sm: '90vw', md: '80vw' },
              maxWidth: '1200px'
            }}
          >
            <Box sx={{ width: '100%', typography: 'body1' }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList onChange={handleChange} aria-label="tabs" variant="fullWidth">
                    <Tab label="Back" value="0" component={Link} to="/" />
                    <Tab label="Schedule n' Info" value="1" />
                    <Tab label="Top" value="2" />
                  </TabList>
                </Box>
                <TabPanel value="1" sx={{ colorScheme: 'dark', p: 0, m: 0, maxHeight: '350px', overflow: 'hidden scroll' }}>

                <Box
                  display="grid"
                  gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }}
                  sx={{ mt: '10px' }}
                  gap={0.5}
                >



<Button sx={{ width: '100%', gridColumn: 'span 3' }} onClick={handleOpen('genrel')} color="success">
                    <Stack width='100%' padding='5px' spacing='10px'>
                      <Stack
                        direction="row"
                        sx={{
                          mt: '3px',
                          mb: '3px',
                          justifyContent: 'space-between',
                          alignItems: 'center', // Center the items vertically
                          width: '100%',
                        }}
                      >
                        <Typography sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
                          <CheckRoundedIcon sx={{ mr: '10px' }} /> General Assembly
                        </Typography>
                        <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                          7:30-8:00AM
                        </Typography>
                      </Stack>

                      <Stack direction='row'>
                        <Chip sx={{backgroundColor: 'success.main'}} size="small" label="green rams" />
                      </Stack>
                    </Stack>
                  </Button>


                  <Button sx={{ width: '100%', gridColumn: 'span 3' }} onClick={handleOpen('db')} color="success">
                    <Stack width='100%' padding='5px' spacing='10px'>
                      <Stack
                        direction="row"
                        sx={{
                          mt: '3px',
                          mb: '3px',
                          justifyContent: 'space-between',
                          alignItems: 'center', // Center the items vertically
                          width: '100%',
                        }}
                      >
                        <Typography sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
                          <CheckRoundedIcon sx={{ mr: '10px' }} /> Dodgeball JR
                        </Typography>
                        <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                          8:30-10:00AM
                        </Typography>
                      </Stack>

                      <Stack direction='row'>
                        <Chip sx={{backgroundColor: 'error.main'}} size="small" label="Single Round-Robin" />
                      </Stack>
                    </Stack>
                  </Button>



                  <Button sx={{ width: '100%', gridColumn: 'span 3' }} onClick={handleOpen('float')} color="success">
                    <Stack width='100%' padding='5px' spacing='10px'>
                      <Stack
                        direction="row"
                        sx={{
                          mt: '3px',
                          mb: '3px',
                          justifyContent: 'space-between',
                          alignItems: 'center', // Center the items vertically
                          width: '100%',
                        }}
                      >
                        <Typography sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
                          <CheckRoundedIcon sx={{ mr: '10px' }} /> Float Parade
                        </Typography>
                        <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                          8:00-9:30AM
                        </Typography>
                      </Stack>

                    </Stack>
                  </Button>



                  <Button sx={{ width: '100%', gridColumn: 'span 3' }} color="info">
                    <Stack width='100%' padding='5px' spacing='10px'>
                      <Stack
                        direction="row"
                        sx={{
                          mt: '3px',
                          mb: '3px',
                          justifyContent: 'space-between',
                          alignItems: 'center', // Center the items vertically
                          width: '100%',
                        }}
                      >
                        <Typography sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
                          <CheckRoundedIcon sx={{ mr: '10px' }} /> Break
                        </Typography>
                        <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                          9:30-10:0AM
                        </Typography>
                      </Stack>

                    </Stack>
                  </Button>



                  
                  


                  <Button sx={{ width: '100%', gridColumn: 'span 3' }} color="info">
                    <Stack width='100%' padding='5px' spacing='10px'>
                      <Stack
                        direction="row"
                        sx={{
                          mt: '3px',
                          mb: '3px',
                          justifyContent: 'space-between',
                          alignItems: 'center', // Center the items vertically
                          width: '100%',
                        }}
                      >
                        <Typography sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
                          <CheckRoundedIcon sx={{ mr: '10px' }} /> Lunch
                        </Typography>
                        <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                          11:00-12:00PM
                        </Typography>
                      </Stack>

                    </Stack>
                  </Button>




                  

                </Box>







                </TabPanel>
                <TabPanel value="2" sx={{ p: 0, m: 0 }}>
                  
                </TabPanel>
              </TabContext>
            </Box>
          </Paper>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}
