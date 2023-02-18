import React, { Component } from "react";
import "./styles.css";

export class Cart extends Component {
	render() {
		return (
			<div className="cart">
				<div className="cart-content">
					<img src="./ShoppingCart.png" alt="icon shopping cart" />

					<p>Arraste o seu produto aqui para colocar no carrinho</p>
				</div>

				<div className="box--add-remove">
					<img src="./PlusCircle.png" alt="icon plus" />

					<img src="./MinusCircle.png" alt="icon minus" />
				</div>
			</div>
		);
	}
}

export default Cart;
