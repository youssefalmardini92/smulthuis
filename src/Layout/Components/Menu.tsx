import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import React from "react";
import {Box, Button, useMediaQuery} from "@mui/material";
import FoodBankSharpIcon from '@mui/icons-material/FoodBankSharp';
import Subtitle from "../Typography/Subtitle";
import BlockText from "../Typography/BlockText";

const Menu = () => {
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <Paper
            elevation={3}
            sx={{
                width: '100%',
                maxWidth: '600px',
                margin: '0 auto',
                position: 'relative',
            }}
        >
            <div style={{ position: 'relative' }}>
                <Box
                    sx={{
                        width: isMobile ? 75 : 100,
                        height: isMobile ? 75 : 100,
                        background: '#4caf50',
                        position: 'absolute',
                        top: 0,
                        right: 25,
                        zIndex: 1,
                        borderBottomLeftRadius: '10px',
                    }}
                >
                    <Typography color={'white'} variant={isMobile ? "h6" : "h5"} textAlign={'center'} fontWeight={500} p={isMobile ? 1 : 2} fontFamily={"'Rowdies', cursive"}> 15% korting</Typography>
                </Box>
                <Typography variant={isMobile ? "h5" : "h4"} fontWeight={400} sx={{ padding: '25px'}} fontFamily={"'Rowdies', cursive"}>
                    Woensdag menu
                </Typography>
                <img
                    width={'100%'}
                    src={
                        'https://athomewithshay.com/wp-content/uploads/2019/01/Crispy-Baked-Gluten-Free-Buffalo-Chicken-Wings-1024x683.jpeg'
                    }
                    alt="Menu Item"
                    style={{ padding: '20px', marginTop: '30px'  }}
                />
                <Subtitle content={"Heerlijk voedsel"} sx={{ ml: '25px' }} />
                <BlockText
                    content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit finibus feugiat. Fusce vulputate convallis purus, eget placerat mauris. Aenean feugiat ac nisi ac pellentesque. Suspendisse fringilla aliquam augue, venenatis volutpat sapien sagittis dignissim. Curabitur mollis ac velit ut venenatis. Integer nisl ligula, blandit vel aliquam aliquet, interdum non purus. Nam a augue non nibh faucibus laoreet id non ex. Etiam ut nisi ac est luctus fringilla et sit amet erat. Curabitur et nibh hendrerit, efficitur dui eget, accumsan ligula. Vestibulum non sem dolor. Mauris vehicula risus sit amet pharetra egestas. Suspendisse tincidunt interdum lectus vitae egestas."}
                    sx={{ p: '25px' }}
                />
                <Box sx={{ marginRight: '25px', paddingBottom: '25px', display: 'flex', justifyContent: 'end' }}>
                    <Button variant="contained" color='success' size="large" endIcon={<FoodBankSharpIcon fontSize={'large'} />}>
                        Dit wil ik!
                    </Button>
                </Box>
            </div>
        </Paper>
    );
};

export default Menu;
