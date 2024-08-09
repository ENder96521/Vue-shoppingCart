import { defineStore } from 'pinia';

export const useShoppingCartStore = defineStore('ShoppingCart', {
    // 變數設置的地方
    state: () => {
        return {
            cart: [1, 2, 3],
        }
    }
});