import api from '@/apis/api'
import { ref } from 'vue'

export function useArticle () { 
    let articles = ref({
        data: [],
        links: {},
        meta: {}
    })

    let loading = ref(false)

    let articleDetail = ref({
        category: {}
    })
    let articleDetailLoading = ref(false)

    function fetchArticles (params = {}) { 
        let { page = 1, showMore = false } = params
        
        loading.value = true
        api.get('articles', { params: { page }})
            .then(response => {
                if(showMore) { 
                    articles.value = { 
                        ...response.data, 
                        data: [ ...articles.value.data, ...response.data.data ]
                    }
                } else { 
                    articles.value = response.data
                }
            }) 
            .finally(() => loading.value = false)
    }

    function fetchArticleDetail (params) { 

        articleDetailLoading.value = true;

        api.get(`articles/${params.slug}`)
            .then(response => {     
                articleDetail.value = response.data.data
            })
            .finally(() => articleDetailLoading.value = false )
    }

    return { articles, loading, fetchArticles, fetchArticleDetail, articleDetail, articleDetailLoading }

    /*
    return { 
        articles, 
        loading, 
        fetchArticles, 
        fetchArticleDetail, 
        articleDetail, 
        articleDetailLoading 
    } 
    */ 
}