import { memo, useCallback, useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/productSlice';
import { deletePizza, getAllPizzas } from '../../services/PizzaService';
import { RecipesModel } from '../../models/recipesModel';
import Card from '../card/Card';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import DeleteDialog from '../dialog/DeleteDialog';
import { ProgressSpinner } from 'primereact/progressspinner';

const Pizzas = () => {
    const [recipes, setRecipes] = useState<RecipesModel[]>()
    const [loading, setLoading] = useState(true);
    const [visible, setVisible] = useState(false);
    const [recipeId, setRecipeId] = useState(0)


    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleAddToCart = useCallback((recipe) => {
        dispatch(addToCart(recipe))
    }, [recipes])

    const fetchAllPizzas = () => {
        setLoading(true);
        getAllPizzas().then((recipes: RecipesModel[]) => {
            setRecipes(recipes);
            setLoading(false);
        })
    }

    useLayoutEffect(() => {
        fetchAllPizzas();
    }, []);

    const handleDeleteRecipe = useCallback((id) => {
        deletePizza(id).then(() => {
            setVisible(false)
            fetchAllPizzas()
        })
    }, [recipes])

    if (loading) {
        return <div className="card flex justify-content-center">
            <ProgressSpinner />
        </div>;
    }

    return (
        <div className="recipes-content">
            <div className="recipes-container">
                {recipes.map((recipe) => (
                    <div className="recipes" key={recipe.id}>
                        <div className="recipe" >
                            <Card key={recipe.id} image={recipe.image} title={recipe.title} price={recipe.price}
                                onClick={() => handleAddToCart(recipe)} openDeleteDialog={() => (setVisible(true), setRecipeId(recipe.id))} />
                        </div>
                    </div>
                ))}

            </div>
            <DeleteDialog visible={visible} setVisible={setVisible} handleDeleteRecipe={() => handleDeleteRecipe(recipeId)} />
            
            <div className="add">
                <Button label="Add New Pizza " severity='danger' onClick={() => navigate("/addPizza")} />
            </div>

        </div>
    )
}

export default memo(Pizzas) 
