import React from 'react'

export default function Footer() {
  return (
    <footer>
        <div className="bg-color-accent ">
            <div className="mx-32 py-5 flex justify-between items-center">
                <p className='text-3xl text-white'>
                    Sign up for our email newsletter
                </p>
                <form className="relative" action="" >
                    <input type="text" placeholder="Email" className='rounded-full w-96 h-14 pl-6'/>
                    <button className='absolute right-2 top-1 w-28 h-12  bg-color-dark text-white rounded-full hover:bg-color-accent'>
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
        <div className="bg-color-dark text-white flex justify-between pb-10">
            <div className="mx-32 py-6">
                <img src="../src/assets/logo.png" alt="logo" className='w-32 my-4' />
                <p>Coffe is so much more than a beverage <br/>-it's a community</p>
            </div>
            <div className="mr-32 flex gap-36 pt-12 pr-16 text-xl">
                <ul className='flex flex-col gap-4'>
                    <li>Blog</li>
                    <li>Shop</li>
                    <li>City coffe guide</li>
                    <li>About</li>
                    <li>Contact us</li>
                </ul>
            {/* </div>
            <div className="flex"> */}
                <ul className='flex flex-col gap-4'>
                    <li>Espresso</li>
                    <li>Filter</li>
                    <li>Accessories</li>
                    <li>Equipment</li>
                </ul>
            </div>
        </div>
        <div className="flex justify-between bg-color-dark text-white py-4 px-4">
            <div className='flex gap-4'> 
                <p>
                    &copy; 2021 Coffe 
                </p>
                <a>Privacy Policy</a>
                <a >User Agreement</a>
                <a >Public Offer</a>
                <a >RSS</a>
            </div>
            <p className='flex'>Designed by Flatstudio</p>
        </div>
    </footer>
  )
}
