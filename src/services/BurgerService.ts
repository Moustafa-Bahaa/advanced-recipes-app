import axios, { AxiosError } from 'axios';
import { RecipesModel } from '../models/recipesModel';


const Burger_URL = "http://localhost:5000/burger/";


export const getAllBurger = async (): Promise<RecipesModel[]> => {
    try {
        const { data } = await axios.get(Burger_URL)
        return data
    } catch (error) {
        logError(error);
        return []
    }
}

export const deleteBurger = async (id: number): Promise<Boolean> => {
    const { status } = await axios.delete(Burger_URL + id);
    return status === 200
}

export const addNewBurger = async (recipe: RecipesModel): Promise<any[]> => {
    try {
        const { data } = await axios.post(Burger_URL, recipe)
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