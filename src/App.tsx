import React, {useEffect} from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import DrawerAppBar from "./Layout/Navigation/DrawerAppBar";
import {ThemeProvider} from '@mui/material/styles';
import {PrimaryTheme, DarkTheme} from "../src/themes";
import pages from "./constants/pages";
import Page from "./Layout/Page/Page";
import Footer from "./Layout/Navigation/Footer";
import Container from "@mui/material/Container";
import { useLocalStorage } from "usehooks-ts";
import ContentPage from "./Pages/Content";

const App: React.FC = () => {

    const [isDarkTheme] = useLocalStorage('darkTheme', false);
    const navElements = document.getElementsByTagName("nav");

    useEffect( ()=> {
        // Get all the nav elements
        const nav = navElements[0];

        if (nav) {
            window.addEventListener("scroll", () => {
                if (window.scrollY > 100) {
                    nav.style.background = "rgba(0, 0, 0, 0.4)";
                } else {
                    nav.style.background = "rgba(0, 0, 0, 0)";
                }
            });
        }

    }, [])

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
                        <Route path="*"
                               element={
                                   <Page
                                       headerTitle={"page-not-found"}
                                       pageNotFound
                                   />
                               }
                        />
                        <Route path="/content" element={<ContentPage />}></Route>
                    </Routes>
                    <Footer/>
                </Container>
            </ThemeProvider>
        </BrowserRouter>
    )
};

export default App;
