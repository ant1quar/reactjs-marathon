import React from 'react';
import cn from 'classnames';
import s from './App.module.scss';
const App = () => {
    return (
        <div className={cn(s.header,'color')}>
            This is div!
        </div>
    )
}
export default App;
