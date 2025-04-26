import { useState } from 'react';
import { createTheme, Divider, Stack, ThemeProvider, IconButton, ListItemText, List, ListItem, ListItemButton, CardContent } from '@mui/material';
import { orange, blue } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Paper from '@mui/material/Paper';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import Chip from '@mui/material/Chip';
import Alert from '@mui/material/Alert';
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

              <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center' }}>
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


              <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="body">Committees Involved</Typography>
                <Stack direction="row" spacing={1}>
                    <Chip color="info" size="small" label="Sir Josh" />
                    <Chip color="info" size="small" label="Sir Tristan" />
                    <Chip color="info" size="small" label="Ms Zoe" />
                    <Chip color="info" size="small" label="Ms Nina" />
                </Stack>
              </Stack>



              <Stack direction="row" sx={{ mt: '3px', mb: '3px', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="body">Venue</Typography>
                <b>Out of CAM</b>
              </Stack>

        
              <Alert severity="info">Placements are not available.</Alert>

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
                    <Tab label="Schedule n' Info" value="1" />
                    <Tab label="Predictions" value="2" />
                  </TabList>
                </Box>
                <TabPanel value="1" sx={{ p: 0, m: 0 }}>
                  <MenuList>


                    <MenuItem onClick={handleOpen('genrel')}>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Chip sx={{ mr: { xs: 1, sm: 2 } }} color="success" label="GG" />
                        <Stack>
                          <Typography variant="body1">General Rehearsal</Typography>
                          <Chip color="error" size="small" variant="outlined" label="Red Eagles" />
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
