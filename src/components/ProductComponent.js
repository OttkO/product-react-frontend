import React from 'react';
import ProductService from '../services/ProductService';

class ProductComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            products:[]
        }
        this.addProduct = this.addProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
    }

    componentDidMount(){
        ProductService.getProducts().then((response) => {
            this.setState({ products: response.data})
        });
    }

    addProduct() {
        this.props.history.push('/add-product');
    }

    editProduct(id) {
        this.props.history.push(`/update-product/${id}`);
    }

    render (){
        return (
            <div>
                <h1 className = "text-center"> Product List</h1>
                <div className = "row">
                    <button className = "btn btn-primary" onClick ={this.addProduct}> Add Product </button>  
                </div>
                <table className = "table table-hover">
                    <thead>
                        <tr>
                            <td> Name </td>
                            <td> Category </td>
                            <td> Description </td>
                            <td> Actions </td>
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
                                     <td>
                                     <button onClick = {() => this.editProduct(product.id)} className="btn btn-info">Update</button>   
                                     </td>
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