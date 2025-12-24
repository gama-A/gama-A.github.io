import "./css/App.css";
import theme from "./css/theme";
import { TabsComponent } from "./components/Tabs";
import type { TabItems } from "./components/Tabs";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Muilink from "@mui/material/Link";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";
import { BioTab } from "./components/Bio";
import { PhotosTab } from "./components/Photos";
import { MusicTab } from "./components/Music";
import { ResumeTab } from "./components/Resume";
import type { TabsComponentProps } from "./components/Tabs";
// import { SupplementalTab } from "./components/Supplemental";
import { useEffect, useState } from "react";
import { Container, GlobalStyles } from "@mui/material";


const myPictures = [
  "https://res.cloudinary.com/ddblggaen/image/upload/v1756532619/portrait_rkbjeg.jpg",
  "https://res.cloudinary.com/ddblggaen/image/upload/v1765858954/000883540010_duo39h.jpg"
]

function FadingImages() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % myPictures.length);
    }, 8000);

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
  
  const tabs: TabItems[] =
  [
    {
      label: "Bio",
      content: (<BioTab />)
    },
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
  ];

  const tabsComponentProps: TabsComponentProps = {
    tabs,
    isMobile
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles styles={{
          html: { height: "100%", overflow: isMobile ? "auto" : "hidden" },
          body: { height: "100%", overflow: isMobile ? "auto" : "hidden" },
          "#root": { height: "100%", overflow: isMobile ? "auto" : "hidden" }
        }}/>
        <Container
          maxWidth="xl"
          disableGutters={false}
          sx={{
            px: { xs: 0.25, md: 6 },
            overflow: { xs: "visible", md: "hidden" },
            height: { xs: "auto", md: "100vh" }
          }}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              minHeight: 0,
            }}>
            <Box
              sx={{
                display: "flex",
                flex: "1 1 auto",
                minHeight: 0,
                gap: 2,
                flexDirection: { xs: "column", md: "row" },
              }}>
              <Box sx={{ flex: { md: "0 0 25%" }, minWidth: 0 }}>
                <Typography variant="h1" component="div" align="left">Gama Aristondo</Typography>
                <Typography variant="h2" component="div" align="left">Welcome to my page.</Typography>
                <Muilink href="https://www.linkedin.com/in/gama-aristondo-634a80210/" color="#FFFFFF" sx={{ justifyContent: "left", mr: 0.5}}>
                  <LinkedInIcon fontSize="large"/>
                </Muilink>
                <Muilink href="https://github.com/gama-A" color="#FFFFFF" sx={{ display: "inline-flex", mr: 0.5}}>
                  <GithubIcon fontSize="large"/>
                </Muilink>
                <Muilink href="mailto:gama.aristondo@gmail.com" color="#FFFFFF" sx={{ display: "inline-flex", mr: 0.5}}>
                  <EmailIcon fontSize="large"/>
                </Muilink>
                <FadingImages />
                {isMobile && (
                  <Box sx={{ mt: 2 }}>
                    <TabsComponent {...tabsComponentProps}/>
                  </Box>
                )}
              </Box>
              <Box
                sx={{
                  flex: { md: "1 1 75%" },
                  minHeight: 0,
                  overflowY: "auto",
                  display: isMobile ? "none" : "block",
                }}>
                <TabsComponent {...tabsComponentProps}/>
              </Box>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
