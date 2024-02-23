import {defineStore} from "pinia";

export const useCartList = defineStore('items', {
    state: () => ({
        items: JSON.parse(localStorage.getItem('product')),
    }),
    actions: {
        addToCart(newItem) {
            const matchingItemIndex = this.items.findIndex(item => item.id === newItem.id)

            if (matchingItemIndex !== -1) {
                this.items[matchingItemIndex].quantity++
            } else {
                newItem.quantity = 1
                this.items.push(newItem)
            }

            localStorage.setItem('product', JSON.stringify(this.items))
        },
        removeFromCart(id) {
            this.items = this.items.filter(item => item.id !== id)
            localStorage.setItem('product', JSON.stringify(this.items))
        },
        clearCart() {
            this.items = []
            localStorage.removeItem('product')
        },
        increaseQuantity(itemToIncrement) {
            let itemIndex = this.items.findIndex(item => item.id === itemToIncrement.id)

            if (itemIndex !== -1) {
                this.items[itemIndex].quantity += 1
            }

            localStorage.setItem('product', JSON.stringify(this.items))
        },
        decreaseQuantity(itemToDecrement) {
            let itemIndex = this.items.findIndex(item => item.id === itemToDecrement.id)

            if (this.items[itemIndex].quantity === 1) return

            if (itemIndex !== -1) {
                this.items[itemIndex].quantity -= 1
            }

            localStorage.setItem('product', JSON.stringify(this.items))
        }
    }
})

export const useFavoritesList = defineStore('favoriteItems', {
    state: () => ({
        favoriteItems: JSON.parse(localStorage.getItem('favoriteProducts')),
    }),
    actions: {
        addToFavorites(newFavItem) {
            const matchingFavoriteItemIndex = this.favoriteItems.findIndex(item => item.id === newFavItem.id)

            if (matchingFavoriteItemIndex !== -1) {
                this.favoriteItems[matchingFavoriteItemIndex].timesAdded++
            } else {
                newFavItem.timesAdded = 1
                this.favoriteItems.push(newFavItem)
            }

            localStorage.setItem('favoriteProducts', JSON.stringify(this.favoriteItems))
            // this.favoriteItems.push(newFavItem)
            // const favItems = JSON.parse(localStorage.getItem('favoriteProducts'))
            // favItems.push(newFavItem)
            // localStorage.setItem('favoriteProducts', JSON.stringify(favItems))
        },
        removeFromFavorites(id) {
            this.favoriteItems = this.favoriteItems.filter(item => item.id !== id)
            localStorage.setItem('favoriteProducts', JSON.stringify(this.favoriteItems))
        },
        removeAllFavorites() {
            this.favoriteItems = []
            localStorage.removeItem('favoriteProducts')
        }
    }
})