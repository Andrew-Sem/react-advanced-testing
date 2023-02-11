import React, {FC} from 'react';

export const ButtonWrapper: FC<React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement> & {title:string}
> = ({title, ...props}) => {
    return (
        <button {...props}>
            {title}
        </button>
    );
}
