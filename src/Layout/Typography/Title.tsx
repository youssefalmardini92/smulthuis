import {Typography} from "@mui/material";
import React from "react";
import {Fonts} from "../../enums/Fonts";

interface TitleProps extends TypographyProps {
}

const Title = ({content, sx}: TitleProps) => {
    return <Typography sx={sx} variant="h3" fontFamily={Fonts.PRIMARY}>
        {content}
    </Typography>
};

export default Title;
