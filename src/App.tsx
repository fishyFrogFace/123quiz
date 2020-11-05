import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Quiz from "./pages/Quiz";
import QuizList from "./components/QuizList";

interface AppState {
  selectedQuiz: string;
}

const App = () => {
  const [selectedQuiz, setSelectedQuiz] = useState("");

  useEffect(() => {
    document.title = `${selectedQuiz ? `${selectedQuiz} | ` : ""}Quiz`;
  }, [selectedQuiz]);

  return (
    <div>
      <QuizList setSelectedQuiz={setSelectedQuiz} />
      <NavBar />
      <Container className="displace">
        <Grid container justify="center" style={{ marginTop: "60px" }}>
          <Grid item>
            <Quiz />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
