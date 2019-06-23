import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const aboutComponent = () => {
  return (
      <>
        <Grid container spacing={10}>
          <Grid item xs={6}>
            <Paper>
              fill me out
            </Paper>
          </Grid>
          <Grid item>
            pic here
          </Grid>
        </Grid>
      </>
  )
}

export default aboutComponent