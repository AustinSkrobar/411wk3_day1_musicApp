import React, { useState } from "react";
import {
  makeStyles,
  Grid,
  Card,
  CardActions,
  CardContent,
  Typography,
  Switch,
  Slider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    width: 250,
    height: 300,
  },
  card: {
    textAlign: "center",
  },
});

export default function Dashboard(props) {
  const classes = useStyles();
  const [volume, setVolume] = useState(30);
  const [Quality, setQuality] = useState(2);

  const handleQualityChange = (event) => {
    setQuality(event.target.value);
  };

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
  };

  const handleChange = () => {
    return props.setIsOnline(!props.isOnline);
  };

  return (
    <div>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing="3"
      >
        <Grid item xs={4} sm={4}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography variant="h5" className={classes.card} gutterBottom>
                Online Mode
              </Typography>
              <Typography>
                Is this application connected to the internet?
              </Typography>
            </CardContent>
            <CardActions>
              <Switch
                checked={props.isOnline}
                onChange={handleChange}
                name="checkedA"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4} sm={4}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography variant="h5" className={classes.card} gutterBottom>
                Master Volume
              </Typography>
              <Typography>
                Overides all other sound settings in this application
              </Typography>
            </CardContent>
            <CardActions>
              <Typography id="discrete-slider" gutterBottom>
                Volume
              </Typography>
              <Slider
                value={volume}
                onChange={handleVolumeChange}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={10}
                marks
                min={10}
                max={100}
              />
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4} sm={4}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography variant="h5" className={classes.card} gutterBottom>
                Sound Quality
              </Typography>
              <Typography>
                Manually control the music quality in event of poor connection
              </Typography>
            </CardContent>
            <CardActions>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Quality</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={Quality}
                  onChange={handleQualityChange}
                >
                  <MenuItem value={1}>Low</MenuItem>
                  <MenuItem value={2}>Normal</MenuItem>
                  <MenuItem value={3}>High</MenuItem>
                </Select>
              </FormControl>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <h3>System Notifications:</h3>
      {props.isOnline ? (
        <p>You are Online.</p>
      ) : (
        <p>
          Your application is offline. You won't be able to share or stream
          music to other devices.
        </p>
      )}
      {console.log("this is volume: ", volume)}
      {volume > 80 ? (
        <p>
          Listening to music at a high volume could cause long-term hearing
          loss.
        </p>
      ) : (
        <p>All good</p>
      )}
      {Quality === 1 ? (
        <p>
          Music quality is degraded. Increase quality if your connection allows
          it.
        </p>
      ) : (
        <p>:D</p>
      )}
    </div>
  );
}
