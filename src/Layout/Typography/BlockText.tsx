import {Typography} from "@mui/material";
import React from "react";
import {Fonts} from "../../enums/Fonts";

interface BlockTextProps extends TypographyProps {
}

const BlockText = ({content, sx}: BlockTextProps) => {
    return <Typography sx={sx} variant="body2" fontFamily={Fonts.SECONDARY}>{content}</Typography>
};

export default BlockText;
