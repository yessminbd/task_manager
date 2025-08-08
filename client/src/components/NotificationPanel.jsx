import { Popover, Transition } from '@headlessui/react';
import moment from 'moment';
import { Fragment, useState } from 'react';
import { BiSolidMessageRounded } from 'react-icons/bi';
import { IoAlert, IoNotificationsOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const NotificationPanel = () => {
    const [open, setOpen] = useState(false);
    const [selected, isSelected] = useState(null);
    // const { data, refetch } = useGetNotificationQuery();
    // const [markAsRead] = useMarkNotificationAsReadMutation();
    const readHandler = () => { };
    const viewHandler = () => { };

    // tableau qui contient des boutons pour des actions 
    const callsToAction = [
        { name: "Cancel", href: "#", icon: "" },
        {
            name: "Mark all as read", href: "#", icon: "",
            onclick: () => readHandler("all", ""),
        }
    ]
    return (
        <>
            <Popover className='relative'>
                <Popover.Button className='inline-flex items-center outline-none'>
                    <div className='w-8 h-8 flex items-center justify-center text-gray-800  relative'>

                        <IoNotificationsOutline className='text-2xl text-gray-800' />
                        {data?.length > 0 && (
                            <span className='absolute text-center top-0 right-1 text-sm text-white font-semibold w-4 h-4 rounded-full bg-[#ff4800]' >
                                {data?.length}
                            </span>
                        )}
                    </div>
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
                    <Popover.Panel className='absolute -right-16 md:right-2 z-10 mt-5 flex w-screen max-w-max px-4'>
                        {({ close }) =>
                            data?.length > 0 && (
                                <div className='w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white dark:bg-gray-800 text-sm leading-6 shadow-lg ring-gray-900/5 '>
                                    <div className='p-4'>
                                        {data?.slice(0, 5).map((item, index) => (
                                            <div
                                                key={item._id + index}
                                                className='group relative flex gap-x-4 rounded-lg p-4 hover:bg-gray-50 '
                                            >

                                                <div className='mt-1 h-8 w-8 flex items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white'>
                                                    {ICONS[item.notiType]}
                                                </div>
                                                <div className='cursor-pointer'
                                                    onClick={() => viewHandler(item)}
                                                >
                                                    <div className='flex items-center text-base gap-3 font-semibold text-gray-900 capitalize dark:text-gray-200' >
                                                        <p>{item.notiType}</p>
                                                        <span className='text-xs font-base lowercase'>
                                                            {moment(item.createdAt).fromNow()}
                                                        </span>
                                                    </div>
                                                    <p className='line-clamp-1 mt-1 text-base text-gray-600'>
                                                        {item.text}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    {/* Afficher les actions supplémentaires en bas  */}
                                    <div className='grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 dark:bg-[#1f1f1f]'>
                                        {callsToAction.map((item) => (
                                            <Link
                                                key={item.name}
                                                onClick={item?.onClick ? () => item.onClick() : () => close()}
                                                className='flex items-center justify-center gap-x-2.5 p-3 font-semibold text-base text-[#4CAF50] hover:bg-gray-200 dark:hover:bg-[#1c1c1c]'
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>)
                        }
                    </Popover.Panel>
                </Transition>
            </Popover>
        </>
    )
}
export default NotificationPanel
// tableau de notifications
const data = [
    {
        _id: "aaaaaaaaaaaaaaa",
        team: ["aa", "bb"],
        text: "helooooooooooooooo",
        task: null,
        notiType: 'alert',
        isRead: [],
        createdAt: ''
    },
    {
        _id: "bbbbbbbbbbbbbbbbb",
        team: ["cc", "dd"],
        text: "another notification",
        task: null,
        notiType: 'message',
        isRead: [],
        createdAt: '2'

    }
];

//  mapper chaque type de notification
const ICONS = {
    alert: (
        <IoAlert className='h-5 w-5 text-gray-800 group-hover:text-[#f11010]' />
    ),
    message: (
        <BiSolidMessageRounded className='h-5 w-5 text-gray-800 group-hover:text-[#2575FC]' />
    ),
}
