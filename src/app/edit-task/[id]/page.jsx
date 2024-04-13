import EditTask from '../../../components/EditTask';
import React from 'react'
import { BASE_URL } from '../../../components/api';

const getTopicByID = async (id) => {
    try {
        const res = await fetch(`${BASE_URL}/topics/${id}`, {
            cache: 'no-cache',
        });
        if (!res.ok) {
            throw new Error('Error Fetching Task!');
        }
        return res.json();
    } catch (error) {
        console.log('Error', error);
    }
}

export default async function EditPage({ params }) {
    const { id } = params;
    const { topic } = await getTopicByID(id);
    const { title, description } = topic;
    return (
        <>
            <EditTask id={id} title={title} description={description} />
        </>
    )
}
