import React from 'react'
import { withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button'

const homeButton = withRouter(({history}) => {
    return (
        <Button color="inherit" onClick={() => history.push('/')}>Home</Button>
    )
})

export default homeButton