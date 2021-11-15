import { Avatar, makeStyles, Typography } from "@material-ui/core";
import { ExitToApp } from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router";
import WarnButton from "components/warn-button/warn-button";
import { getAvatarByRole } from "../../services/users";

import "./user-profile-component.scss";

const useStyles = makeStyles((theme) => ({
  header: {
    marginBottom: 24,
  },
  attrName: {
    color: "#757575",
    fontSize: 18,
    fontWeight: 200,
  },
  avatar: {
    width: 56,
    height: 56,
  },
  logoutBotton: {
    marginBottom: 16,
    width: 200,
  },
}));

const UserProfileComponent = (props) => {
  const { user, setUser } = props;

  const { userId, username, avatar, role } = user;
  const { space, email } = userId;

  const history = useHistory();
  const classes = useStyles();

  const logout = () => {
    localStorage.setItem("user", null);
    setUser(null);
    history.push("/");
  };

  return (
    <div id="user-profile-component">
      <Typography className={classes.header} variant="h4">
        User Profile
      </Typography>

      <div className="attr-wrapper">
        <Typography className={classes.attrName}>{"Username"}</Typography>
        <Typography className={classes.attrValue}>{username}</Typography>
      </div>

      <div className="attr-wrapper">
        <Typography className={classes.attrName}>{"E-mail"}</Typography>
        <Typography className={classes.attrValue}>{email}</Typography>
      </div>

      <div className="attr-wrapper">
        <Typography className={classes.attrName}>{"Space"}</Typography>
        <Typography className={classes.attrValue}>{space}</Typography>
      </div>

      <div className="attr-wrapper">
        <Typography className={classes.attrName}>{"Avatar"}</Typography>
        <Avatar
          src={getAvatarByRole(avatar)}
          className={classes.avatar}
        ></Avatar>
      </div>

      <div className="attr-wrapper">
        <Typography className={classes.attrName}>{"Role"}</Typography>
        <Typography className={classes.attrValue}>{role}</Typography>
      </div>

      <WarnButton
        className={classes.logoutBotton}
        startIcon={<ExitToApp />}
        variant="contained"
        onClick={logout}
      >
        Log Out
      </WarnButton>
    </div>
  );
};

export default UserProfileComponent;
