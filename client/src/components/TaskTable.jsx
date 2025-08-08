import moment from "moment";
import UserInfo from "./UserInfo";
import { bgs, taskType } from '../utils';
import { clsx } from 'clsx'
const TaskTable = ({ tasks }) => {



    const TableHeader = () => (
        <thead className='border-b border-gray-300'>
            <tr className='text-black text-left'>
                <th className='py-2'> Task Title</th>
                <th className='py-2'> Priority</th>
                <th className='py-2'> Team</th>
                <th className='py-2 hidden md:block'> Date of creation</th>
            </tr>
        </thead>
    );
    const TableRow = ({ task }) =>
        <tr className=' border-b border-gray-300 text-gray-800 hover:bg-gray-300/10'>
            <td className='py-2 '>
                <div className=' flex items-center gap-2'>
                    <div className={clsx("w-4 h-4 rounded-full", taskType[task.stage])}></div>
                    <p className='text-base text-black'>{task.title}</p>
                </div>
            </td>
            <td className='py-2'>
                <div className='flex gap-1 items-center'>
                    <span className='capitalize'>{task.priority}</span>
                </div>
            </td>
            <td className='py-2 '>
                <div className='flex gap-2'>
                    {task.team.map((m, index) => (
                        <div
                            key={index} className={
                                clsx(
                                    "w-7 h-7 rounded-full text-white flex  items-center justify-center text-sm -mr-1",
                                    bgs[index % bgs.length]
                                )}
                        >
                            <UserInfo user={m}></UserInfo>

                        </div>
                    ))}
                </div>
            </td>
            <td className='py-2 hidden md:block'>
                <span className='text-base text-gray-600'>
                    {moment(task?.date).fromNow()}
                </span>
            </td>
        </tr>;
    return (
        <div className='w-full  bg-white px-2 md:px-4 pt-4 pb-4 shadow-md rounded'>
            <table className='w-full'>
                <TableHeader />
                <tbody>
                    {
                        tasks.map((task, id) => (
                            <TableRow
                                key={id}
                                task={task} />))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default TaskTable