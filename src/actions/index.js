export const SET_RECEIPES = 'SET_RECEIPES';

export function setReceipes(items) {
    return  {
        type: SET_RECEIPES,
        items
    }
}