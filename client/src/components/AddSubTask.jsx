import { useForm } from "react-hook-form"
import ModalWrapper from "./ModalWrapper";
import { Dialog } from "@headlessui/react";
import Textbox from "./Textbox";
import Button from "./Button";

const AddSubTask = ({open, setOpen, id}) => {
  const { register, handleSubmit, formState: { errors }, } = useForm()
  // const [addSubTask] = useCreateSubTaskMutation();
  const handleOnSubmit = async (data) => {
    // try {
    //   const res = await addSubTask({ data, id }).unwrap();
    //   toast.success(res.message);
    //   setTimeout(() => {
    //     setOpen(false);
    //   }, 500)
    // } catch (e) {
    //   console.log(e);
    //   toast.error(e?.data?.message || e.error)
    // }
  };
  return (
    <ModalWrapper open={open} setOpen={setOpen} >
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <Dialog.Title
          as="h2"
          className='text-base text-start font-bold leading-6 text-gray-800 mb-4'
        >
          Add Sub task
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
          <div className="flex items-center gap-4">
            <Textbox
              label='Date'
              placeholder='Date'
              type='date'
              name='date'
              className='w-full rounded '
              register={register("date", { required: "Date is required" })}
              error={errors.date ? errors.date.message : ""}
            />
            <Textbox
              label='Tag'
              placeholder='Tag'
              type='text'
              name='tag'
              className='w-full rounded '
              register={register("tag", { required: "Tag is required" })}
              error={errors.tag ? errors.tag.message : ""}
            />
          </div>
        </div>
        <div className="py-3 mt-4 sm:flex-row-reverse flex gap-4">
          <Button
            label='Add'
            type='submit'
            className='bg-sky-700 px-8 text-sm font-semibold text-white hover:bg-sky-600 sm:w-auto'
          />
          <Button
            type='button'
            label='Cancel'
            className='bg-red-600 px-5 text-sm font-semibold text-white hover:bg-red-300 sm:w-auto'
            onClick={() => setOpen(false)}
          />
        </div>

      </form>
    </ModalWrapper>)
}

export default AddSubTask