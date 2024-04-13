'use client';
import { useState } from "react";
import { BASE_URL } from "../components/api";
import { useRouter } from "next/navigation";

export default function EditTask({ id, title, description }) {
    const [formData, setFormData] = useState({
        title: "" || title,
        description: "" || description,
    });
    const router = useRouter();
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            // console.log(formData);
            const res = await fetch(`${BASE_URL}/topics/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if(!res.ok) {
                throw new Error('Error Updating Task!');
            }
            router.refresh();
            router.push('/');

        } catch (error) {
            console.log('Error', error);
        }
    }
    return (
        <div>
            <form className='flex flex-col gap-3' onSubmit={handleUpdate}>
                <input
                    className='border border-slate-500 p-3 outline-none '
                    type="text"
                    name='title'
                    placeholder='Task ...'
                    onChange={handleInputChange}
                    value={formData.title}
                />
                <input
                    className='border border-slate-500 p-3 outline-none '
                    type="text"
                    name='description'
                    placeholder='Description ...'
                    onChange={handleInputChange}
                    value={formData.description}
                />

                <button className='p-2 bg-slate-800 text-white shadow-md mt-4'>Update Task</button>
            </form>
        </div>
    )
}
