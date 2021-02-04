import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { communicationmarketing } from './post';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 18,
    color: 'black',
  },
  pos: {
    marginBottom: 2,
    fontSize: '0.8em',
  },
});

export default function CommunicationMarketingVol() {
  const classes = useStyles();

  return (
    <div className="rowflex">
      {communicationmarketing.map((postdetail, index) => (
        <div className="carddetail card1">
          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                <img
                  className="imagewidth w3-container w3-center w3-animate-opacity"
                  src={postdetail.Img}
                  Alt="volunteer"
                />
                <br />
                {postdetail.Name}
              </Typography>

              <Typography className={classes.pos} color="textSecondary">
                {postdetail.Post}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>
      ))}
    </div>
  );
}
