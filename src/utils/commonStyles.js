export const flexCenter = {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
}

export const flexSpaceAround = {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-around',
}

export const headerIcon = {
    fontSize: { xs: '1.5rem', md: '2rem' },
    color: 'otherColors.action',
    cursor: 'pointer'
}

export const typographyStyle = {
    fontFamily: 'Gruppo',
    fontWeight: 'bold',
}

export const landingPageSubsectionHeading = {
    color: 'secondary.main',
    fontSize: '1.5rem',
    textAlign: 'center'
}

export const scrollbarStyling = {
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
        width: '5px'
    },
    '&::-webkit-scrollbar-track': {
        boxShadow: 'inset 0 0 5px #d4d4d4',
        borderRadius: '1rem'
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#6261bd',
        borderRadius: '50%'
    }
}

export const contentSectionScollbarStyle = {
    height: '90vh',
    ...scrollbarStyling
}

export const previewBox = {
    ...flexCenter,
    backgroundColor: 'primary.main',
    border: '1px solid #6261bd',
    borderRadius: 1,
    justifyContent: 'center',
    height: '50%',
    position: 'relative'
}

export const codePreviewBoxes = {
    backgroundColor: 'primary.main',
    borderRadius: 1,
    width: '50%',
    height: '100%',
    p: 1,
    position: 'relative'
}

export const copyIcon = {
    color: 'otherColors.action',
    cursor: 'pointer',
    fontSize: '1.2rem',
    position: 'absolute',
    top: '10px',
    right: '10px',
    '&:hover': {
        color: 'secondary.main'
    }
}

export const generatorBoxSubsectionHeading = {
    ...typographyStyle,
    background: 'rgba(98, 97, 189, 0.3)',
    borderRadius: 1,
    color: 'otherColors.gray',
    textAlign: 'center',
    mb: 1.5,
    mt: 1
}

export const generatorBoxSubsectionInputContainer = {
    display: 'flex',
    flexDirection: 'column',
    gap: 1
}

export const generatorBoxTextField = {
    width: '100%',
    input: {
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        color: 'otherColors.gray',
        ...typographyStyle,
    }
}

export const homePagesubsectionOuterContainer = {
    alignItems: 'center',
    display: 'flex',
    flexDirection: { xs: 'column-reverse', md: 'row' },
    flexGrow: 0,
    justifyContent: 'space-around',
    gap: { xs: 10, md: 2 },
    padding: { xs: '4rem 0.5rem 6rem 0.5rem', sm: '6rem 2rem 6rem 2rem', lg: '6rem 3rem 6rem 3rem' },
}

export const homePagesubsectionInnerContainer = {
    alignItems: { xs: 'center', md: 'flex-start' },
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    pl: { xs: '1rem', lg: '4rem' }
}

export const hompageSubsectionHighlightedTypography = {
    ...typographyStyle,
    color: 'otherColors.action',
    fontSize: { xs: '1.3rem', sm: '1.5rem' },
    textAlign: { xs: 'center', md: 'left' }
}

export const hompageSubsectionNormalTypography = {
    ...typographyStyle,
    color: 'otherColors.gray',
    display: 'inline-block',
    fontWeight: 'light',
    fontSize: { xs: '1rem', sm: '1.1rem' }
}

export const homepageSubsectionNestedBox = {
    alignItems: 'center',
    width: { xs: '90%', md: '70%' },
    display: 'flex',
    justifyContent: 'flex-end',
    gap: { xs: 5, md: 10 },
    p: 1,
    pb: '3rem'
}

export const featureBox = {
    border: '4px solid #EF4F4F',
    borderRadius: '50%',
    cursor: 'pointer',
    ...flexCenter,
    justifyContent: 'center',
    width: { xs: '7rem', md: '10rem' },
    height: { xs: '7rem', md: '10rem' },
    '&:hover': {
        boxShadow: '0px 0px 5px 1px #EF4F4F'
    }
}

