import React from 'react'
import { withRouter } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

const navBarButton = withRouter(({history, buttonText, link, icon}) => {
  return (
    <>
      <ListItem button color="inherit" onClick={() => history.push(link)}>
          <ListItemIcon>
              {icon}
          </ListItemIcon>
          <ListItemText>
              {buttonText}
          </ListItemText>
      </ListItem>
    </>
  )
})

export default navBarButton