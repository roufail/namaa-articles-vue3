<template>
    <div class="row">
        <div v-if="loaded" class="card">
          <div class="card-body">

            <div class="article-title">
              <h6>{{  article.title  }}</h6>
             </div>
             <div class="article-author row">
                <div class="col-8">
                    By {{  article.auther.name  }} @ {{ moment(article.created_at).format('M d,Y')  }}
                </div>
                <div class="content" v-html="article.content" />
             </div>

          </div>

          <CommentsComponent v-if="article.comments?.length > 0" :comments="article.comments"   />
        </div>
        <div v-else>
            <div class="spinner-border text-secondary" role="status">
            <span class="sr-only">Loading...</span>
        </div>
        </div>

    </div>
</template>

<script setup>
import { onMounted, reactive, ref , inject } from 'vue';
import { useRoute } from 'vue-router'
import moment from 'moment'
import  CommentsComponent from '@/views/home/components/CommentsComponent.vue'

const $http = inject('$http')
const $routes = inject('$routes')
let article = reactive(null)
const $route = useRoute()
const loaded = ref(false);
const loadArticle = () => {
    $http.get($routes.articles.fetch($route.params.id)).then(articleResponse => {
        const  {  data : { response }  }  = articleResponse;
        article = response;
        loaded.value = 1;
    })
}


onMounted(() => {
    loadArticle();
})

</script>
<style lang="scss">
    .article-wrapper {
        margin-bottom: 15px;
    }
</style>