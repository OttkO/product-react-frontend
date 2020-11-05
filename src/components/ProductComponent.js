import React from 'react';
import ProductService from '../services/ProductService';

class ProductComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            products:[]
        }
    }

    componentDidMount(){
        ProductService.getProducts().then((response) => {
            this.setState({ products: response.data})
        });
    }

    render (){
        return (
            <div>
                <h1 className = "text-center"> Product List</h1>
                <table className = "table table-hover">
                    <thead>
                        <tr>
                            <td> Name </td>
                            <td> Category </td>
                            <td> Description </td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.products.map(
                                product => 
                                <tr key = {product.id}>
                                     <td> {product.name}</td>   
                                     <td> {product.category}</td>   
                                     <td> {product.description}</td>     
                                </tr>
                            )
                        }

                    </tbody>
                </table>

            </div>

        )
    }
}

export default ProductComponent