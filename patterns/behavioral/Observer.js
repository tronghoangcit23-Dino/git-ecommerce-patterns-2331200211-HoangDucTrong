// The Subject (also known as Publisher)
class OrderTracker {
    constructor(orderId) {
        this.orderId = orderId;
        this.status = 'New';
        this.observers = [];
    }

    addObserver(observer) {
        // Add the observer to the this.observers array.
        this.observers.push(observer);
    }

    removeObserver(observer) {
        // Remove the observer from the this.observers array.
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers() {
        // Loop through all observers and call their update method.
        // Pass this.orderId and this.status to the update method.
        this.observers.forEach(observer => {
            observer.update(this.orderId, this.status);
        });
    }

    updateStatus(newStatus) {
        this.status = newStatus;
        console.log(`Order ${this.orderId} status updated to: ${this.status}`);
        this.notifyObservers();
    }
}

// The Observer (also known as Subscriber) interface (conceptual)
class OrderObserver {
    update(orderId, status) {
        throw new Error("This method should be overridden!");
    }
}

// Concrete Observer 1
class EmailNotifier extends OrderObserver {
    update(orderId, status) {
        // Log a message to the console simulating an email notification.
        console.log(`Email: Order ${orderId} is now ${status}.`);
    }
}

// Concrete Observer 2
class DashboardNotifier extends OrderObserver {
    update(orderId, status) {
        // Log a message to the console simulating a dashboard update.
        console.log(`Dashboard: Order ${orderId} status updated to ${status}.`);
    }
}

export { OrderTracker, EmailNotifier, DashboardNotifier };