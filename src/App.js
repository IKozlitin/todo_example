import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Register from "./components/Register";
import Login from "./components/Login";
import Todo from "./components/Todo";

function App() {
    return (
        <Router>
            <Menu />
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/tasks" element={<Todo />} />
            </Routes>
        </Router>
    );
}

export default App;