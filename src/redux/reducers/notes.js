import { ADD_NOTE } from "../actions/notes";

const initState = ["note 1", "note 2", "note 3", "note 4"];

<<<<<<< HEAD
export default function (state = initState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return [
        ...state.slice(0, +action.afterIndex + 1),
        action.text,
        ...state.slice(+action.afterIndex + 1)
=======
export default function(state = initState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return [
        ...state.slice(0, action.afterIndex + 1),
        action.text,
        ...state.slice(action.afterIndex + 1)
>>>>>>> 851db686a8ea445109e44eecc5bc95a093270c0d
      ];
    default:
      return state;
  }
}
