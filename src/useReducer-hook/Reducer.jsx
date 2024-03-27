const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  seconds: null,
};
const SECS_PER_QUESTION = 30;

function Reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFaild":
      return { ...state, status: "error" };
    case "start":
      return {
        ...state,
        status: "active",
        seconds: state.questions.length * SECS_PER_QUESTION,
      };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "finish":
      return { ...state, status: "finished" };
    case "restart":
      return { ...initialState, questions: state.questions, status: "ready" };
    case "timer":
      return {
        ...state,
        seconds: state.seconds - 1,
        status: state.seconds === 0 ? "finished" : state.status,
      };
    default:
      throw new Error("Action unkonwn");
  }
}
export default Reducer;
