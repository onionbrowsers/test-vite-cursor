import { defineStore } from 'pinia'

export const useProductStore = defineStore('products', {
    state: () => ({
        products: [
            {
                id: 1,
                title: 'MacBook Pro',
                description: '超乎想象的强大',
                image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-spacegray-select-202206?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664497359481',
                darkTheme: true
            },
            {
                id: 2,
                title: 'iPad Pro',
                description: '终极 iPad 体验',
                image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-pro-model-select-gallery-2-202212?wid=1280&hei=720&fmt=jpeg&qlt=95&.v=1670948211155',
                darkTheme: false
            }
        ]
    }),

    getters: {
        featuredProducts: (state) => state.products.slice(0, 4)
    }
})
