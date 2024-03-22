import React, { useEffect, useState } from 'react';
import { Flex, Rate } from 'antd';

type Props = {

    setRating: React.Dispatch<React.SetStateAction<number>>
    type: string,
    rating?: number
}
export const Rating = ({ setRating, type, rating }: Props) => {

    const [value, setValue] = useState(1);

    useEffect(() => {

        if (value) {
            setRating(value)
        }
    }, [value])
    return (
        <>
            {type === "product" ? <Flex gap="middle" vertical>
                <Rate className='text-[12px]' value={rating} />
            </Flex> : <Flex gap="middle" vertical>
                <Rate onChange={setValue} value={value} />
            </Flex>}
        </>
    );
};
