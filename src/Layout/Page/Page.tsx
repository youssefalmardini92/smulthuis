import React from 'react';
import CoverView from "../../Layout/Featured/CoverView";

type PageProps = {
    headerTitle: any;
    slogan?: string;
    title?: string;
    pageContent?: JSX.Element;
    pageNotFound?: boolean;
}

const Page = ({headerTitle, slogan, title, pageContent, pageNotFound} : PageProps) => {

    React.useEffect(() => {
        document.title = `Smulthuis - ${headerTitle}`
    }, [headerTitle]);

    if (pageNotFound) {
        return (
            <CoverView title={"404"} subtitle={"Page not found"} pageContent={pageContent}></CoverView>
        )
    }

    return (
        <CoverView title={title} subtitle={slogan} pageContent={pageContent}></CoverView>
    );
};

export default Page;
