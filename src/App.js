import { Routes, Route } from "react-router-dom";
import Layout from "./Component/Layout/Layout";
import './App.css'

function App () {
  return (
    <>
      <Layout>
        <Routes>
          <Route exact path='/home' component={Layout} />
        </Routes>
      </Layout>
    </>
  );
}


export default App;
