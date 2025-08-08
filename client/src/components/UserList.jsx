import { useEffect, Fragment, useState } from "react";
import { summary } from "../assets/data";
import { Listbox, Transition } from "@headlessui/react";
import { BsChevronExpand } from 'react-icons/bs';
import { MdCheck } from 'react-icons/md';
import clsx from "clsx";
import { getInitials } from "../utils";

const UserList = ({ team, setTeam }) => {
    const data = summary.users;
    const [selectedUsers, setSelectedUsers] = useState([]);

    const handleChange = (e) => {
        setSelectedUsers(e);
        // extraire l'id de chaque utilisateur sélectionné
        setTeam(e?.map((user) => user._id));
    };
    useEffect(() => {
        if (team?.length < 1) {
            data && setSelectedUsers([]);
        }
        else {
            setSelectedUsers(team)
        }
    }, []);
    console.log("selectedUsers:", selectedUsers);


    return (
        <div>
            <p className=" ">Assign task to :</p>
            <Listbox
                value={selectedUsers}
                onChange={(e) => handleChange(e)}
                multiple

            >
                <div className="relative mt-1">
                    <Listbox.Button className='relative w-full cursor-default rounded-none bg-white pl-3 pr-10 text-left px-3 py-2.5 2xl:py-3 border border-gray-200 dark:border-gray-600 sm:text-sm'>
                        <span className="block truncate text-base">
                            {selectedUsers.length > 0 ? selectedUsers.map((user) => user.name).join(", ") : "No users selected"}
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <BsChevronExpand
                                className="h-5 w-5 text-gray-400"
                                aria-hidden='true'
                            />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition duration-100 ease-in"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className='z-50 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus-within:outline-none sm:text-xm'>
                            {data?.map((user, index) => (
                                <Listbox.Option
                                    key={index}
                                    className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? "bg-sky-100 text-sky-800" : "text-black"}`}
                                    value={user}
                                >
                                    {/* selected est une propriété fournie par le composant */}
                                    {({ selected }) => (
                                        <div className={clsx(
                                            "flex items-center gap-2 truncate",
                                            selected ? "font-medium" : "font-normal"
                                        )}>
                                            <div className="w-6 h-6 rounded-full text-white flex items-center justify-center bg-sky-700">
                                                <span className="text-center text-[10px]">{getInitials(user.name)}</span>
                                            </div>
                                            <span>{user.name}</span>
                                            {selected ? (
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-sky-700">
                                                    <MdCheck className="h-5 w-5" aria-hidden='true' />
                                                </span>
                                            ) : null}
                                        </div>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    );
};

export default UserList;
