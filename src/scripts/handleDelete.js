import { authRequest } from "./request";

const URL = "https://localhost:5001/note/";

export const deleteNote = async (id) => {
    const fullUrl = URL + id;
    await authRequest(fullUrl, 'DELETE');
};