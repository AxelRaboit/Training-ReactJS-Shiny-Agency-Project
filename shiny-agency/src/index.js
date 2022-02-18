import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from "react-router-dom";
import './index.css';
import Home from './pages/Home/index';
import Survey from './pages/Survey';
import Header from './components/Header';
import Footer from './components/Footer';
import PageNotFound from './components/Error';
import Freelances from './components/Freelances';
import Results from './components/Results';
import GlobalStyle from './utils/style/GlobalStyle';
import { ThemeProvider } from './utils/context';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <ThemeProvider>
                <GlobalStyle />
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/survey/:questionNumber">
                        <Survey />
                    </Route>
                    <Route path="/results">
                        <Results />
                    </Route>
                    <Route path="/freelances">
                        <Freelances />
                    </Route>
                    <Route>
                        <PageNotFound />
                    </Route>
                </Switch>
                <Footer />
            </ThemeProvider>
        </Router>
    </React.StrictMode>,
document.getElementById('root')
)
