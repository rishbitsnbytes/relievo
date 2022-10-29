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
    fontSize: '2rem',
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