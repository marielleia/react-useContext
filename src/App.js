import MyPage from "./components/without_context/MyPage";
import MyPageContext from "./components/with_context/MyPageContext";

function App() {
  return (
    <>
      <h1>React Context API</h1>
      <div className="App">
        <MyPage/>
      </div>
      <div>
        <MyPageContext/>
      </div>
    </>
  );
}

export default App;
