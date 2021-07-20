import React from 'react'

const theme = {
    containerFirstTitle: {
        marginTop: '40px',
        marginBottom: '15px'
    },
    firstTitle: {
        color: '#f59c16'
    },
    openFirstTitle: {
        width: '15px',
        height: '35px',
        border: '3px solid #f59c16',
        borderRight: '0px'
    },
    closeFirstTitle: {
        width: '15px',
        height: '35px',
        border: '3px solid #f59c16',
        borderLeft: '0px'
    },
    containerSecondTitle: {
        marginTop: '5px',
        marginBottom: '10px'
    },
    secondTitle: {
        color: 'black',
        fontWeight: 'bold'
    }
}

const ThemeContext = React.createContext()

export { ThemeContext, theme }