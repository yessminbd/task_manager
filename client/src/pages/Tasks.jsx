import { MdGridView } from 'react-icons/md'
import { FaList } from 'react-icons/fa'
import { IoMdAdd } from 'react-icons/io'
import { taskType } from '../utils/index'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import Loader from '../components/Loader';
import Title from '../components/Title';
import Button from '../components/Button';
import Tabs from '../components/Tabs';
import TaskTitle from '../components/TaskTitle';
import BoardView from '../components/BoardView';
import { tasks } from '../assets/data';
import Table from '../components/Table'
import AddTask from '../components/AddTask'
const Tasks = () => {
  /*
  useParams est un hook qui permet d'accéder aux paramètres de la route
  si l'URL contient /tasks/completed
  params.status récupérera la valeur "completed"
  */
  const params = useParams();
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false);
  const status = params?.status || "";
  return loading ? (
    <div className='py-10'>
      <Loader />
    </div>
  ) : (
    <div className='w-full'>
      <div className='flex font-semibold items-center justify-between mb-4'>
        <Title title={status ? `${status} Tasks` : "Tasks"} />
        {!status &&
          <Button
            onClick={() => setOpen(true)}
            label="Create Task"
            icon={<IoMdAdd className=' text-lg' />}
            className=" flex flex-row-reverse gap-2 items-center text-md bg-[#4CAF50] text-white rounded-md py-2 px-2 2xl:py-2.5"
          />}
      </div>
      <div >
        <Tabs tabs={TABS} setSelected={setSelected} >
          {!status && (
            <div className='w-full flex justify-between gap-4 md:gap-x-12 py-4'>
              <TaskTitle label='To do' className={taskType["To do"]} />
              <TaskTitle label='In progress' className={taskType['In progress']} />
              <TaskTitle label='Completed' className={taskType.Completed} />

            </div>
          )}
          {selected !== 1 ? (
            <BoardView tasks={tasks} />
          ) : (
            <div className='w-full'><Table tasks={tasks} /></div>
          )}
        </Tabs>
        <AddTask open={open} setOpen={setOpen} />
      </div>
    </div>
  )

}

export default Tasks
// tableau contient des objets représentant différents onglets de visualisation
const TABS = [
  { title: "Board View", icon: <MdGridView /> },
  { title: "List View", icon: <FaList /> },


];

