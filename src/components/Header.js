import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
import 'fontsource-roboto';

export default function Header() {

    const theme = useContext(ThemeContext)

    return (
        <>
        <Grid container justifyContent="center" alignItems="flex-end" style={theme.containerFirstTitle}>
            <Grid item>
                <div style={theme.openFirstTitle} />
            </Grid>
            <Grid item>
                <Typography variant="h6" style={theme.firstTitle} >Making your Life Easier</Typography>
            </Grid>
            <Grid item>
                <div style={theme.closeFirstTitle} />
            </Grid>
        </Grid>
        <Grid container justifyContent="center" alignItems="flex-end" style={theme.containerSecondTitle}>
            <Typography variant="h3" style={theme.secondTitle} >Discovering the World</Typography>
        </Grid>
        </>
    )
}