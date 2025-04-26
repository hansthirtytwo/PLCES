import { useState } from 'react';
import { createTheme, Stack, ThemeProvider } from '@mui/material';
import { orange, blue } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
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
                    <Tab label="Intramurals 2024-2025" value="1" />
                  </TabList>
                </Box>
                <TabPanel value="1" sx={{ padding: 0, margin: 0, maxHeight: '300px', overflow: 'scroll', overflowX: 'hidden' }}>
                  <MenuList>


                    <MenuItem component={Link} to="/intramurals/254/">
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
              </TabContext>
            </Box>
          </Paper>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}
