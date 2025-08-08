import clsx from 'clsx';
const Title = ({ title, className }) => {
    return (
        <h2 className={clsx("text-2xl text-gray-800 capitalize ", className)}>{title}</h2>
    )
}

export default Title