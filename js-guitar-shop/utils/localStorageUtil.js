class LocalStorageUtil{
    constructor() {
        this.keyname = "products";
    }

    getProducts(){
        const productsLocalStorage = localStorage.getItem(this.keyname);
        if (productsLocalStorage !== null) {
            return JSON.parse(productsLocalStorage);
        }
        return [];
    }


    //adds product by id if product was not inside local storage, removes it othervise
    //return true if product was added to local storage,
    //return false if product was removed from local storage.
    addProduct(id) {
        let products = this.getProducts();
        const index = products.indexOf(id);
        let pushProduct = false;
        if (index === -1) {
            products.push(id);
            pushProduct = true;
            
        }
        else {
            products.splice(index, 1);
        }
        localStorage.setItem(this.keyname, JSON.stringify(products));
        return {pushProduct: pushProduct, products: products};
    }
}

const localStorageUtil = new LocalStorageUtil();
