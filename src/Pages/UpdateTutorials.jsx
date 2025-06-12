import axios from 'axios';
import React, { use } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateTutorials = () => {
    const {_id,price, image, language, review, description}=useLoaderData()
    const {user}=use(AuthContext)
    const handleUpdate=(e)=>{
        e.preventDefault()
        const form=e.target;
        const formData = new FormData(form);
        const newTutorial = Object.fromEntries(formData.entries())
        console.log(newTutorial);

        axios.put(`${import.meta.env.VITE_API_URL}/updatetutorial/${_id}`,newTutorial).then(res=>{
            if(res.data.modifiedCount){
                Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your data has been updated",
                showConfirmButton: false,
                timer: 1500
                });
            }
        }
            ).catch(error=>{
            console.log(error);
        })
    }
    return (
        <div className='bg-green-200 dark:bg-green-700 w-full'>
            <form  onSubmit={handleUpdate} className='grid gap-6 w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                <input type="text" name='user'  value={user.displayName} placeholder="User" className="input w-full" />
                <input type="text" name='email' value={user.email} placeholder="Email" className="input w-full" />
                <input type="url" name='image' defaultValue={image} placeholder="tutorial image" className="input w-full" />
                <input type="text" name='language' defaultValue={language} placeholder="Language" className="input w-full" />
                <input type='number' name='price' defaultValue={price} placeholder="price" className="input w-full" />
                <input type="text" name='description' defaultValue={description} placeholder="Description" className="input w-full" />
                <input type="number" name='reviews' defaultValue={review} placeholder="reviews" className="input w-full" />
                <input className='btn w-full md:ml-40 lg:ml-80 bg-green-500' value={'Update'} type='submit'/>
            </form>
            

        </div>
    );
};

export default UpdateTutorials;