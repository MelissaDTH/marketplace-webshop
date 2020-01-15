import React from "react";
import "./Cart.css";

export default function Cart(props) {
    return (
        <div className="cart">
            <div className="cart-products">
                {props.selectedPlants.map(plant => (
                    <Plant
                        deletePlant={props.deletePlant}
                        path={props.path}
                        name={plant.name}
                        price={plant.price}
                        imageUrl={plant.imageUrl}
                        id={plant.id}
                        key={plant.id}
                    />
                ))}
            </div>
        </div>
    );
}
