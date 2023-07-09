import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import "../../../components/styles/shared.css"
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom"
import { InputNumber } from 'primereact/inputnumber';
import { addNewPizza } from "../../../services/PizzaService";
import { RecipesModel } from "../../../models/recipesModel";

const AddPizza = () => {

    const [addPizzaModel, setAddPizzaModel] = useState(new RecipesModel());

    const navigate = useNavigate()

    const handleOnChange = useCallback((event: React.ChangeEvent<any>) => {
        const val = (event.target && event.target.value) || '';
        let _addPizzaModel = { ...addPizzaModel };
        _addPizzaModel[`${event.target.name}`] = val;
        setAddPizzaModel(_addPizzaModel);
    }, [addPizzaModel])

    

    const onSaveCicked = () => {
        if(addPizzaModel.image && addPizzaModel.title &&  addPizzaModel.price){
          addNewPizza(addPizzaModel)
            .then(() => {
                navigate("/pizza")
            });
        }else{
            alert("all fields required ")
        }
       
    }

    return (
        <div className="add-form">
            <div>
                <h1>New Pizza</h1>
            </div>
            <div className="form-inputs">
                <InputText placeholder="image url" value={addPizzaModel.image} name={"image"} onChange={handleOnChange} />
                <InputText placeholder="title" value={addPizzaModel.title} name={"title"} onChange={handleOnChange} />
                <InputNumber placeholder="price" value={addPizzaModel.price} name={"price"} onChange={(e)=> setAddPizzaModel({ ...addPizzaModel, price: e.value })} />
            </div>
            <div className="add-options">
                <Button label="Save" onClick={onSaveCicked} />
                <Button label="Back" onClick={()=>navigate("/pizza")}/>
            </div>

        </div>
    )
}

export default AddPizza
