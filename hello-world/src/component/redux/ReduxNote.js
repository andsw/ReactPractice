import React, {useEffect} from "react";
import store from "./store";
import {InitNotes, addNoteAction} from "./reducer/ActionCreator";

const ReduxNotes = () => {

    useEffect(() => {
        store.dispatch(InitNotes())
        return () => {
            console.log("done");
        };

    }, []);

    const submitHandler = (e) => {
        e.preventDefault()
        let length = store.getState().length;
        store.dispatch(addNoteAction({
            id: length + 1,
            title: e.target.title.value,
            content: e.target.content.value,
            important: e.target.important.value,
            date: new Date(Date.now()).toDateString()
        }))
    }

    return (
        <div>
            <ul>
                {/*为什么不变化呢?*/}
                {store.getState().map(n => {
                    return (<li key={n.id}>
                        <h3 style={{color: (n.important ? "red" : "black")}}>title : {n.title}</h3>
                        <h5>date : {n.date}</h5>
                        <p>content : {n.content}</p>
                    </li>);
                })}
            </ul>
            <form onSubmit={submitHandler}>
                title:<input type="text" name="title"/>
                content: <input type="text" name="content"/>
                important: <input type="checkbox" name="important"/>
                <input type="submit" value="添加笔记"/>
            </form>
        </div>
    )
}

export default ReduxNotes;