import { useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  useEffect(function () {
    async function fetchData() {
      const res = await fetch("http://localhost:9000/Questions");
      const data = await res.json();
      console.log(data);
    }
    fetchData();
  }, []);
  return (
    <div className="app">
      <Header />
      <Main>
        <p>1/15</p>
        <p>Question?</p>
      </Main>
    </div>
  );
}
