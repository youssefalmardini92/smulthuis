import React, {useEffect, useState} from 'react';
import {Box, Typography, Button, useMediaQuery} from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import {allServices} from "../controllers/ServiceController";
import Title from "../Layout/Typography/Title";
import Subtitle from "../Layout/Typography/Subtitle";
import {Block} from "@mui/icons-material";
import BlockText from "../Layout/Typography/BlockText";

const MainPage = () => {
    const isMobile = useMediaQuery('(max-width:600px)');

    const [services, setServices] = useState([]);

    useEffect(() => {
        allServices().then((response) => {
            const data = response['data'].listServices.items;

            if (data) {
                setServices(data.sort((a, b) => a.weight - b.weight));
            }
        })
    }, []);

    return (
        <>
            {services.map((item, index) => (
                <Box
                    key={item.id}
                    sx={{
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : (index % 2 === 0 ? 'row' : 'row-reverse'),
                        alignItems: 'center',
                        padding: isMobile ? '1rem' : '3rem',
                        backgroundColor: !isMobile && index % 2 === 0 ? 'secondary.light' : 'secondary.main',
                        marginBottom: '1rem',
                    }}
                >
                    <Box
                        sx={{
                            flex: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <img
                            src={item.imageUrl}
                            alt={item.title}
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                        />
                    </Box>
                    <Box
                        sx={{
                            flex: 1,
                            padding: isMobile ? '1rem' : '2rem',
                            textAlign: 'center',
                        }}
                    >
                        <Box sx={{maxWidth: 400, mx: 'auto'}}>
                            <Title content={item.title} />
                            <Subtitle content={item.subtitle} sx={{ pb: 2 }}/>
                            <BlockText content={item.content} />
                            <Box sx={{display: 'flex', justifyContent: 'center', pt: 3}}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    endIcon={<MenuBookIcon/>}
                                    sx={{fontFamily: "'Rowdies', cursive"}}
                                >
                                    Meer lezen
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            ))}
        </>
    );
};

export default MainPage;
