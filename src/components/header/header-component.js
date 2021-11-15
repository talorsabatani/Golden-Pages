import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  mainHeader: {
    textTransform: "none",
  },
  actions: {
    marginLeft: "auto",
  },
  actionButton: {
    marginLeft: 4,
  },
  accountButton: {
    marginLeft: "auto",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

const HeaderComponent = (props) => {
  const { user } = props;

  const classes = useStyles();

  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Button component={Link} to={"/"} color="inherit">
            <Typography className={classes.mainHeader} variant="h6">
              Golden Pages
            </Typography>
          </Button>

          {user ? (
            <div className={classes.actions}>
              <Button
                className={classes.actionButton}
                component={Link}
                to={"/createService"}
                color="inherit"
              >
                Create Service
              </Button>

              <IconButton
                component={Link}
                to={"/user"}
                className={classes.accountButton}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
          ) : (
            <div className={classes.actions}>
              <Button
                className={classes.actionButton}
                component={Link}
                to={"/signIn"}
                color="inherit"
              >
                Sign In
              </Button>

              <Button
                className={classes.actionButton}
                component={Link}
                to={"/logIn"}
                color="inherit"
              >
                Log In
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default HeaderComponent;
