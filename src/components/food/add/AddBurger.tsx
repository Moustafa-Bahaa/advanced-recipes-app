import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import "../../../components/styles/shared.css"
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom"
import { InputNumber } from 'primereact/inputnumber';
import { RecipesModel } from "../../../models/recipesModel";
import { addNewBurger } from "../../../services/BurgerService";

const AddBurger = () => {

    const [addBurgerModel, setAddBurgerModel] = useState(new RecipesModel());

    const navigate = useNavigate()

    const handleOnChange = useCallback((event: React.ChangeEvent<any>) => {
        const val = (event.target && event.target.value) || '';
        let _addPizzaModel = { ...addBurgerModel };
        _addPizzaModel[`${event.target.name}`] = val;
        setAddBurgerModel(_addPizzaModel);
    }, [addBurgerModel])

    

    const onSaveCicked = () => {
        if(addBurgerModel.image && addBurgerModel.title &&  addBurgerModel.price){
          addNewBurger(addBurgerModel)
            .then(() => {
                navigate("/burger")
            });
        }else{
            alert("all fields required ")
        }
       
    }

    return (
        <div className="add-form">
            <div>
                <h1>New Burger</h1>
            </div>
            <div className="form-inputs">
                <InputText placeholder="image url" value={addBurgerModel.image} name={"image"} onChange={handleOnChange} />
                <InputText placeholder="title" value={addBurgerModel.title} name={"title"} onChange={handleOnChange} />
                <InputNumber placeholder="price" value={addBurgerModel.price} name={"price"} onChange={(e)=> setAddBurgerModel({ ...addBurgerModel, price: e.value })} />
            </div>
            <div className="add-options">
                <Button label="Save" onClick={onSaveCicked} />
                <Button label="Back" onClick={()=>navigate("/burger")}/>
            </div>

        </div>
    )
}

export default AddBurger
