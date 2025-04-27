import { useState } from 'react';
import { createTheme, Divider, Stack, ThemeProvider, IconButton, ListItemText, List, ListItem, ListItemButton, CardContent, Grid, Stepper, Step, StepLabel, Button, AvatarGroup, Avatar } from '@mui/material';
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
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
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
                  <Typography variant='h6' sx={{fontWeight: '400'}}>Sir Oliver</Typography>
                </Stack>

              </Stack>


              <Stack direction='row'>
                <Chip color="success" icon={<CheckRoundedIcon />} label="GG" />
              </Stack>

            </Stack>

          )}

          {selectedModal === 'float' && (
            <Stack spacing={1}>
              <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <Typography variant='h6'>Float Parade</Typography>
                <Typography>8:00-9:30 AM</Typography>
              </Stack>
              <Divider/>

              <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                
                <Stack sx={{textTransform: 'uppercase', textAlign: 'center', mt: '10px', mb: '10px'}}>
                  <Typography variant='h5' sx={{fontWeight: 'bold'}}>Venue</Typography>
                  <Typography variant='h6' sx={{fontWeight: '400'}}>court</Typography>
                </Stack>

                <Stack sx={{textTransform: 'uppercase', textAlign: 'center', mt: '10px', mb: '10px'}}>
                  <Typography variant='h5' sx={{fontWeight: 'bold'}}>Judges</Typography>
                  <Typography variant='h6' sx={{fontWeight: '400'}}>
                    <Chip sx={{backgroundColor: "#aa42ff", m: 0.2}} size="small" label="Sir Josh" />
                    <Chip sx={{backgroundColor: "#aa42ff", m: 0.2}} size="small" label="Sir Tristan" /><br/>
                    <Chip sx={{backgroundColor: "#aa42ff", m: 0.2}} size="small" label="Ms Zoey" />
                    <Chip sx={{backgroundColor: "#aa42ff", m: 0.2}} size="small" label="Ms Nina" />
                  </Typography>
                </Stack>

              </Stack>


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
                        <Chip sx={{backgroundColor: '#aa42ff'}} size="small" label="sir oliver" />
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
