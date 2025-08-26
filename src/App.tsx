import './css/App.css'
import theme from './css/theme'
import { TabsComponent, getTabs } from './components/Tabs'
import { Card, CardContent, ThemeProvider, Typography, Box } from '@mui/material'
import { Image } from 'mui-image'
import { AboutComponent } from './components/About'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            minHeight: 0,
            maxHeight: '100vh',
          }}>
          <Box sx={{ display: 'flex', flex: '1 1 auto', gap: 2, flexDirection: { xs: 'column', md: 'row' }, alignItems: 'flex-start', minHeight: 0 }}>
            <Box sx={{ flex: { xs: '1 1 auto', md: '0 0 30%' }, minWidth: 0 }}>
              <Typography variant="h1" component="div" align="left">Gama Aristondo</Typography>
              <Typography variant="h2" component="div" align="left">Welcome to my page</Typography>
              <Card style={{ backgroundColor: 'rgb(35,35,35)' }}>
                <CardContent>
                  <AboutComponent />
                </CardContent>
              </Card>
              <Image
                className='self-portrait'
                alt="Self Portrait"
                src="/src/assets/portrait.jpg"
                width="25vw"
                height="65vh"
              />
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'block' }, width: '1px', bgcolor: '#ffffffcc', mx: 1, alignSelf: 'stretch' }} />
            <Box sx={{ flex: { xs: '1 1 auto', md: '1 1 70%' }, minHeight: 0, overflow: 'auto' }}>
              <TabsComponent tabs={getTabs} />
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  )
}

export default App
