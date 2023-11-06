import React, { useState } from 'react'
import Navbar from '../../components/navbar'
import Sidebar from '../../components/sidebar'

export default function Home() {

    const [isSectionActive, setIsSectionActive] = useState(true);

    const toggleSections = () => {
        setIsSectionActive(!isSectionActive);
    };

    return (
        <div>
            <Navbar toggleSections={toggleSections} />
            <Sidebar isSectionActive={isSectionActive} />
        </div>
    )
}
