import React, {useEffect, useState} from 'react';
import {Box, Grid, Typography} from "@mui/material";

type CoverViewProps = {
    title: string;
    subtitle: string;
    pageContent: JSX.Element;
}

const CoverView = ({ pageContent, title, subtitle } : CoverViewProps) => {
    const [mobile, setMobile] = useState(window.innerWidth <= 500);

    const handleWindowSizeChange = () => {
        setMobile(window.innerWidth <= 500);
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, []);

    return (
        <Grid container columns={1}>
            <Grid item xs={1}>
                <Box
                    textAlign="center"
                    sx={{
                        minHeight: '75vh',
                    }}
                >
                    <Box sx={{ paddingTop: '25vh' }}>
                        <Typography variant={mobile ? 'h2' : 'h1'} component="h1" sx={{ fontFamily: "'Rowdies', cursive" }}>
                            { title }
                        </Typography>
                        <Typography variant="subtitle1" sx={{ pb: 5, fontFamily: "'Montserrat Alternates', sans-serif" }} display="block">
                            { subtitle }
                        </Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item sx={{ minWidth: '100%' }}>
                {pageContent}
            </Grid>
        </Grid>
    )
};

export default CoverView;
