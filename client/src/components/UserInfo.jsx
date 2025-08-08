import { Popover, Transition } from '@headlessui/react'
import { getInitials } from '../utils'
import { Fragment } from 'react'
const UserInfo = ({ user }) => {
    return (
        <div className="px-4">

            <Popover className='relative'>
                {/* {({ open }) => ( */}
                    <>
                        <Popover.Button className='group inline-flex items-center outline-none'>
                            <span>
                                {getInitials(user?.name)}
                            </span>
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                            <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-80 max-w-sm -translate-x-1/2 transform px-4 sm:px-0">
                                <div className='flex items-center gap-4 rounded-lg shadow-lg bg-white p-8'>
                                    <div className='w-16 h-16 bg-[#4CAF50] rounded-full text-white flex items-center  justify-center text-2xl '>
                                        <span className='text-center font-bold'>{getInitials(user?.name)}</span>
                                    </div>
                                    <div className='flex flex-col gap-y-1'>
                                        <p className='text-black text-xl font-bold'>{user.name}</p>
                                        <p className='text-base text-gray-900'>
                                            {user.title}
                                        </p>
                                        <p className=' text-gray-800'>
                                            {user.email}
                                        </p>
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                {/* )} */}
            </Popover>
        </div>
    )
}

export default UserInfo