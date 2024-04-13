import Link from 'next/link'
export default function Navbar() {
    return (
      <nav className='flex justify-between items-center px-8 py-3 bg-slate-800'>
        <Link href='/' className='text-2xl text-white font-semibold'>TaskSync</Link>
        <Link href='/create-task' className='p-2 bg-white shadow'>Add Task</Link>
      </nav>
    );
  }
  