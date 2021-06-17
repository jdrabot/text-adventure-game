import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Character() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
          <CardActionArea>
              {/* image */}
        <CardMedia
          className={classes.media}
          image="//#endregion"
          title="#"
        />
              <CardContent>
                  {/* hero name */}
          <Typography gutterBottom variant="h5" component="h2">
                      #
          </Typography>
                  {/* stats */}
          <Typography variant="body2" color="textSecondary" component="p">
            HP:
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}


export default Character;
