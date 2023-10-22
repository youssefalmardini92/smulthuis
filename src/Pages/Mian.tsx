import React, {useEffect, useState} from 'react';
import {Box, Typography, Button, useMediaQuery} from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import {allServices} from "../controllers/ServiceController";

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
                            <Typography variant="h3" sx={{fontFamily: "'Rowdies', cursive"}}>{item.title}</Typography>
                            <Typography variant="subtitle2" color="text.secondary"
                                        sx={{pb: 2, fontFamily: "'Montserrat Alternates', sans-serif"}}>
                                {item.subtitle}
                            </Typography>
                            <Typography variant="body1"
                                        sx={{fontFamily: "'Montserrat Alternates', sans-serif"}}>{item.content}</Typography>
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
