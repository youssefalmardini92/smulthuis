import MainPage from "../Pages/Mian";
import MenuPage from "../Pages/Menu";
import AboutPage from "../Pages/About";
import WorkPage from "../Pages/Work";

type Page = {
    title: string;
    slogan: string;
    name: string;
    headerTitle: string;
    path: string;
    hasCover: boolean;
    content: () => JSX.Element;
};

const pages: Page[] = [
    {
        title: 'Smulthuis',
        slogan: 'homemade with love',
        name: 'home',
        headerTitle: 'home',
        path: '/',
        hasCover: true,
        content: MainPage,
    },
    {
        title: 'Menu',
        slogan: 'Our delicious meals',
        name: 'menu',
        headerTitle: 'menu',
        path: '/menu',
        hasCover: true,
        content: MenuPage,
    },
    {
        title: 'About',
        slogan: 'Wie zijn we?',
        name: 'about',
        headerTitle: 'about',
        path: '/about',
        hasCover: true,
        content: AboutPage,
    },
    {
        title: 'Samenwerken?',
        slogan: '',
        name: 'work',
        headerTitle: 'work-together',
        path: '/work',
        hasCover: true,
        content: WorkPage,
    }
];

export default pages;
