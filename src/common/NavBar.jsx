import React, { useEffect, useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri"
import { LuShoppingCart } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";

export const NavBar = () => {
    
    const countries = [
        { id: 1, code: 'IN', name: 'India', flag: '/india_flag.jpeg' },
        { id: 2, code: 'US', name: 'United States of America', flag: '/usa.png' },
        { id: 3, code: 'CA', name: 'Canada', flag: '/canada.png' },
        { id: 4, code: 'UK', name: 'United Kingdom', flag: '/united_kingdom.png' },
        { id: 5, code: 'ROW', name: 'Rest of the World', flag: '/rest.png' }
      ]

      const [dropdown, setDropdown] = useState(false)
      const [selected, setSelected] = useState(countries[0].code)
      const [image, setImage] = useState(countries[0].flag)

      const showDropDown = () => {
        setDropdown(prev => !prev)
      }

      const handleClick = (code) => {
        console.log(code, "code")
        setSelected(prev => code)
        setDropdown(prev => !prev)
    }
    console.log(selected)

    useEffect(() => {
        let contry = countries.find(ctry => ctry.code == selected)
        if(contry) {
            setImage(contry.flag)
        }
       
    }, [selected])

      return(
        <>
            <div className='bg-yellow-300 h-20 flex justify-around items-center'>
                <div className='flex'>
                    <IoIosSearch className='h-8 w-15 text-fuchsia-900' />
                    <div className='flex'>
                        { console.log(image) }
                        <img src={image} alt='' className='h-8 w-10'/>
                        <RiArrowDropDownLine className='h-8 w-10 text-fuchsia-900 cursor-pointer' onClick={showDropDown}/>
                    </div>
                </div>

                <div>
                    <img className="h-10 cursor-pointer" src="playshifu-logo.webp" alt="" />
                </div>

                <div className='flex'>
                    <LuShoppingCart className='h-8 w-15 text-fuchsia-900 cursor-pointer' /><sup className='text-red-800 -ml-3 mr-2 text-2xl'>0</sup>
                    <FaRegUserCircle className='h-8 w-10 text-fuchsia-900 cursor-pointer' />
                </div>
            </div>

            <div className={`${dropdown ? 'block' : 'hidden'} shadow-md w-80 p-5 ml-15`}>
                { countries.map((country) => (
                    <div key={country.id} className='flex mb-3 mt-2 w-70 justify-start items-center border-b-2 border-gray-100'>
                        <input className='mr-5 h-10 w-5' type="checkbox" checked={selected == country.code} onClick={() => handleClick(country.code)}/>
                        <img src={country.flag} className='h-8 w-10 mr-4' alt={country.name} />
                        <span>{country.name}</span>
                    </div>
                ))}
            </div>
        </>
      )
    }