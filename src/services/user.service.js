import axios from 'axios';
const baseUrl = 'https://reqres.in/api/products';
export const userService={
    getAll,
    getById,
    create,
    update,
    delete:_delete
};

async function getAll(){
    const response = await axios.get(baseUrl);
    return response.data;
}

async function getById(id){
    const response = await axios.get(baseUrl+'/'+ id);
    return response.data;
}

async function create(param){
    const response = await axios.post(baseUrl,param);
    console.log('create user',response);
    return response;
}

async function update(id,param){
    const response = await axios.put(`${baseUrl}/${id}`,param);
    console.log('update user',response);
    return response;
}

async function _delete(id){
    const response = await axios.delete( `${baseUrl}/${id}`);
    console.log('update user',response);
    return response;
}