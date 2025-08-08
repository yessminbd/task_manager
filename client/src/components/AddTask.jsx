import { Dialog } from "@headlessui/react"
import ModalWrapper from "./ModalWrapper"
import Textbox from "./Textbox";
import { useForm } from "react-hook-form";
import { useState } from "react";
import UserList from "./UserList";
import SelectList from "./SelectList";
import { BiImage } from "react-icons/bi";
import Button from "./Button";

const AddTask = ({ open, setOpen }) => {
    const task = '';
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [team, setTeam] = useState(task?.team || [])
    const [stage, setStage] = useState(task?.stage || Lists[0]);
    const [assets, setAssets] = useState([])
    const [uploading, setUploading] = useState(false);
    const [priority, setPriority] = useState(task?.priority || Priority[3])
    const submitHandler = () => { };
    const handleSelect = () => {
        setAssets(e.target.files)
    }

    return (
        <ModalWrapper open={open} setOpen={setOpen} >
            <form onSubmit={handleSubmit(submitHandler)}>
                <Dialog.Title
                    as="h2"
                    className='text-base text-start font-bold leading-6 text-gray-800 mb-4'
                >
                    {/* si task existe donc mettre a jour sinon ajouter une nouvelle */}
                    {task ? "Update Task" : "Add Task"}
                </Dialog.Title>
                <div className="mt-2 text-start flex flex-col gap-6">
                    <Textbox
                        label='Title'
                        placeholder='Task title'
                        type='text'
                        name='title'
                        className='w-full rounded '
                        register={register("title", { required: "Title is required" })}
                        error={errors.title ? errors.title.message : ""}
                    />
                    <UserList
                        setTeam={setTeam}
                        team={team}

                    />
                    <div className="flex gap-4">
                        <SelectList label="Stage"
                            lists={Lists} selected={stage} setSelected={setStage} />
                    </div>

                    <div className="flex gap-4">
                        <SelectList label="Priority level"
                            lists={Priority}
                            selected={priority}
                            setSelected={setPriority} />
                        <div className="w-full flex items-center justify-center mt-4">
                            <label className="flex items-center gap-1 text-base text-ascent-2 hover:text-ascent" htmlFor="imgUpload">

                                <input
                                    type="file"
                                    className="hidden"
                                    id="imgUpload"
                                    onChange={(e) => handleSelect(e)}
                                    accept=".jpg, .png, .jpeg"
                                    multiple={true}
                                />
                                <BiImage size={26} />
                                <span>Add Assets</span>
                            </label>
                        </div>
                    </div>
                    <div className="w-full">
                        <Textbox
                            label='Date'
                            placeholder='Date'
                            type='date'
                            name='date'
                            className='w-full rounded '
                            register={register("date", { required: "Date is required" })}
                            error={errors.date ? errors.date.message : ""}
                        />
                    </div>
                    <div className=" py-6 sm:flex  sm:flex-row-reverse gap-4">
                        {uploading ? (
                            <span className="text-sm py-2 text-red-500">
                                uploading assets
                            </span>
                        ) : (
                            <Button
                                label='Submit'
                                type='submit'
                                className='bg-sky-700 px-8 mr-4 text-sm font-semibold text-white hover:bg-sky-600 sm:w-auto'
                            />
                        )}
                        <Button
                            type='button'
                            label='Cancel'
                            className='bg-red-600 px-8 text-sm font-semibold text-white hover:bg-red-300 sm:w-auto'
                            onClick={() => setOpen(false)}
                        />
                    </div>
                </div>
            </form>
        </ModalWrapper>
    )
}

export default AddTask
const Lists = ['To do ', 'In progress', 'Completed']
const Priority = ['High', 'Medium', 'Normal', 'Low']