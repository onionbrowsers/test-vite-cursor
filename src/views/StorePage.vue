<script setup>
import { ref, computed } from 'vue'
import TheHeader from '../components/layout/TheHeader.vue'
import ImagePlaceholder from '../components/common/ImagePlaceholder.vue'
import { ArrowRight } from '@element-plus/icons-vue'

// 用于跟踪图片加载状态
const failedImages = ref(new Set())

// 处理图片加载错误
const handleImageError = (productId) => {
    failedImages.value.add(productId)
}

const categories = [
    { id: 'mac', name: 'Mac' },
    { id: 'iphone', name: 'iPhone' },
    { id: 'ipad', name: 'iPad' },
    { id: 'watch', name: 'Apple Watch' },
    { id: 'airpods', name: 'AirPods' }
]

const products = ref([
    {
        id: 1,
        category: 'mac',
        name: 'MacBook Pro 14',
        subtitle: 'M3 Pro 或 M3 Max',
        price: '¥14999 起',
        image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-14-spacegray-select-202310?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1697311054290',
        colors: ['#2E3641', '#E3E4E5']
    },
    {
        id: 2,
        category: 'iphone',
        name: 'iPhone 15 Pro',
        subtitle: '钛金属 超强大 超 Pro',
        price: '¥7999 起',
        image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845702708',
        colors: ['#4C4D4F', '#F4E8CE', '#4B4C4E', '#3E352E']
    },
    {
        id: 3,
        category: 'ipad',
        name: 'iPad Pro',
        subtitle: '终极 iPad 体验',
        price: '¥6799 起',
        image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-pro-model-select-gallery-2-202212?wid=1280&hei=720&fmt=jpeg&qlt=95&.v=1670948211155',
        colors: ['#7D7E80', '#E3E4E5']
    },
    {
        id: 4,
        category: 'watch',
        name: 'Apple Watch Series 9',
        subtitle: '智能更进一步',
        price: '¥2999 起',
        image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/watch-s9-select-202309-41-midnight?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1693271272411',
        colors: ['#2E3641', '#E3E4E5', '#F7E8D0', '#F4E8CE']
    },
    {
        id: 5,
        category: 'airpods',
        name: 'AirPods Pro',
        subtitle: '重新定义耳机',
        price: '¥1899 起',
        image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQD83?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1660803972361',
        colors: ['#E3E4E5']
    }
])

const activeCategory = ref('all')

const filteredProducts = computed(() => {
    if (activeCategory.value === 'all') return products.value
    return products.value.filter(product => product.category === activeCategory.value)
})

// 添加空状态检查
const hasProducts = computed(() => filteredProducts.value.length > 0)
</script>

<template>
    <div class="store">
        <TheHeader />

        <!-- 页面标题 -->
        <div class="page-header">
            <div class="container">
                <h1>商店</h1>
                <p>选购各类 Apple 产品</p>
            </div>
        </div>

        <!-- 分类导航 -->
        <nav class="category-nav">
            <div class="container">
                <el-radio-group v-model="activeCategory" size="large">
                    <el-radio-button value="all">全部</el-radio-button>
                    <el-radio-button v-for="cat in categories" :key="cat.id" :value="cat.id">
                        {{ cat.name }}
                    </el-radio-button>
                </el-radio-group>
            </div>
        </nav>

        <!-- 产品列表 -->
        <section class="products-grid">
            <div class="container">
                <template v-if="hasProducts">
                    <el-row :gutter="24">
                        <el-col
                            v-for="product in filteredProducts"
                            :key="product.id"
                            :xs="24"
                            :sm="12"
                            :md="8"
                        >
                            <div class="product-card">
                                <div class="product-image">
                                    <img 
                                        v-show="!failedImages.has(product.id)"
                                        :src="product.image" 
                                        :alt="product.name"
                                        @error="handleImageError(product.id)"
                                    />
                                    <ImagePlaceholder v-show="failedImages.has(product.id)" />
                                </div>
                                <div class="product-info">
                                    <h3>{{ product.name }}</h3>
                                    <p class="subtitle">{{ product.subtitle }}</p>
                                    <p class="price">{{ product.price }}</p>
                                    <div class="colors">
                                        <span
                                            v-for="(color, index) in product.colors"
                                            :key="index"
                                            class="color-dot"
                                            :style="{ backgroundColor: color }"
                                        ></span>
                                    </div>
                                    <div class="actions">
                                        <el-button type="primary" class="buy-button">购买</el-button>
                                        <el-button class="learn-more">
                                            了解更多 <el-icon class="arrow"><ArrowRight /></el-icon>
                                        </el-button>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </template>
                <div v-else class="empty-state">
                    <el-empty
                        description="暂无相关产品"
                        :image-size="200"
                    >
                        <template #image>
                            <img 
                                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-chat-specialist-icon-202305?wid=70&hei=70&fmt=jpeg&qlt=90&.v=1684947928869"
                                alt="空状态图片"
                            />
                        </template>
                        <template #description>
                            <div class="empty-text">
                                <p>抱歉，当前分类暂无相关产品</p>
                                <p class="sub-text">您可以查看其他分类或稍后再来</p>
                            </div>
                        </template>
                    </el-empty>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped lang="scss">
.store {
    padding-top: 44px;
    min-height: 100vh;
    background: var(--color-background);
}

.page-header {
    padding: var(--space-3xl) 0 var(--space-xl);
    text-align: center;

    h1 {
        font-size: var(--font-size-3xl);
        font-weight: var(--font-weight-semibold);
        margin-bottom: var(--space-sm);
    }

    p {
        font-size: var(--font-size-lg);
        color: var(--color-secondary);
    }
}

.category-nav {
    position: sticky;
    top: 44px;
    background: var(--color-background);
    border-bottom: 1px solid var(--color-gray-light);
    padding: var(--space-md) 0;
    z-index: 90;

    .container {
        display: flex;
        justify-content: center;
    }

    :deep(.el-radio-group) {
        .el-radio-button__inner {
            border: none;
            background: transparent;
            color: var(--color-text);
            padding: var(--space-sm) var(--space-lg);
            
            &:hover {
                color: var(--color-accent);
            }
        }

        .el-radio-button__original-radio:checked + .el-radio-button__inner {
            background: transparent;
            color: var(--color-accent);
            box-shadow: none;
        }
    }
}

.products-grid {
    padding: var(--space-2xl) 0;

    .product-card {
        background: var(--color-gray-light);
        border-radius: 20px;
        padding: var(--space-xl);
        margin-bottom: var(--space-xl);
        transition: transform 0.3s ease;

        &:hover {
            transform: scale(1.02);
        }

        .product-image {
            text-align: center;
            margin-bottom: var(--space-lg);
            height: 300px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;

            img {
                max-width: 100%;
                max-height: 100%;
                width: auto;
                height: auto;
                object-fit: contain;
                padding: var(--space-md);
                transition: opacity 0.3s ease;
            }

            :deep(.image-placeholder) {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            }
        }

        .product-info {
            text-align: center;

            h3 {
                font-size: var(--font-size-xl);
                font-weight: var(--font-weight-semibold);
                margin-bottom: var(--space-xs);
            }

            .subtitle {
                font-size: var(--font-size-base);
                color: var(--color-secondary);
                margin-bottom: var(--space-sm);
            }

            .price {
                font-size: var(--font-size-lg);
                font-weight: var(--font-weight-medium);
                margin-bottom: var(--space-md);
            }

            .colors {
                display: flex;
                gap: var(--space-xs);
                justify-content: center;
                margin-bottom: var(--space-lg);

                .color-dot {
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    border: 1px solid rgba(0, 0, 0, 0.1);
                }
            }

            .actions {
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
                    color: var(--color-accent);
                    border: none;
                    padding: 12px 24px;
                    font-size: var(--font-size-base);
                    height: auto;

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
    }
}

.empty-state {
    padding: var(--space-4xl) 0;
    text-align: center;

    img {
        width: 70px;
        height: 70px;
        margin-bottom: var(--space-lg);
    }

    .empty-text {
        font-size: var(--font-size-base);
        color: var(--color-text);

        .sub-text {
            margin-top: var(--space-xs);
            font-size: var(--font-size-sm);
            color: var(--color-secondary);
        }
    }
}
</style> 