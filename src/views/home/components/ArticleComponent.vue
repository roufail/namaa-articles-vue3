<template>
    <div class="row mb-3">
        <div class="card">
          <div class="card-body">
            <div class="article-title">
              <h6>{{  article.title  }}</h6>
             </div>
             <div class="article-excpert">
              {{  article.excerpt  }}
             </div>
             <div class="article-author row">
                <div class="col-8">
                    By {{  article.auther.name  }} @ {{ moment(article.created_at).format('M d,Y')  }}
                </div>
                <div class="col-4 text-end">
                    <router-link :to="{ name: 'article', params: { id: article.id }}">Read More</router-link>
                </div>
             </div>

          </div>
        </div>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';
    import moment from 'moment'
    const { article } = defineProps({
        'article': Object,
    });



</script>


<style lang="scss">
    .article-wrapper {
        margin-bottom: 15px;
    }
</style>