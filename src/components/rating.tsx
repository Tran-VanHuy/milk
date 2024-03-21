import React, { useEffect, useState } from 'react';
import { Flex, Rate } from 'antd';

type Props = {

    setRating: React.Dispatch<React.SetStateAction<number>>
}
export const Rating = ({ setRating }: Props) => {

    const [value, setValue] = useState(1);

    useEffect(() => {

        setRating(value)
    }, [value])
    return (
        <Flex gap="middle" vertical>
            <Rate onChange={setValue} value={value} />
        </Flex>
    );
};
