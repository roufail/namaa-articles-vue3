<template lang="">
    <div class="col-12 pt-2 pb-3">
      Search:&nbsp;&nbsp;<input @keydown.enter="search" />
    </div>

    <div v-if="!loading" class="row articles-wrapper">
        <ArticleComponent v-for="article in articles" :article="article" :key="'article'+article.id" />
        <PagiantionComponent @navigate="loadAllArticles" :pagination="paginationData" class="pagiantion-component-wrapper mt-3" />
    </div>
    <div v-else class="row articles-wrapper">
        <div class="spinner-border text-secondary" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div>

</template>

<script setup>
import { onMounted, ref, inject  } from 'vue';
import  ArticleComponent from '@/views/home/components/ArticleComponent.vue'
import  PagiantionComponent from '@/views/home/components/PaginationComponent.vue'

const $http = inject('$http')
const $routes = inject('$routes')
const loading = ref(0)

const articles = ref([])
const paginationData = ref(null);

const loadAllArticles = (page = 1, search = null) => {

    loading.value = true;
    const requestData = {
        params: {
            page
        }
    }

    if(search) {
        requestData.params.search = search;
    }

    $http.get($routes.articles.all, requestData).then(articlesResponse => {
        const { data: { response : { data, pagination } } } = articlesResponse;
        articles.value = data;
        paginationData.value = pagination;
        loading.value = false;
    })
}
const search = (e) => {
    loadAllArticles(1, e.srcElement.value)
}


onMounted(() => {
    loadAllArticles();

})



</script>
<style lang="scss">
    .article-wrapper {
        margin-bottom: 15px;
    }
</style>