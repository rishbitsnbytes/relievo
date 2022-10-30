import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Link, Typography } from "@mui/material";
import { hamburgerList } from "../../constants/hamburgerList";
import { headerIcon, typographyStyle } from "../../utils/commonStyles";

const HeaderHamburgerMenu = () => {

    const [showHamburgerPopup, setShowHamburgerPopup] = useState(false);

    const toggleHamburgerPopupView = () => {
        showHamburgerPopup === false ? setShowHamburgerPopup(true) : setShowHamburgerPopup(false)
    }

    return (
        <Box sx={{ position: 'relative' }}>
            <MenuIcon
                sx={headerIcon}
                onClick={() => toggleHamburgerPopupView()} />
            {
                showHamburgerPopup && <Box
                    sx={{
                        border: '1px solid #6261bd',
                        backgroundColor: 'primary.main',
                        borderRadius: 1,
                        position: 'absolute',
                        width: '13rem',
                        p: 2,
                        zIndex: 2,
                    }}>
                    {
                        hamburgerList.map((listItem, index) =>
                            <Link
                                key={index}
                                href={listItem?.link}>
                                <Typography
                                    sx={{
                                        ...typographyStyle,
                                        color: 'otherColors.gray',
                                        '&:hover': {
                                            color: 'otherColors.action'
                                        }
                                    }}>
                                    {
                                        listItem?.name
                                    }
                                </Typography>
                            </Link>)
                    }
                </Box>
            }
        </Box>
    );
}

export { HeaderHamburgerMenu };