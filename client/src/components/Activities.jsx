import { useState } from "react";
import { act_types } from "../utils";
import Card from "./Card";
import Button from "./Button";
import Loading from "./Loading";

const Activities = ({ activities, id }) => {
    const [selected, setSelected] = useState(act_types[0]);
    const [text, setText] = useState("");
    const isLoading = false;
    const handleSubmit = async () => { }
    return (
        <div className="w-full px-16 flex md:flex-row gap-10 2xl:gap-20  p-8 bg-white shadow-md justify-between overflow-y-auto">
            <div className="w-full md:w-1/2 space-y-4">
                {activities?.map((activity, index) => (
                    <Card
                        key={activity._id || index}
                        item={activity}
                        isConnected={index < activities.length - 1}
                    />
                ))}
            </div>
            <div className="w-full md:w-1/3">
                <h4 className="font-semibold text-lg mb-5">Add Activity</h4>
                <div className="w-full flex flex-wrap gap-5">
                    {act_types.map((item, index) => (
                        <div key={item} className="flex gap-2 items-center ">
                            <input
                                type="checkbox"
                                className="custom-checkbox"
                                checked={selected === item ? true : false}
                                onChange={(e) => setSelected(item)}
                            />
                            <p>{item}</p>
                        </div>
                    ))}
                    <textarea
                        rows={10}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Activity title ..."
                        className="bg-white w-full mt-10 border border-gray-300 outline-none p-4 rounded-md focus:ring-2 ring-[#4CAF50]"
                    />{isLoading ? (<Loading />
                    ) : (<Button
                        type='button'
                        label='Add'
                        onClick={handleSubmit()}
                        className='w-20 bg-[#4CAF50] text-white rounded-md'
                    />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Activities