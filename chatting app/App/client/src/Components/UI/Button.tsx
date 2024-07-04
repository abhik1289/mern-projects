
interface ButtonProps {
    title: string;
    onTap?: () => void;
    disabled?: boolean;
    style?: any;
}

export default function Button({ title, onTap,disabled ,style}: ButtonProps) {
    return (
        <button style={style} disabled={disabled} type="submit" className="bg-main rounded-md px-8 text-white font-primary mt-2 py-2 hover:bg-blue-700 transition-all duration-500 disabled:bg-blue-400" onClick={onTap}>{title}</button>
    )
}
