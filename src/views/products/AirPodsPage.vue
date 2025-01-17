<template>
    <ProductLayout
        title="AirPods Pro"
        subtitle="重新定义耳机"
        price="¥1899 起"
        background="linear-gradient(180deg, #2c2c2c 0%, #1a1a1a 100%)"
    >
        <section class="features">
            <div class="container">
                <el-row :gutter="24">
                    <el-col :span="12">
                        <div class="feature-card">
                            <h3>AirPods Pro</h3>
                            <p>重新定义耳机</p>
                            <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQD83?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1660803972361" alt="AirPods Pro">
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="feature-card">
                            <h3>AirPods Max</h3>
                            <p>声临其境</p>
                            <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-max-select-silver-202011?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1604021221000" alt="AirPods Max">
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