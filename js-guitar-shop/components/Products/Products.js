class Products {
    constructor() {
        this.classNameActive = "products-element__btn_active";
        this.labelAdd = "Добавить в корзину";
        this.labelRemove = "Удалить из корзины";
    }
    
    handleLocationStorage(element, id) {
        let result = localStorageUtil.addProduct(id);
        
        if (result.pushProduct) {
            element.classList.add(this.classNameActive);
            element.innerHTML = this.labelRemove;

        }else {
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd;
        }

        headerPage.render(result.products.length);

    }

    render(){
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        CATALOG.forEach((  {id, name, price, img} ) => {
            let activeClass = '';
            let activeText = '';

            if (productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd;
            }
            else {
                activeClass = this.classNameActive;
                activeText = this.labelRemove;
            }
            htmlCatalog += `
                <li class="products-element">
                    <span class = "products-element__name">${name}</span>
                    <img src="${img}" class = "products-element__img">
                    <span class = "products-element__price">
                        💰${price.toLocaleString()}р.
                    </span>
                    <button class = "products-element__btn ${activeClass}" onclick = "productsPage.handleLocationStorage(this, '${id}');">${activeText}</button>
                </li>
            `;
        });
        const html = `
            <ul class="products-containter">
                ${htmlCatalog}
            </ul>
        `;

        ROOT_PRODUCTS.innerHTML = html;

    }
    
}

const productsPage = new Products();
productsPage.render();