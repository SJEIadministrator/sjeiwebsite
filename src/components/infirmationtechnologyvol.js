import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { informationtechnology } from "./post";

const useStyles = makeStyles({
  root: {
    minWidth: 200
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },

  title: {
    fontSize: 18,
    color: "black"
  },
  pos: {
    marginBottom: 2,
    fontSize: "0.8em"
  }
});

export default function InformationTechnologyVol() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className="rowflex">
      {informationtechnology.map((postdetail, index) => {
        return (
          <div className="carddetail">
            <Card className={classes.root}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  <img
                    className="imagewidth"
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
        );
      })}
    </div>
  );
}
