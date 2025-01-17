<template>
    <div class="product-page">
        <TheHeader />
        <div class="hero-section" :style="{ background: background }">
            <div class="container">
                <h1>{{ title }}</h1>
                <h2>{{ subtitle }}</h2>
                <p class="price" v-if="price">{{ price }}</p>
                <div class="cta-buttons">
                    <el-button type="primary" class="buy-button" @click="goToStore">
                        购买
                    </el-button>
                    <el-button class="learn-more" text>
                        了解更多 <el-icon class="arrow"><ArrowRight /></el-icon>
                    </el-button>
                </div>
            </div>
        </div>
        <slot></slot>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import TheHeader from './TheHeader.vue'
import { ArrowRight } from '@element-plus/icons-vue'

const router = useRouter()

defineProps({
    title: String,
    subtitle: String,
    price: String,
    background: {
        type: String,
        default: '#000'
    }
})

const goToStore = () => {
    router.push('/store')
}
</script>

<style scoped lang="scss">
.product-page {
    min-height: 100vh;
    padding-top: 44px;
}

.hero-section {
    min-height: 580px;
    padding: var(--space-4xl) 0;
    color: #fff;
    text-align: center;
    display: flex;
    align-items: center;

    .container {
        max-width: 800px;
        margin: 0 auto;
        padding: 0 var(--space-xl);
    }

    h1 {
        font-size: var(--font-size-4xl);
        font-weight: var(--font-weight-semibold);
        margin-bottom: var(--space-md);
    }

    h2 {
        font-size: var(--font-size-xl);
        font-weight: var(--font-weight-regular);
        margin-bottom: var(--space-xl);
        opacity: 0.8;
    }

    .price {
        font-size: var(--font-size-lg);
        margin-bottom: var(--space-xl);
    }

    .cta-buttons {
        display: flex;
        gap: var(--space-md);
        justify-content: center;
        align-items: center;

        .buy-button {
            background: var(--color-accent);
            border: none;
            border-radius: 980px;
            padding: 12px 24px;
            height: auto;
            font-size: var(--font-size-base);

            &:hover {
                background: var(--color-link);
            }
        }

        .learn-more {
            color: #fff;
            border: none;
            padding: 12px 24px;
            height: auto;
            font-size: var(--font-size-base);
            display: flex;
            align-items: center;
            gap: 4px;

            .arrow {
                transition: transform 0.3s ease;
            }

            &:hover {
                .arrow {
                    transform: translateX(3px);
                }
            }
        }
    }
}
</style> 