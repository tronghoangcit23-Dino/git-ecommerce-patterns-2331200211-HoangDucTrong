// Base Decorator
class ProductDecorator {
    constructor(product) {
        this.product = product;
    }

    getPrice() {
        return typeof this.product.getPrice === 'function' 
            ? this.product.getPrice() 
            : (this.product.price || 0);
    }

    getDescription() {
        return typeof this.product.getDescription === 'function' 
            ? this.product.getDescription() 
            : (this.product.name || 'Unknown Product');
    }
}

class GiftWrapDecorator extends ProductDecorator {
    constructor(product) {
        super(product);
    }

    getPrice() {
        return super.getPrice() + 5;
    }

    getDescription() {
        return super.getDescription() + ", gift wrapped";
    }
}

class ExtendedWarrantyDecorator extends ProductDecorator {
    constructor(product) {
        super(product);
    }

    getPrice() {
        return super.getPrice() + 20;
    }

    getDescription() {
        return super.getDescription() + ", with extended warranty";
    }
}

class BaseProduct {
    constructor(name, price) {
        this._name = name;
        this._price = price;
    }
    getPrice() {
        return this._price;
    }
    getDescription() {
        return this._name;
    }
}

export { ProductDecorator, GiftWrapDecorator, ExtendedWarrantyDecorator, BaseProduct };