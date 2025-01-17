<template>
    <ProductLayout
        title="Mac"
        subtitle="强大到超乎想象"
        price="¥7999 起"
        background="linear-gradient(180deg, #000000 0%, #434343 100%)"
    >
        <section class="features">
            <div class="container">
                <el-row :gutter="24">
                    <el-col :span="12">
                        <div class="feature-card">
                            <div class="card-content">
                                <h3>MacBook Pro</h3>
                                <p>M3 Pro 或 M3 Max</p>
                            </div>
                            <div class="image-container">
                                <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-14-spacegray-select-202310?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1697311054290" alt="MacBook Pro">
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="feature-card">
                            <div class="card-content">
                                <h3>MacBook Air</h3>
                                <p>轻盈有力</p>
                            </div>
                            <div class="image-container">
                                <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mba-15-spacegray-select-202306?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1684518479433" alt="MacBook Air">
                            </div>
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

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 var(--space-xl);
    }

    .feature-card {
        background: var(--color-gray-light);
        border-radius: 20px;
        height: 420px;
        display: flex;
        flex-direction: column;
        transition: transform 0.3s ease;
        overflow: hidden;

        &:hover {
            transform: translateY(-5px);
        }

        .card-content {
            padding: var(--space-xl) var(--space-xl) var(--space-lg);

            h3 {
                font-size: var(--font-size-xl);
                margin-bottom: var(--space-sm);
            }

            p {
                color: var(--color-secondary);
                font-size: var(--font-size-base);
            }
        }

        .image-container {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 var(--space-xl) var(--space-xl);

            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
    }
}
</style> 