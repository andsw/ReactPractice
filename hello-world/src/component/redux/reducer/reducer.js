import {ActionTypes} from "./ActionCreator";

const defaultNotes = []

export default (notes = defaultNotes, action) => {
    if (action.type === ActionTypes.ADD_NOTE) {
        console.log([...notes, action.note]);
        return [...notes, action.note]
    } else if (action.type === ActionTypes.LIST_NOTE) {
        return action.note;
    }
    return notes;
}