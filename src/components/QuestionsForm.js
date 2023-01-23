import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';


export default function QuestionsForm() {
  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        Please answer these questions:
      </Typography>
      
      <Grid container spacing={6}>
        
        <Grid item xs={12} md={12}>
        <Typography variant="h6" gutterBottom>
      Do you live in a house or in an apartment?
      </Typography>
          <TextField
            required
            id="q1"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={12}>
        <Typography variant="h6" gutterBottom>
        How many people live with you and how old are they?
      </Typography>
          <TextField
            required
            id="q1"
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} md={12}>
        <Typography variant="h6" gutterBottom>
        Is anyone in your family allergic to animal hair?
      </Typography>
          <TextField
            required
            id="q1"
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} md={12}>
        <Typography variant="h6" gutterBottom>
        Are there other pets in your home?
      </Typography>
          <TextField
            required
            id="q1"
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} md={12}>
        <Typography variant="h6" gutterBottom>
        What are you going to feed your dog? What kind of feed?
      </Typography>
          <TextField
            required
            id="q1"
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} md={12}>
        <Typography variant="h6" gutterBottom>
        What will happen to the dog during your trips, holidays, etc.?

      </Typography>
          <TextField
            required
            id="q1"
            fullWidth
            variant="standard"
          />
        </Grid>
        
        <Grid item xs={12} md={12}>
        <Typography variant="h6" gutterBottom>
        How many hours a day will the dog be left home alone?

      </Typography>
          <TextField
            required
            id="q1"
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} md={12}>
        <Typography variant="h6" gutterBottom>
        How often will the dog go for walks and will he be allowed to go out unattended?

      </Typography>
          <TextField
            required
            id="q1"
            fullWidth
            variant="standard"
          />
        </Grid>

      </Grid>
      
    </React.Fragment>
  );
}