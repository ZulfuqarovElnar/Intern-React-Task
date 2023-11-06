import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass, faCaretDown, faBell, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

export default function Navbar({ toggleSections }) {
    return (
        <section className=' bg-login-image flex items-center justify-between'>
            <div className='w-full h-16 flex px-4 gap-1.5 items-center justify-between'>
                <div className='flex gap-1.5'>
                    <button onClick={toggleSections} className='w-10 h-10 flex items-center justify-center focus:border-2 focus:border-[#0055b8] rounded transition-all'>
                        <FontAwesomeIcon className='w-[29px] h-6 cursor-pointer ' icon={faBars} />
                    </button>
                    <div className='flex items-center h-10 gap-1.5'>
                        <img className='w-7 h-7' src="../images/alfresco-logo-flower.svg" alt="" />
                        <h1 className='text-xl'>Alfresco Digital Workspace</h1>
                    </div>
                </div>
                <div className='max-w-[894px] w-[100%] flex gap-1.5'>
                    <div className='max-w-[594px] w-[100%]  h-10 rounded bg-[#fafafa] flex'>
                        <div className='w-10 h-10 px-2 flex items-center justify-center cursor-pointer'>
                            <FontAwesomeIcon className='text-[#000000b8] text-[18px]' icon={faMagnifyingGlass} />
                        </div>
                        <input className='w-full outline-none bg-[#fafafa]' type="text" />
                        <div className='w-10 h-10 px-2 flex items-center justify-center cursor-pointer'>
                            <FontAwesomeIcon icon={faCaretDown} />
                        </div>
                    </div>
                    <div className='flex gap-1.5'>
                        <div className='flex items-center'>|</div>
                        <button className='w-10 h-10  flex items-center justify-center rounded-full hover:bg-[#fafafa] cursor-pointer focus:border-2 focus:border-[#0055b8]'>
                            <FontAwesomeIcon className='text-xl' icon={faBell} />
                        </button>
                    </div>
                    
                    <div className='flex items-center mr-1 ml-1 gap-1.5 max-w-[205px] w-[100%]'>
                        <h1 className='text-xl'>React Developer</h1>
                        <button className='w-10 h-10 rounded-full bg-[#4d88cd]'>
                            RD
                        </button>
                    </div>
                    <button className='w-10 h-10 px-3 rounded flex items-center justify-center focus:border-2 focus:border-[#0055b8]'>
                        <FontAwesomeIcon className='' icon={faEllipsisVertical} />
                    </button>
                </div>
            </div>
        </section>
    )
}
