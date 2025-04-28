import { useState } from 'react';
import { 
  createTheme, Divider, Stack, ThemeProvider, Button, ButtonGroup, 
  Box, Tab, Paper, Modal, Typography, Chip, Card, CardContent, Grid, 
  Alert
} from '@mui/material';
import { orange, blue } from '@mui/material/colors';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Link } from 'react-router-dom';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { HourglassBottomRounded } from '@mui/icons-material';


export default function Day4() {
  const [value, setValue] = useState('1');
  const [selectedModal, setSelectedModal] = useState(null);
  const [leftTeam, setLeftTeam] = useState(null);
  const [rightTeam, setRightTeam] = useState(null);
  const [team1, setTeam1] = useState(null);
  const [team2, setTeam2] = useState(null);
  const [open, setOpen] = useState(false);



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
            maxHeight: '80vh',
            overflow: 'hidden scroll',
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
                <Typography>8:00-8:30 AM</Typography>
              </Stack>
              <Divider/>

              <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                
                <Stack sx={{textTransform: 'uppercase', textAlign: 'center', mt: '10px', mb: '10px'}}>
                  <Typography variant='h5' sx={{fontWeight: 'bold'}}>Venue</Typography>
                  <Typography variant='h6' sx={{fontWeight: '400'}}>court</Typography>
                </Stack>

                <Stack sx={{textTransform: 'uppercase', textAlign: 'center', mt: '10px', mb: '10px'}}>
                  <Typography variant='h5' sx={{fontWeight: 'bold'}}>Host</Typography>
                  <Typography variant='h6' sx={{fontWeight: '400'}}>Black Stallions</Typography>
                </Stack>

              </Stack>


              <Stack direction='row'>
                <Chip color="success" icon={<CheckRoundedIcon />} label="GG" />
              </Stack>

            </Stack>

          )}

          {selectedModal === 'ssf' && (
            <Stack spacing={1}>
              <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <Typography variant='h6'>Shake Shake Fries</Typography>
                <Typography>8:30-9:30 AM</Typography>
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
                  <Typography variant='h5' sx={{fontWeight: 'bold'}}>delegates</Typography>
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
                      <Typography variant="body1">
                      <Stack>
                        <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                          
                          {((team1 === 'Blue' && team2 === 'Red') || (team1 === 'Red' && team2 === 'Blue')) && (
                            
                              <>
                                <Stack textAlign='center' color='primary.main'>
                                  <Typography variant='h6'>Blue</Typography>
                                  <Typography variant='h5'>0</Typography>
                                </Stack>
                                <Typography variant='h6' color='gray'>vs</Typography>
                                <Stack textAlign='center'>
                                  <Typography variant='h6'>Red</Typography>
                                  <Typography variant='h5'>0</Typography>
                                </Stack>
                              </>
                            
                          )}
                              {((team1 === 'Blue' && team2 === 'Green') || (team1 === 'Green' && team2 === 'Blue')) && (
                            
                            <>
                              <Stack textAlign='center'>
                                <Typography variant='h6'>Blue</Typography>
                                <Typography variant='h5'>0</Typography>
                              </Stack>
                              <Typography variant='h6' color='gray'>vs</Typography>
                              <Stack textAlign='center' color='primary.main'>
                                <Typography variant='h6'>Green</Typography>
                                <Typography variant='h5'>0</Typography>
                              </Stack>
                            </>
                          
                        )}
                            {((team1 === 'Blue' && team2 === 'Black') || (team1 === 'Black' && team2 === 'Blue')) && (
                            
                            <>
                              <Stack textAlign='center'>
                                <Typography variant='h6'>Blue</Typography>
                                <Typography variant='h5'>0</Typography>
                              </Stack>
                              <Typography variant='h6' color='gray'>vs</Typography>
                              <Stack textAlign='center' color='primary.main'>
                                <Typography variant='h6'>Black</Typography>
                                <Typography variant='h5'>0</Typography>
                              </Stack>
                            </>
                          
                        )}
                            {((team1 === 'Red' && team2 === 'Black') || (team1 === 'Black' && team2 === 'Red')) && (
                            
                            <>
                              <Stack textAlign='center'>
                                <Typography variant='h6'>Black</Typography>
                                <Typography variant='h5'>0</Typography>
                              </Stack>
                              <Typography variant='h6' color='gray'>vs</Typography>
                              <Stack textAlign='center' color='primary.main'>
                                <Typography variant='h6'>Red</Typography>
                                <Typography variant='h5'>0</Typography>
                              </Stack>
                            </>
                          
                        )}
                            {((team1 === 'Red' && team2 === 'Green') || (team1 === 'Green' && team2 === 'Red')) && (
                            
                            <>
                              <Stack textAlign='center' color='primary.main'>
                                <Typography variant='h6'>Red</Typography>
                                <Typography variant='h5'>0</Typography>
                              </Stack>
                              <Typography variant='h6' color='gray'>vs</Typography>
                              <Stack textAlign='center'>
                                <Typography variant='h6'>Green</Typography>
                                <Typography variant='h5'>0</Typography>
                              </Stack>
                            </>
                          
                        )}
                            {((team1 === 'Black' && team2 === 'Green') || (team1 === 'Green' && team2 === 'Black')) && (
                            
                            <>
                              <Stack textAlign='center' color='primary.main'>
                                <Typography variant='h6'>Black</Typography>
                                <Typography variant='h5'>0</Typography>
                              </Stack>
                              <Typography variant='h6' color='gray'>vs</Typography>
                              <Stack textAlign='center'>
                                <Typography variant='h6'>Green</Typography>
                                <Typography variant='h5'>0</Typography>
                              </Stack>
                            </>
                          
                        )}
                        


                        </Stack>
                      </Stack>
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

          {selectedModal === 'tt' && (
            <Stack spacing={1}>
              <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <Typography variant='h6'>Table Tennis</Typography>
                <Typography>8:30-9:30AM</Typography>
              </Stack>
              <Divider/>

              <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                
                <Stack sx={{textTransform: 'uppercase', textAlign: 'center', mt: '10px', mb: '10px'}}>
                  <Typography variant='h5' sx={{fontWeight: 'bold'}}>Venue</Typography>
                  <Typography variant='h6' sx={{fontWeight: '400'}}>Playroom</Typography>
                </Stack>

                <Stack sx={{textTransform: 'uppercase', textAlign: 'center', mt: '10px', mb: '10px'}}>
                  <Typography variant='h5' sx={{fontWeight: 'bold'}}>Game</Typography>
                  <Typography variant='h6' sx={{fontWeight: '400'}}>Semis</Typography>
                </Stack>


                <Stack sx={{textTransform: 'uppercase', textAlign: 'center', mt: '10px', mb: '10px'}}>
                  <Typography variant='h5' sx={{fontWeight: 'bold'}}>delegates</Typography>
                  <Typography variant='h6' sx={{fontWeight: '400'}}>
                    <Chip sx={{backgroundColor: "#aa42ff", m: 0.2}} size="small" label="Sir Oliver" />
                  </Typography>
                </Stack>
              </Stack>


              <Grid container gap={1} display="grid" gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr', md: '1fr 1f' }} sx={{ mt: '10px' }}>
                
                <Card variant='outlined' sx={{gridColumn: "span 1"}}>
                  <CardContent>
                    <Typography variant='h5'>N/A</Typography>
                    <Chip color='success' size="small" label="what" />
                  </CardContent>
                </Card>

                <Card variant='outlined' sx={{gridColumn: "span 1"}}>
                  <CardContent>
                    <Typography variant='h5'>N/A</Typography>
                    <Chip color='success' size="small" label="what" />
                  </CardContent>
                </Card>


                
                
              </Grid>


              <Stack direction='row'>
                <Chip color="success" icon={<CheckRoundedIcon />} label="GG" />
              </Stack>

            </Stack>

          )}

          {selectedModal === 'gog' && (
            <Stack spacing={1}>
              <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <Typography variant='h6'>Game of Generals</Typography>
                <Typography>9:30-11:00AM</Typography>
              </Stack>
              <Divider/>

              <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                
                <Stack sx={{textTransform: 'uppercase', textAlign: 'center', mt: '10px', mb: '10px'}}>
                  <Typography variant='h5' sx={{fontWeight: 'bold'}}>Venue</Typography>
                  <Typography variant='h6' sx={{fontWeight: '400'}}>Playroom</Typography>
                </Stack>


                <Stack sx={{textTransform: 'uppercase', textAlign: 'center', mt: '10px', mb: '10px'}}>
                  <Typography variant='h5' sx={{fontWeight: 'bold'}}>game</Typography>
                  <Typography variant='h6' sx={{fontWeight: '400'}}>1st & 2nd</Typography>
                </Stack>


                <Stack sx={{textTransform: 'uppercase', textAlign: 'center', mt: '10px', mb: '10px'}}>
                  <Typography variant='h5' sx={{fontWeight: 'bold'}}>delegates</Typography>
                  <Typography variant='h6' sx={{fontWeight: '400'}}>
                    <Chip sx={{backgroundColor: "#aa42ff", m: 0.2}} size="small" label="Ms. Di" />
                  </Typography>
                </Stack>
              </Stack>


              <Typography variant='h6'>1st GOG</Typography>
              <Divider/>
              <Grid container gap={1} display="grid" gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr', md: '1fr 1f' }} sx={{ mt: '10px' }}>
                
                <Card variant='outlined' sx={{gridColumn: "span 1"}}>
                  <CardContent>
                    <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                      
                      <Stack textAlign='center' color='primary.main'>
                        <Typography variant='h6'>Black</Typography>
                        <Typography variant='h5'>0</Typography>
                      </Stack>
                      <Typography variant='h6' color='gray'>vs</Typography>
                      <Stack textAlign='center'>
                        <Typography variant='h6'>Blue</Typography>
                        <Typography variant='h5'>0</Typography>
                      </Stack>

                    </Stack>
                  </CardContent>
                </Card>

                <Card variant='outlined' sx={{gridColumn: "span 1"}}>
                  <CardContent>
                    <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                      
                      <Stack textAlign='center' color='primary.main'>
                        <Typography variant='h6'>Red</Typography>
                        <Typography variant='h5'>0</Typography>
                      </Stack>
                      <Typography variant='h6' color='gray'>vs</Typography>
                      <Stack textAlign='center'>
                        <Typography variant='h6'>Green</Typography>
                        <Typography variant='h5'>0</Typography>
                      </Stack>

                    </Stack>
                  </CardContent>
                </Card>

              </Grid>

              <Typography variant='h6'>2nd GOG</Typography>
              <Divider/>
              <Grid container gap={1} display="grid" gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr', md: '1fr 1f' }} sx={{ mt: '10px' }}>
                
                <Card variant='outlined' sx={{gridColumn: "span 1"}}>
                  <CardContent>
                    <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                      
                      <Stack textAlign='center' color='primary.main'>
                        <Typography variant='h6'>Black</Typography>
                        <Typography variant='h5'>0</Typography>
                      </Stack>
                      <Typography variant='h6' color='gray'>vs</Typography>
                      <Stack textAlign='center'>
                        <Typography variant='h6'>Red</Typography>
                        <Typography variant='h5'>0</Typography>
                      </Stack>

                    </Stack>
                  </CardContent>
                </Card>

                <Card variant='outlined' sx={{gridColumn: "span 1"}}>
                  <CardContent>
                    <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                      
                      <Stack textAlign='center' color='primary.main'>
                        <Typography variant='h6'>Blue</Typography>
                        <Typography variant='h5'>0</Typography>
                      </Stack>
                      <Typography variant='h6' color='gray'>vs</Typography>
                      <Stack textAlign='center'>
                        <Typography variant='h6'>Green</Typography>
                        <Typography variant='h5'>0</Typography>
                      </Stack>

                    </Stack>
                  </CardContent>
                </Card>

              </Grid>


              <Stack direction='row'>
                <Chip color="success" icon={<CheckRoundedIcon />} label="GG" />
              </Stack>

            </Stack>

            

          )}

          {selectedModal === 'bbjr' && (
            <Stack spacing={1}>
              <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <Typography variant='h6'>Basketball JR</Typography>
                <Typography>9:30-11:00AM</Typography>
              </Stack>
              <Divider/>

              <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                
                <Stack sx={{textTransform: 'uppercase', textAlign: 'center', mt: '10px', mb: '10px'}}>
                  <Typography variant='h5' sx={{fontWeight: 'bold'}}>Venue</Typography>
                  <Typography variant='h6' sx={{fontWeight: '400'}}>Grade 2</Typography>
                </Stack>


                <Stack sx={{textTransform: 'uppercase', textAlign: 'center', mt: '10px', mb: '10px'}}>
                  <Typography variant='h5' sx={{fontWeight: 'bold'}}>game</Typography>
                  <Typography variant='h6' sx={{fontWeight: '400'}}>3rd</Typography>
                </Stack>

                <Stack sx={{textTransform: 'uppercase', textAlign: 'center', mt: '10px', mb: '10px'}}>
                  <Typography variant='h5' sx={{fontWeight: 'bold'}}>delegates</Typography>
                  <Typography variant='h6' sx={{fontWeight: '400'}}>
                    <Chip sx={{backgroundColor: "#aa42ff", m: 0.2}} size="small" label="Ms. Di" />
                  </Typography>
                </Stack>
              </Stack>


              <Typography variant='h6'>Game Scores</Typography>
              <Divider/>
              <Grid container gap={1} display="grid" gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr', md: '1fr 1f' }} sx={{ mt: '10px' }}>
                
                <Card variant='outlined' sx={{gridColumn: "span 2"}}>
                  <CardContent>
                    <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                      
                      <Stack textAlign='center' color='primary.main'>
                        <Typography variant='h6'>Blue</Typography>
                        <Typography variant='h5'>0</Typography>
                      </Stack>
                      <Typography variant='h6' color='gray'>vs</Typography>
                      <Stack textAlign='center'>
                        <Typography variant='h6'>Red</Typography>
                        <Typography variant='h5'>0</Typography>
                      </Stack>

                    </Stack>
                  </CardContent>
                </Card>

                

              </Grid>

              


              <Stack direction='row'>
                <Chip color="success" icon={<CheckRoundedIcon />} label="GG" />
              </Stack>

            </Stack>

            

          )}

          

{selectedModal === 'badmintonMix' && (
  <Stack spacing={1}>
    <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
      <Typography variant='h6'>Badminton Mix</Typography>
      <Typography>12:00-1:00PM</Typography>
    </Stack>
    <Divider/>

    <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
      <Stack sx={{textTransform: 'uppercase', textAlign: 'center', mt: '10px', mb: '10px'}}>
        <Typography variant='h5' sx={{fontWeight: 'bold'}}>Venue</Typography>
        <Typography variant='h6' sx={{fontWeight: '400'}}>Court</Typography>
      </Stack>

      <Stack sx={{textTransform: 'uppercase', textAlign: 'center', mt: '10px', mb: '10px'}}>
        <Typography variant='h5' sx={{fontWeight: 'bold'}}>Game</Typography>
        <Typography variant='h6' sx={{fontWeight: '400'}}>Finals</Typography>
      </Stack>

      <Stack sx={{textTransform: 'uppercase', textAlign: 'center', mt: '10px', mb: '10px'}}>
        <Typography variant='h5' sx={{fontWeight: 'bold'}}>Delegates</Typography>
        <Typography variant='h6' sx={{fontWeight: '400'}}>
          <Chip sx={{backgroundColor: "#aa42ff", m: 0.2}} size="small" label="Sir Oliver" />
        </Typography>
      </Stack>
    </Stack>

    <Typography variant='h6'>Finals Matchup</Typography>
    <Divider/>
    <Grid container gap={1} display="grid" gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr', md: '1fr 1f' }} sx={{ mt: '10px' }}>
      <Card variant='outlined' sx={{gridColumn: "span 1"}}>
        <CardContent>
          <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <Stack textAlign='center' color='primary.main'>
              <Typography variant='h6'>Black</Typography>
              <Typography variant='h5'>0</Typography>
            </Stack>
            <Typography variant='h6' color='gray'>vs</Typography>
            <Stack textAlign='center'>
              <Typography variant='h6'>Blue</Typography>
              <Typography variant='h5'>0</Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Grid>

    <Stack direction='row'>
      <Chip color="success" icon={<CheckRoundedIcon />} label="GG" />
    </Stack>
  </Stack>
)}

{selectedModal === 'mobileLegends' && (
  <Stack spacing={1}>
    <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
      <Typography variant='h6'>Mobile Legends</Typography>
      <Typography>12:00-1:00PM</Typography>
    </Stack>
    <Divider/>

    <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
      <Stack sx={{textTransform: 'uppercase', textAlign: 'center', mt: '10px', mb: '10px'}}>
        <Typography variant='h5' sx={{fontWeight: 'bold'}}>Venue</Typography>
        <Typography variant='h6' sx={{fontWeight: '400'}}>Grade 2 Room</Typography>
      </Stack>

      <Stack sx={{textTransform: 'uppercase', textAlign: 'center', mt: '10px', mb: '10px'}}>
        <Typography variant='h5' sx={{fontWeight: 'bold'}}>Game</Typography>
        <Typography variant='h6' sx={{fontWeight: '400'}}>3rd Game</Typography>
      </Stack>

      <Stack sx={{textTransform: 'uppercase', textAlign: 'center', mt: '10px', mb: '10px'}}>
        <Typography variant='h5' sx={{fontWeight: 'bold'}}>Delegates</Typography>
        <Typography variant='h6' sx={{fontWeight: '400'}}>
          <Chip sx={{backgroundColor: "#aa42ff", m: 0.2}} size="small" label="Committee" />
        </Typography>
      </Stack>
    </Stack>

    <Typography variant='h6'>3rd Game Match</Typography>
    <Divider/>
    <Grid container gap={1} display="grid" gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr', md: '1fr 1f' }} sx={{ mt: '10px' }}>
      <Card variant='outlined' sx={{gridColumn: "span 1"}}>
        <CardContent>
          <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <Stack textAlign='center' color='primary.main'>
              <Typography variant='h6'>??</Typography>
              <Typography variant='h5'>0</Typography>
            </Stack>
            <Typography variant='h6' color='gray'>vs</Typography>
            <Stack textAlign='center'>
              <Typography variant='h6'>??</Typography>
              <Typography variant='h5'>0</Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
      <Card variant='outlined' sx={{gridColumn: "span 1"}}>
        <CardContent>
          <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <Stack textAlign='center' color='primary.main'>
              <Typography variant='h6'>??</Typography>
              <Typography variant='h5'>0</Typography>
            </Stack>
            <Typography variant='h6' color='gray'>vs</Typography>
            <Stack textAlign='center'>
              <Typography variant='h6'>??</Typography>
              <Typography variant='h5'>0</Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Grid>

    <Stack direction='row'>
      <Chip color="success" icon={<CheckRoundedIcon />} label="GG" />
    </Stack>
  </Stack>
)}

{selectedModal === 'badmintonWomenSr' && (
  <Stack spacing={1}>
    <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
      <Typography variant='h6'>Badminton Women SR</Typography>
      <Typography>1:00-2:00PM</Typography>
    </Stack>
    <Divider/>

    <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
      <Stack sx={{textTransform: 'uppercase', textAlign: 'center', mt: '10px', mb: '10px'}}>
        <Typography variant='h5' sx={{fontWeight: 'bold'}}>Venue</Typography>
        <Typography variant='h6' sx={{fontWeight: '400'}}>Court</Typography>
      </Stack>

      <Stack sx={{textTransform: 'uppercase', textAlign: 'center', mt: '10px', mb: '10px'}}>
        <Typography variant='h5' sx={{fontWeight: 'bold'}}>Game</Typography>
        <Typography variant='h6' sx={{fontWeight: '400'}}>Finals</Typography>
      </Stack>

      <Stack sx={{textTransform: 'uppercase', textAlign: 'center', mt: '10px', mb: '10px'}}>
        <Typography variant='h5' sx={{fontWeight: 'bold'}}>Delegates</Typography>
        <Typography variant='h6' sx={{fontWeight: '400'}}>
          <Chip sx={{backgroundColor: "#aa42ff", m: 0.2}} size="small" label="Sir Oliver" />
        </Typography>
      </Stack>
    </Stack>

    <Typography variant='h6'>Finals Matchup</Typography>
    <Divider/>
    <Grid container gap={1} display="grid" gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr', md: '1fr 1f' }} sx={{ mt: '10px' }}>
      <Card variant='outlined' sx={{gridColumn: "span 2"}}>
        <CardContent>
          <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <Stack textAlign='center' color='primary.main'>
              <Typography variant='h6'>???</Typography>
              <Typography variant='h5'>0</Typography>
            </Stack>
            <Typography variant='h6' color='gray'>vs</Typography>
            <Stack textAlign='center'>
              <Typography variant='h6'>???</Typography>
              <Typography variant='h5'>0</Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Grid>

    <Stack direction='row'>
      <Chip color="success" icon={<CheckRoundedIcon />} label="GG" />
    </Stack>
  </Stack>
)}

{selectedModal === 'scrabble' && (
  <Stack spacing={1}>
    <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
      <Typography variant='h6'>Scrabble</Typography>
      <Typography>1:00-2:00PM</Typography>
    </Stack>
    <Divider/>

    <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
      <Stack sx={{textTransform: 'uppercase', textAlign: 'center', mt: '10px', mb: '10px'}}>
        <Typography variant='h5' sx={{fontWeight: 'bold'}}>Venue</Typography>
        <Typography variant='h6' sx={{fontWeight: '400'}}>Grade 2 Room</Typography>
      </Stack>

      <Stack sx={{textTransform: 'uppercase', textAlign: 'center', mt: '10px', mb: '10px'}}>
        <Typography variant='h5' sx={{fontWeight: 'bold'}}>Game</Typography>
        <Typography variant='h6' sx={{fontWeight: '400'}}>3rd Game</Typography>
      </Stack>

      <Stack sx={{textTransform: 'uppercase', textAlign: 'center', mt: '10px', mb: '10px'}}>
        <Typography variant='h5' sx={{fontWeight: 'bold'}}>Delegates</Typography>
        <Typography variant='h6' sx={{fontWeight: '400'}}>
          <Chip sx={{backgroundColor: "#aa42ff", m: 0.2}} size="small" label="Ms. D" />
        </Typography>
      </Stack>
    </Stack>

    <Typography variant='h6'>3rd Game Match</Typography>
    <Divider/>
    <Grid container gap={1} display="grid" gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr', md: '1fr 1f' }} sx={{ mt: '10px' }}>
      <Card variant='outlined' sx={{gridColumn: "span 2"}}>
        <CardContent>
          <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <Stack textAlign='center'>
              <Typography variant='h6'>Black</Typography>
              <Typography variant='h5'>0</Typography>
            </Stack>
            <Stack textAlign='center'>
              <Typography variant='h6'>Blue</Typography>
              <Typography variant='h5'>0</Typography>
            </Stack>
            <Stack textAlign='center' color='primary.main'>
              <Typography variant='h6'>Red</Typography>
              <Typography variant='h5'>0</Typography>
            </Stack>
            <Stack textAlign='center'>
              <Typography variant='h6'>Green</Typography>
              <Typography variant='h5'>0</Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Grid>

    <Stack direction='row'>
      <Chip color="success" icon={<CheckRoundedIcon />} label="GG" />
    </Stack>
  </Stack>
)}

{selectedModal === 'badmintonMenSr' && (
  <Stack spacing={1}>
    <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
      <Typography variant='h6'>Badminton Men SR</Typography>
      <Typography>1:00-2:00PM</Typography>
    </Stack>
    <Divider/>

    <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
      <Stack sx={{textTransform: 'uppercase', textAlign: 'center', mt: '10px', mb: '10px'}}>
        <Typography variant='h5' sx={{fontWeight: 'bold'}}>Venue</Typography>
        <Typography variant='h6' sx={{fontWeight: '400'}}>Court</Typography>
      </Stack>

      <Stack sx={{textTransform: 'uppercase', textAlign: 'center', mt: '10px', mb: '10px'}}>
        <Typography variant='h5' sx={{fontWeight: 'bold'}}>Game</Typography>
        <Typography variant='h6' sx={{fontWeight: '400'}}>Finals</Typography>
      </Stack>

      <Stack sx={{textTransform: 'uppercase', textAlign: 'center', mt: '10px', mb: '10px'}}>
        <Typography variant='h5' sx={{fontWeight: 'bold'}}>Delegates</Typography>
        <Typography variant='h6' sx={{fontWeight: '400'}}>
          <Chip sx={{backgroundColor: "#aa42ff", m: 0.2}} size="small" label="Sir Oliver" />
        </Typography>
      </Stack>
    </Stack>

    <Typography variant='h6'>Finals Matchup</Typography>
    <Divider/>
    <Grid container gap={1} display="grid" gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr', md: '1fr 1f' }} sx={{ mt: '10px' }}>
      <Card variant='outlined' sx={{gridColumn: "span 2"}}>
        <CardContent>
          <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <Stack textAlign='center' color='primary.main'>
              <Typography variant='h6'>???</Typography>
              <Typography variant='h5'>0</Typography>
            </Stack>
            <Typography variant='h6' color='gray'>vs</Typography>
            <Stack textAlign='center'>
              <Typography variant='h6'>???</Typography>
              <Typography variant='h5'>0</Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Grid>

    <Stack direction='row'>
      <Chip color="success" icon={<CheckRoundedIcon />} label="GG" />
    </Stack>
  </Stack>
)}

{selectedModal === 'gog3rd' && (
  <Stack spacing={1}>
    <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
      <Typography variant='h6'>Game of Generals - 3rd Game</Typography>
      <Typography>1:00-2:00PM</Typography>
    </Stack>
    <Divider/>

    <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
      <Stack sx={{textTransform: 'uppercase', textAlign: 'center', mt: '10px', mb: '10px'}}>
        <Typography variant='h5' sx={{fontWeight: 'bold'}}>Venue</Typography>
        <Typography variant='h6' sx={{fontWeight: '400'}}>Grade 2 Room</Typography>
      </Stack>

      <Stack sx={{textTransform: 'uppercase', textAlign: 'center', mt: '10px', mb: '10px'}}>
        <Typography variant='h5' sx={{fontWeight: 'bold'}}>Game</Typography>
        <Typography variant='h6' sx={{fontWeight: '400'}}>3rd Game</Typography>
      </Stack>

      <Stack sx={{textTransform: 'uppercase', textAlign: 'center', mt: '10px', mb: '10px'}}>
        <Typography variant='h5' sx={{fontWeight: 'bold'}}>Delegates</Typography>
        <Typography variant='h6' sx={{fontWeight: '400'}}>
          <Chip sx={{backgroundColor: "#aa42ff", m: 0.2}} size="small" label="Ms. D" />
        </Typography>
      </Stack>
    </Stack>

    <Typography variant='h6'>3rd Game Match</Typography>
    <Divider/>
    <Grid container gap={1} display="grid" gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr', md: '1fr 1f' }} sx={{ mt: '10px' }}>
      <Card variant='outlined' sx={{gridColumn: "span 2"}}>
        <CardContent>
          <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <Stack textAlign='center'>
              <Typography variant='h6'>Blue</Typography>
              <Typography variant='h5'>0</Typography>
            </Stack>
            <Stack textAlign='center'>
              <Typography variant='h6'>Black</Typography>
              <Typography variant='h5'>0</Typography>
            </Stack>
            <Stack textAlign='center' color='primary.main'>
              <Typography variant='h6'>Red</Typography>
              <Typography variant='h5'>0</Typography>
            </Stack>
            <Stack textAlign='center'>
              <Typography variant='h6'>Green</Typography>
              <Typography variant='h5'>0</Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Grid>

    <Stack direction='row'>
      <Chip color="success" icon={<CheckRoundedIcon />} label="GG" />
    </Stack>
  </Stack>
)}

{selectedModal === 'badmintonMenJr' && (
  <Stack spacing={1}>
    <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
      <Typography variant='h6'>Badminton Men JR</Typography>
      <Typography>2:00-3:30PM</Typography>
    </Stack>
    <Divider/>

    <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
      <Stack sx={{textTransform: 'uppercase', textAlign: 'center', mt: '10px', mb: '10px'}}>
        <Typography variant='h5' sx={{fontWeight: 'bold'}}>Venue</Typography>
        <Typography variant='h6' sx={{fontWeight: '400'}}>Court</Typography>
      </Stack>

      <Stack sx={{textTransform: 'uppercase', textAlign: 'center', mt: '10px', mb: '10px'}}>
        <Typography variant='h5' sx={{fontWeight: 'bold'}}>Game</Typography>
        <Typography variant='h6' sx={{fontWeight: '400'}}>Finals</Typography>
      </Stack>

      <Stack sx={{textTransform: 'uppercase', textAlign: 'center', mt: '10px', mb: '10px'}}>
        <Typography variant='h5' sx={{fontWeight: 'bold'}}>Delegates</Typography>
        <Typography variant='h6' sx={{fontWeight: '400'}}>
          <Chip sx={{backgroundColor: "#aa42ff", m: 0.2}} size="small" label="Ms. D" />
        </Typography>
      </Stack>
    </Stack>

    <Typography variant='h6'>Finals Matchup</Typography>
    <Divider/>
    <Grid container gap={1} display="grid" gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr', md: '1fr 1f' }} sx={{ mt: '10px' }}>
      <Card variant='outlined' sx={{gridColumn: "span 2"}}>
        <CardContent>
          <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <Stack textAlign='center' color='primary.main'>
              <Typography variant='h6'>Blue</Typography>
              <Typography variant='h5'>0</Typography>
            </Stack>
            <Typography variant='h6' color='gray'>vs</Typography>
            <Stack textAlign='center'>
              <Typography variant='h6'>Red???</Typography>
              <Typography variant='h5'>0</Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Grid>

    <Stack direction='row'>
      <Chip color="success" icon={<CheckRoundedIcon />} label="GG" />
    </Stack>
  </Stack>
)}

{selectedModal === 'badmintonWomenJr' && (
  <Stack spacing={1}>
    <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
      <Typography variant='h6'>Badminton Women JR</Typography>
      <Typography>2:00-3:30PM</Typography>
    </Stack>
    <Divider/>

    <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
      <Stack sx={{textTransform: 'uppercase', textAlign: 'center', mt: '10px', mb: '10px'}}>
        <Typography variant='h5' sx={{fontWeight: 'bold'}}>Venue</Typography>
        <Typography variant='h6' sx={{fontWeight: '400'}}>Court</Typography>
      </Stack>

      <Stack sx={{textTransform: 'uppercase', textAlign: 'center', mt: '10px', mb: '10px'}}>
        <Typography variant='h5' sx={{fontWeight: 'bold'}}>Game</Typography>
        <Typography variant='h6' sx={{fontWeight: '400'}}>Finals</Typography>
      </Stack>

      <Stack sx={{textTransform: 'uppercase', textAlign: 'center', mt: '10px', mb: '10px'}}>
        <Typography variant='h5' sx={{fontWeight: 'bold'}}>Delegates</Typography>
        <Typography variant='h6' sx={{fontWeight: '400'}}>
          <Chip sx={{backgroundColor: "#aa42ff", m: 0.2}} size="small" label="Ms. D" />
        </Typography>
      </Stack>
    </Stack>

    <Typography variant='h6'>Finals Matchup</Typography>
    <Divider/>
    <Grid container gap={1} display="grid" gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr', md: '1fr 1f' }} sx={{ mt: '10px' }}>
      <Card variant='outlined' sx={{gridColumn: "span 2"}}>
        <CardContent>
          <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <Stack textAlign='center' color='primary.main'>
              <Typography variant='h6'>???</Typography>
              <Typography variant='h5'>0</Typography>
            </Stack>
            <Typography variant='h6' color='gray'>vs</Typography>
            <Stack textAlign='center'>
              <Typography variant='h6'>???</Typography>
              <Typography variant='h5'>0</Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Grid>

    <Stack direction='row'>
      <Chip color="success" icon={<CheckRoundedIcon />} label="GG" />
    </Stack>
  </Stack>
)}

{selectedModal === 'basketballSr' && (
  <Stack spacing={1}>
    <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
      <Typography variant='h6'>Basketball SR</Typography>
      <Typography>3:30-4:30PM</Typography>
    </Stack>
    <Divider/>

    <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
      <Stack sx={{textTransform: 'uppercase', textAlign: 'center', mt: '10px', mb: '10px'}}>
        <Typography variant='h5' sx={{fontWeight: 'bold'}}>Venue</Typography>
        <Typography variant='h6' sx={{fontWeight: '400'}}>Court</Typography>
      </Stack>

      <Stack sx={{textTransform: 'uppercase', textAlign: 'center', mt: '10px', mb: '10px'}}>
        <Typography variant='h5' sx={{fontWeight: 'bold'}}>Game</Typography>
        <Typography variant='h6' sx={{fontWeight: '400'}}>Semi-Finals</Typography>
      </Stack>

      <Stack sx={{textTransform: 'uppercase', textAlign: 'center', mt: '10px', mb: '10px'}}>
        <Typography variant='h5' sx={{fontWeight: 'bold'}}>Delegates</Typography>
        <Typography variant='h6' sx={{fontWeight: '400'}}>
          <Chip sx={{backgroundColor: "#aa42ff", m: 0.2}} size="small" label="Committee" />
        </Typography>
      </Stack>
    </Stack>

    <Typography variant='h6'>Semi-Finals Matchups</Typography>
    <Divider/>
    <Grid container gap={1} display="grid" gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr', md: '1fr 1f' }} sx={{ mt: '10px' }}>
      <Card variant='outlined' sx={{gridColumn: "span 1"}}>
        <CardContent>
          <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <Stack textAlign='center' color='primary.main'>
              <Typography variant='h6'>Black</Typography>
              <Typography variant='h5'>0</Typography>
            </Stack>
            <Typography variant='h6' color='gray'>vs</Typography>
            <Stack textAlign='center'>
              <Typography variant='h6'>Blue</Typography>
              <Typography variant='h5'>0</Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>

      <Card variant='outlined' sx={{gridColumn: "span 1"}}>
        <CardContent>
          <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <Stack textAlign='center' color='primary.main'>
              <Typography variant='h6'>Green</Typography>
              <Typography variant='h5'>0</Typography>
            </Stack>
            <Typography variant='h6' color='gray'>vs</Typography>
            <Stack textAlign='center'>
              <Typography variant='h6'>Red</Typography>
              <Typography variant='h5'>0</Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Grid>

    <Stack direction='row'>
      <Chip color="success" icon={<CheckRoundedIcon />} label="GG" />
    </Stack>
  </Stack>
)}

          {selectedModal === 'notav' && (
            <Stack spacing={1}>
              <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <Typography variant='h6'>N/R</Typography>
                <Typography>Not Recorded</Typography>
              </Stack>
              <Divider/>

              <Typography>Sorry, but this game's info was not recorded.</Typography>


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

                <Alert color='info'>Page is still in development. If you're on phone, please turn it to landscape mode.</Alert>
                <Box
                  display="grid"
                  gap={0.5}
                  sx={{
                    mt: '10px',
                    gridTemplateColumns: {
                      xs: '1fr',         // 1 column on mobile
                      sm: 'repeat(2, 1fr)', // 2 columns on small screens
                      md: 'repeat(4, 1fr)'  // 4 columns on medium screens
                    },
                    '& > *': {           // Target all direct children
                      minWidth: 0,       // Prevent overflow
                      width: '100%'      // Ensure full width
                    }
                  }}
                >

              

                <Button sx={{ width: '100%', gridColumn: 'span 4' }} onClick={handleOpen('genrel')} color='success'>
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
                          8:30-8:30AM
                        </Typography>
                      </Stack>

                      <Stack direction='row'>
                        <Chip sx={{backgroundColor: 'default.main'}} size="small" label="black stallions" />
                      </Stack>
                    </Stack>
                  </Button>


                  <Button sx={{ width: '100%', gridColumn: 'span 2' }} onClick={handleOpen('ssf')} color='success'>
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
                          <CheckRoundedIcon sx={{ mr: '10px' }} /> Shake Shake Fries
                        </Typography>
                        <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                          8:30-9:30AM
                        </Typography>
                      </Stack>

                      <Stack direction='row'>
                        <Chip sx={{backgroundColor: 'error.main'}} size="small" label="Single Round-Robin" />
                      </Stack>
                    </Stack>
                  </Button>



                  <Button sx={{ width: '100%', gridColumn: 'span 2' }} onClick={handleOpen('tt')} color='success'>
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
                          <CheckRoundedIcon sx={{ mr: '10px' }} /> Table Tennis
                        </Typography>
                        <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                          8:30-9:30AM
                        </Typography>
                      </Stack>

                      <Stack direction='row'>
                        <Chip sx={{backgroundColor: 'default.main'}} size="small" label="SEMIS" />
                      </Stack>
                    </Stack>
                  </Button>


                  <Button sx={{ width: '100%', gridColumn: 'span 2' }} onClick={handleOpen('bbjr')} color='success'>
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
                          <CheckRoundedIcon sx={{ mr: '10px' }} /> Basketball JR
                        </Typography>
                        <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                          9:30-11:00AM
                        </Typography>
                      </Stack>

                      <Stack direction='row'>
                        <Chip sx={{backgroundColor: 'error.main'}} size="small" label="3rd" />
                      </Stack>
                    </Stack>
                  </Button>



                  <Button sx={{ width: '100%', gridColumn: 'span 2' }} onClick={handleOpen('gog')} color='success'>
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
                          <CheckRoundedIcon sx={{ mr: '10px' }} /> GOG
                        </Typography>
                        <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                          9:30-11:00AM
                        </Typography>
                      </Stack>

                      <Stack direction='row'>
                        <Chip sx={{backgroundColor: 'error.main'}} size="small" label="1st & 2nd" />
                      </Stack>

                    </Stack>
                  </Button>



                  <Button sx={{ width: '100%', gridColumn: 'span 4' }} color="info">
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
                          <HourglassBottomRounded sx={{ mr: '10px' }} /> Break
                        </Typography>
                        <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                          9:30-10:0AM
                        </Typography>
                      </Stack>

                    </Stack>
                  </Button>



                  


                  <Button sx={{ width: '100%', gridColumn: 'span 2' }} onClick={handleOpen('badmintonMix')}>
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
                          <HourglassBottomRounded sx={{ mr: '10px' }} /> Badminton Mix
                        </Typography>
                        <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                          12:00-1:00PM
                        </Typography>
                      </Stack>

                      <Stack direction='row'>
                        <Chip sx={{backgroundColor: 'error.main'}} size="small" label="finals" />
                      </Stack>

                    </Stack>
                  </Button>


                  <Button sx={{ width: '100%', gridColumn: 'span 2' }} onClick={handleOpen('mobileLegends')}>
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
                          <HourglassBottomRounded sx={{ mr: '10px' }} /> Mobile Legends
                        </Typography>
                        <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                          12:00-1:00PM
                        </Typography>
                      </Stack>

                      <Stack direction='row'>
                        <Chip sx={{backgroundColor: 'error.main'}} size="small" label="3rd" />
                      </Stack>

                    </Stack>
                  </Button>

                  <Button sx={{ width: '100%', gridColumn: 'span 2' }} onClick={handleOpen('badmintonWomenSr')}>
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
                          <HourglassBottomRounded sx={{ mr: '10px' }} /> Badminton Women SR
                        </Typography>
                        <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                          1:00-2:00PM
                        </Typography>
                      </Stack>

                      <Stack direction='row'>
                        <Chip sx={{backgroundColor: 'error.main'}} size="small" label="finals" />
                      </Stack>

                    </Stack>
                  </Button>

                  <Button sx={{ width: '100%', gridColumn: 'span 2' }} onClick={handleOpen('scrabble')}>
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
                          <HourglassBottomRounded sx={{ mr: '10px' }} /> Scrabble
                        </Typography>
                        <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                          1:00-2:00PM
                        </Typography>
                      </Stack>

                      <Stack direction='row'>
                        <Chip sx={{backgroundColor: 'error.main'}} size="small" label="3rd" />
                      </Stack>

                    </Stack>
                  </Button>

                  <Button sx={{ width: '100%', gridColumn: 'span 2' }} onClick={handleOpen('badmintonMenSr')}>
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
                          <HourglassBottomRounded sx={{ mr: '10px' }} /> Badminton Men SR
                        </Typography>
                        <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                          1:00-2:00PM
                        </Typography>
                      </Stack>

                      <Stack direction='row'>
                        <Chip sx={{backgroundColor: 'error.main'}} size="small" label="finals" />
                      </Stack>

                    </Stack>
                  </Button>

                  <Button sx={{ width: '100%', gridColumn: 'span 2' }} onClick={handleOpen('gog3rd')}>
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
                          <HourglassBottomRounded sx={{ mr: '10px' }} /> GOG
                        </Typography>
                        <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                          1:00-2:00PM
                        </Typography>
                      </Stack>

                      <Stack direction='row'>
                        <Chip sx={{backgroundColor: 'error.main'}} size="small" label="3rd" />
                      </Stack>

                    </Stack>
                  </Button>


                  <Button sx={{ width: '100%', gridColumn: 'span 4' }} onClick={handleOpen('badmintonMenJr')}>
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
                          <HourglassBottomRounded sx={{ mr: '10px' }} /> Badminton Men JR
                        </Typography>
                        <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                          2:00-3:30PM
                        </Typography>
                      </Stack>

                      <Stack direction='row'>
                        <Chip sx={{backgroundColor: 'error.main'}} size="small" label="finals" />
                      </Stack>

                    </Stack>
                  </Button>


                  
                  <Button sx={{ width: '100%', gridColumn: 'span 4' }} onClick={handleOpen('badmintonWomenJr')}>
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
                          <HourglassBottomRounded sx={{ mr: '10px' }} /> Badminton Women JR
                        </Typography>
                        <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                          2:00-3:30PM
                        </Typography>
                      </Stack>

                      <Stack direction='row'>
                        <Chip sx={{backgroundColor: 'error.main'}} size="small" label="finals" />
                      </Stack>

                    </Stack>
                  </Button>



                  <Button sx={{ width: '100%', gridColumn: 'span 4' }} onClick={handleOpen('basketballSr')}>
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
                          <HourglassBottomRounded sx={{ mr: '10px' }} /> Basketball SR
                        </Typography>
                        <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                          3:30-4:30PM
                        </Typography>
                      </Stack>

                      <Stack direction='row'>
                        <Chip sx={{backgroundColor: 'error.main'}} size="small" label="semis" />
                      </Stack>

                    </Stack>
                  </Button>
                  


                  

                  

                </Box>







                </TabPanel>
                <TabPanel value="2" sx={{ p: 0, m: 0 }}>
                  <Typography>Will be processed at the end of the day.</Typography>
                </TabPanel>
              </TabContext>
            </Box>
          </Paper>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}
