
interface ButtonProps {
    rounded?: boolean;
    icon: any;
    active?:boolean;
    bgNone?: boolean;
}

export default function ControllerButton({ rounded, icon,active,bgNone }: ButtonProps) {
    return (
        <div className={`button_wrapper w-[35px] h-[35px] ${rounded ? "rounded-full" : "rounded-md"} flex justify-center items-center ${active?"text-white":"text-primary"} cursor-pointer ${active?"bg-main":"bg-white"} mx-1 ${bgNone && "bg-transparent"}` }>
            {icon}
        </div>
    )
}
