import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import ModalWrapper from "./ModalWrapper";
import { Dialog } from "@headlessui/react";
import Textbox from "./Textbox";
import Loading from "./Loading";
import Button from "./Button";

const AddUser = ({ userData, open, setOpen }) => {
    let defaultValues = userData ?? {};
    const { user } = useSelector((state) => state.auth);
    const isLoading = false;
    const isUpdating = false;

    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues });
    const handlerOnSubmit = () => { };
    return (
        <>
            <ModalWrapper open={open} setOpen={setOpen} >
                <form onSubmit={handleSubmit(handlerOnSubmit)}>
                    <Dialog.Title
                        as="h2"
                        className='text-base text-start font-bold leading-6 text-gray-800 mb-4'
                    >
                        {userData ? "Update profile" : "Add new user"}
                    </Dialog.Title>
                    <div className="mt-2 text-start flex flex-col gap-6">
                        <Textbox
                            label='Full-name'
                            placeholder='Full name'
                            type='text'
                            name='name'
                            className='w-full rounded '
                            register={register("name", { required: "Full name is required" })}
                            error={errors.name ? errors.name.message : ""}
                        />
                        <Textbox
                            label='Title'
                            placeholder='Title'
                            type='text'
                            name='title'
                            className='w-full rounded '
                            register={register("title", { required: "Title is required" })}
                            error={errors.title ? errors.title.message : ""}
                        />
                        <Textbox
                            label='Role'
                            placeholder='Role'
                            type='text'
                            name='role'
                            className='w-full rounded '
                            register={register("role", { required: "Role is required" })}
                            error={errors.role ? errors.role.message : ""}
                        />


                        {isLoading || isUpdating ? (
                            <div className="py-5"> <Loading /></div>
                        ) : (
                            <div className=" py-3 justify-start  sm:flex sm:flex-row-reverse mt-4">
                                <Button
                                    label='Submit'
                                    type='submit'
                                    className='bg-sky-700 px-8 mr-2 text-sm font-semibold text-white hover:bg-sky-600 sm:w-auto'
                                />

                                <Button 
                                    type='button'
                                    label='Cancel'
                                    className='bg-red-600  px-8 text-sm font-semibold text-white hover:bg-red-300 sm:w-auto'
                                    onClick={() => setOpen(false)}
                                />
                            </div>)}
                    </div>
                </form>
            </ModalWrapper>

        </>
    )
}

export default AddUser
