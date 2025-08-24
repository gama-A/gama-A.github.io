import { Avatar, Box, Stack, Typography, List, ListItem } from "@mui/material";
import MuiLink from '@mui/material/Link';
import { Link } from "react-router-dom";

export function ResumeTab() {
    return (
        <Box className='resume-education' display="flex" flexDirection={"column"} gap={2}>
            <Box>
                <Typography variant="h2" align={"center"}>Education</Typography>
            </Box>
            <Box display="flex" gap={2} justifyContent="left" alignItems="left">
                <MuiLink component={Link} to="https://engineering.ucsb.edu/" sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar
                        alt="UCSB Logo"
                        src="/src/assets/gaucho.webp"
                        variant='rounded'
                        sx={{ width: 80, height: 80 }}
                    />
                </MuiLink>
                    <Box>
                        <Typography variant="h4">UC Santa Barbara</Typography>
                        <Typography variant="h5">Computer Science BS</Typography>
                    </Box>
            </Box>
            <Box>
                <Typography variant="h2" align={"center"}>Work Experience</Typography>
            </Box>
            <Box display="flex" gap={2} alignContent={"center"}>
                <MuiLink component={Link} to="https://www.sonatech.com/" sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box
                        component="img"
                        sx={{ height: 50, width: 91 }}
                        alt="Sonatech Logo"
                        src="/src/assets/sonatech.png" 
                    />
                </MuiLink>
                <Stack direction="column" gap={2}>
                    <Box>
                        <Typography variant="h4" align="left">Software Engineer - Sonatech</Typography>
                        <Typography variant="h5" align="left">April 2024 - Present</Typography>
                        <List sx={{ listStyleType: 'disc', pl: 4 }}>
                            <ListItem sx={{ display: 'list-item', p: 0 }}>
                                Design and implementation of Gitlab CI/CD pipelines
                            </ListItem>
                            <ListItem sx={{ display: 'list-item', p: 0 }}>
                                Implemented embedded system solutions in C/C++
                            </ListItem>
                            <ListItem sx={{ display: 'list-item', p: 0 }}>
                            Supported user application development primarily in the backend and occasionally the frontend debugging/feature additions 
                            </ListItem>
                        </List>
                    </Box>
                    <Box>
                        <Typography variant="h4" align="left">Test Technician - Sonatech</Typography>
                        <Typography variant="h5" align="left">June 2023 - April 2024</Typography>
                        <List sx={{ listStyleType: 'disc', pl: 4 }}>
                            <ListItem sx={{ display: 'list-item', p: 0 }}>
                                Aided in manufacturing  tasks or served as an engineering support when necessary 
                            </ListItem>
                            <ListItem sx={{ display: 'list-item', p: 0 }}>
                            Tested electronic hardware (PCBS to full systems) to ensure product quality and functionality
                            </ListItem>
                            <ListItem sx={{ display: 'list-item', p: 0 }}>
                            Troubleshooting of hardware and software issues using both hardware and software tools 
                            </ListItem>
                        </List>
                    </Box>
                </Stack>
            </Box>
            <Box display="flex" gap={2} justifyContent={"left"}>
                <MuiLink component={Link} to="https://www.ilm.com/" sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box
                        component="img"
                        sx={{ height: 91, width: 91 }}
                        alt="ILM Logo"
                        src="/src/assets/ilm.png" 
                    />
                </MuiLink>
                <Box>
                    <Typography variant="h4" align="left">Media Systems Engineer Inter - ILM</Typography>
                    <Typography variant="h5" align="left">June 2022 - September 2022</Typography>
                    <List sx={{ listStyleType: 'disc', pl: 4 }}>
                        <ListItem sx={{ display: 'list-item', p: 0 }}>
                            Development of inhouse streaming platform Hyperdrive Solo, to properly detect stream failures
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', p: 0 }}>
                            Installment of media hardware onto rack servers
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', p: 0 }}>
                            Script automation of clearing outdated files from workstations using Python
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', p: 0 }}>
                            Day-to-day support on various tasks such as OLED calibration and infrastructure cabling 
                        </ListItem>
                    </List>
                </Box>
            </Box>
            <Box>
                <Typography variant="h2" align={"center"}>Skills</Typography>
            </Box>
            <Stack direction={"row"} gap={5} textAlign={"center"}>
                <Box>
                    <List sx={{ listStyleType: 'disc', pl: 4 }}>
                        <ListItem sx={{ display: 'list-item', p: 0 }}>
                            Operating Systems: Linux (Ubuntu, RHEL), Windows, MacOS
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', p: 0 }}>
                            Tools: Gitlab, Docker/Podman, Gitlab CI/CD, VSCode, Vim
                        </ListItem>
                    </List>
                </Box>
                <Box>
                    <List sx={{ listStyleType: 'disc', pl: 4 }}>
                        <ListItem sx={{ display: 'list-item', p: 0 }}>
                            Programming Languages: C/C++, Python, Typscript, Embedded C/C++ 
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', p: 0 }}>
                           Fluent in Spanish, Office Suite 
                        </ListItem>
                    </List>
                </Box>
            </Stack>
        </Box>
    )
}