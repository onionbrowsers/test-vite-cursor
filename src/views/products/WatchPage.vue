<template>
    <ProductLayout
        title="Apple Watch Series 9"
        subtitle="智能更进一步"
        price="¥2999 起"
        background="linear-gradient(180deg, #1a1a1a 0%, #3a3a3a 100%)"
    >
        <section class="features">
            <div class="container">
                <el-row :gutter="24">
                    <el-col :span="12">
                        <div class="feature-card">
                            <h3>Apple Watch Series 9</h3>
                            <p>智能更进一步</p>
                            <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/watch-s9-select-202309-41-midnight?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1693271272411" alt="Apple Watch Series 9">
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="feature-card">
                            <h3>Apple Watch Ultra 2</h3>
                            <p>终极运动伙伴</p>
                            <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/watch-ultra-2-select-202309-49mm-alpine-orange?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1693271843473" alt="Apple Watch Ultra">
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