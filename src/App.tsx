import "./css/App.css";
import theme from "./css/theme";
import { TabsComponent } from "./components/Tabs";
import type { TabItems } from "./components/Tabs";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Muilink from "@mui/material/Link";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";
import { PhotosTab } from "./components/Photos";
import { MusicTab } from "./components/Music";
import { ResumeTab } from "./components/Resume";
import { SupplementalTab } from "./components/Supplemental";
import { useEffect, useState } from "react";


const myPictures = [
  "https://res.cloudinary.com/ddblggaen/image/upload/v1756532619/portrait_rkbjeg.jpg",
  "https://res.cloudinary.com/ddblggaen/image/upload/v1765858954/000883540010_duo39h.jpg"
]

function FadingImages() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % myPictures.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box 
      sx={{
        position: "relative",
        height: { xs: "40vh", md: "45vh" },
        mt: 1,
        mx: "auto"
      }}>
      {myPictures.map((img, i) => (
        <Box
          component="img"
          src={img}
          key={img}
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
            transition: "opacity 1s ease-in-out",
            opacity: i === index ? 1 : 0,
          }}
        />
      ))}
    </Box>
  )
}

function App() {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  
  const getTabs: TabItems[] =
  [
    {
      label: "Resume",
      content: (<ResumeTab />)
    },
    {
      label: "Photography",
      content: (<PhotosTab isMobile={isMobile}/>) 
    },
    {
      label: "Music",
      content: (<MusicTab />)
    },
    {
      label: "Additional Info",
      content: (<SupplementalTab />)
    },
  ];

  return (
    <>
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <Box
          sx={{
            height: { xs: "auto", md: "100%" },
            width: { xs: "auto", md: "100%" },
            display: "flex",
            flexDirection: "column",
            minHeight: 0,
            maxHeight: { xs: "auto", md: "100vh" },
            maxWidth: { xs: "auto", md: "100vw" },
          }}>
          <Box
            sx={{
              display: "flex",
              flex: "1 1 auto",
              gap: 2,
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "flex-start", md: "stretch" },
              overflow: { xs: "visible", md: "hidden" },
            }}>
            <Box sx={{ flex: { md: "0 0 30%" }, minWidth: 0 }}>
              <Typography variant="h1" component="div" align="left">Gama Aristondo</Typography>
              <Typography variant="h2" component="div" align="left">Welcome to my page.</Typography>
              <Card style={{ backgroundColor: "rgb(35,35,35)" }}>
                <CardContent>
                  <Typography p={0.25} component="div" variant="body1" align="left">
                      This site is designed to showcase my current work experience and interests. Feel free to explore.<br/>
                      (This site is progammed with Material UI components)<br/><br/>
                      <Muilink href="https://www.linkedin.com/in/gama-aristondo-634a80210/" color="#FFFFFF" sx={{ display: "inline-flex", alignItems: "center", mr: 0.5}}>
                        <LinkedInIcon fontSize="large"/>
                      </Muilink>
                      <Muilink href="https://github.com/gama-A" color="#FFFFFF" sx={{ display: "inline-flex", alignItems: "center", mr: 0.5}}>
                        <GithubIcon fontSize="large"/>
                      </Muilink>
                      <Muilink href="mailto:gama.aristondo@gmail.com" color="#FFFFFF" sx={{ display: "inline-flex", alignItems: "center", mr: 0.5}}>
                        <EmailIcon fontSize="large"/>
                      </Muilink>
                  </Typography>
                </CardContent>
              </Card>
              <FadingImages />
              {isMobile && (
                <Box sx={{ mt: 2 }}>
                  <TabsComponent tabs={getTabs} />
                </Box>
              )}
            </Box>
            <Divider orientation="vertical" flexItem sx={{ display: { xs: "none", md: "block" }, bgcolor: "text.primary", mx: 1 }} />
            <Box sx={{ flex: { md: "1 1 70%" }, minHeight: 0, overflow: "auto", display: isMobile ? "none" : "block" }}>
              <TabsComponent tabs={getTabs} />
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  )
}

export default App
