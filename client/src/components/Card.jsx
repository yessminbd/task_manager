import moment from "moment"
import { Task_Type_Icon } from "../pages/TaskDetails"

const Card = ({ item, isConnected }) => {
    return (
        <div className="flex space-x-4 relative pb-8">
            <div className="flex flex-col items-center">
                <div className="w-10 h-10 flex items-center justify-center bg-white z-10 relative">
                    {Task_Type_Icon[item?.type] || <span>No icon</span>}
                </div>
                {isConnected && (
                    <div className="absolute top-12  w-0.5 bg-gray-400" style={{ height: 'calc(100% - 2.5rem)' }}></div>
                )}
            </div>
            <div className="flex flex-col gap-y-1">
                <p className="font-semibold">{item?.by?.name}</p>
                <div className="space-x-3">
                    <span className="capitalize">{item?.type}</span>
                    <span className="text-gray-500 text-sm">{moment(item?.date).fromNow()}</span>
                </div>
                <div className="">{item.activity}</div>
            </div>
        </div>
    )
}

export default Card