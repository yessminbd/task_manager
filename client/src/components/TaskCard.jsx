import clsx from "clsx";
import { useState } from "react";
import { BiMessageDetail } from 'react-icons/bi';
import { MdAttachFile, MdKeyboardArrowDown, MdKeyboardArrowUp, MdKeyboardDoubleArrowUp, MdViewList } from "react-icons/md";
import { useSelector } from 'react-redux';
import { bgs, formatDate, priorityStyles, taskType } from '../utils/index';
import TaskDialog from "./TaskDialog";
import UserInfo from "./UserInfo";
import { IoMdAdd } from "react-icons/io";
import AddSubTask from "./AddSubTask";
const TaskCard = ({ task }) => {
    const { user } = useSelector(state => state.auth);
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className=" w-full h-fit  bg-white shadowmd* p-4 rounded">
                <div className="w-full flex justify-between">
                    <div className={clsx(
                        "flex flex-1 gap-1 items-center text-sm font-medium",
                        priorityStyles[task?.priority]
                    )}
                    >
                        <span className="text-lg " >{ICONS[task?.priority]}</span>
                        <span className="uppercase font-bold ">{task?.priority} Priority</span>
                    </div>

                    {user?.isAdmin && <TaskDialog task={task} />}
                </div>
                <div className=" flex items-center gap-2">
                    <div className={clsx(
                        "w-4 h-4 rounded-full ",
                        taskType[task.stage])}>
                    </div>
                    <h4 className="line-clamp-1 text-black">{task?.title}</h4>
                </div>
                <span className="text-sm text-gray-700">
                    {formatDate(new Date(task?.date))}
                </span>
                <div className="w-full border-t border-gray-200 my-2"></div>
                <div className="flex items-center justify-between mb-2">

                    <div className="flex items-center gap-3">
                        <div className="flex gap-1 items-center text-base text-gray-700">
                            <BiMessageDetail />
                            <span>{task?.activities?.length || 0}</span>
                        </div>
                        <div className="flex gap-1 items-center text-base text-gray-700">
                            <MdAttachFile />
                            <span>{task?.activities?.length || 0}</span>
                        </div>
                        <div className="flex gap-1 items-center text-base text-gray-700">
                            <MdViewList />
                            <span>{task?.activities?.length || 0}</span>
                        </div>
                    </div>
                    <div className="flex flex-row-reverse ">
                        {task?.team.map((m, index) => (
                            <div key={index} className={clsx(
                                "w-7 h-7 rounded-full text-white flex items-center justify-center text-sm -mr-1",
                                bgs[index % bgs?.length]
                            )}
                            >
                                <UserInfo
                                    user={m}
                                />
                            </div>
                        )
                        )}
                    </div>
                </div>
                {task?.subTasks?.length > 0
                    ? <div className="py-4 border-t border-gray-200">
                        <h5 className="text-base line-clamp-1 text-black" >{task?.subTasks[0].title}
                        </h5>
                        <div className=" space-x-8">
                           
                           <span className="text-sm text-gray-600">
                               {formatDate(new Date(task?.subTasks[0].date))}
                           </span>
                       </div>
                        <div className="py-3 space-x-8">
                            <span className="bg-green-200 px-3 py-1 rounded-md font-medium">
                                {task?.subTasks[0].tag}
                            </span>   
                        </div>
                        
                    </div>
                    : (
                        <div className="py-2 border-t border-gray-200">
                            <span className="text-gray-500">No sub tasks for this task</span>
                        </div>
                    )}
                
            </div>
        </>
    )
}

export default TaskCard


const ICONS = {
    high: <MdKeyboardDoubleArrowUp />,
    medium: <MdKeyboardArrowUp />,
    low: <MdKeyboardArrowDown />

}