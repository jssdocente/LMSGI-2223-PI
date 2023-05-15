import { getBaseUrl } from '../utils/utils.js';

export const searchRecipes = async ({ search }) => {

    console.log(`searchRecipes: ${search}`)
    if (search === '') return [];

    try {
        const url = `${getBaseUrl()}/recipes/search?r=${search}`;
        console.log(`searchRecipes: ${search} con url: ${url}`)
        const response = await fetch(url);
        if (response.status !== 200)
            throw new Error('Error al buscar las recetas');

        const data = await response.json();
        return data.recetas;

    } catch (error) {
        console.log(error)
        throw new Error('Error al buscar las recetas');
    }

}