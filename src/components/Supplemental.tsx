import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export function SupplementalTab() {
    return (
        <Box sx={{ p: 2 }}>
            <Typography p={1} align="left" variant="h2">Documents</Typography>
            <Button variant="contained" color="secondary">Unofficial Transcript</Button>
        </Box>
    );
}