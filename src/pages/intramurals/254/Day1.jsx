import { useState } from 'react';
import { createTheme, Divider, Stack, ThemeProvider, IconButton, ListItemText, List, ListItem, ListItemButton, CardContent, Grid, Stepper, Step, StepLabel } from '@mui/material';
import { orange, blue } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Paper from '@mui/material/Paper';
import TabContext from '@mui/lab/TabContext';
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

export default function Day1() {
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
          

          {selectedModal === 'float' && (
            <Stack spacing='10px'>
              <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <Stack direction='row' sx={{ alignItems: 'center' }}>
                    <IconButton onClick={handleClose} sx={{mr: '10px'}} >
                        <ArrowBackIosNewRoundedIcon />
                    </IconButton>
                    <Typography variant="h5">Float Parade</Typography>
                </Stack>
                <Typography variant="h6">8:00 - 9:30 AM</Typography>
              </Stack>
              <Divider sx={{ mt: 2, mb: 2 }} />


              <Stack direction="row" flexWrap="wrap" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="body">Committees Involved</Typography>
                <Stack direction="row" spacing={1}>
                    <Chip color="info" size="small" label="Sir Josh" />
                    <Chip color="info" size="small" label="Sir Tristan" />
                    <Chip color="info" size="small" label="Ms Zoey" />
                    <Chip color="info" size="small" label="Ms Nina" />
                </Stack>
              </Stack>



              <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="body">Venue</Typography>
                <b>Out of CAM</b>
              </Stack>

        
              <Alert severity="info">Game Info is not available.</Alert>

              <Card variant='outlined'>
                <CardContent>

                  <Typography variant="h6">Merits</Typography>


                  <Divider/>
                  <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body">Green Rams</Typography>
                    <b>+300</b>
                  </Stack>

                  <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body">Red Eagles</Typography>
                    <b>+300</b>
                  </Stack>


                </CardContent>


              </Card>

            </Stack>
          )}


          {selectedModal === 'opencem' && (
            <Stack spacing='10px'>
              <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <Stack direction='row' sx={{ alignItems: 'center' }}>
                    <IconButton onClick={handleClose} sx={{mr: '10px'}} >
                        <ArrowBackIosNewRoundedIcon />
                    </IconButton>
                    <Typography variant="h5">Opening Ceremony</Typography>
                </Stack>
                <Typography variant="h6">10:00 - 11:00 AM</Typography>
              </Stack>
              <Divider sx={{ mt: 2, mb: 2 }} />


              <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="body">Venue</Typography>
                <b>Court</b>
              </Stack>



              <Card variant='outlined'>
                <CardContent>

                  <Stack spacing='5px'>
                    <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="body">National Anthem</Typography>
                      <Typography variant='body'><Chip color="info" size="small" label="Ms. Zoey" /></Typography>
                    </Stack>
                    <Divider/>




                    <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="body">Praise and Worship</Typography>
                      <Typography variant='body'><Chip color="warning" size="small" label="CAMusika" /></Typography>
                    </Stack>
                    <Divider/>



                    <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="body">G4 Tradition Dance Presentation</Typography>
                      <Typography variant='body'><Chip color="warning" variant='outlined' size="small" label="Grade 4" /></Typography>
                    </Stack>
                    <Divider/>



                    <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="body">Opening Remarks</Typography>
                      <Typography variant='body'><Chip color="info" size="small" label="Sir Josh" /></Typography>
                    </Stack>
                    <Divider/>




                    <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="body">Lighting of Torch</Typography>
                      <Typography variant='body'><Chip color="warning" size="small" label="House Leaders" /></Typography>
                    </Stack>
                    <Divider/>



                    <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="body">Oath of Sportsmanship</Typography>
                      <Typography variant='body'><Chip color="error" size="small" label="Red Eagles" variant='outlined' /></Typography>
                    </Stack>
                  </Stack>


                </CardContent>


              </Card>

            </Stack>
          )}

          {selectedModal === 'lol' && (
            <Stack spacing='10px'>

              <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <Stack direction='row' sx={{ alignItems: 'center' }}>
                    <IconButton onClick={handleClose} sx={{mr: '10px'}} >
                        <ArrowBackIosNewRoundedIcon />
                    </IconButton>
                    <Typography variant="h5">Mr. & Ms. League of Light</Typography>
                </Stack>
                <Typography variant="h6">12:00 - 1:00 PM</Typography>
              </Stack>
              <Divider sx={{ mt: 2, mb: 2 }} />


              <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="body">Venue</Typography>
                <b>Court</b>
              </Stack>


              <Card variant='outlined'>
                <CardContent>
                  <Stack spacing='10px'>

                    <Typography variant="h6">Committees Involved</Typography>
                    <Divider/>


                    <Stack direction="row" flexWrap="wrap" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center' }}>
                  
                    <Typography variant="body">Judge</Typography>
                      <Stack direction="row" spacing={1}>
                          <Chip color="info" size="small" label="Sir Josh" />
                          <Chip color="info" size="small" label="Ms. Zoey" />
                          <Chip color="info" size="small" label="Ms. Jhona" />
                      </Stack>

                    </Stack>



                    <Stack direction="row" flexWrap="wrap" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center' }}>
                  
                      <Typography variant="body">Coach</Typography>
                      <Stack direction="row" spacing={1}>
                          <Chip color="info" size="small" label="Ms. Nina" />
                          <Chip color="info" size="small" label="Ms. Aubrey" />
                      </Stack>

                    </Stack>



                    <Stack direction="row" flexWrap="wrap" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center' }}>
                  
                      <Typography variant="body">Host</Typography>
                      <Stack direction="row" spacing={1}>
                          <Chip color="info" size="small" label="Ms. Rovilyn" />
                          <Chip color="info" size="small" label="Ms. Mica" />
                          <Typography color='gray'>(Best BFF Duos)</Typography>
                      </Stack>

                    </Stack>

                  </Stack>
                </CardContent>
              </Card>


        
              <Alert severity="error">The Game Info <b>aren't recorded</b>.</Alert>

              

            </Stack>
          )}

          {selectedModal === 'cheerdance' && (
            <>
              <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <Stack direction='row' sx={{ alignItems: 'center' }}>
                    <IconButton onClick={handleClose} sx={{mr: '10px'}} >
                        <ArrowBackIosNewRoundedIcon />
                    </IconButton>
                    <Typography variant="h5">Cheerdance</Typography>
                </Stack>
                <Typography variant="h6">1:00 – 2:30 PM</Typography>
              </Stack>
              <Divider sx={{ mt: 2, mb: 2 }} />

              <Stack direction="row" flexWrap="wrap" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="body">Committees Involved</Typography>
                <Stack direction="row" spacing={1}>
                    <Chip color="info" size="small" label="Sir Tristan" />
                    <Chip color="info" size="small" label="Sir Patrick" />
                    <Chip color="info" size="small" label="Ms. Jamae" />
                </Stack>
              </Stack>


              <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="body">Venue</Typography>
                <b>Court</b>
              </Stack>


              <Card variant='outlined'>
                <CardContent>

                  <Typography variant="h6">Cheerdance Order</Typography>


                  <Divider/>
                  <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body">Red Eagles</Typography>
                    <Typography><b>1st</b> to preform</Typography>
                  </Stack>

                  <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body">Black Stallions</Typography>
                    <Typography><b>2nd</b> to preform</Typography>
                  </Stack>

                  <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body">Blue Lions</Typography>
                    <Typography><b>3rd</b> to preform</Typography>
                  </Stack>

                  <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body">Green Rams</Typography>
                    <Typography><b>4th</b> to preform</Typography>
                  </Stack>


                </CardContent>


              </Card>

            </>
          )}

          {selectedModal === 'volleyball' && (
            <Stack spacing='10px'>
              <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <Stack direction='row' sx={{ alignItems: 'center' }}>
                    <IconButton onClick={handleClose} sx={{mr: '10px'}} >
                        <ArrowBackIosNewRoundedIcon />
                    </IconButton>
                    <Typography variant="h5">Volleyball Mix</Typography>
                </Stack>
                <Typography variant="h6">2:30 - 4:30 PM</Typography>
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

              <Alert color='warning'>Idk if volleyball has sets or not, so this game info is probably accurate.</Alert>

              <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center' }}>
                <Chip color='warning' label="2nd Game" />
              </Stack>

              <Grid container spacing={2}>

                <Grid size={6}>

                  <Card variant='outlined'>
                    <CardContent>


                      <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Stack textAlign='center'>
                          <Typography color='error' variant='h6'>Red</Typography>
                          <Typography variant='h4'>2</Typography>
                        </Stack>
                        <Typography>vs</Typography>
                        <Stack textAlign='center'>
                          <Typography color='white' variant='h6'>Black</Typography>
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
                          <Typography color='info' variant='h6'>Blue</Typography>
                          <Typography variant='h4'>1</Typography>
                        </Stack>
                        <Typography>vs</Typography>
                        <Stack textAlign='center'>
                          <Typography color='success' variant='h6'>Green</Typography>
                          <Typography variant='h4'>2</Typography>
                        </Stack>
                      </Stack>

                    </CardContent>
                  </Card>
                </Grid>
                <Typography variant='caption' color='gray'>House names needs to be shortened for mobile devices.</Typography>
              
              </Grid>
              

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
              maxWidth: '1200px',
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
                <TabPanel value="1" sx={{ p: 0, m: 0 }}>
                  <MenuList>


                    <MenuItem onClick={handleOpen('genrel')}>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Chip sx={{ mr: { xs: 1, sm: 2 } }} color="success" label="GG" />
                        <Stack>
                          <Typography variant="body1">General Rehearsal</Typography>
                          <Chip color="info" size="small" variant="outlined" label="Commitees n' Delegates" />
                          <Typography color="gray" variant="body2">
                            7:30–8:00 AM
                          </Typography>
                        </Stack>
                      </Stack>
                    </MenuItem>




                    <MenuItem onClick={handleOpen('float')}>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Chip sx={{ mr: { xs: 1, sm: 2 } }} color="success" label="GG" />
                        <Stack>
                          <Typography variant="body1">Float Parade</Typography>
                          <Typography color="gray" variant="body2">
                            8:00–9:30 AM
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
                            9:30–10:00 AM
                          </Typography>
                        </Stack>
                      </Stack>
                    </MenuItem>





                    <MenuItem onClick={handleOpen('opencem')}>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Chip sx={{ mr: { xs: 1, sm: 2 } }} color="success" label="GG" />
                        <Stack>
                          <Typography variant="body1">Opening Ceremony</Typography>
                          <Typography color="gray" variant="body2">
                            10:00–11:00 AM
                          </Typography>
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






                    <MenuItem onClick={handleOpen('lol')}>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Chip sx={{ mr: { xs: 1, sm: 2 } }} color="success" label="GG" />
                        <Stack>
                          <Typography variant="body1">Mr. & Ms. League of Light</Typography>
                          <Typography color="gray" variant="body2">
                            12:00–1:00 PM
                          </Typography>
                        </Stack>
                      </Stack>
                    </MenuItem>




                    <MenuItem onClick={handleOpen('cheerdance')}>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Chip sx={{ mr: { xs: 1, sm: 2 } }} color="success" label="GG" />
                        <Stack>
                          <Typography variant="body1">Cheerdance</Typography>
                          <Typography color="gray" variant="body2">
                            1:00–2:30 PM
                          </Typography>
                        </Stack>
                      </Stack>
                    </MenuItem>



                    <MenuItem onClick={handleOpen('volleyball')}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Chip sx={{ mr: 1 }} color="success" label="GG" />
                        <Chip sx={{ mr: 1 }} color="warning" label="2G" />
                        <Stack>
                          <Typography variant="body1">Volleyball Mix</Typography>
                          <Typography color="gray" variant="body2">
                            2:30–4:30 PM
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
