import React from "react";
import NavBar from "./components/NavBar";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Quiz from "./pages/Quiz";
import QuizList from "./components/QuizList";

interface AppState {
  selectedQuiz: string;
}

class App extends React.Component {
  state = {
    selectedQuiz: null
  };

  setSelectedQuiz = (quiz: string) => {
    this.setState({
      selectedQuiz: quiz
    });
  };

  componentDidMount() {
    this.updateDocumentTitle();
  }

  componentDidUpdate(_: AppState, prevState: AppState) {
    if (prevState.selectedQuiz !== this.state.selectedQuiz) {
      this.updateDocumentTitle();
    }
  }

  updateDocumentTitle() {
    const { selectedQuiz } = this.state;
    document.title = `${selectedQuiz ? `${selectedQuiz} | ` : ""}Quiz`;
  }

  render() {
    return (
      <div>
        <QuizList setSelectedQuiz={this.setSelectedQuiz} />
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
  }
}

export default App;
