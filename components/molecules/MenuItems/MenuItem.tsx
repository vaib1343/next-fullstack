import { Text } from '@chakra-ui/react';
import Link from 'next/link';

type MenuItemProps = {
    text: string;
    href: string;
};

export const MenuItem: React.FC<MenuItemProps> = ({ text, href }) => {
    return (
        <Text color='#666666' fontSize='16px'>
            <Link href={href}>
                <a>{text}</a>
            </Link>
        </Text>
    );
};
