import { Transition } from "@headlessui/react";
import clsx from "clsx";
import { Fragment, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setOpenSidebar } from "../redux/slices/authSlice";
import SideBar from "./sideBar";

/*
** MobileSidebar : gérer l'affichage du sidebar sur des écrans de petite taille
useSelector pour récupérer l'état du sideBar 
useDispatch pour envoyer une action à Redux pour modifier cet état
useRef pour référencer un élément de menu mobile
*/
const MobileSidebar = () => {
    const { isSidebarOpen } = useSelector((state) => state.auth);
    const mobileMenuRef = useRef(null);
    const dispatch = useDispatch();
    const closeSidebar = () => { dispatch(setOpenSidebar(false)); }
    return <>
        <Transition
            show={isSidebarOpen}
            as={Fragment}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
        >
            {(ref) => (
                <div
                    ref={(node) => {
                        mobileMenuRef.current = node;
                    }}
                    className={
                        clsx('md:hidden w-full h-full bg-black/40 transition-all duration-700 transform',
                            isSidebarOpen ? "translate-x-0" : "translate-x-full"
                        )}
                    onClick={() => closeSidebar()}
                >
                    <div className='bg-white w-3/4 h-full'>
                        <div className='w-full flex justify-end px-5 pt-2'>
                            <button onClick={() => closeSidebar()}
                                className='flex justify-end items-center'>
                                <IoClose size={25} className='text-gray-800' />
                            </button>
                        </div>
                        <div >
                            <SideBar />
                        </div>
                    </div>
                </div>
            )}
        </Transition>
    </>
}
export default MobileSidebar