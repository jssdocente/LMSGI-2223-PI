import { getBaseUrl } from '../utils/utils.js';

export const getCategorys = async () => {

    try {
        const url = `${getBaseUrl()}/category`;
        const response = await fetch(url);
        if (response.status !== 200)
            throw new Error('Error al buscar las categorias');

        const data = await response.json();
        return data.categorias;

    } catch (error) {
        console.log(error)
        throw new Error('Error al buscar las categorias');
    }

}