<script setup>
import { useRouter } from 'vue-router'
import { useProductStore } from '../stores/products'
import TheHeader from '../components/layout/TheHeader.vue'
import ProductCard from '../components/common/ProductCard.vue'

const router = useRouter()
const productStore = useProductStore()

const goToStore = () => {
    router.push('/store')
}
</script>

<template>
    <div class="home">
        <TheHeader />

        <!-- 英雄区块 -->
        <section class="hero">
            <div class="hero-content">
                <h1>iPhone 15 Pro</h1>
                <h2>钛金属。超强大。超 Pro。</h2>
                <div class="hero-price">售价 ¥7999 起</div>
                <div class="cta-buttons">
                    <el-button type="primary" class="buy-button" @click="goToStore">购买</el-button>
                    <el-button type="primary" text class="learn-more">
                        了解更多 <el-icon class="arrow"><ArrowRight /></el-icon>
                    </el-button>
                </div>
            </div>
            <div class="hero-image">
                <img
                    src="https://www.apple.com.cn/v/iphone-15-pro/c/images/overview/hero/hero_iphone15pro__i70z9oz3hj2i_large.jpg"
                    alt="iPhone 15 Pro"
                />
            </div>
        </section>

        <!-- 产品网格 -->
        <section class="products">
            <el-row :gutter="24">
                <el-col :span="12" v-for="product in productStore.featuredProducts" :key="product.id">
                    <div class="product-card" @click="goToStore">
                        <ProductCard v-bind="product" />
                    </div>
                </el-col>
            </el-row>
        </section>
    </div>
</template>

<style scoped lang="scss">
.home {
    min-height: 100vh;
    padding-top: 44px;
}

.hero {
    position: relative;
    height: calc(100vh - 44px);
    background: #000;
    color: #fff;
    text-align: center;
    overflow: hidden;

    .hero-content {
        position: relative;
        z-index: 2;
        padding-top: var(--space-4xl);

        h1 {
            font-size: var(--font-size-4xl);
            font-weight: var(--font-weight-semibold);
            margin-bottom: var(--space-md);
            letter-spacing: -0.003em;
        }

        h2 {
            font-size: var(--font-size-xl);
            font-weight: var(--font-weight-regular);
            margin-bottom: var(--space-lg);
        }

        .hero-price {
            font-size: var(--font-size-lg);
            color: var(--color-secondary);
            margin-bottom: var(--space-xl);
        }

        .cta-buttons {
            display: flex;
            gap: var(--space-md);
            justify-content: center;

            .buy-button {
                background: var(--color-accent);
                border: none;
                border-radius: 980px;
                padding: 12px 24px;
                font-size: var(--font-size-base);
                height: auto;

                &:hover {
                    background: var(--color-link);
                }
            }

            .learn-more {
                color: var(--color-link);
                border: none;
                padding: 12px 24px;
                font-size: var(--font-size-base);
                height: auto;
                background: transparent;

                &:hover {
                    color: #fff;
                }

                .arrow {
                    transition: transform 0.3s ease;
                    margin-left: 4px;
                }

                &:hover .arrow {
                    transform: translateX(3px);
                }
            }
        }
    }

    .hero-image {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        max-width: 2560px;

        img {
            width: 100%;
            height: auto;
        }
    }
}

.products {
    padding: var(--space-3xl) var(--space-2xl);
    background: var(--color-background);

    .el-row {
        max-width: var(--breakpoint-2xl);
        margin: 0 auto;
    }

    .el-col {
        margin-bottom: var(--space-2xl);
    }

    .product-card {
        cursor: pointer;
        transition: transform 0.3s ease;

        &:hover {
            transform: translateY(-5px);
        }
    }
}
</style>
