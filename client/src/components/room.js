import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';

const useStyles = makeStyles({
  root: {
    maxWidth: 1035,
  },
  media: {
    height: 280,
  },
});

export default function Room() {
  const classes = useStyles();

  return (
      <Card className={classes.root}>
        <CardHeader>#</CardHeader>
          <CardActionArea>
              {/* location title */}
          <Typography gutterBottom variant="h5" component="h2">
                  #
          </Typography>
              {/* image */}
        <CardMedia
          className={classes.media}
          image="//#endregion"
          title="#"
        />
        <CardContent>
                  {/* dialog */}
          <Typography variant="body2" color="textSecondary" component="p">
           #
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}


export default Room;
