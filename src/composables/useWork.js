import { ref } from 'vue'
import api from '@/apis/api'

let works = ref({})

export function useWorks() { 
    
    function getWork() { 
        api.get('works')
            .then(response=> {
                works.value = response.data.data
            })
    }

    return { works, getWork }
}