import axios from 'axios';
const baseUrl = 'http://localhost:3001';
export const userService={
    getAll,
    getById,
    create,
    update,
    delete:_delete
};

async function getAll(){
    const response = await axios.get(baseUrl+'/pantones');
    return response.data;
}

async function getById(id){
    const response = await axios.get(baseUrl+'/pantone/'+ id);
    return response.data;
}

async function create(param){
    console.log('param',param,baseUrl+'/create')
    const response = await axios.post(baseUrl+'/create',param);
    console.log('create user',response);
    return response;
}

async function update(id,param){
    const response = await axios.put(`${baseUrl}/pantone/${id}`,param);
    console.log('update user',response);
    return response;
}

async function _delete(id){
    const response = await axios.delete( `${baseUrl}/pantone/${id}`);
    console.log('update user',response);
    return response;
}