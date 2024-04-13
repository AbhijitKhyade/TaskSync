'use client';
import { useState } from "react";
import { BASE_URL } from "./api";
import { useRouter } from "next/navigation";

export default function AddTask() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
    });

    const router = useRouter();

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!formData.title || !formData.description) {
                alert('Please fill all the fields');
                return;
            }
            // console.log(formData);
            const res = await fetch(`${BASE_URL}/topics`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                throw new Error('Error Creating Task!');
            }
            router.push('/');
            router.refresh();
        } catch (error) {
            console.log('Error', error);
        }
    }
    return (
        <div>
            <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
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

                <button className='p-2 bg-slate-800 text-white shadow-md mt-4'>Create Task</button>
            </form>
        </div>
    )
}
