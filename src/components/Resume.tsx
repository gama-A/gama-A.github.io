import { Avatar, Box, Stack, Typography, List, ListItem, Grid } from "@mui/material";
import MuiLink from '@mui/material/Link';
import { Link } from "react-router-dom";

// TODO: change the box elements here to Grid elements

export function ResumeTab() {
    return (
        <Stack spacing={2}>
            <Box sx={{ px: 2, width: '100%' }}>
                <Typography variant="h2" align={"center"}>Education</Typography>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
                <Grid
                    container
                    size={{ xs: 2, sm: 2, md: 2 }}
                    spacing={2}
                    sx={{ justifyContent: "center", alignItems: "center" }}
                >
                    <Grid size="auto">
                        <MuiLink component={Link} to="https://engineering.ucsb.edu/">
                            <Avatar
                                alt="UCSB Logo"
                                src="https://lh3.googleusercontent.com/d/1jNw5Ywwq56FHP8AJzoBlShaY7O49cAPC=s220?authuser=0"
                                style={{ width: 90, height: 90, borderRadius: 8 }}
                            />
                        </MuiLink>
                    </Grid>
                    <Grid size={{ xs: 10, sm: 10, md: 4}}>
                        <Typography variant="h3">UC Santa Barbara, B.S. Computer Science</Typography>
                        <Typography variant="h5">September 2019 - June 2023</Typography>
                        <Typography variant="h5">Cumulative GPA: 3.3</Typography>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                        <Typography variant="h4" sx={{ mb: 0.5 }}>Relevant Coursework/Programs</Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 'clamp(0.5rem, 1.5vw, 1rem)',
                                minWidth: 0,
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                flexWrap: "wrap" }}>
                            <Box sx={{ flex: 1, minWidth: 120 }}>
                                <List component={"p"} sx={{ listStyleType: 'disc', pl: 4, mt: 0 }}>
                                    <ListItem sx={{ display: 'list-item', p: 0 }}>Computer Graphics</ListItem>
                                    <ListItem sx={{ display: 'list-item', p: 0 }}>Human Computer Interaction</ListItem>
                                    <ListItem sx={{ display: 'list-item', p: 0 }}>Interactive Systems</ListItem>
                                </List>
                            </Box>
                            <Box sx={{ flex: 1, minWidth: 120 }}>
                                <List component="p" sx={{ listStyleType: 'disc', pl: 4, mt: 0 }}>
                                    <ListItem sx={{ display: 'list-item', p: 0 }}>Multimedia Systems</ListItem>
                                    <ListItem sx={{ display: 'list-item', p: 0 }}>Society of Hispanic Professional Engineers</ListItem>
                                </List>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Typography variant="h2" align={"center"}>Work Experience</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row'}, alignItems: { xs: 'center', md: 'flex-start' }, gap: 2, alignContent: 'center' }}>
                <MuiLink component={Link} to="https://www.sonatech.com/" sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box
                        component="img"
                        sx={{ height: 50, width: 91 }}
                        alt="Sonatech Logo"
                        src="https://lh3.googleusercontent.com/d/1xj0xzp5uX71JzY9_-CohhenscySuec7m=s220?authuser=0" 
                    />
                </MuiLink>
                <Stack direction="column" sx={{ gap: 'clamp(0.25rem, 1.2vw, 0.75rem)' }}>
                    <Box>
                        <Typography variant="h4" align="left">Software Engineer - Sonatech</Typography>
                        <Typography variant="h5" align="left">April 2024 - Present</Typography>
                        <List sx={{ listStyleType: 'disc', pl: 4 }}>
                            <ListItem sx={{ display: 'list-item', p: 0 }}>
                                Design and implementation of Gitlab CI/CD pipelines for automated builds, tests, publishment, and release of software
                            </ListItem>
                            <ListItem sx={{ display: 'list-item', p: 0 }}>
                                Implemented embedded system solutions in C/C++ which communicated over 3 unique protocols: Serial UART, Iridium satellite, and open source navigation API
                            </ListItem>
                            <ListItem sx={{ display: 'list-item', p: 0 }}>
                                Supported user application development primarily in the backend and occasionally the frontend debugging/feature additions 
                            </ListItem>
                            <ListItem sx={{ display: 'list-item', p: 0 }}>
                                Verification of UI components through testing at various assembly stages and usage of test equipment such as DACs, oscilloscopes, and signal generators
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
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row'}, alignItems: { xs: 'center', md: 'flex-start' }, gap: 2, alignContent: 'center' }}>
                <MuiLink component={Link} to="https://www.ilm.com/" sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box
                        component="img"
                        sx={{ height: 91, width: 91 }}
                        alt="ILM Logo"
                        src="https://lh3.googleusercontent.com/d/1m_qQIBihl8P_KXaFqsUzTGl9IkaASdur=s220?authuser=0" 
                    />
                </MuiLink>
                <Box>
                    <Typography variant="h4" align="left">Media Systems Engineer Intern - ILM</Typography>
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
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row'}, alignItems: { xs: 'center', md: 'flex-start' }, gap: 2, alignContent: 'center' }}>
                <MuiLink component={Link} to="https://www.northropgrumman.com/" sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box
                        component="img"
                        sx={{ height: 91, width: 91 }}
                        alt="Northrop Grumman Logo"
                        src="https://lh3.googleusercontent.com/d/1MprqR4nGxh0aVFMWZ61iTVhJDX6CPTl8=s220?authuser=0" 
                    />
                </MuiLink>
                <Box>
                    <Typography variant="h4" align="left">Intern - Northrop Grumman</Typography>
                    <Typography variant="h5" align="left">Feburary 2019 - May 2019</Typography>
                    <List sx={{ listStyleType: 'disc', pl: 4 }}>
                        <ListItem sx={{ display: 'list-item', p: 0 }}>
                            Gathered quality information and organized it onto various Excel spreadsheets
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', p: 0 }}>
                            Assisted mentors with on floor inspections of F-35 components
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', p: 0 }}>
                            Handled the organization of different quality inspection fails for products on factory floor
                        </ListItem>
                    </List>
                </Box>
            </Box>
            <Box>
                <Typography variant="h2" align={"center"}>Skills</Typography>
            </Box>
            <Stack direction={"row"} sx={{ gap: 'clamp(0.5rem, 3vw, 2rem)', textAlign: 'center' }}>
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
        </Stack>
    )
}