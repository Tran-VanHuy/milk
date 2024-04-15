import React from "react";
import { Skeleton } from 'antd';

export const LoadingIndex = () => {

    return (
        <>
            <div className='fixed w-full py-2 z-10 px-[15px] flex justify-between gap-[20px] items-center bg-white bg-opacity-80' style={{ background: "linear-gradient(0deg, rgb(255, 252, 252), rgb(254, 240, 203))", opacity: "90%" }}>
                <div className='flex gap-2 items-center'>
                    <Skeleton.Avatar active={true} size={40} shape={"circle"} />
                    <div>
                        <div className="h-2 overflow-hidden mb-3">
                            <Skeleton.Input className="!h-full" />
                        </div>
                        <div className="h-2 overflow-hidden">
                            <Skeleton.Input className="!h-full" />

                        </div>
                    </div>
                </div>
            </div>

            <div className='pt-[70px] px-[20px] pb-[30px]' style={{ background: "linear-gradient(0deg, rgb(255, 252, 252), rgb(250, 230, 239))" }}>
                <div>
                    <div className='mb-5 flex gap-5 items-center' >
                        <div className='relative flex-1'>
                            <Skeleton.Input className="!w-full" />
                        </div>
                        <div>
                            <div className="relative">
                                <Skeleton.Avatar shape="circle" size={25} active={true} />
                            </div>
                        </div>
                    </div>
                    <div className="h-[200px] md:h-[350px]">
                        <Skeleton.Input className="!w-full !h-full" />
                    </div>
                </div>
                <div className='pt-[40px] grid grid-cols-12 gap-4  overflow-x-auto '>
                    <div className='col-span-3 text-center flex justify-center flex-col items-center'>
                        <div>
                            <Skeleton.Avatar size={45} shape="circle" />
                        </div>
                    </div>
                    <div className='col-span-3 text-center flex justify-center flex-col items-center'>
                        <div>
                            <Skeleton.Avatar size={45} shape="circle" />
                        </div>
                    </div>
                    <div className='col-span-3 text-center flex justify-center flex-col items-center'>
                        <div>
                            <Skeleton.Avatar size={45} shape="circle" />
                        </div>
                    </div>
                    <div className='col-span-3 text-center flex justify-center flex-col items-center'>
                        <div>
                            <Skeleton.Avatar size={45} shape="circle" />
                        </div>
                    </div>
                    <div className='col-span-3 text-center flex justify-center flex-col items-center'>
                        <div>
                            <Skeleton.Avatar size={45} shape="circle" />
                        </div>
                    </div>
                    <div className='col-span-3 text-center flex justify-center flex-col items-center'>
                        <div>
                            <Skeleton.Avatar size={45} shape="circle" />
                        </div>
                    </div>
                    <div className='col-span-3 text-center flex justify-center flex-col items-center'>
                        <div>
                            <Skeleton.Avatar size={45} shape="circle" />
                        </div>
                    </div>
                    <div className='col-span-3 text-center flex justify-center flex-col items-center'>
                        <div>
                            <Skeleton.Avatar size={45} shape="circle" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white grid grid-cols-2 px-2 gap-2">
                <div className="col-span-1">
                    <div className="flex flex-col h-full" >
                        <div className='relative'>
                            <div className="h-[175px] md:h-[300px">
                                <Skeleton.Input className="!w-full !h-full" />
                            </div>
                        </div>
                        <div className='flex-1 p-2 flex flex-col justify-between'>
                            <div >
                                <div className="h-2 mb-2">
                                    <Skeleton.Input className="!h-full !w-full" />
                                </div>
                                <div className="h-2 w-[50%] overflow-hidden">
                                    <Skeleton.Input className="!h-full !w-full" />
                                </div>
                            </div>
                            <div className='flex justify-between mt-1'>
                                {/* <p className='text-red-600 font-medium'>{price}</p> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="flex flex-col h-full" >
                        <div className='relative'>
                            <div className="h-[175px] md:h-[300px]">
                                <Skeleton.Input className="!w-full !h-full" />
                            </div>
                        </div>
                        <div className='flex-1 p-2 flex flex-col justify-between'>
                            <div >
                                <div className="h-2 mb-2">
                                    <Skeleton.Input className="!h-full !w-full" />
                                </div>
                                <div className="h-2 w-[50%] overflow-hidden">
                                    <Skeleton.Input className="!h-full !w-full" />
                                </div>
                            </div>
                            <div className='flex justify-between mt-1'>
                                {/* <p className='text-red-600 font-medium'>{price}</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}