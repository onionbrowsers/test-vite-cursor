<template>
    <ProductLayout
        title="iPhone 15 Pro"
        subtitle="钛金属。超强大。超 Pro。"
        price="¥7999 起"
        background="linear-gradient(180deg, #000000 0%, #2c2c2c 100%)"
    >
        <section class="features">
            <div class="container">
                <el-row :gutter="24">
                    <el-col :span="12">
                        <div class="feature-card">
                            <h3>iPhone 15 Pro</h3>
                            <p>钛金属 超强大 超 Pro</p>
                            <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845702708" alt="iPhone 15 Pro">
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="feature-card">
                            <h3>iPhone 15</h3>
                            <p>让你大有可为</p>
                            <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-pink?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692923780378" alt="iPhone 15">
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