import React from 'react';
import Container from "@mui/material/Container";
import {Box} from "@mui/material";
import Title from "../Layout/Typography/Title";
import BlockText from "../Layout/Typography/BlockText";
import Subtitle from "../Layout/Typography/Subtitle";
import {useAppSelector} from "../hooks";

const ContentPage = () => {

    const resource = useAppSelector(state => {
        return state.app.resource;
    });

    return (
        <Container>
            <Box sx={{
                paddingTop: '15rem',
            }}>
                <Title content={resource.title}/>
                <Subtitle content={resource.subtitle} />
                <BlockText content={resource.content} />
            </Box>
        </Container>
    );
};

export default ContentPage;
