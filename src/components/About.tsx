import { Box, Typography, Divider } from "@mui/material";

export function AboutTab() {
    return (
        <Box sx={{ p: 2 }}>
            <Typography p={2}>
                Hello. This site is designed to showcase my current work experience and primary interests of photography and music. Feel free to explore the tabs to see my work.
            </Typography>
            <Divider component="div" role="presentation"/>
            <Typography p={2} variant="h5">
                This website was designed and progammed primarily using the Material UI library
            </Typography>
        </Box>
    );
}