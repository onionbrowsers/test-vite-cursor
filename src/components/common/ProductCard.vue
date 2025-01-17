<template>
    <div class="product-card" :class="{ 'dark-theme': darkTheme }">
        <div class="product-content">
            <h3 class="product-title">{{ title }}</h3>
            <p class="product-description">{{ description }}</p>
            <div class="product-actions">
                <el-button type="primary" text class="learn-more">
                    了解更多 <el-icon class="arrow"><ArrowRight /></el-icon>
                </el-button>
                <el-button type="primary" text class="buy">
                    购买 <el-icon class="arrow"><ArrowRight /></el-icon>
                </el-button>
            </div>
        </div>
        <div class="product-image">
            <img :src="image" :alt="title" />
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    description: String,
    image: String,
    darkTheme: Boolean
})
</script>

<style scoped lang="scss">
.product-card {
    position: relative;
    height: 580px;
    border-radius: 30px;
    overflow: hidden;
    background: var(--color-gray-light);
    text-align: center;
    transition: transform 0.3s ease;

    &.dark-theme {
        background: var(--color-primary);
        color: var(--color-background);
    }

    &:hover {
        transform: scale(1.02);
    }

    .product-content {
        position: relative;
        z-index: 2;
        padding: var(--space-2xl) var(--space-xl);
    }

    .product-title {
        font-size: var(--font-size-2xl);
        font-weight: var(--font-weight-semibold);
        margin-bottom: var(--space-sm);
    }

    .product-description {
        font-size: var(--font-size-lg);
        color: var(--color-secondary);
        margin-bottom: var(--space-xl);
    }

    .product-actions {
        display: flex;
        gap: var(--space-md);
        justify-content: center;

        .learn-more,
        .buy {
            font-size: var(--font-size-base);
            color: var(--color-accent);

            .arrow {
                transition: transform 0.3s ease;
            }

            &:hover .arrow {
                transform: translateX(3px);
            }
        }
    }

    .product-image {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        text-align: center;

        img {
            max-width: 100%;
            height: auto;
        }
    }
}
</style>
