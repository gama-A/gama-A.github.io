import './css/App.css'
import theme from './css/theme'
import { TabsComponent, getTabs } from './components/Tabs'
import { Card, CardContent, ThemeProvider, Typography, Box, Divider, Avatar } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import Muilink from '@mui/material/Link'

function App() {
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            height: { xs: 'auto', md: '100%'},
            display: 'flex',
            flexDirection: 'column',
            minHeight: 0,
            maxHeight: { xs: 'auto', md: '100vh'},
          }}>
          <Box
            sx={{
              display: 'flex',
              flex: '1 1 auto',
              gap: 2,
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'flex-start', md: 'stretch' },
              overflow: { xs: 'visible', md: 'hidden' },
            }}>
            <Box sx={{ flex: { md: '0 0 30%' }, minWidth: 0 }}>
              <Typography variant="h1" component="div" align="left">Gama Aristondo</Typography>
              <Typography variant="h2" component="div" align="left">Welcome to my page</Typography>
              <Card style={{ backgroundColor: 'rgb(35,35,35)' }}>
                <CardContent>
                  <Typography component="div" variant="body1" align="left">
                      Feel free to explore the tabs to see my work, experience and interests.<br/>Contact me:<br/>
                      <Muilink href="https://www.linkedin.com/in/gama-aristondo-634a80210/" underline='hover'>
                          <Avatar
                              alt="linkedin"
                              src={import.meta.env.BASE_URL + "/assets/InBug-White.png"}
                              variant="square"
                          />
                      </Muilink>
                      <Muilink href="mailto:gama.aristondo@gmail.com" color="secondary">gama.aristondo@gmail.com</Muilink>
                  </Typography>
                </CardContent>
              </Card>
              <Box
                component="img"
                src="https://res.cloudinary.com/ddblggaen/image/upload/v1756532619/portrait_rkbjeg.jpg"
                sx={{
                  width: { xs: "80%", md: "100%" },
                  height: "auto",
                  maxHeight: { xs: "40vh", md: "60vh" },
                  objectFit: "contain",
                  display: "block",
                  mx: "auto",
                  mt: 2,
                }}
              >
              </Box>
              {isMobile && (
                <Box sx={{ mt: 2 }}>
                  <TabsComponent tabs={getTabs} />
                </Box>
              )}
            </Box>
            <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', md: 'block' }, bgcolor: 'text.primary', mx: 1 }} />
            <Box sx={{ flex: { md: '1 1 70%' }, minHeight: 0, overflow: 'auto', display: isMobile ? 'none' : 'block' }}>
              <TabsComponent tabs={getTabs} />
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  )
}

export default App
