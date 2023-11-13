import React, {useEffect, useState} from 'react';
import {Box, Typography, Button, useMediaQuery} from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import {allServices} from "../controllers/ServiceController";
import Title from "../Layout/Typography/Title";
import Subtitle from "../Layout/Typography/Subtitle";
import BlockText from "../Layout/Typography/BlockText";
import {Fonts} from "../enums/Fonts";
import {Link} from "react-router-dom";
import {useAppDispatch} from "../hooks";
import {appSlice} from "../store/reducers/appSlice";

const MainPage = () => {
    const dispatch = useAppDispatch();
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

    const setAppResource = ({ title, subtitle, content }) => {
        dispatch(appSlice.actions.setResource({
            resource: {
                title: title,
                subtitle: subtitle,
                content: content,
            }
        }))
    }

    return (
        <>
            {services.map((item, index) => (
                <Box
                    key={item.id}
                    sx={{
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : (index % 2 === 0 ? 'row' : 'row-reverse'),
                        alignItems: 'center',
                        backgroundColor: !isMobile && index % 2 === 0 ? 'secondary.light' : 'secondary.main',
                        width: '90%',
                        m: '0 auto',
                        mb: 5,
                    }}
                >
                    <Box
                        sx={{
                            flex: 1,
                            display: 'flex',
                            justifyContent: index % 2 === 0 ? '' : 'end'
                        }}
                    >
                        <img
                            src={item.imageUrl}
                            alt={item.title}
                            style={{
                                width: 400,
                                height: 400,
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
                                <Link to={'/content'}>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        endIcon={<MenuBookIcon/>}
                                        sx={{fontFamily: Fonts.PRIMARY, fontSize: 12 }}
                                        onClick={() => setAppResource( {
                                            title: item.title,
                                            subtitle: item.subtitle,
                                            content: item.content,
                                        })}
                                    >
                                        Meer lezen
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            ))}
        </>
    );
};

export default MainPage;
