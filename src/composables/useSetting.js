import { ref } from 'vue'
import api from '@/apis/api'

let settings = ref({})

export function useSettings() { 
    
    function getSettings() { 
        api.get('settings')
            .then(response=> {
                settings.value = response.data.data
            })
    }

    return { settings, getSettings }
}