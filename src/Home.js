import React, { Component, Fragment } from "react";

import Cart from "./components/Cart";
import Product from "./components/Product";
import { data } from "./data";
import "./home.css";

export class Home extends Component {
	state = {
		products: data,
	};

	render() {
		const { products } = this.state;

		return (
			<>
				<header>
					<h1>Hortifruti</h1>
					<h2>VnW</h2>
				</header>

				<main>
					<section className="container-products">
						<h3>Nossos Produtos</h3>

						<div className="products">
							{products
								? products.map((item) => (
										<Fragment key={item.id}>
											<Product name={item.name} image={item.image} />
										</Fragment>
								  ))
								: "Carregando produtos..."}
						</div>
					</section>

					<section className="container-cart">
						<Cart />
					</section>
				</main>
			</>
		);
	}
}

export default Home;
