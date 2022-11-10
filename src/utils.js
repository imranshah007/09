import axios from 'axios'

const req =  axios.create({
    baseURL:"https://api.edamam.com/api/recipes/v2",
    timeout:10000,
    params:{
        type:"public",
        app_key:"9aadfea2d1bd7dadec60be3dba2ac48d",
        app_id:"b6d96ad0"
        
    }
});

export  {req};