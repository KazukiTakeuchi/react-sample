import { TaskList } from "./components/organisms/TaskList";
import { AppTemplate } from "./components/Templates/AppTemplate";

const App: React.FC = () => {
  return (
    <div className="App">
      <AppTemplate>
        <TaskList />
      </AppTemplate>
    </div>
  );
}

export default App;
