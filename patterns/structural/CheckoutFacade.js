import { InventoryService } from '../../services/InventoryService.js';
import { PaymentService } from '../../services/PaymentService.js';
import { ShippingService } from '../../services/ShippingService.js';

class CheckoutFacade {
    constructor() {
        this.inventoryService = new InventoryService();
        this.paymentService = new PaymentService();
        this.shippingService = new ShippingService();
    }

    placeOrder(orderDetails) {
        console.log("--- Starting checkout process ---");

        // 1. Check if all products are in stock.
        // Chú ý: Truyền đúng biến orderDetails.productIds vào hàm checkStock
        const isStockAvailable = this.inventoryService.checkStock(orderDetails.productIds);
        if (!isStockAvailable) {
            console.log("Error: Products are out of stock. Order cancelled.");
            return false;
        }
        console.log("Success: Products are in stock.");

        // 2. Process the payment.
        const isPaymentSuccessful = this.paymentService.processPayment(orderDetails);
        if (!isPaymentSuccessful) {
            console.log("Error: Payment failed. Order cancelled.");
            return false;
        }
        console.log("Success: Payment processed.");

        // 3. Arrange shipping.
        const isShippingArranged = this.shippingService.arrangeShipping(orderDetails);
        if (!isShippingArranged) {
            console.log("Error: Shipping arrangement failed. Order cancelled.");
            return false;
        }
        console.log("Success: Shipping arranged.");

        console.log("--- Order placed successfully! ---");
        return true;
    }
}

export { CheckoutFacade };