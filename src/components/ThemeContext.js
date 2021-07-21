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
    },
    createButton: {
        marginRight: '20px',
        padding: '10px',
        backgroundColor: '#f59c16',
        color: 'white',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    },
    linkIcon:{
        position: 'absolute',
        zIndex:'1',
        right: '30px',
        top: '260px'
    },
    modalErrorMessage: {
        color: '#f59c16',
        marginTop: '15px'
    },
    filterTabs: {
        boxShadow: 'none'
    },
    filterTabSelected: {
        textTransform: 'none',
        width: '80px',
        color: '#2e2e2d', 
        borderColor: '#a8a8a8', 
        border: '1px solid #e6e6e6',
        boxShadow: 'none',
        backgroundColor: '#c9c9c9'
    },
    filterTabNoSelected: {
        textTransform: 'none',
        width: '80px',
        color: '#2e2e2d', 
        borderColor: '#a8a8a8', 
        border: '1px solid #e6e6e6',
        boxShadow: 'none',
        backgroundColor: 'white'
    },

}

const ThemeContext = React.createContext()

export { ThemeContext, theme }