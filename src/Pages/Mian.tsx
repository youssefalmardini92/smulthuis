import React from 'react';
import {Box, Typography, Button, useMediaQuery} from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const items = [
    {
        title: 'Kok aan Huis',
        subtitle: 'Het lekkerst maaltijd wordt bij je thuis gemaakt!',
        text: 'komt graag bij jou thuis en creëert een onvergetelijke eetervaring. Van romantische diners tot gezellige familiemaaltijden, we zorgen voor heerlijke gerechten, bereid met verse ingrediënten en een vleugje passie. Bekijk ons menu en reserveer vandaag nog!',
        image: 'https://www.aswakeukens.nl/wp-content/uploads/2019/04/Idris-de-Semi-Pro-Thuiskok-ATAG-we-love-to-cook-ASWA-Keukens.jpg',
    },
    {
        title: 'Kookworkshops',
        subtitle: 'Gezellig, heerlijk & leerzaam',
        text: 'Wil je leren koken als een professionele chef? Doe mee aan onze kookworkshops en ontdek de geheimen achter de lekkerste gerechten. Of je nu een beginner bent of al wat ervaring hebt, onze workshops zijn geschikt voor iedereen. Bekijk ons workshopschema en schrijf je in!',
        image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/09/bf/a7/91.jpg',
    },
    {
        title: 'Evenementen Catering',
        subtitle: 'Toch je keuken met rust laten? Dan komt je maaltijd naar je thuis',
        text: 'Maak van je speciale gelegenheid een culinair feest met onze evenementencatering. Of het nu gaat om een bruiloft, verjaardag, bedrijfsbijeenkomst of een ander evenement, we bieden op maat gemaakte menu\'s die perfect passen bij jouw smaak en stijl. Ontdek onze cateringopties en neem contact met ons op voor een offerte op maat.',
        image: 'https://www.usnews.com/object/image/00000183-c80e-d275-afdb-ddde65dc0000/gettyimages-1318003130.jpg?update-time=1665508946139&size=responsive640',
        buttonText: 'Bekijk menu'
    },
];

const imageStyle = {
    width: '100%',
    height: 'auto',
};

const MainPage = () => {
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <>
            {items.map((item, index) => (
                <Box
                    key={index}
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
                            src={item.image}
                            alt={item.title}
                            style={imageStyle}
                        />
                    </Box>
                    <Box
                        sx={{
                            flex: 1,
                            padding: isMobile ? '1rem' : '2rem',
                            textAlign: 'center',
                        }}
                    >
                        <Box sx={{ maxWidth: 400, mx: 'auto' }}>
                            <Typography variant="h3" sx={{ fontFamily: "'Rowdies', cursive" }}>{item.title}</Typography>
                            <Typography variant="subtitle2" color="text.secondary" sx={{ pb: 2, fontFamily: "'Montserrat Alternates', sans-serif" }}>
                                {item.subtitle}
                            </Typography>
                            <Typography variant="body1" sx={{ fontFamily: "'Montserrat Alternates', sans-serif" }}>{item.text}</Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'center', pt: 3 }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    endIcon={<MenuBookIcon />}
                                    sx={{ fontFamily: "'Rowdies', cursive" }}
                                >
                                    {item.buttonText ? item.buttonText : "Meer lezen"}
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
