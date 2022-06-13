import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import Card from "./components/shared/Card";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import PostLink from "./components/PostLink";
import Post from "./components/Post";
import {FeedbackProvider} from './context/FeedbackContext'



function App() {
  return (
    <FeedbackProvider>
    <Router>
      <Header />
      <div className="container">

        <Routes>
        <Route exact path="/" element={
          <>
        <FeedbackForm />
        <FeedbackStats />
        <FeedbackList />
          </>
        }></Route>

      <Route exact path="/about" element={<AboutPage/>} /> 
      <Route exact path="/post/*" element={<Post/>} /> 
      </Routes>

        <Card>
          <NavLink to='/' >
            Home
          </NavLink>
          <br></br>
          <NavLink to='/about'>
            About
          </NavLink>
        </Card>

      <AboutIconLink /> 
      <PostLink />     

      </div>

    </Router>
    </FeedbackProvider>
  );
}

export default App;
