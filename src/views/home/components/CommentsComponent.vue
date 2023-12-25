<template>
<section class="comments">
    <div class="container my-5 py-5">
        <div class>
        <div>
            <div class="card text-dark">
            <div class="card-body p-4">
                <h4 class="mb-0">Recent comments</h4>
                <p class="fw-light mb-4 pb-2">Latest Comments section by users</p>
                    <div v-for="comment in comments" :key="'comment-'+comment.id">
                        <div class="d-flex flex-start">
                                    <div>
                                        <h6 class="fw-bold mb-1">{{  comment.title  }}</h6>
                                        <div class="d-flex align-items-center mb-3">
                                        <p class="mb-0">
                                            {{  moment(comment.created_at).format('M d,Y')   }}
                                        </p>
                                        </div>
                                        <p class="mb-0" v-html="comment.content" />
                            </div>
                        </div>
                        <hr class="mb-1 mt-1" />
                    </div>
               
            </div>
    
        
            </div>
        </div>
        </div>
    </div>
    </section>
</template>
    
<script setup>
    import moment from 'moment'
    const { comments } = defineProps({
        'comments': Object,
    });

</script>
    
<style>
    
</style>