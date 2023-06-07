import React, { createContext, useContext, useState } from "react";
import { Button, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
    marginTop: theme.spacing(8),
  },
  title: {
    marginBottom: theme.spacing(4),
  },
  score: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const ScoreContext = createContext();

const ScoreProvider = ({ children }) => {
  const [score, setScore] = useState(0);

  const incrementScore = () => {
    setScore(score + 1);
  };

  return <ScoreContext.Provider value={{ score, incrementScore }}>{children}</ScoreContext.Provider>;
};

const ScoreDisplay = () => {
  const { score } = useContext(ScoreContext);
  const classes = useStyles();

  return (
    <Typography variant="h4" component="h2" className={classes.score}>
      Score: {score}
    </Typography>
  );
};

const ScoreButton = () => {
  const { incrementScore } = useContext(ScoreContext);
  const classes = useStyles();

  return (
    <Button variant="contained" color="primary" onClick={incrementScore} className={classes.button}>
      Increment Score
    </Button>
  );
};

const ClickGame = () => {
  const classes = useStyles();

  return (
    <ScoreProvider>
      <Container className={classes.container}>
        <Typography variant="h2" component="h1" className={classes.title}>
          Click Game
        </Typography>
        <ScoreDisplay />
        <ScoreButton />
      </Container>
    </ScoreProvider>
  );
};

export default ClickGame;
