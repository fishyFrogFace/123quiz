// Renders the sidebar with the list of possible topics
import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import makeStyles from "@material-ui/core/styles/makeStyles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  black: {
    color: "black",
  },
}));

const titles = [
  "Linux",
  "Networking",
  "DevOps",
  "Programming",
  "Cloud",
  "Docker",
];

interface QuizListProps {
  setSelectedQuiz: (name: string) => void;
}

export default function QuizList(props: QuizListProps) {
  const classes = useStyles();
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      classes={{
        paper: classes.drawerPaper,
      }}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
    >
      <div>
        <div className={classes.toolbar} />
        <List>
          <ListItem>
            <ListItemText primary={"Quizzes"} className={classes.black} />
          </ListItem>
        </List>
        <Divider light={true} />
        <List>
          {titles.map((text) => (
            <ListItem
              button
              key={text}
              onClick={() => props.setSelectedQuiz(text)}
            >
              <ListItemText primary={text} className={classes.black} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
}
