import React from 'react';
import {HashRouter,Route,Switch} from "react-router-dom";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import Layout from "./Layout";

const App=()=>{
  return( 
      <HashRouter>
          <Switch>
              <Layout>
                  <Route exact path="/" component={FirstPage}/>
                  <Route path="/second" component={SecondPage}/>
              </Layout>
          </Switch>
      </HashRouter>
  );
}
export default App;