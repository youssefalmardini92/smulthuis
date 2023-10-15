import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import DrawerAppBar from "./Layout/Navigation/DrawerAppBar";
import {ThemeProvider} from '@mui/material/styles';
import {PrimaryTheme, DarkTheme} from "../src/themes";
import pages from "./constants/pages";
import Page from "./Layout/Page/Page";
import Footer from "./Layout/Navigation/Footer";
import Container from "@mui/material/Container";
import {useLocalStorage} from "usehooks-ts";

const App: React.FC = () => {

    const [isDarkTheme] = useLocalStorage('darkTheme', false);

    return (
        <BrowserRouter>
            <ThemeProvider theme={isDarkTheme ? DarkTheme : PrimaryTheme}>
                <Container maxWidth="lg">
                    <DrawerAppBar/>
                    <Routes>
                        {
                            pages.map(page => {
                                return (
                                    <Route
                                        key={page.name}
                                        path={page.path}
                                        element={
                                            <Page
                                                headerTitle={page.headerTitle}
                                                pageContent={page.content()}
                                                title={page.title}
                                                slogan={page.slogan}
                                            />
                                        }
                                    />
                                )
                            })
                        }
                    </Routes>
                    <Footer/>
                </Container>
            </ThemeProvider>
        </BrowserRouter>
    )
};

export default App;
