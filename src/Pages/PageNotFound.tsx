import React from 'react';
import { Route } from "react-router-dom";
import Page from "../Layout/Page/Page";

const PageNotFound = () => (
    <Route path="*"
           element={
                <Page
                    headerTitle={"page-not-found"}
                    pageContent={<h1>We cant find the page you are looking for</h1>}
                />
        }
    />
);

export default PageNotFound;
