import {
  makeStyles,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import ENTITIES_CONSTANTS from "../../constants/entities";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 250,
    flexShrink: 0,
  },
  list: {
    paddingTop: 64,
    width: 250,
  },
  listItem: {
    paddingTop: 16,
    paddingBottom: 16,
  },
}));

const MenuComponent = (props) => {
  const { isLoggedin } = props;
  const classes = useStyles();

  const renderListItems = () => {
    return ENTITIES_CONSTANTS.map((ENTITY, index) => {
      return (
        <ListItem
          className={classes.listItem}
          component={Link}
          to={isLoggedin ? ENTITY.plural.toLowerCase() : "/"}
          key={index}
          button
        >
          <ListItemIcon>
            <ENTITY.Icon />
          </ListItemIcon>
          <ListItemText primary={ENTITY.plural} />
        </ListItem>
      );
    });
  };

  return (
    <Drawer anchor="left" variant="permanent" className={classes.drawer}>
      <List className={classes.list}>{renderListItems()}</List>
    </Drawer>
  );
};

export default MenuComponent;
