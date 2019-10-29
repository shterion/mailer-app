import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'

function Header() {
    return (
        <AppBar color="primary" position="static">
            <Toolbar>
                <TypoGraphy variant="inherit"
                    color="inherit"
                >
                    Email Composer
                    </TypoGraphy>
            </Toolbar>
        </AppBar>
    )
}

export default Header;