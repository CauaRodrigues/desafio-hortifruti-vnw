import React, { Component } from "react";
import "./styles.css";

export class Product extends Component {
	render() {
		const { name, image } = this.props;

		return (
			<figure>
				<img src={image} alt={name} />

				<figcaption>{name}</figcaption>
			</figure>
		);
	}
}

export default Product;
