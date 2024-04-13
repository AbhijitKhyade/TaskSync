import Link from "next/link";
import { HiPencilAlt } from 'react-icons/hi';
import RemoveBtn from '../components/RemoveBtn';
import { BASE_URL } from '../components/api';

const getAllTasks = async () => {
  try {
    const res = await fetch(`${BASE_URL}/topics`, {
      cache: 'no-cache'
    });
    if (!res.ok) {
      throw new Error('Failed to fetch topics: ');
    }

    return res.json();
  } catch (error) {
    console.log('Error while fetching:', error);
  }
}


export default async function TodoList() {

  const { topics } = await getAllTasks();

  return (
    <>
      {topics?.map((task) => (
        <div key={task._id} className="p-4 border border-slate-300 my-3 flex justify-between items-start gap-5">
          <div>
            <h2 className="font-bold text-2xl">{task.title}</h2>
            <div>{task.description}</div>
          </div>
          <div className="flex gap-3">
            <RemoveBtn id={task._id}/>
            <Link href={`/edit-task/${task._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}

    </>
  )
}