import {FC} from 'react';

interface PersonProps{
    name: string
}

export const Person: FC<PersonProps> = ({name}) => {
    return (
        <div role={"contentinfo"}>
            Name is {name}
        </div>
    );
}
