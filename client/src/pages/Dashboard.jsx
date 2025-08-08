import React from 'react';
import { BiLoaderCircle, BiTask } from 'react-icons/bi';
import { FaTasks } from 'react-icons/fa';
import { MdTaskAlt } from 'react-icons/md';
import { summary } from '../assets/data';
import TaskTable from '../components/TaskTable';
import UserTable from '../components/UserTable';
import { taskType } from '../utils';
const Dashboard = () => {
  const stats = [
    {
      _id: "1",
      label: "Total tasks",
      total: summary?.totalTasks || 0,
      icon: <FaTasks />,
      bg: taskType.all
    },
    {
      _id: "2",
      label: "Completed tasks",
      total: summary.tasks.find(task => 'complete' in task)?.complete || 0,
      icon: <MdTaskAlt />,
      bg: taskType.Completed
    },
    {
      _id: "3",
      label: "Tasks in progress",
      total: summary.tasks.find(task => 'in-progress' in task)?.['in-progress'] || 0,
      icon: <BiLoaderCircle />,
      bg: taskType['In progress']
    },
    {
      _id: "4",
      label: "Task to do",
      total: summary.tasks.find(task => 'todo' in task)?.todo || 0,
      icon: <BiTask />,
      bg: taskType['To do']
    },
  ];
  // label, count, bg, icon sont des props( partie spécifique de la carte)
  const Card = ({ label, count, bg, icon }) => {
    return (
      <div className='w-full h-32 bg-white p-5 shadow-md rounded-md flex items-center justify-between'>
        <div className='h-full flex flex-1 flex-col justify-between'>
          <p className='text-base text-gray-800 font-semibold'>{label}</p>
          <span className='text-xl'>{count}</span>
          <span className='text-sm text-gray-400'>{ }</span>
        </div>
        <div className={`w-12 h-12 rounded-full ${bg} flex items-center justify-center`}>
          {React.cloneElement(icon, { className: 'text-2xl text-white' })}
        </div>
      </div>
    );
  };

  return (
    <div className='h-full py-4'>
      <div className='flex flex-wrap -mx-2'>
        {stats.map(({ icon, bg, label, total }, index) => (
          <div key={index} className='w-full sm:w-1/2 md:w-1/4 px-2 mb-4'>
            <Card icon={icon} bg={bg} label={label} count={total} />
          </div>
        ))}
      </div>
      <div className='w-full flex flex-col md:flex-row gap-4 2xl:gap-10 py-8'>
        <TaskTable
          tasks={summary.last10Tasks}
        />
      </div>
      <div className=' w-full flex flex-col md:flex-row gap-4 2xl:gap-10'>
        <UserTable
          users={summary.users}
        />
      </div>


    </div>
  );
};

export default Dashboard;

