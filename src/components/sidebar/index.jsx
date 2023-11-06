import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown,faChevronDown,faChevronUp,faClock,faCopy,faFileCirclePlus,faFolder, faStar, faTrash, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { Menu, Popover } from '@headlessui/react';


export default function Sidebar({isSectionActive}) {

    const [isDownActive, setIsDownActive] = useState(true);

    const toggleIcon = () => {
        setIsDownActive(!isDownActive);
    };

    return (
        <div>
            {isSectionActive ? (
            <section className='w-[319px] h-screen border-r bg-[#fafafa] transition-all duration-500'>
                <div className='py-2 px-4 border-b'>
                    <button className='w-[291px] h-[37.5px] px-[15px] rounded flex items-center justify-center gap-1.5 bg-[#00754a] text-[#fff] border-1 border-[#fff] focus:outline-none focus:outline-2 focus:outline-[#0055b8] '>
                        <h1 className='text-[12.5px]'>NEW</h1>
                        <FontAwesomeIcon className='relative -top-0.5' icon={faCaretDown} />
                    </button>
                </div>
                <div className='p-2.5'>
                    <button className='w-full py-2 px-4 flex items-center focus:text-[#0055b8] gap-2 rounded text-[#0000008a]  cursor-pointer custom-div hover:bg-slate-100 focus:outline-none focus:outline-2 focus:outline-[#0055b8]'>
                        <FontAwesomeIcon className='w-6 h-4' icon={faFolder} />
                        <h1 className='text-sm transition-colors'>Personal Files</h1>
                    </button>
                </div>
                <Popover className="outline-none">
                    <Popover.Button className='w-full p-2.5 flex border-b'>
                        <button onClick={toggleIcon} className='w-full py-2 px-4 flex items-center focus:text-[#0055b8] gap-2 rounded text-[#0000008a] cursor-pointer custom-div hover:bg-slate-100 focus:outline-none focus:outline-2 focus:outline-[#0055b8]'>
                        <FontAwesomeIcon className='w-6 h-4' icon={faCopy} />
                        <h1 className='text-sm transition-colors'>File Libraries</h1>
                        </button>
                        <div className='flex px-2 py-2'>
                            {isDownActive ? (
                                <button onClick={toggleIcon}>
                                <FontAwesomeIcon icon={faChevronDown} className="text-[#0000008a]" />
                                </button>
                            ) : (
                                <button onClick={toggleIcon}>
                                <FontAwesomeIcon icon={faChevronUp} className="text-[#0000008a]" />
                                </button>
                            )}
                        </div>
                    </Popover.Button>
                    <Popover.Panel>
                        <div className='py-2.5 px-6'>
                            <button className='w-full py-2 flex items-center focus:text-[#0055b8] gap-2 rounded text-[#0000008a]  cursor-pointer custom-div hover:bg-slate-100 focus:outline-none focus:outline-2 focus:outline-[#0055b8]'>
                                <h1 className='text-sm px-7 transition-colors'>Favorite Libraries</h1>
                            </button>
                        </div>
                        <div className='py-2.5 px-6'>
                            <button className='w-full py-2  flex items-center focustrigger="focus" ozeliyi ile etmek munkudur?:text-[#0055b8] gap-2 rounded text-[#0000008a]  cursor-pointer custom-div hover:bg-slate-100 focus:outline-none focus:outline-2 focus:outline-[#0055b8]'>
                                <h1 className='text-sm  px-7 transition-colors'>My Libraries</h1>
                            </button>
                        </div>
                    </Popover.Panel>
                </Popover>
                <div className='p-2.5'>
                    <button className='w-full py-2 px-4 flex items-center focus:text-[#0055b8] gap-2 rounded text-[#0000008a]  cursor-pointer custom-div hover:bg-slate-100 focus:outline-none focus:outline-2 focus:outline-[#0055b8]'>
                        <FontAwesomeIcon className='w-6 h-4' icon={faUserGroup} />
                        <h1 className='text-sm transition-colors'>Shared</h1>
                    </button>
                </div>
                <div className='p-2.5'>
                    <button className='w-full py-2 px-4 flex items-center focus:text-[#0055b8] gap-2 rounded text-[#0000008a]  cursor-pointer custom-div hover:bg-slate-100 focus:outline-none focus:outline-2 focus:outline-[#0055b8]'>
                        <FontAwesomeIcon className='w-6 h-4' icon={faClock} />
                        <h1 className='text-sm transition-colors'>Recent Files</h1>
                    </button>
                </div>
                <div className='p-2.5'>
                    <button className='w-full py-2 px-4 flex items-center focus:text-[#0055b8] gap-2 rounded text-[#0000008a]  cursor-pointer custom-div hover:bg-slate-100 focus:outline-none focus:outline-2 focus:outline-[#0055b8]'>
                        <FontAwesomeIcon className='w-6 h-4' icon={faStar} />
                        <h1 className='text-sm transition-colors'>Favorites</h1>
                    </button>
                </div>
                <div className='p-2.5'>
                    <button className='w-full py-2 px-4 flex items-center focus:text-[#0055b8] gap-2 rounded text-[#0000008a]  cursor-pointer custom-div hover:bg-slate-100 focus:outline-none focus:outline-2 focus:outline-[#0055b8]'>
                        <FontAwesomeIcon className='w-6 h-4' icon={faTrash} />
                        <h1 className='text-sm transition-colors'>Trash</h1>
                    </button>
                </div>
            </section>

            ):(

            <section className='w-16 h-screen border-r bg-[#fafafa] transition-all duration-500'>
                <div className='py-4 px-4 border-b flex items-center justify-center'>
                    <button className='w-10 h-8 rounded flex text-[#00754a] items-center justify-center cursor-pointer custom-div focus:outline-none focus:outline-2 focus:outline-[#0055b8]'>
                        <FontAwesomeIcon className='w-6 h-4' icon={faFileCirclePlus} />
                    </button>
                </div>
                <div className='py-4 px-4  flex items-center justify-center'>
                    <button className='w-10 h-8 rounded flex text-[#0000008a] focus:text-[#0055b8] items-center justify-center cursor-pointer custom-div focus:outline-none focus:outline-2 focus:outline-[#0055b8]'>
                        <FontAwesomeIcon className='w-6 h-4' icon={faFolder} />
                    </button>
                </div>
                
                <Menu>
                    <Menu.Button className='py-4 px-4 flex items-center justify-center border-b'>
                        <button className='w-10 h-8 rounded flex text-[#0000008a] focus:text-[#0055b8] items-center justify-center cursor-pointer custom-div focus:outline-none focus:outline-2 focus:outline-[#0055b8]'>
                            <FontAwesomeIcon className='w-6 h-4' icon={faCopy} />
                        </button>
                    </Menu.Button>
                    <Menu.Items className="absolute z-10 bg-white py-3 px-4 left-4 rounded shadow-slate-300 shadow-md">
                        <Menu.Item className='py-2.5 px-6'>
                            <button className='w-full py-2 flex items-center focus:text-[#0055b8] gap-2 rounded text-[#0000008a]  cursor-pointer custom-div hover:bg-slate-100 focus:outline-none focus:outline-2 focus:outline-[#0055b8]'>
                                <h1 className='text-sm  transition-colors'>Favorite Libraries</h1>
                            </button>
                        </Menu.Item>
                        <Menu.Item className='py-2.5 px-6'>
                            <button className='w-full py-2  flex items-center focustrigger="focus" ozeliyi ile etmek munkudur?:text-[#0055b8] gap-2 rounded text-[#0000008a]  cursor-pointer custom-div hover:bg-slate-100 focus:outline-none focus:outline-2 focus:outline-[#0055b8]'>
                                <h1 className='text-sm  transition-colors'>My Libraries</h1>
                            </button>
                        </Menu.Item>
                    </Menu.Items>
                </Menu>

                <div className='py-4 px-4 flex items-center justify-center'>
                    <button className='w-10 h-8 rounded flex text-[#0000008a] focus:text-[#0055b8] items-center justify-center cursor-pointer custom-div focus:outline-none focus:outline-2 focus:outline-[#0055b8]'>
                        <FontAwesomeIcon className='w-6 h-4' icon={faUserGroup} />
                    </button>
                </div>
                <div className='py-4 px-4 flex items-center justify-center'>
                    <button className='w-10 h-8 rounded flex text-[#0000008a] focus:text-[#0055b8] items-center justify-center cursor-pointer custom-div focus:outline-none focus:outline-2 focus:outline-[#0055b8]'>
                        <FontAwesomeIcon className='w-6 h-4' icon={faClock} />
                    </button>
                </div>
                <div className='py-4 px-4 flex items-center justify-center'>
                    <button className='w-10 h-8 rounded flex text-[#0000008a] focus:text-[#0055b8] items-center justify-center cursor-pointer custom-div focus:outline-none focus:outline-2 focus:outline-[#0055b8]'>
                        <FontAwesomeIcon className='w-6 h-4' icon={faStar} />
                    </button>
                </div>
                <div className='py-4 px-4 flex items-center justify-center'>
                    <button className='w-10 h-8 rounded flex text-[#0000008a] focus:text-[#0055b8] items-center justify-center cursor-pointer custom-div focus:outline-none focus:outline-2 focus:outline-[#0055b8]'>
                        <FontAwesomeIcon className='w-6 h-4' icon={faTrash} />
                    </button>
                </div>
            </section>
            )}
        </div>
    );
}

