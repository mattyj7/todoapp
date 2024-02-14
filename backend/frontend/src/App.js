import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import NotesListPage from "./pages/NotesListPage";
import NotePage from "./pages/NotePage";
import CreateNotePage from "./pages/CreateNotePage";
import CalendarPage from "./components/Calendar";

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <div className="app-todo">
            <Routes>
              <Route path="/notes" exact Component={NotesListPage} />
              <Route path="/notes/:noteId" Component={NotePage} />
              <Route path="/note/create" Component={CreateNotePage} />
            </Routes>
            <CalendarPage />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
