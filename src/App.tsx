import { TaskList } from "./components/organisms/TaskList";
import { AppTemplate } from "./components/Templates/AppTemplate";

function App() {
  return (
    <div className="App">
      <AppTemplate>
        <TaskList />
      </AppTemplate>
    </div>
  );
}

export default App;
