import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export function BioTab() {
    return (
        <Box sx={{ p: 2 }}>
            <Typography p={1} align="left" component="p">
                I am a software engineer, musician and photographer.
                This site is designed to showcase my current work experience and interests.
                Feel free to explore. My primary interests are in the utilization and design
                of software tools to aid and create media.
            </Typography>
            <br />
            <Typography p={1} align="left" component="p">Antigua, Guatemala</Typography>
            <Box
                component="img"
                src="https://res.cloudinary.com/ddblggaen/image/upload/v1766211525/58211990_ecl3ae.jpg"
                sx={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain"
                }}/>
        </Box>
    );
}