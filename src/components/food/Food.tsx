import { Button } from "primereact/button";
import "../styles/shared.css"
import { useNavigate } from "react-router-dom";
import { memo, useEffect } from "react";


const Food = () => {
    useEffect(() => {
        navigate("/pizza")
    }, [Food]);

    const navigate = useNavigate()
    return (
        <div className="food">
            <div className="categories">
                <Button severity="danger" outlined onClick={() => navigate("/pizza")} >
                    <img src="https://cdn-icons-png.flaticon.com/128/1404/1404945.png" />
                    Pizza
                </Button>

                <Button severity="danger" outlined onClick={() => navigate("/burger")}>
                    <img src="https://cdn-icons-png.flaticon.com/128/877/877951.png" />
                    Burger
                </Button>
            </div>
            
        </div>
    )
}

export default memo(Food) 
