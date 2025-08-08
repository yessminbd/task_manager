/* eslint-disable no-unused-vars */
import React from 'react'
import { MdDelete, MdDeleteForever, MdKeyboardArrowDown, MdKeyboardArrowUp, MdKeyboardDoubleArrowUp, MdOutlineRestore, } from 'react-icons/md'
import { useState } from "react"
import Title from '../components/Title';
import clsx from 'clsx';
import { formatDate, priorityStyles, taskType } from '../utils';
import { tasks } from '../assets/data';
import Button from '../components/Button';
import { ConfirmationDialog } from '../components/Dialogs';

const Trash = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState(null);
  const [type, setType] = useState('delete');
  const [selected, setSelected] = useState(null);
  
  const restoreAllClick = () => {
    setType('restoreAll');
    setMsg('Do you want to restore all items from the trash ?')
    setOpenDialog(true);
  }
  const deleteAllClick = () => {
    setType('deleteAll');
    setMsg('Do you want to delete all items ?')
    setOpenDialog(true);
  }
  const restoreClick = (id) => {
    setType('restore');
    setSelected(id);
    setMsg('Do you want to restore the selected item ?')
    setOpenDialog(true);
  };
  const deleteClick = (id) => {
    setType('delete');
    setSelected(id);
    setMsg('Do you want to delete the selected item ?')
    setOpenDialog(true);
  }
  const deleteRestoreHandler = () => { };

  const TableHeader = () => (
    <thead className='border-b border-gray-300'>
      <tr className='text-black text-left'>
        <th className='py-2'>Task Title</th>
        <th className='py-2'>Priority</th>
        <th className='py-2'>Stage</th>
        <th className='py-2'>Modified On</th>
      </tr>
    </thead>
  );
  const TableRow = ({ item }) => (

    <tr className="border-b border-gray-200 text-gray-600 font-semibold  hover:bg-gray-400/10">
      <td className="py-2" >
        <div className="flex items-center gap-3 ">
          <div className={clsx("w-4 h-4 rounded-full", taskType[item.stage])}>
          </div>
          <p className="w-full line-clamp-2 text-bas dark:text-gray-500">
            {item?.title}
          </p>
        </div>
      </td>
      <td className="py-2 capitalize" >
        <div className="flex gap-1 items-center">
          <span className={clsx("text-lg", priorityStyles[item.priority])}>
            {ICONS[item?.priority]}
          </span>
          <span className=' dark:text-gray-500'>{(item?.priority)}</span>
        </div>
      </td>
      <td className="py-2 text-center md:text-start" >
        {(item?.stage)}
      </td>
      <td className="py-2 dark:text-gray-500" >
        {formatDate(new Date(item?.date))}
      </td>
      <td className="py-2 flex gap-1 justify-end" >
        <Button

          icon={<MdOutlineRestore className=" text-xl dark:text-gray-500" />}
          onClick={() => restoreClick(item._id)}
        />
        <Button
          icon={<MdDeleteForever className=" text-xl text-red-600" />}
          onClick={() => deleteClick(item._id)}
        />
      </td>
    </tr>
  )
  return (
    <>
      <div className='w-full md:px-1 px-0 mb-6'>
        <div className='flex mb-8 items-center font-semibold justify-between'>
          <Title title='Trashed Tasks' />
          <div className='flex gap-2 md:gap-4  items-center'>
            <Button
              label='Restore all'
              icon={<MdOutlineRestore className=' text-lg hidden md:flex' />}
              className='flex flex-row-reverse gap-1 items-center font-semibold text-base 2xl:py-2.5'
              onClick={() => restoreAllClick()}
            />
            <Button
              label='Delete all'
              icon={<MdDelete className=' text-lg hidden md:flex' />}
              className='flex flex-row-reverse gap-1 items-center font-semibold text-base text-red-600  2xl:py-2.5'
              onClick={() => deleteAllClick()}
            />
          </div>
        </div>
        <div className="bg-white dark:bg-[#1f1f1f] px-2 md:px-6 py-2">
          <div className="overflow-x-auto">
            <table className="w-full mb-5">
              <TableHeader />
              <tbody>
                {tasks?.map((task, id) => (
                  <TableRow key={id} item={task} />
                ))}
              </tbody>

            </table>
          </div>
        </div>
      </div>
      <ConfirmationDialog
        open={openDialog}
        setOpen={setOpenDialog}
        onClick={() => deleteRestoreHandler()}
        msg={msg}
        type={type}
        setType={setType}

      />
    </>
  )
}

export default Trash

const ICONS = {
  high: <MdKeyboardDoubleArrowUp />,
  medium: <MdKeyboardArrowUp />,
  low: <MdKeyboardArrowDown />

}