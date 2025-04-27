import { useState } from 'react';
import { createTheme, Stack, ThemeProvider, Stepper, Step, StepLabel, StepContent, StepIcon, LinearProgress, Avatar, Card, Divider, Alert } from '@mui/material';
import { orange, blue } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import MilitaryTechRoundedIcon from '@mui/icons-material/MilitaryTechRounded';
import Paper from '@mui/material/Paper';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Typography from '@mui/material/Typography';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Chip from '@mui/material/Chip';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function Home() {
  const [value, setValue] = useState('1');

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
      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100vw', height: '100vh', alignItems: 'center' }}>
        <Stack>
          <Typography textAlign='center' typography='h2' fontWeight='500' sx={{ marginBottom: '10px' }}>PLCES</Typography>
          <Paper
            elevation={2}
            sx={{
              padding: { xs: 1, sm: 2 },
              width: { xs: '95vw', sm: '90vw', md: '80vw' },
              maxWidth: '1200px',
            }}
          >
            <Box sx={{ width: '100%', typography: 'body1' }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                    variant="fullWidth"
                  >
                    <Tab label="CAM Intramurals 2025" value="1" />
                    <Tab label="What is PLCES?" value="2" />
                  </TabList>
                </Box>
                <TabPanel value="1" sx={{ padding: 0, margin: 0, maxHeight: '500px', overflow: 'scroll', overflowX: 'hidden' }}>


                  <Stepper sx={{p: 3}} activeStep={4} alternativeLabel style={{color: "#eaeaf0"}}>
                    <Step>
                      <StepLabel>
                          <Typography>Advanced Games</Typography>
                          <Typography variant="caption">Elimination and other preparation</Typography>
                      </StepLabel>

                    </Step>
                    <Step>
                      <StepLabel>
                          <Typography>Day 1</Typography>
                          <Typography variant="caption">Opening of Intramurals</Typography>
                      </StepLabel>
                    </Step>
                    <Step>
                      <StepLabel>
                          <Typography>Day 2</Typography>
                      </StepLabel>
                    </Step>
                    <Step>
                      <StepLabel>
                          <Typography>Day 3</Typography>
                      </StepLabel>
                    </Step>
                    <Step>
                      <StepLabel>
                          <Typography>Weekends</Typography>
                      </StepLabel>
                    </Step>
                    <Step>
                    <StepLabel>
                          <Typography>Day 4</Typography>
                          <Typography variant="caption">Shake Shake Fries..?</Typography>
                      </StepLabel>
                    </Step>
                    <Step>
                      <StepLabel>
                          <Typography>Day 5</Typography>
                      </StepLabel>
                    </Step>
                    <Step>
                      <StepLabel>
                        <Typography>Day 6 / Family Day</Typography>
                        <Typography variant="caption">Last day, Last Chance.</Typography>
                      </StepLabel>
                  
                    </Step>
                  </Stepper>


                  <Card variant='outlined' sx={{m: 1, p: 2}}>
                    <Stack spacing='10px'>
                      <Typography variant='h6'>Champions Prediction</Typography>
                      <Divider/>
                      <Stack spacing={1} direction='row' sx={{alignItems: 'center'}}>
                        <MilitaryTechRoundedIcon color='warning' fontSize='large'/>
                        <Stack>
                          <Typography fontWeight={'bold'} variant='h5'>Red Eagles</Typography>
                          <Typography>???? pts</Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Card>


                  <Alert color='warning'>Please ignore Day 1 to 3, it wasn't recorded.</Alert>

                  <MenuList>
                    <MenuItem component={Link} to="/intramurals/25/day2">
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Chip
                          sx={{ marginRight: { xs: 1, sm: 2 } }}
                          color="default"
                          label="NOT"
                        />
                        <Stack>
                          <Typography variant="body1">Day 5</Typography>
                          <Typography color="gray" variant="body2">
                            Apr 24, 2025
                          </Typography>
                        </Stack>
                      </Stack>
                    </MenuItem>


                    <MenuItem component={Link} to="/intramurals/25/day4">
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Chip
                          sx={{ marginRight: { xs: 1, sm: 2 } }}
                          color="default"
                          label="NOT"
                        />
                        <Stack>
                          <Typography variant="body1">Day 4</Typography>
                          <Typography color="gray" variant="body2">
                            Apr 24, 2025
                          </Typography>
                        </Stack>
                      </Stack>
                    </MenuItem>


                    <MenuItem component={Link} to="/intramurals/25/day2" disabled>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Chip
                          sx={{ marginRight: { xs: 1, sm: 2 } }}
                          color="success"
                          label="GG"
                        />
                        <Stack>
                          <Typography variant="body1">Day 3</Typography>
                          <Typography color="gray" variant="body2">
                            Apr 25, 2025
                          </Typography>
                        </Stack>
                      </Stack>
                    </MenuItem>

                    <MenuItem component={Link} to="/intramurals/25/day2" disabled>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Chip
                          sx={{ marginRight: { xs: 1, sm: 2 } }}
                          color="success"
                          label="GG"
                        />
                        <Stack>
                          <Typography variant="body1">Day 2</Typography>
                          <Typography color="gray" variant="body2">
                            Apr 24, 2025
                          </Typography>
                        </Stack>
                      </Stack>
                    </MenuItem>



                    <MenuItem component={Link} to="/intramurals/25/day1" disabled>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Chip
                          sx={{ marginRight: { xs: 1, sm: 2 } }}
                          color="success"
                          label="GG"
                        />
                        <Stack>
                          <Typography variant="body1">Day 1</Typography>
                          <Typography color="gray" variant="body2">
                            Apr 23, 2025
                          </Typography>
                        </Stack>
                      </Stack>
                    </MenuItem>




                  </MenuList>
                </TabPanel>
                
              <TabPanel value="2" sx={{ textAlign: 'center', padding: 0, margin: 0, maxHeight: '300px', overflow: 'scroll', overflowX: 'hidden' }}>
                 
                  <Typography sx={{mt: '20px', fontWeight: 'bold'}} variant='h4'>PLCES</Typography>
                  <Typography sx={{mb: '20px'}}>WEBSITE HACKED BY LANCE OR .HAHKAGHS</Typography>


              </TabPanel>
                
                
              </TabContext>
            </Box>
          </Paper>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}
