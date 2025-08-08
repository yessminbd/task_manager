import clsx from 'clsx';
import { FaTasks, FaTrashAlt, FaUsers } from 'react-icons/fa';
import { MdDashboard, MdSettings, MdTaskAlt } from 'react-icons/md';
import { BiLoaderCircle, BiTask } from 'react-icons/bi'; // Box Icons
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../assets/task-wiz-logo.svg';
import { setOpenSidebar } from '../redux/slices/authSlice';

const linkData = [
    {
        label: 'Dashboard',
        link: "dashboard",
        icon: <MdDashboard />
    },
    {
        label: 'Tasks',
        link: "tasks",
        icon: <FaTasks />
    },
    {
        label: 'Completed',
        link: "completed/completed",
        icon: <MdTaskAlt />
    },
    {
        label: 'In Progress',
        link: "in-progress/in progress",
        icon: <BiLoaderCircle /> 
    },
    {
        label: 'To Do',
        link: "to-do/todo",
        icon: <BiTask />
    },
    {
        label: 'Team',
        link: "team",
        icon: <FaUsers />
    },

    {
        label: 'Trash',
        link: "trashed",
        icon: <FaTrashAlt />
    },
]

const SideBar = () => {
    // Accéder à l'état global du store
    const { user } = useSelector((state) => state.auth);
    // Envoyer des actions au store pour mettre à jour l'état
    const dispatch = useDispatch();
    // Contient des informations sur l'URL actuelle
    const location = useLocation();
    // Extrait la première partie du chemin après le / dans l'URL (Exemple : /dashboard/tasks => path  = dashboard)
    const path = location.pathname.split('/')[1];
    const sideBarLinks = user?.isAdmin ? linkData : linkData.slice(0, 5);
    const closeSideBar = () => { dispatch(setOpenSidebar(false)) }

    const NavLink = ({ el }) => {
        return (
            <Link
                to={el.link}
                onClick={closeSideBar}
                className={clsx(
                    "w-full lg:w-3/4 flex gap-2 px-3 py-2 rounded-full items-center text-gray-800 text-base hover:bg-[#3333]",
                    path === el.link.split("/")[0] ? "bg-[#2c802f] text-white" : ""
                )}
            >
                <span>{el.icon}</span>
                <span>{el.label}</span>
            </Link>
        );
    };

    return (
        <div className=' w-full h-full flex flex-col gap-6 p-5'>
            <h1 className='flex gap-1 items-center'>
                <div className='p-2'>
                    <img
                        src={logoImage}
                        alt="Task Wiz Logo"
                        className='w-12 h-12'
                    />
                </div>
                <span className='text-2xl font-bold text-gray-800'>Task Wiz</span>
            </h1>
            <div className='flex-1 flex flex-col gap-y-5 py-8'>
                {
                    sideBarLinks.map((link) => (
                        <NavLink el={link} key={link.label} />
                    ))
                }
            </div>
            <div >
                <button className='w-full flex gap-2 items-center text-lg text-gray-800'>
                    <MdSettings />
                    <span>Settings</span>
                </button>
            </div>
        </div>
    );
};

export default SideBar;
