import React from 'react';
import {NavLink} from 'react-router-dom';


const Navlinks = () => {
    const links = [
        {name: 'Categories',submenu:true, sublinks:[
            {
                Head:"Fiction",
                sublink:[
                    {name:'bookname',link:"/.Blogs"},
                    {name:'bookname',link:"/"},
                    {name:'bookname',link:"/"},
                    {name:'bookname',link:"/"},
                    {name:'bookname',link:"/"},
                ],
            },
            {
                Head:"Non-Fiction",
                sublink:[
                    {name:'bookname',link:"/"},
                    {name:'bookname',link:"/"},
                    {name:'bookname',link:"/"},
                    {name:'bookname',link:"/"},
                    {name:'bookname',link:"/"},
                ],
            },
            {
                Head:"Mystries",
                sublink:[
                    {name:'bookname',link:"/"},
                    {name:'bookname',link:"/"},
                    {name:'bookname',link:"/"},
                    {name:'bookname',link:"/"},
                    {name:'bookname',link:"/"},
                ],
            },
            {
                Head:"Romance",
                sublink:[
                    {name:'bookname',link:"/"},
                    {name:'bookname',link:"/"},
                    {name:'bookname',link:"/"},
                    {name:'bookname',link:"/"},
                    {name:'bookname',link:"/"},
                ],
            },

        ]},
    ];
    return (
        <>
            {links.map((Link) => (
                <div class='bg-white p-1'>
                    <div class='px-3 bg-white text-left md:cursor-pointer group'>
                        <h1 class='py-4 bg-white'>{Link.name}</h1>
                        {Link.submenu && (
                            <div>
                                <div class='absolute top-20 hidden group-hover:block hover:block'>
                                <div class='py-2'>
                                    <div class='w-4 h-4 left-3 absolute mt-1 bg-white rotate-45'>

                                    </div>
                                </div>
                                     <div class="bg-white p-3 grid grid-cols-3 gap-5">
                                        {Link.sublinks.map((mysublinks=>(
                                        <div class='bg-white'>
                                            <h1 class='text-lg font-semibold bg-white'>
                                                {mysublinks.Head}
                                                </h1>
                                                {mysublinks.sublink.map((slink)=>(
                                                    <li class='text-sm text-gray-600 my-2.5 bg-white'>
                                                    <NavLink to={slink.link}
                                                    class='hover:text-blue'><h1 class='bg-white'>{slink.name}</h1></NavLink>
                                                    </li>
                                                ))}
                                        </div>
                                    )))
                                }
                            </div>
                            </div>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </>
    );
};

export default Navlinks;