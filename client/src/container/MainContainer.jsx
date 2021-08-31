import React from 'react'
import { Switch, Route } from 'react-router-dom';
import TextbooksList from './screens/TextbooksList'

export default function MainContainer() {
    
    return (
        <div>
            <Switch>
                <Route exact path="/textbooks">
                    <TextbooksList />
                </Route>
            </Switch>
        </div>
    )
}
