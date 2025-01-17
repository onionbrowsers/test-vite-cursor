<template>
    <div class="image-placeholder">
        <div class="placeholder-content">
            <el-icon class="placeholder-icon"><Picture /></el-icon>
            <p class="placeholder-text">暂无图片</p>
        </div>
    </div>
</template>

<script setup>
import { Picture } from '@element-plus/icons-vue'
</script>

<style scoped lang="scss">
.image-placeholder {
    width: 120px;
    height: 120px;
    background: var(--color-gray-light);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;

    .placeholder-content {
        text-align: center;
    }

    .placeholder-icon {
        font-size: 24px;
        color: var(--color-secondary);
        margin-bottom: var(--space-xs);
    }

    .placeholder-text {
        font-size: var(--font-size-xs);
        color: var(--color-secondary);
    }
}
</style> 