import {FC} from 'react';

interface SidebarProps{
    items: {
        name: string,
        href: string
    }[]
}

export const Sidebar: FC<SidebarProps> = ({items}) => {
    return (
        <div>
            {items.map(item => (
                <div key={item.href}>
                    <a role={"navigation"} href={item.href}>{item.name}</a>
                </div>
            ))}
        </div>
    );
}
