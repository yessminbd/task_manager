/* eslint-disable no-unused-vars */
import { useState } from "react"
import Title from "../components/Title";
import { IoMdAdd } from "react-icons/io";
import Button from "../components/Button";
import { summary } from "../assets/data";
import { getInitials } from "../utils";
import clsx from "clsx";
import { MdDelete, MdEdit } from "react-icons/md";
import { ConfirmationDialog, UserAction } from "../components/Dialogs";
import AddUser from "../components/AddUser";


const Users = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [open, setOpen] = useState(false);
    const [openAction, setOpenAction] = useState(false);
    const [selected, setSelected] = useState(null);
    const deleteHandler = () => { };
    const userActionHandler = () => { };
    const deleteUserClick = (id) => {
        setSelected(id);
        setOpenDialog(true);
    }
    const editUserClick = (e) => {
        setSelected(e);
        setOpen(true);

    }

    const TableHeader = () => (
        <thead className='border-b border-gray-300'>
            <tr className='text-black text-left'>
                <th className='py-2'>Full Name</th>
                <th className='py-2'>Title</th>
                <th className='py-2'>Email</th>
                <th className='py-2'>Role</th>
                <th className='py-2'>Status</th>
            </tr>
        </thead>
    );
    const TableRow = ({ user }) => (

        <tr className="border-b border-gray-200 text-gray-600 font-semibold  hover:bg-gray-400/10">
            <td className="py-2" >
                <div className="flex items-center gap-3 ">
                    <div className="w-9 h-9 rounded-full text-white flex px-2 items-center justify-center text-sm bg-sky-700">
                        <span className="text-xs md:text-sm text-center">
                            {getInitials(user?.name)}
                        </span>
                    </div>
                    {user?.name}
                </div>
            </td>
            <td className="py-2" >
                <div className="flex items-center gap-3">
                    <span className="">
                        {user?.title}
                    </span>
                </div>
            </td>
            <td className="py-2" >
                <div className="flex items-center gap-3">
                    <span className="">
                        {user?.email}
                    </span>
                </div>

            </td>
            <td className="py-2" >
                <div className="flex items-center ">
                    <span className="">
                        {user?.role}
                    </span>
                </div>

            </td>
            <td className="py-2" >
                <button
                    // onClick={()=>userStatusClick(user)}
                    className={clsx(
                        "w-fit px-3 py-1 mr-3 ml-2 rounded-full text-black text-xs",
                        user?.isActive ? "bg-green-300" : "bg-red-200")}

                >
                    {user?.isActive ? "Active" : "Disabled"}
                </button>

            </td>
            <td className="py-2 flex  md:gap-4  justify-end" >
                <Button
                    icon={<MdEdit className=" text-xl text-gray-600-700" />}
                    onClick={() => editUserClick(user)}
                />
                <Button
                    icon={<MdDelete className=" text-xl text-red-500" />}
                    onClick={() => deleteUserClick(user?._id)}
                />
            </td>

        </tr>
    )
    return (
        <>  <div className="w-full md:px-1 px-0 mb-6">
            <div className="flex font-semibold items-center justify-between mb-8">
                <Title
                    title='Team members'
                />
                <Button
                    label='Add new member'
                    icon={<IoMdAdd className=" text-lg" />}
                    className=" flex flex-row-reverse gap-1 items-center text-md bg-[#4CAF50] text-white rounded-md py-2 px-2 2xl:py-2.5"
                    onClick={() => setOpen(true)}
                />
            </div>
            <div className="bg-white dark:bg-[#1f1f1f] px-2 md:px-4 py-4">
                <div className="overflow-x-auto">
                    <table className="w-full mb-5">
                        <TableHeader />
                        <tbody>
                            {summary.users?.map((user, index) => (
                                <TableRow key={index} user={user} />
                            ))}
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
            <AddUser
                open={open}
                setOpen={setOpen}
                userData={selected}
                key={new Date().getTime()}
            />
            <ConfirmationDialog
                open={openDialog}
                setOpen={setOpenDialog}
                onClick={deleteHandler}
            />
            <UserAction
                open={openAction}
                setOpen={setOpenAction}
                onClick={userActionHandler}
            />

        </>
    )
}

export default Users
