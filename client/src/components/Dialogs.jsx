import { Dialog } from "@headlessui/react";
import ModalWrapper from "./ModalWrapper";
import clsx from "clsx";
import { FaQuestion } from "react-icons/fa";
import Button from "./Button";

export function ConfirmationDialog({
    open,
    setOpen,
    msg,
    onClick = () => { },
    type = 'delete',
    setMsg = () => { },
    setType = () => { } }) {
    const closeDialog = () => {
        setType('delete');
        setMsg(null);
        setOpen(false);
    };

    return (
        <ModalWrapper open={open} setOpen={closeDialog} >
            <div className="py-4 w-full flex flex-col gap-4 items-center justify-center">
                <Dialog.Title as="h3">
                    <p className={clsx(
                        "p-3 rounded-full",
                        type === 'restore' || type === 'restoreAll' ?
                            "text-green-400"
                            : "text-red-500 ")}>
                        <FaQuestion size={60} /></p>
                </Dialog.Title>
                <p className="text-center text-lg text-gray-700">
                    {msg ?? "Are you sure you want to delete the selected record?"}
                </p>
                <div className="bg-gray-50 py-3  sm:flex sm:flex-row-reverse gap-4">
                    <Button
                        label={type === 'restore' ? "Restore" : "Delete"}
                        type='submit'
                        className={clsx(
                            "p-3 rounded-none  mr-2 px-5 text-base font-semibold text-white sm:w-auto",
                            type === 'restore' || type === 'restoreAll' ?
                                "text-white bg-green-600 hover:bg-green-400"
                                : "text-white bg-red-500 hover:bg-red-400")}
                        onClick={onClick}
                    />

                    <Button
                        type='button'
                        label='Cancel'
                        className='bg-gray-800 px-5 rounded-none text-base font-semibold text-white hover:bg-gray-600  sm:w-auto'
                        onClick={() => closeDialog()}
                    />
                </div>
            </div>
        </ModalWrapper>
    )
}
export function UserAction({ open, setOpen, onClick = () => { }, }) {
    const closeDialog = () => { setOpen(false); };

    return (
        <ModalWrapper open={open} setOpen={closeDialog} >
            <div className="py-4 w-full flex flex-col gap-4 items-center justify-center">
                <Dialog.Title as="h3">
                    <p className={clsx(
                        "p-3 rounded-full",
                        )}>
                        <FaQuestion size={60} /></p>
                </Dialog.Title>
                <p className="text-center text-lg text-gray-700">
                Are you sure you want to deactivate or activate this account?            </p>
                <div className="bg-gray-50 py-3  sm:flex sm:flex-row-reverse gap-4">
                    <Button
                        label={"Yes"} 
                        type='button'
                        className={clsx("px-8 text-sm font-semibold text-white sm:w-auto",'bg-red-600 hover:bg-red-400'  )}
                        onClick={onClick}
                    />

                    <Button
                        type='button'
                        label='No'
                        className='bg-gray-800 px-5 rounded-none text-base font-semibold text-white hover:bg-gray-600  sm:w-auto'
                        onClick={() => closeDialog()}
                    />
                </div>
            </div>
        </ModalWrapper>
    )
}
