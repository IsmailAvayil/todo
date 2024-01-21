import AppContextProvider from "./ReactContext/AppContext";
import TodoApp from "./componets/TodoApp/TodoApp";

function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <TodoApp />
      </div>
    </AppContextProvider>
  );
}

export default App;
