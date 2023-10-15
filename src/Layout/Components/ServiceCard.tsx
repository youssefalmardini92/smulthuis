import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import FoodBankIcon from '@mui/icons-material/FoodBank';
import MenuBookIcon from '@mui/icons-material/MenuBook';

interface ServiceCardProps {
    title: string;
    subtitle: string;
    content: string;
}

const ServiceCard = ({ title, subtitle, content } : ServiceCardProps) => {

    return (
        <Card sx={{ display: 'flex', justifyContent: 'space-between', m: '1em'}}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Box sx={{  pt: '10px' }}>
                        <Typography component="div" variant="h5">
                            { title }
                        </Typography>
                        <Typography variant="subtitle2" color="text.secondary" component="div">
                            { subtitle }
                        </Typography>
                    </Box>
                    <Box sx={{  pt: '10px' }}>
                        <Typography variant="body2" component="div">
                            { content }
                        </Typography>
                    </Box>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1, pt: 1 }}>
                    <Button variant="outlined" color="success" endIcon={<FoodBankIcon />}>
                        Dit wil ik!
                    </Button>
                    <Button variant="outlined" color="info" sx={{ ml: 1 }} endIcon={<MenuBookIcon />}>
                        Meer lezen
                    </Button>
                </Box>
            </Box>
            <CardMedia
                component="img"
                sx={{ width: 200 }}
                image="https://uploads-ssl.webflow.com/60d1f0b413ba8348509a33a6/632054ac16db8a61c4572be2_how-to-be-a-better-cook-19.jpg"
                alt="Live from space album cover"
            />
        </Card>
    );
}

export default ServiceCard;