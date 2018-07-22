import React from 'react';

const title = 'Application as a module';

export default (props) => {

    const edit1 = React.createRef();
    const edit2 = React.createRef();

    return (
    <div>{title}
    <br/>
    <label>Label1</label>
    <input ref={edit1}/>
    <br/>
    <label>Label2</label>
    <input ref={edit2}/>
    <br/>
    <button onClick={x => edit1.current.focus()}>Focus1</button>
    <button onClick={x => edit2.current.focus()}>Focus2</button>
    </div>
    );
};