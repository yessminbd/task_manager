import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiTwotoneFolderOpen } from 'react-icons/ai';
import { MdAdd, MdOutlineEdit } from "react-icons/md";
import { HiDuplicate } from "react-icons/hi";
import { Menu, Transition } from "@headlessui/react";
import { BsThreeDots } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import AddTask from "./AddTask";
import AddSubTask from "./AddSubTask";
import { ConfirmationDialog } from "./Dialogs";

const TaskDialog = ({ task }) => {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const navigate = useNavigate();
  const duplicateHandler = () => { };
  const deleteClicks = () => { };
  const deleteHandler = () => { };

  const items = [
    {
      label: "View task",
      icon: <AiTwotoneFolderOpen className="mr-2 h-5 w-5" aria-hidden="true" />,
      onClick: () => navigate(`/task/${task._id}`)
    },
    {
      label: "Edit task",
      icon: <MdOutlineEdit className="mr-2 h-5 w-5" aria-hidden="true" />,
      onClick: () => setOpenEdit(true),
    },
    {
      label: "Add subtask",
      icon: <MdAdd className="mr-2 h-5 w-5" aria-hidden="true" />,
      onClick: () => setOpen(true),
    },
    {
      label: "Duplicate",
      icon: <HiDuplicate className="mr-2 h-5 w-5" aria-hidden="true" />,
      onClick: () => duplicateHandler(),
    },
  ];

  return (
    <> <div>
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300">
          <BsThreeDots size={20} />
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Menu.Items className="absolute p-4 right-0 mt-2 w-52 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 space-y-2">
              {items.map((e) => (
                <Menu.Item key={e.label}>
                  {({ active }) => (
                    <div
                      onClick={e?.onClick}
                      className={`${active ? "bg-[#4CAF50] text-white" : "text-gray-900"} group flex w-full items-center rounded-md px-2 text-base cursor-pointer`}
                    >
                      {e.icon}
                      {e.label}
                    </div>
                  )}
                </Menu.Item>
              ))}
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <div
                    onClick={() => deleteClicks()}
                    className={`${active ? "bg-[#ec3333] text-white" : "text-red-500"} group flex w-full items-center rounded-md px-2 text-base cursor-pointer`}
                  >
                    <RiDeleteBin6Line className="mr-2 h-5 w-5" aria-hidden="true" />
                    Delete
                  </div>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
      <AddTask
        open={openEdit}
        setOpen={setOpenEdit}
        task={task}
        key={new Date().getTime()}
      />
      <AddSubTask
        open={open}
        setOpen={setOpen}
      />
      <ConfirmationDialog
      open={openDialog}
      setOpen={setOpenDialog}
      onClick={deleteHandler}
      />
    </>

  );
};

export default TaskDialog;
