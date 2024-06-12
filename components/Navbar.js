"use client"
import React, { useState } from 'react'
import Image from 'next/image'

import babar from "../public/babar.png"
import rizwan from "../public/rizwan.png"
import kohli from "../public/kohli.png"
import rohit from "../public/rohit.png"
import warner from "../public/warner.png"
import head from "../public/head.png"
import stokes from "../public/stokes.png"
import buttler from "../public/buttler.png"

const categories = [
  "all", "pak", "ind", "aus", "eng"
]

const players = [
  { id: 1, name: "babar", img: babar, country: "pak" },
  { id: 2, name: "rizwan", img: rizwan, country: "pak" },
  { id: 3, name: "kohli", img: kohli, country: "ind" },
  { id: 4, name: "rohit", img: rohit, country: "ind" },
  { id: 5, name: "warner", img: warner, country: "aus" },
  { id: 6, name: "head", img: head, country: "aus" },
  { id: 7, name: "buttler", img: buttler, country: "eng" },
  { id: 8, name: "stokes", img: stokes, country: "eng" },
]

const Navbar = () => {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedPlayer, setSelectedPlayer] = useState(null)

  const changeCategory = (category) => {
    setSelectedCategory(category)
  }

  const filterPlayer = selectedCategory === "all" ? players : players.filter((player) => {
    return player.country === selectedCategory
  })

  const changePlayer = (name) => {
    setSelectedPlayer(name)
    console.log(selectedPlayer)
  }

  const clearPlayer = () => {
    setSelectedPlayer(null)
  }

  const singlePlayer = players.filter((player) => {
    return player.name === selectedPlayer
  })

  return (
    <>
      <div className='w-full bg-teal-900'>
        <div className='flex w-[90%] bg-teal-700 mx-auto text-lg text-white justify-around py-2'>
          {categories.map((category) => (
            <li key={category} className='list-none cursor-pointer' onClick={() => changeCategory(category)}>{category}</li>
          ))}
        </div>
      </div>

      <div>
        {selectedPlayer ? (
          <>
            {singlePlayer.map((player) => (
              <div key={player.id} className='flex flex-col items-center h-[81vh]'>
                <h1 className='text-2xl'>{player.name}</h1>
                <p className='text-lg'>{player.country}</p>
                <Image src={player.img} alt={player.name} className='w-auto h-auto' />
              </div>
            ))}
            <div className='flex justify-center pt-1'>
              <button onClick={clearPlayer} className='flex justify-center bg-teal-600 text-white px-2 py-4 rounded-xl w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>GO Back</button>
            </div>
          </>
        ) : (
          <div className='flex flex-wrap justify-center bg-black text-white min-h-screen'>
            {filterPlayer.map((player) => (
              <div key={player.id} className='flex flex-col items-center text-xl justify-center p-4 cursor-pointer' onClick={() => changePlayer(player.name)}>
                <Image src={player.img} alt={player.name} className='w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px]' />
                <h1 className='text-lg sm:text-xl md:text-2xl'>{player.name}</h1>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default Navbar
