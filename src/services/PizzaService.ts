import axios, { AxiosError } from 'axios';
import { RecipesModel } from '../models/recipesModel';


const PIZZAS_URL = "http://localhost:5000/pizzas/";


export const getAllPizzas = async (): Promise<RecipesModel[]> => {
    try {
        const { data } = await axios.get(PIZZAS_URL)
        return data
    } catch (error) {
        logError(error);
        return []
    }
}

export const deletePizza = async (id: number): Promise<Boolean> => {
    const { status } = await axios.delete(PIZZAS_URL + id);
    return status === 200
}

export const addNewPizza = async (recipe: RecipesModel): Promise<any[]> => {
    try {
        const { data } = await axios.post(PIZZAS_URL, recipe)
        return data
    } catch (error) {
        logError(error);
        return []
    }
}


const logError = (error: any) => {
    const err = error as AxiosError
    console.log(err.message)
    console.log(err.name)
};