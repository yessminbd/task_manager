import clsx from 'clsx';

const Button = ({ className, label, type, onClick = () => { }, icon }) => {
    return (
        <button
            type={type || 'button'}
            className={clsx("bx-3 py-2 outline-none rounded-full", className)}
            onClick={onClick}
        >
            <span>{label}</span>
            {icon && icon}
        </button>
    );
};

export default Button;
