import React from 'react';
import CoverView from "../../Layout/Featured/CoverView";

type PageProps = {
    headerTitle: any;
    slogan: string;
    title: string;
    pageContent: JSX.Element;
}

const Page = ({headerTitle, slogan, title, pageContent} : PageProps) => {

    React.useEffect(() => {
        document.title = `Smulthuis - ${headerTitle}`
    }, [headerTitle]);

    return (
        <CoverView title={title} subtitle={slogan} pageContent={pageContent}></CoverView>
    );
};

export default Page;
