import React, { Component } from 'react';
import ProductService from '../services/ProductService';

class UpdateProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            category: '',
            description: ''        
        }

        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeCategoryHandler = this.changeCategoryHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.updateProduct = this.updateProduct.bind(this);
        this.cancel = this.cancel.bind(this);
    }
    
    changeNameHandler= (event) => {
        this.setState({name : event.target.value});
    }

    changeCategoryHandler= (event) => {
        this.setState({category : event.target.value});
    }

    changeDescriptionHandler= (event) => {
        this.setState({description : event.target.value});
    }

    componentDidMount() {
        ProductService.getProductById(this.state.id).then(res => {
            let product = res.data;
            this.setState({
                name: product.name,
                category: product.category,
                description : product.description
            });
        })
    }

    updateProduct = (e) => {
        e.preventDefault();

        let product = {name : this.state.name, category: this.state.category, description: this.state.description};
        console.log('product' + JSON.stringify(product));

        ProductService.updateProduct(product, this.state.id).then(res => {
            this.props.history.push("/products");
        });

    }

    cancel() {
        this.props.history.push('/products');
    }

    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className = "text-center">Update Product</h3>
                            <div className = "card-body">

                                <form>
                                    <div className = "form-group">
                                        <label>Product Name:</label>
                                        <input placeholder = "Product Name" name="name" className = "form-control"
                                         value = {this.state.name} onChange={this.changeNameHandler}/>                       
                                    </div>
                                    <div className = "form-group">
                                        <label>Product Category:</label>
                                        <input placeholder = "Product Category" name="category" className = "form-control"
                                         value = {this.state.category} onChange={this.changeCategoryHandler}/>                       
                                    </div>
                                    <div className = "form-group">
                                        <label>Product Description:</label>
                                        <input placeholder = "Product Description" name="description" className = "form-control"
                                         value = {this.state.description} onChange={this.changeDescriptionHandler}/>                       
                                    </div>

                                    <button className = "btn btn-success" onClick = {this.updateProduct}>Update </button>
                                    <button className = "btn btn-danger" onClick = {this.cancel} style = {{marginLeft : "10px"}} >Cancel</button>
                                </form>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default UpdateProductComponent;