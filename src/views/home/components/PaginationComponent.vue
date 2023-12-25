<template>
<nav v-if="pagination && pagination.total > 0" aria-label="Page navigation example">
  <ul class="pagination float-end">

    <li class="page-item" v-for="page in pagination.last_page" :key="'page.'+page"  :class="{ 'active': pagination.current_page == page }">
        <a class="page-link" href="#" @click="$emit('navigate', page)">{{ page }}</a>
    </li>
    
  </ul>
</nav>

</template>
    
<script setup>
    const { pagination } = defineProps({
        'pagination': Object,
    });

</script>
<style>
.page-item .page-link{ 
    color: hsla(160, 100%, 37%, 1);;
}
.page-item.active .page-link {
    color: #fff;
    background-color: hsla(160, 100%, 37%, 1);
    border-color: hsla(160, 100%, 37%, 1);
}
</style>