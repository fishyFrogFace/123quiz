import React, { useEffect, useState } from "react";
import NavBar, { NoMatch } from "./components/NavBar";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Quiz from "./pages/Quiz";
import QuizList from "./components/QuizList";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Greeting from "./components/Greeting";

interface AppState {
  selectedQuiz: string;
}

const App = () => {
  const [selectedQuiz, setSelectedQuiz] = useState("");

  useEffect(() => {
    document.title = `${selectedQuiz ? `${selectedQuiz} | ` : ""}Quiz`;
  }, [selectedQuiz]);

  return (
    <Router>
      <QuizList setSelectedQuiz={setSelectedQuiz} />
      <NavBar />
      <Container className="displace">
        <Grid container justify="center" style={{ marginTop: "60px" }}>
          <Grid item>
            <Switch>
              <Route path="/quiz" exact component={Quiz} />
              <Route
                path="/greeting"
                exact
                render={() => <Greeting name="Hermione" surname="Granger" />}
              />
              <Route path="/" exact component={Quiz} />
              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
          </Grid>
        </Grid>
      </Container>
    </Router>
  );
};

export default App;
