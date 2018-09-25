import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const Header = () => {
    return(
        <div>
        <AppBar position="static">
            <Toolbar>
                <Link to="/">
                    <Typography variant="title" color="inherit">
                        Header
                    </Typography>
                </Link>
            </Toolbar>
        </AppBar>
        </div>
    )
}

export default Header;