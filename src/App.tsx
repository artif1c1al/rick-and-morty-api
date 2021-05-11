import React, {VFC} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {MainPage} from "./pages/MainPage";
import {Header} from "./components/Header";
import {PageContainer} from "./components/PageContainer";
import {BookmarksPage} from "./pages/BookmarksPage";

const App: VFC = () => {
  return (
    <Router>
      <div className="App">
        <Header/>
        <PageContainer>
          <Route exact path={['/']}>
            <MainPage/>
          </Route>
          <Route exact path={['/bookmarks']}>
            <BookmarksPage/>
          </Route>
        </PageContainer>
      </div>
    </Router>
  );
}

export default App;
