import axios from 'axios'

const PRODUCTS_REST_API_URL = 'http://localhost:8080/api/v1/products'

class ProductService {

    getProducts() {
       return axios.get(PRODUCTS_REST_API_URL);
    }
    createProduct(product) {
        return axios.post(PRODUCTS_REST_API_URL, product);
    }
    getProductById(id) {
        return axios.get(PRODUCTS_REST_API_URL + '/' + id);
    }
    updateProduct(product, productId) {
        return axios.put(PRODUCTS_REST_API_URL +  '/' + productId, product);
    }
    deleteProduct(productId) {
        return axios.delete(PRODUCTS_REST_API_URL + '/' + productId);
    }
}

export default new ProductService()