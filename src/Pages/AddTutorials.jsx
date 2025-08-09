import React, { use } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import Swal from 'sweetalert2';
import axios from 'axios';

const AddTutorials = () => {
    const {user}=use(AuthContext)
    

    const handleSubmit=e=>{
        e.preventDefault()
        const form=e.target;
        const formData = new FormData(form);
        const newTutorial = Object.fromEntries(formData.entries())
        const token=localStorage.getItem('token');
        axios.post(`${import.meta.env.VITE_API_URL}/tutorials`,newTutorial,{
            headers: {
        Authorization: `Bearer ${token}`,
      }
        }).then(res=>{console.log(res.data);
            if(res.data.insertedId){
                Swal.fire({
                        title: "Data added successfully!",
                        icon: "success",
                        draggable: true
        });
            }
        }).catch(error=>{
            console.log(error);
        })


    }
    return (
        <div className=' w-full'>
            <form  onSubmit={handleSubmit} className='grid gap-6 w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                <input type="text" name='user' value={user.displayName} placeholder="User" className="input w-full" />
                <input type="text" name='email' value={user.email} placeholder="Email" className="input w-full" />
                <input type="url" name='image' placeholder="image" className="input w-full" />
                <input type="text" name='language' placeholder="Language" className="input w-full" />
                <input type='number' name='price' placeholder="price" className="input w-full" />
                <input type="text" name='description' placeholder="Description" className="input w-full" />
                <input type="number" name='reviews' value={0} placeholder="reviews" className="input w-full" />
                <input className='btn w-full btn-primary' value={'submit'} type='submit'/>
            </form>
            

        </div>
    );
};

export default AddTutorials;