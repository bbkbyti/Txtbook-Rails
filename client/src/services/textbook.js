import api from './apiConfig';

export const getAllTextbooks = async () => {
    const resp = await api.get('/textbooks');
    return resp.data;
};

export const getOneTextbook = async (id) => {
    const resp = await api.get(`/textbooks/${id}`);
    return resp.data;
};

export const postTextbook = async (textbookData) => {
    const resp = await api.post('/textbooks', { textbook: textbookData });
    return resp.data;
};

export const putTextbook = async (id, textbookData) => {
    const resp = await api.put(`/textbooks/${id}`, {textbook: textbookData})
    return resp.data
}

export const deleteTextbook = async (id) => {
    const resp = await api.delete(`/textbooks/${id}`);
    return resp
}