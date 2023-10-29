import {Typography} from "@mui/material";
import React from "react";
import {Fonts} from "../../enums/Fonts";

interface SubtitleProps extends TypographyProps {
}

const Subtitle = ({content, sx}: SubtitleProps) => {
    return <Typography
        sx={sx}
        variant="subtitle2"
        color={"text.secondary"}
        fontFamily={Fonts.SECONDARY}>
        {content}
    </Typography>
};

export default Subtitle;
