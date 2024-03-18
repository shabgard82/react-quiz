import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Reducer from "./useReducer-hook/Reducer";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Questions from "./components/Questions";

const initialState = {
  questions: [],
  status: "loading",
};

export default function App() {
  const [{ questions, status }, dispatch] = useReducer(Reducer, initialState);
  const numQuestions = questions.length;

  useEffect(function () {
    fetch("http://localhost:9000/Questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFaild" }));
  }, []);
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && <Questions />}
      </Main>
    </div>
  );
}
