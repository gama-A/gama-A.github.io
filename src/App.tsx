import './css/App.css'
import theme from './css/theme'
import { TabsComponent, getTabs } from './components/Tabs'
import { Card, CardContent, ThemeProvider, Typography, Box } from '@mui/material'
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
          <Typography variant="h1" component="div">Gama Aristondo</Typography>
          <Typography variant="h2" component="div">Welcome to my page</Typography>
          <Card style={{ backgroundColor: 'black'}}>
            <CardContent>
              <AboutComponent />
            </CardContent>
          </Card>
          <Box sx={{ flexGrow: 1, minHeight: 0, overflow: 'auto'}}>
            <TabsComponent tabs={getTabs}/>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  )
}

export default App
