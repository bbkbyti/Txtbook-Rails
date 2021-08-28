import api from './apiConfig';

export const getAllCategories = async () => {
    const resp = await api.get ('/categories');
    return resp.data;
}

export const addCategoryToTextbook = async (textbookId, categoryId) => {
    const resp = await api.get (`/textbooks/${textbookId}/categories/${categoryId}`);
    return resp.data;
}