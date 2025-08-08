import { Menu, Transition } from '@headlessui/react';
import { useState } from 'react';
import { FaUser, FaUserLock } from 'react-icons/fa';
import { IoLogOutOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getInitials } from '../utils';

const  UserAvatar = () => {
    const [open, setOpen] = useState(false);
    const [openPass, setOpenPass] = useState(false);
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = () => {
        console.log('Déconnexion');
        navigate('/log-in');
    };
    return (
        <div>
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className='w-10 h-10 2xl:w-12 2xl:h-12 items-center justify-center rounded-full bg-[#4CAF50]'>
                        <span className='text-white font-semibold'>
                            {getInitials(user?.name)}
                        </span>
                    </Menu.Button>
                </div>
                <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                >
                    <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right divide-gray-100 rounded-md bg-white shadow-2xl ring-1 ring-black/5 focus:outline-none'>
                        <div className='p-4'>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className='text-gray-800 group flex w-full items-center rounded-md px-2 py-2 text-base'
                                        onClick={() => setOpen(true)} 
                                    >
                                        <FaUser className='mr-2' /> Profile
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className='text-gray-800 group flex w-full items-center rounded-md px-2 py-2 text-base'
                                        onClick={() => setOpenPass(true)}
                                    >
                                        <FaUserLock className='mr-2' aria-hidden='true' />
                                        Change password
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className='text-red-600 group flex w-full items-center rounded-md px-2 py-2 text-base'
                                        onClick={logoutHandler}
                                    >
                                        <IoLogOutOutline className='mr-2' aria-hidden='true' /> Logout
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
}

export default UserAvatar;
