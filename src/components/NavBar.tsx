import React from "react";
import { useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
  root: {
    "& > * + *": {
      marginLeft: theme.spacing(2)
    }
  },
  active: {
    textDecoration: "underline"
  }
}));

export default function NavBar() {
  const classes = useStyles();
  const location = { pathname: "we won't have this until we use a router" };
  //const location = useLocation();

  return (
    <AppBar className="displace" position="static">
      <Toolbar>
        <Typography variant="h5" className={classes.root}>
          <Link
            href="/quiz"
            color="inherit"
            className={
              location.pathname === "/quiz" || location.pathname === "/"
                ? classes.active
                : "inactive"
            }
          >
            Quiz
          </Link>
          <Link
            href="/greeting"
            color="inherit"
            className={
              location.pathname === "/greeting" ? classes.active : "inactive"
            }
          >
            Greeting
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export function NoMatch() {
  let location = useLocation();

  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h1">404</Typography>
        <Typography variant="h6">
          The page {location.pathname} cannot be found
        </Typography>
      </header>
    </div>
  );
}
