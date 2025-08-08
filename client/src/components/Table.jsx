import { useState } from "react"
import { MdAttachFile, MdDelete, MdEdit, MdKeyboardArrowDown, MdKeyboardArrowUp, MdKeyboardDoubleArrowUp, MdViewList } from "react-icons/md"
import UserInfo from "./UserInfo";
import clsx from "clsx";
import { bgs, formatDate, priorityStyles, taskType } from "../utils";
import { BiMessageDetail } from "react-icons/bi";
import Button from "./Button";
import { ConfirmationDialog } from "./Dialogs";

const Table = ({ tasks }) => {
    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [selected, setSelected] = useState(0);
    const [openDialog, setOpenDialog] = useState(false);
    const deleteHandler = () => { };
    const deleteClicks = (id) => {
        setSelected(id);
        setOpenDialog(true)
    };
    const TableHeader = () => (
        <thead className='border-b w-full border-gray-300'>
            <tr className=' w-full text-black text-left'>
                <th className='py-2'> Task Title</th>
                <th className='py-2'> Priority</th>
                <th className='py-2'> Team</th>
                <th className='py-2 '>Assets</th>
                <th className='py-2 line-clamp-1'>Created At</th>

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
            <td className='py-2 '>
                <div className=' flex items-center gap-1'>
                    <span className={clsx("text-lg", priorityStyles[task?.priority])}> {ICONS[task?.priority]}</span>
                    <span className='capitalize line-clamp-1'>{task?.priority} </span>
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
            <td className='py-2'>
                <div className="flex items-center gap-3">
                    <div className="flex gap-1 items-center text-sm text-gray-700">
                        <BiMessageDetail />
                        <span>{task?.activities?.length || 0}</span>
                    </div>
                    <div className="flex gap-1 items-center text-sm text-gray-700">
                        <MdAttachFile />
                        <span>{task?.activities?.length || 0}</span>
                    </div>
                    <div className="flex gap-1 items-center text-sm text-gray-700">
                        <MdViewList />
                        <span>{task?.activities?.length || 0}</span>
                    </div>
                </div>


            </td>
            <td className='py-2'>
                <span className='text-base text-gray-800'>
                    {formatDate(new Date(task?.date))}
                </span>
            </td>
            <td className='py-2 flex gap-2 md:gap-4 justify-end'>
                <button
                    onClick={() => setOpenEdit(true)}
                    className='text-[#4CAF50] text-xl hover:text-green-300 sm:px-0 '
                    type='button'
                > <MdEdit /></button>
                <button
                    className='text-[#eb1919] text-xl  hover:text-red-300 sm:px-0  '
                    type='button'
                    onClick={() => deleteClicks(task._id)}
                >
                    <MdDelete />
                </button>
            </td>

        </tr>;
    return (
        <>
            <div className='w-full bg-white px-2 md:px-4 pt-4 pb-4 shadow-md rounded'>
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
            <ConfirmationDialog
                open={openDialog}
                setOpen={setOpenDialog}
                onClick={deleteHandler}
            />
        </>
    )
}

export default Table

const ICONS = {
    high: <MdKeyboardDoubleArrowUp />,
    medium: <MdKeyboardArrowUp />,
    low: <MdKeyboardArrowDown />

}