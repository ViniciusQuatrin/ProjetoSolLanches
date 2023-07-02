<template>
    <ol>
        <li v-for="item in items" :key="item" class="underline mt-4">
            {{ item }}
            <input type="checkbox" class="checkbox checkbox-error"/>
        </li>

    </ol>
</template>

<script setup>
    import { defineProps } from 'vue';

    defineProps ({
        items: Array
    })
</script>
