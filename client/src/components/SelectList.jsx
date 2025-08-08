import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { BsChevronExpand } from "react-icons/bs";
import { MdCheck } from "react-icons/md"; // Assurez-vous que ce soit importé

const SelectList = ({ lists, selected, setSelected, label }) => {
    return (
        <div className="w-full">
            {label && <p className="dark:text-gray-700 text-slate-900 ">{label}</p>}
            <Listbox
                value={selected}
                onChange={setSelected}
            >
                <div className="relative mt-1">
                    <Listbox.Button className='relative w-full cursor-default rounded-none bg-white pl-3 pr-10 text-left px-3 py-2.5 2xl:py-3 border border-gray-200 dark:border-gray-600 sm:text-sm'>
                        <span className="block truncate text-base ">{selected}</span>
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
                            {lists?.map((list, index) => (
                                <Listbox.Option
                                    key={index}
                                    className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? "bg-sky-100 text-sky-800" : "text-black"}`}
                                    value={list}
                                >
                                    {({ selected }) => (
                                        <div className={`flex items-center truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                            {list}
                                            {selected && (
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-sky-700">
                                                    <MdCheck className="h-5 w-5" aria-hidden='true' />
                                                </span>
                                            )}
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
}

export default SelectList;
