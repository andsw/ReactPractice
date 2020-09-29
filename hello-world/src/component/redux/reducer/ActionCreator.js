import axios from "axios";

export const ActionTypes = {
    ADD_NOTE: 'ADD_NOTE',
    LIST_NOTE: 'LIST_NOTE'
}

export const addNoteAction = (note) => {
    return {
        type: ActionTypes.ADD_NOTE,
        note
    }
};

export const ListNoteAction = (note) => {
    return {
        type: ActionTypes.LIST_NOTE,
        note
    }
}

export const InitNotes = () => {
    return (dispatch) => {
        let listAction = [];
        return axios.get('http://localhost:3001/notes').then(response => {
            const notes = response.data
            listAction = ListNoteAction(notes);
            console.log("ListAction: ", listAction)
            dispatch(listAction);
        })
    }
}