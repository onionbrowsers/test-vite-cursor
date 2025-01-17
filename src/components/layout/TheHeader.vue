<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Apple, Search, ShoppingBag } from '@element-plus/icons-vue'

const isScrolled = ref(false)
const menuItems = [
    { key: 'store', label: '商店', path: '/store' },
    { key: 'mac', label: 'Mac', path: '/mac' },
    { key: 'ipad', label: 'iPad', path: '/ipad' },
    { key: 'iphone', label: 'iPhone', path: '/iphone' },
    { key: 'watch', label: 'Watch', path: '/watch' },
    { key: 'airpods', label: 'AirPods', path: '/airpods' },
    { key: 'support', label: '支持', path: '/support' }
]

// 监听滚动事件来改变导航栏样式
const handleScroll = () => {
    isScrolled.value = window.scrollY > 0
}

// 生命周期钩子
onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
    <el-header :class="['site-header', { 'is-scrolled': isScrolled }]">
        <nav class="container">
            <el-menu mode="horizontal" :ellipsis="false">
                <el-menu-item index="logo">
                    <router-link to="/">
                        <el-icon><Apple /></el-icon>
                    </router-link>
                </el-menu-item>
                <el-menu-item v-for="item in menuItems" :key="item.key" :index="item.key">
                    <router-link :to="item.path">{{ item.label }}</router-link>
                </el-menu-item>
                <el-menu-item index="search">
                    <el-icon><Search /></el-icon>
                </el-menu-item>
                <el-menu-item index="bag">
                    <el-icon><ShoppingBag /></el-icon>
                </el-menu-item>
            </el-menu>
        </nav>
    </el-header>
</template>

<style scoped lang="scss">
.site-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    height: 44px;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: saturate(180%) blur(20px);
    transition: all 0.3s ease;

    &.is-scrolled {
        background: rgba(255, 255, 255, 0.95);
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }

    :deep(.el-menu) {
        display: flex;
        justify-content: space-between;
        border: none;
        background: transparent;
        height: 44px;
        padding: 0 var(--space-md);
    }

    :deep(.el-menu-item) {
        height: 44px;
        line-height: 44px;
        font-size: var(--font-size-sm);
        color: var(--color-text);
        padding: 0 var(--space-md);

        &:hover {
            color: var(--color-text);
            background: transparent;
        }

        .el-icon {
            font-size: 18px;
        }

        a {
            text-decoration: none;
            color: inherit;
        }
    }
}
</style>
