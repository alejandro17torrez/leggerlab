import React from "react";
import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import {Home, About, Users} from './routing/routes'
import { get } from './services/colsubsidio'

export default function App() {     
       

    const [colsubsidio, setColsubsidio] = useState([])
    useEffect(() => {
        let mounted = true
        get()
            .then(subsidios => {
                if(mounted) {
                  setColsubsidio(subsidios)    
                }
            })
        return () => mounted = false
    }, [])  
    return (
        <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                </ul>
            </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>      
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home list = {colsubsidio} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


