import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import {Facebook, Instagram, LinkedIn} from "@mui/icons-material";
import {Box, useMediaQuery} from "@mui/material";

const Footer = () => {
    const isMobile = useMediaQuery('(max-width:600px)'); // Check for mobile screens

    return (
        <Box
            component="footer"
            sx={{
                position: 'relative ',
                bottom: 0,
                mt: '15rem',
                p: '5%',
            }}
        >
            <Container maxWidth="xl">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            About Us
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            We are XYZ company, dedicated to providing the best service to our
                            customers.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            Contact Us
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            123 Main Street, Anytown, USA
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Email: info@example.com
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Phone: +1 234 567 8901
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={2} sx={{textAlign: isMobile ? 'left' : 'right'}}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            Follow Us
                        </Typography>
                        <Link href="https://www.facebook.com/profile.php?id=100066961813841" color="inherit">
                            <Facebook/>
                        </Link>
                        <Link
                            href="https://www.instagram.com/smulthuis/"
                            color="inherit"
                            sx={{pl: 1, pr: 1}}
                        >
                            <Instagram/>
                        </Link>
                        <Link href="https://www.twitter.com/" color="inherit">
                            <LinkedIn/>
                        </Link>
                    </Grid>
                </Grid>
                <Box mt={5} sx={{marginTop: '75px'}}>
                    <Typography variant="body2" color="text.secondary" align="center">
                        {"Copyright © "}
                        <Link color="inherit" href="https://smulthuis.nl/">
                            smulthuis.nl
                        </Link>{" "}
                        {new Date().getFullYear()}
                        {"."}
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;
