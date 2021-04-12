import React,{useState,useEffect} from 'react';
import {userService} from '../../services/user.service';
import { Link } from 'react-router-dom';

const UserList=()=>{
    const [users, setUser] = useState([]);
    useEffect(()=>{
        userService.getAll().then(x=>setUser(x.data))
    },[])
  
    function deleteUser(id) {
        userService.delete(id).then(() => {
            setUser(users => users.filter(x => x.id !== id));
        });
    }

    return (
        <div>
            <h1>Pantone</h1>
            <Link to="/add-user" className="btn btn-sm btn-success mb-2">Add Pantone</Link>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th style={{ width: '30%' }}>Name</th>
                        <th style={{ width: '30%' }}>Pantone Value</th>
                        <th style={{ width: '30%' }}>Year</th>
                        <th style={{ width: '10%' }}></th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map(user =>
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.pantone_value}</td>
                            <td>{user.year}</td>
                            <td style={{ whiteSpace: 'nowrap' }}>
                                <Link to={`/edit-user/${user.id}`} className="btn btn-sm btn-primary mr-1">Edit</Link>
                                <button onClick={() => deleteUser(user.id)} className="btn btn-sm btn-danger btn-delete-user">Delete</button>
                            </td>
                        </tr>
                    )}
                    {!users &&
                        <tr>
                            <td colSpan="4" className="text-center">
                                <div className="spinner-border spinner-border-lg align-center"></div>
                            </td>
                        </tr>
                    }
                    {users && !users.length &&
                        <tr>
                            <td colSpan="4" className="text-center">
                                <div className="p-2">No Users To Display</div>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}
export default UserList;