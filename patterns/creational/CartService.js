// 1. Create a variable `instance` to hold the single instance of the class.
let instance = null;

class CartService {
    constructor() {
        // 2. In the constructor, check if `instance` already exists.
        if (instance) {
            // 3. If it exists, return `instance`.
            return instance;
        }

        // 4. If it does not exist, initialize the class properties (like `this.products`)
        this.products = [];
        // and assign the new instance to `instance`.
        instance = this;
    }

    addProduct(product) {
        this.products.push(product);
    }

    removeProduct(productId) {
        this.products = this.products.filter(p => p.id !== productId);
    }

    getProducts() {
        return this.products;
    }
}

// 5. Export the class.
export { CartService };