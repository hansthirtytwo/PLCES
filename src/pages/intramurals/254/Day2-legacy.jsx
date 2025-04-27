import { useState } from 'react';
import { createTheme, Divider, Stack, ThemeProvider, IconButton, ListItemText, List, ListItem, ListItemButton, CardContent, Grid, Stepper, Step, StepLabel } from '@mui/material';
import { orange, blue } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Paper from '@mui/material/Paper';
import TabContext from '@mui/lab/TabContext';
import MilitaryTechRoundedIcon from '@mui/icons-material/MilitaryTechRounded';
import TabList from '@mui/lab/TabList';
import { Link } from 'react-router-dom';
import TabPanel from '@mui/lab/TabPanel';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import Chip from '@mui/material/Chip';
import Alert from '@mui/material/Alert';
import FastfoodRoundedIcon from '@mui/icons-material/FastfoodRounded';
import Card from '@mui/material/Card';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function Day2() {
  const [value, setValue] = useState('1');
  const [selectedModal, setSelectedModal] = useState(null);

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
            <>
              <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <Stack direction='row' sx={{ alignItems: 'center' }}>
                    <IconButton onClick={handleClose} sx={{mr: '10px'}} >
                        <ArrowBackIosNewRoundedIcon />
                    </IconButton>
                    <Typography variant="h5">General Assembly</Typography>
                </Stack>
                <Typography variant="h6">7:30 AM – 8:00 AM</Typography>
              </Stack>
              <Divider sx={{ mt: 2, mb: 2 }} />

              <Stack direction="row" flexWrap="wrap" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="body">Committees Involved</Typography>
                <Stack direction="row" spacing={1}>
                    <Chip color="info" size="small" label="Sir Oliver" />
                    <Chip color="info" size="small" label="Ms. Nina" />
                </Stack>
              </Stack>


              <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="body">Venue</Typography>
                <b>Court</b>
              </Stack>

            </>
          )}

          {selectedModal === 'ml' && (
            <>
              <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <Stack direction='row' sx={{ alignItems: 'center' }}>
                    <IconButton onClick={handleClose} sx={{mr: '10px'}} >
                        <ArrowBackIosNewRoundedIcon />
                    </IconButton>
                    <Typography variant="h5">Mobile Legends</Typography>
                </Stack>
                <Typography variant="h6">8:30 AM – 10:00 AM</Typography>
              </Stack>
              <Divider sx={{ mt: 2, mb: 2 }} />

              <Stack direction="row" flexWrap="wrap" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="body">Committees Involved</Typography>
                <Stack direction="row" spacing={1}>
                    <Chip color="info" size="small" label="Ms. Di" />
                </Stack>
              </Stack>


              <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="body">Venue</Typography>
                <b>Grade 2</b>
              </Stack>

              <Alert severity='error'>The Game Info <b>isn't recorded</b>.</Alert>

            </>
          )}

          {selectedModal === 'chess' && (
            <>
              <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <Stack direction='row' sx={{ alignItems: 'center' }}>
                    <IconButton onClick={handleClose} sx={{mr: '10px'}} >
                        <ArrowBackIosNewRoundedIcon />
                    </IconButton>
                    <Typography variant="h5">Chess JR & SR</Typography>
                </Stack>
                <Typography variant="h6">8:30 AM – 10:00 AM</Typography>
              </Stack>
              <Divider sx={{ mt: 2, mb: 2 }} />

              <Stack direction="row" flexWrap="wrap" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="body">Committees Involved</Typography>
                <Stack direction="row" spacing={1}>
                    <Chip color="info" size="small" label="Sir Oliver" />
                    <Chip color="info" size="small" label="Ms. Zoe" />
                </Stack>
              </Stack>


              <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="body">Venue</Typography>
                <b>Grade 2</b>
              </Stack>

              <Grid container spacing={2}>

                <Grid size={6}>

                  <Card variant='outlined'>
                    <CardContent>


                      <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Stack textAlign='center'>
                          <Typography color='default' variant='h6'>Black</Typography>
                          <Typography variant='h4'>?</Typography>
                        </Stack>
                        <Typography>vs</Typography>
                        <Stack textAlign='center'>
                          <Typography color='info' variant='h6'>Blue</Typography>
                          <Typography variant='h4'>?</Typography>
                        </Stack>
                      </Stack>

                    </CardContent>
                  </Card>
                </Grid>

                
                <Grid size={6}>

                  <Card variant='outlined'>
                    <CardContent>


                      <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Stack textAlign='center'>
                          <Typography color='error' variant='h6'>Red</Typography>
                          <Typography variant='h4'>?</Typography>
                        </Stack>
                        <Typography>vs</Typography>
                        <Stack textAlign='center'>
                          <Typography color='success' variant='h6'>Green</Typography>
                          <Typography variant='h4'>?</Typography>
                        </Stack>
                      </Stack>

                    </CardContent>
                  </Card>
                </Grid>

                <Typography variant='caption' color='gray'>House names needs to be shortened for mobile devices.</Typography>
              
              </Grid>

            </>
          )}
          
          {selectedModal === 'db' && (
            <Stack spacing='10px'>
              <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <Stack direction='row' sx={{ alignItems: 'center' }}>
                    <IconButton onClick={handleClose} sx={{mr: '10px'}} >
                        <ArrowBackIosNewRoundedIcon />
                    </IconButton>
                    <Typography variant="h5">Dodgeball</Typography>
                </Stack>
                <Typography variant="h6">8:30 - 10:00 AM</Typography>
              </Stack>
              <Divider sx={{ mt: 2, mb: 2 }} />


              <Stack direction="row" flexWrap="wrap" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="body">Committees Involved</Typography>
                <Stack direction="row" spacing={1}>
                    <Chip color="warning" size="small" label="* Referee" />
                    <Chip color="warning" size="small" label="* Commitees" />
                </Stack>
              </Stack>



              <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="body">Venue</Typography>
                <b>Court</b>
              </Stack>

        


              <Typography variant="h6">Game Info</Typography>
              <Divider />

              <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center' }}>
                <Chip color='warning' label="Full Game" />
                <Chip color='error' label="Round Robin" />
              </Stack>


              <Grid container spacing={2}>

                <Grid size={6}>

                  <Card variant='outlined'>
                    <CardContent>


                      <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Stack textAlign='center'>
                          <Typography color='error' variant='h6'>Red</Typography>
                          <Typography variant='h4' color='gold'>2</Typography>
                        </Stack>
                        <Typography>vs</Typography>
                        <Stack textAlign='center'>
                          <Typography color='white' variant='h6'>Black</Typography>
                          <Typography variant='h4'>0</Typography>
                        </Stack>
                      </Stack>

                    </CardContent>
                  </Card>
                </Grid>

                
                <Grid size={6}>

                  <Card variant='outlined'>
                    <CardContent>


                      <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Stack textAlign='center'>
                          <Typography color='info' variant='h6'>Blue</Typography>
                          <Typography variant='h4'>0</Typography>
                        </Stack>
                        <Typography>vs</Typography>
                        <Stack textAlign='center'>
                          <Typography color='default' variant='h6'>Black</Typography>
                          <Typography variant='h4' color='gold'>2</Typography>
                        </Stack>
                      </Stack>

                    </CardContent>
                  </Card>
                </Grid>

                <Grid size={6}>

                  <Card variant='outlined'>
                    <CardContent>


                      <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Stack textAlign='center'>
                          <Typography color='error' variant='h6'>Red</Typography>
                          <Typography variant='h4' color='gold'>2</Typography>
                        </Stack>
                        <Typography>vs</Typography>
                        <Stack textAlign='center'>
                          <Typography color='success' variant='h6'>Green</Typography>
                          <Typography variant='h4'>0</Typography>
                        </Stack>
                      </Stack>

                    </CardContent>
                  </Card>
                </Grid>

                <Grid size={6}>

                  <Card variant='outlined'>
                    <CardContent>


                      <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Stack textAlign='center'>
                          <Typography color='info' variant='h6'>Blue</Typography>
                          <Typography variant='h4'>1</Typography>
                        </Stack>
                        <Typography>vs</Typography>
                        <Stack textAlign='center'>
                          <Typography color='success' variant='h6'>Green</Typography>
                          <Typography variant='h4' color='gold'>2</Typography>
                        </Stack>
                      </Stack>

                    </CardContent>
                  </Card>
                </Grid>

                <Grid size={6}>

                  <Card variant='outlined'>
                    <CardContent>


                      <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Stack textAlign='center'>
                          <Typography color='error' variant='h6'>Red</Typography>
                          <Typography variant='h4'>1</Typography>
                        </Stack>
                        <Typography>vs</Typography>
                        <Stack textAlign='center'>
                          <Typography color='info' variant='h6'>Blue</Typography>
                          <Typography variant='h4' color='gold'>2</Typography>
                        </Stack>
                      </Stack>

                    </CardContent>
                  </Card>
                </Grid>


                <Grid size={6}>

                  <Card variant='outlined'>
                    <CardContent>


                      <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Stack textAlign='center'>
                          <Typography color='success' variant='h6'>Green</Typography>
                          <Typography variant='h4'>1</Typography>
                        </Stack>
                        <Typography>vs</Typography>
                        <Stack textAlign='center'>
                          <Typography color='white' variant='h6'>Black</Typography>
                          <Typography variant='h4' color='gold'>2</Typography>
                        </Stack>
                      </Stack>

                    </CardContent>
                  </Card>
                </Grid>

                <Typography variant='caption' color='white'>Each <u>game</u> win counts as a single win in the output.</Typography>
                <Typography variant='caption' color='gray'>House names needs to be shortened for mobile devices.</Typography>
              
              </Grid>
              

            </Stack>
          )}

          {selectedModal === 'badmix' && (
            <Stack spacing='10px'>
              <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <Stack direction='row' sx={{ alignItems: 'center' }}>
                    <IconButton onClick={handleClose} sx={{mr: '10px'}} >
                        <ArrowBackIosNewRoundedIcon />
                    </IconButton>
                    <Typography variant="h5">Badminton Mix</Typography>
                </Stack>
                <Typography variant="h6">10:00 - 11:00 AM</Typography>
              </Stack>
              <Divider sx={{ mt: 2, mb: 2 }} />


              <Stack direction="row" flexWrap="wrap" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="body">Committees Involved</Typography>
                <Stack direction="row" spacing={1}>
                    <Chip color="info" size="small" label="Sir Tristan" />
                    <Chip color="info" size="small" label="Sir Josh" />
                    <Chip color="info" size="small" label="Ms. Zoey" />
                </Stack>
              </Stack>



              <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="body">Venue</Typography>
                <b>Court</b>
              </Stack>

        


              <Typography variant="h6">Game Info</Typography>
              <Divider />

              <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center' }}>
                <Chip color='warning' label="3rd Game" />
              </Stack>


              <Grid container spacing={2}>

                <Grid size={6}>

                  <Card variant='outlined'>
                    <CardContent>


                      <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Stack textAlign='center'>
                          <Typography color='default' variant='h6'>Black</Typography>
                          <Typography variant='h4'>0</Typography>
                        </Stack>
                        <Typography>vs</Typography>
                        <Stack textAlign='center'>
                          <Typography color='success' variant='h6'>Green</Typography>
                          <Typography variant='h4' color='gold'>2</Typography>
                        </Stack>
                      </Stack>

                    </CardContent>
                  </Card>
                </Grid>

                
                <Grid size={6}>

                  <Card variant='outlined'>
                    <CardContent>


                      <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Stack textAlign='center'>
                          <Typography color='info' variant='h6'>Blue</Typography>
                          <Typography variant='h4'>0</Typography>
                        </Stack>
                        <Typography>vs</Typography>
                        <Stack textAlign='center'>
                          <Typography color='error' variant='h6'>Red</Typography>
                          <Typography variant='h4' color='gold'>2</Typography>
                        </Stack>
                      </Stack>

                    </CardContent>
                  </Card>
                </Grid>

                <Typography variant='caption' color='gray'>House names needs to be shortened for mobile devices.</Typography>
              
              </Grid>
              

            </Stack>
          )}

          {selectedModal === 'badmen' && (
            <Stack spacing='10px'>
              <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <Stack direction='row' sx={{ alignItems: 'center' }}>
                    <IconButton onClick={handleClose} sx={{mr: '10px'}} >
                        <ArrowBackIosNewRoundedIcon />
                    </IconButton>
                    <Typography variant="h5">Badminton Mens <b>JR</b></Typography>
                </Stack>
                <Typography variant="h6">12:00 - 1:00 PM</Typography>
              </Stack>
              <Divider sx={{ mt: 2, mb: 2 }} />


              <Stack direction="row" flexWrap="wrap" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="body">Committees Involved</Typography>
                <Stack direction="row" spacing={1}>
                    <Chip color="info" size="small" label="Sir Tristan" />
                    <Chip color="info" size="small" label="Sir Josh" />
                    <Chip color="info" size="small" label="Ms. Zoey" />
                </Stack>
              </Stack>



              <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="body">Venue</Typography>
                <b>Court</b>
              </Stack>

        


              <Typography variant="h6">Game Info</Typography>
              <Divider />

              <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center' }}>
                <Chip color='default' label="SEMIS" />
              </Stack>


              <Alert severity='error'>The Game Info <b>isn't recorded</b>.</Alert>
              

            </Stack>
          )}

          {selectedModal === 'badwomen' && (
            <Stack spacing='10px'>
              <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <Stack direction='row' sx={{ alignItems: 'center' }}>
                    <IconButton onClick={handleClose} sx={{mr: '10px'}} >
                        <ArrowBackIosNewRoundedIcon />
                    </IconButton>
                    <Typography variant="h5">Badminton Womens <b>JR</b></Typography>
                </Stack>
                <Typography variant="h6">1:00 - 2:00 PM</Typography>
              </Stack>
              <Divider sx={{ mt: 2, mb: 2 }} />


              <Stack direction="row" flexWrap="wrap" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="body">Committees Involved</Typography>
                <Stack direction="row" spacing={1}>
                    <Chip color="info" size="small" label="Sir Tristan" />
                    <Chip color="info" size="small" label="Sir Josh" />
                    <Chip color="info" size="small" label="Ms. Zoey" />
                </Stack>
              </Stack>



              <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="body">Venue</Typography>
                <b>Court</b>
              </Stack>

        


              <Typography variant="h6">Game Info</Typography>
              <Divider />

              <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center' }}>
                <Chip color='default' label="SEMIS" />
              </Stack>


              <Alert severity='error'>The Game Info <b>isn't recorded</b>.</Alert>
              

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
                <TabPanel value="1" sx={{ p: 0, m: 0, maxHeight: '350px', overflow: 'hidden scroll' }}>
                  <MenuList>


                    <MenuItem onClick={handleOpen('genrel')}>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Chip sx={{ mr: { xs: 1, sm: 2 } }} color="success" label="GG" />
                        <Stack>
                          <Typography variant="body1">General Rehearsal</Typography>
                          <Chip color="success" size="small" variant="outlined" label="Green Rams" />
                          <Typography color="gray" variant="body2">
                            7:30–8:30 AM
                          </Typography>
                        </Stack>
                      </Stack>
                    </MenuItem>




                    <MenuItem onClick={handleOpen('db')}>
                        <Stack direction="row" spacing={1} alignItems="center">
                          <Chip sx={{ mr: { xs: 1, sm: 2 } }} color="success" label="GG" />
                          <Chip sx={{ mr: { xs: 1, sm: 2 } }} color="error" label="FG" />
                          <Stack>
                            <Typography variant="body1">Dodgeball</Typography>
                            <Typography color="gray" variant="body2">
                              8:30–10:00 AM<br/>Simultaneous with Mobile Legends 
                            </Typography>
                          </Stack>
                        </Stack>
                    </MenuItem>





                    <MenuItem onClick={handleOpen('ml')}>
                        <Stack direction="row" spacing={1} alignItems="center">
                          <Chip sx={{ mr: { xs: 1, sm: 2 } }} color="success" label="GG" />
                          <Chip sx={{ mr: { xs: 1, sm: 2 } }} color="warning" label="G1" />
                          <Chip sx={{ mr: { xs: 1, sm: 2 } }} color="secondary" label="G2" />
                          <Stack>
                            <Typography variant="body1">Mobile Legends</Typography>
                            <Typography color="gray" variant="body2">
                              8:30–10:00 AM<br/>Simultaneous with Dodgeball 
                            </Typography>
                          </Stack>
                        </Stack>
                    </MenuItem>




                    <MenuItem onClick={handleOpen('badmix')}>
                        <Stack direction="row" spacing={1} alignItems="center">
                          <Chip sx={{ mr: { xs: 1, sm: 2 } }} color="success" label="GG" />
                          <Chip sx={{ mr: { xs: 1, sm: 2 } }} color="secondary" label="G3" />
                          <Stack>
                            <Typography variant="body1">Badminton Mixed</Typography>
                            <Typography color="gray" variant="body2">10:00–11:00 AM</Typography>
                          </Stack>
                        </Stack>
                    </MenuItem>





                    <MenuItem onClick={handleOpen('chess')}>
                        <Stack direction="row" spacing={1} alignItems="center">
                          <Chip sx={{ mr: { xs: 1, sm: 2 } }} color="success" label="GG" />
                          <Chip sx={{ mr: { xs: 1, sm: 2 } }} color="warning" label="G1" />
                          <Stack>
                            <Typography variant="body1">Chess JR & SR</Typography>
                            <Typography color="gray" variant="body2">
                              10:00–11:00 AM<br/>Simultaneous with Badminton Mixed 
                            </Typography>
                          </Stack>
                        </Stack>
                    </MenuItem>




                    <MenuItem>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Chip color="default" label='BR' />
                        <Stack>
                          <Typography variant="body1">Break</Typography>
                          <Typography color="gray" variant="body2">
                            11:00 AM – 12:00 PM
                          </Typography>
                        </Stack>
                      </Stack>
                    </MenuItem>




                    <MenuItem onClick={handleOpen('badmen')}>
                        <Stack direction="row" spacing={1} alignItems="center">
                          <Chip sx={{ mr: { xs: 1, sm: 2 } }} color="success" label="GG" />
                          <Chip sx={{ mr: { xs: 1, sm: 2 } }} color="default" label="SEMI" />
                          <Stack>
                            <Typography variant="body1">Badminton Mens <b>JR</b></Typography>
                            <Typography color="gray" variant="body2">12:00–1:00 PM</Typography>
                          </Stack>
                        </Stack>
                    </MenuItem>




                    <MenuItem onClick={handleOpen('badwomen')}>
                        <Stack direction="row" spacing={1} alignItems="center">
                          <Chip sx={{ mr: { xs: 1, sm: 2 } }} color="success" label="GG" />
                          <Chip sx={{ mr: { xs: 1, sm: 2 } }} color="default" label="SEMI" />
                          <Stack>
                            <Typography variant="body1">Badminton Womens <b>JR</b></Typography>
                            <Typography color="gray" variant="body2">1:00–2:00 PM</Typography>
                          </Stack>
                        </Stack>
                    </MenuItem>






                    <MenuItem>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Chip color="default" label='BR' />
                        <Stack>
                          <Typography variant="body1">Lunch</Typography>
                          <Typography color="gray" variant="body2">
                            11:30–12:00 AM
                          </Typography>
                        </Stack>
                      </Stack>
                    </MenuItem>



                  </MenuList>
                </TabPanel>
                <TabPanel value="2" sx={{ p: 0, m: 0 }}>
                  <MenuList>


                    <MenuItem>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Chip sx={{ mr: 1 }} color="error" label="1st" />
                        <Stack>
                          <Typography variant="h6">Red Eagles</Typography>
                          <Typography color="gold" variant="body2">
                            2000 pts
                          </Typography>
                        </Stack>
                      </Stack>
                    </MenuItem>


                    <MenuItem>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Chip sx={{ mr: 1 }} color="error" label="1st" />
                        <Stack>
                          <Typography variant="h6">Green Rams</Typography>
                          <Typography color="gold" variant="body2">
                            2000 pts
                          </Typography>
                        </Stack>
                      </Stack>
                    </MenuItem>


                    <MenuItem>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Chip sx={{ mr: 1 }} color="warning" label="2nd" />
                        <Stack>
                          <Typography variant="h6">Blue Lions</Typography>
                          <Typography color="gold" variant="body2">
                            1500 pts
                          </Typography>
                        </Stack>
                      </Stack>
                    </MenuItem>



                    <MenuItem>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Chip sx={{ mr: 1 }} color="warning" label="2nd" />
                        <Stack>
                          <Typography variant="h6">Black Stallions</Typography>
                          <Typography color="gold" variant="body2">
                            1500 pts
                          </Typography>
                        </Stack>
                      </Stack>
                    </MenuItem>
                    


                  </MenuList>
                </TabPanel>
              </TabContext>
            </Box>
          </Paper>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}
