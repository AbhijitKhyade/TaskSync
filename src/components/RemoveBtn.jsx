'use client';
import { useRouter } from 'next/navigation';
import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi';

export default function RemoveBtn({ id }) {
    const router = useRouter();

    const handleRemove = async () => {
        // const confirm = alert('Are you sure you want to delete this task?');
        // if (!confirm) {
        //     return;
        // }
        try {
            const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
                method: "DELETE",
            });
            if (res.ok) {
                router.refresh();
            }
        } catch (error) {
            console.log('Error', error);
        }
    }
    return (
        <button onClick={handleRemove} className='text-red-400'>
            <HiOutlineTrash size={24} />
        </button>
    )
}
