import {ButtonHTMLAttributes, ReactNode} from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode
    asChild?: boolean
    // any props that come into the component
}

export default function Button({children, ...buttonProps}: Props) {
    return (
        <button className="bg-white text-black rounded-full p-1 hover:bg-amber-50" {...buttonProps}>{children}</button>
    )

}