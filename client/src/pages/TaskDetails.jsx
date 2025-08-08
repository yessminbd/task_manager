import { FaBug, FaTasks, FaThumbsUp, FaUser } from "react-icons/fa";
import { MdError, MdKeyboardArrowDown, MdKeyboardArrowUp, MdKeyboardDoubleArrowUp, MdOutlineDoneAll, MdOutlineMessage, MdStart, MdTaskAlt, MdVerified } from "react-icons/md"
import { useParams } from "react-router-dom";
import { toast } from 'sonner';
import { RxActivityLog } from 'react-icons/rx';
import { useState } from "react";
import { tasks } from "../assets/data";
import Tabs from "../components/Tabs";
import clsx from "clsx";
import {GrInProgress} from "react-icons/gr"
import { dateFormatter, getInitials, priorityBg, priorityStyles, taskType } from "../utils";
import Activities from "../components/Activities";
const TaskDetails = () => {
  const { id } = useParams();
  const [selected, setSelected] = useState(0);
  const task = tasks[0];
  console.log(task.activities)

  return (
    <div className="w-full flex flex-col gap-3 mb-4 overflow-y-hidden">
      <h1 className="text-2xl  font-bold">{task.title}</h1>
      <Tabs tabs={TABS} setSelected={setSelected}>
        {selected == 0 ? (
          <div className="w-full flex flex-col md:flex-row gap-5 2xl:gap-8 bg-white shadow-md px-8 p-8 overflow-y-auto">
            <div className="w-full md:w-1/2 space-y-8">
              <div className="flex items-center gap-5">
                <div className={clsx(
                  'flex gap-1 items-center text-base font-semibold px-3 py-1 rounded-full',
                  priorityStyles[task?.priority],
                  priorityBg[task?.priority]
                )}
                >
                  <span className="text-lg">{ICONS[task?.priority]}</span>
                  <span className="capitalize">{task?.priority} Priority</span>
                </div>
                <div className={clsx("flex items-center gap-2")}>
                  <div className={clsx('w-4 h-4 rounded-full', taskType[task.stage])}></div>
                  <span className="text-black ">{task?.stage}</span>
                </div>
              </div>
              <p className=" font-semibold text-gray-700">
                Date of creation : {dateFormatter(new Date(task?.date))}
              </p>
              <div className="flex items-center gap-8 border-y border-gray-200">
                <div className="space-x-2">
                  <span className="font-semibold">Assets : </span>
                  <span>{task?.assets.length}</span>
                </div>
                <span className="text-gray-300">|</span>
                <div className="space-x-2">
                  <span className="font-semibold">Sub Task</span>
                  <span>{task?.subTasks?.length}</span>

                </div>
              </div>
              <div className="space-y-4 py-6">
                <p className="text-gray-700 font-semibold text-xm">Task Team</p>
                <div className="space-y-3">
                  {task?.team?.map((m, index) => (
                    <div
                      key={index}
                      className=" flex gap-4 py-2 items-center border-t border-gray-200">
                      <div className="w-9 h-9 rounded-full text-white flex items-center justify-center text-xm -mr-1 bg-blue-600">
                        <span className="text-center">{getInitials(m?.name)}</span>
                      </div>
                      <div>
                        <p className="text-md font-semibold">{m?.name}</p>
                        <span className="text-gray-500">{m.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* sub Tasks  */}
              <div className="space-y-4 py-6">
                <p className="text-gray-700 font-semibold text-xm">Sub Tasks</p>
                <div className="space-y-8">
                  {task?.subTasks?.map((e, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#2c802f]">
                        <MdTaskAlt className="text-white" size={26} />
                      </div>
                      <div className="space-y-1">
                        <div className="flex gap-2 items-center">
                          <span className=" text-sm text-gray-500">{dateFormatter(new Date(e?.date))}</span>
                          <span className="px-2 py-0.5 text-center font-semibold text-sm rounded-full bg-green-200 text-[#2c802f]">{e?.tag}</span>
                        </div>
                        <p className="text-gray-700 font-extrabold">{e?.title} </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-8">
              <p className="text-lg font-semibold text-gray-700 ">Assets</p>
              <div className="w-full grid grid-cols-2 gap-4">
                {task?.assets?.map((e, index) => (
                  <img key={index} src={e} alt={task?.title} className="w-full rounded h-28 md:h-36 2xl:h-52 cursor-pointer transition-all duration-700 hover:scale-125 hover:z-50" />

                ))}
              </div>
            </div>
          </div>
        ) : (
          //Activities
          <Activities activities={task.activities} id={id} />)
        }

      </Tabs>
    </div>
  )
}

export default TaskDetails
const assets = [
  "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1560893153-e0ddc89432ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
];
const TABS = [
  { title: "Task Details", icon: <FaTasks /> },
  { title: "Activities", icon: <RxActivityLog /> }

]
const ICONS = {
  high: <MdKeyboardDoubleArrowUp />,
  medium: <MdKeyboardArrowUp />,
  low: <MdKeyboardArrowDown />
}

export const Task_Type_Icon = {
  commented: (
    <div className="w-10 h-10 rounded-full  bg-[#4CAF50] flex items-center justify-center text-white">
      <MdOutlineMessage size={17} />
    </div>
  ),
  started: (
    <div className="w-10 h-10 rounded-full  bg-[#4CAF50] flex items-center justify-center text-white">
      <MdStart size={17} />
    </div>
  ),
  assigned: (
    <div className="w-10 h-10 rounded-full bg-[#4CAF50] flex items-center justify-center text-white">
      <FaUser size={16}/>
    </div>
  ),

  bug: (
    <div className="w-10 h-10  bg-[#4CAF50] rounded-full flex items-center justify-center  text-white">
      <MdError size={19} />
    </div>
  ),
  completed: (
    <div className="w-10 h-10 rounded-full   bg-[#4CAF50] flex items-center justify-center text-white">
      <MdVerified size={20}/>
    </div>
  ),
  "in progress": (
    <div className="w-10 h-10 rounded-full    bg-[#4CAF50]  flex items-center justify-center text-white">
      <GrInProgress size={15} />
    </div>
  ),


}