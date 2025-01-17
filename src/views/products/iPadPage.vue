<template>
    <ProductLayout
        title="iPad"
        subtitle="强大如电脑 轻盈如平板"
        price="¥6799 起"
        background="linear-gradient(180deg, #000000 0%, #1a1a1a 100%)"
    >
        <section class="features">
            <div class="container">
                <el-row :gutter="24">
                    <el-col :span="12">
                        <div class="feature-card">
                            <h3>iPad Pro</h3>
                            <p>终极 iPad 体验</p>
                            <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-pro-model-select-gallery-2-202212?wid=1280&hei=720&fmt=jpeg&qlt=95&.v=1670948211155" alt="iPad Pro">
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="feature-card">
                            <h3>iPad Air</h3>
                            <p>轻盈有型，实力强劲</p>
                            <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-air-select-wifi-blue-202203?wid=470&hei=556&fmt=png-alpha&.v=1645066502775" alt="iPad Air">
                        </div>
                    </el-col>
                </el-row>
            </div>
        </section>
    </ProductLayout>
</template>

<script setup>
import ProductLayout from '../../components/layout/ProductLayout.vue'
</script>

<style scoped lang="scss">
.features {
    padding: var(--space-4xl) 0;
    background: var(--color-background);

    .feature-card {
        background: var(--color-gray-light);
        border-radius: 20px;
        padding: var(--space-xl);
        text-align: center;
        transition: transform 0.3s ease;

        &:hover {
            transform: translateY(-5px);
        }

        h3 {
            font-size: var(--font-size-xl);
            margin-bottom: var(--space-sm);
        }

        p {
            color: var(--color-secondary);
            margin-bottom: var(--space-xl);
        }

        img {
            max-width: 100%;
            height: auto;
        }
    }
}
</style> 