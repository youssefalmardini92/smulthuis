import * as React from "react";
import {Link} from "@mui/material";
import Button from "@mui/material/Button";
import {Fonts} from "../../enums/Fonts";

interface NavItemProps {
    name: string;
    route: string;
}

const NavItem = ({ name, route }: NavItemProps) => {
    return (
        <Link href={route} underline="none">
            <Button key={name}  sx={{
                fontFamily: Fonts.PRIMARY,
                color: "text.primary",
                fontSize: 12,
            }}>
                {name}
            </Button>
        </Link>
    );
}

export default NavItem;
