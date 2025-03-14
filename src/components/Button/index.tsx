import { ButtonProps } from "./index.types";
const Button = (props: ButtonProps) => {
    const {
        className,
        onClick,
        children
    } = props;
    return (
        <button
            onClick={onClick}
            type="button"
            className={`w-full text-white focus:ring-4 font-medium text-sm ${className}`}
        >
            {children}
        </button>
    )
}

export default Button;