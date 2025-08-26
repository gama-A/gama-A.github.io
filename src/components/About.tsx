import { Avatar, Typography } from "@mui/material";
import Muilink from '@mui/material/Link';

export function AboutComponent() {
    return (
        <Typography component="div" variant="body1" align="left">
            This page is intended to demonstrate both my skills as a programmer and my other special interests. <br />
            Feel free to explore the tabs to see my work and experience.<br/>Contact me:<br/>
            <Muilink href="https://www.linkedin.com/in/gama-aristondo-634a80210/">
                <Avatar
                    alt="linkedin"
                    src="/src/assets/in-logo/InBug-Black.png"
                    variant="square"
                />
            </Muilink>
            <Muilink href="mailto:gama.aristondo@gmail.com" color="secondary">gama.aristondo@gmail.com</Muilink>
        </Typography>
    );
}