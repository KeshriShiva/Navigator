import Image from 'next/image'
import Link from 'next/link'
import HamburgerMenu from './HamburgerMenu.jsx'
import { albula } from '../utils/localNextFonts.js' 


const navItems = new Map([
    ['Find Visas', { link: '/'}],
    ['About', { link: '/about'}],
    ['FAQ', { link: '/faq'}],
])

const NavBar = ({lightingMode}) => {
      
    return(
        <div className={albula.className + " absolute top-0 align-baseline h-20 w-screen space-x-12 md:space-x-96 2xl:space-x-[26rem] flex flex-row z-50"}>
            <div className={"flex flex-row relative "}>
                <Link href="/" className={"mix-blend-difference z-50"}>
                    <Image src={lightingMode == "light" ? "/gibraltar-stone-800.svg" : "/gibraltar-stone-300.svg"} width={75} height={75} className={"select-none ml-10 absolute cursor-pointer block md:hidden "} alt="NAVIGATOR logo"></Image>
                    
                    <Image src={lightingMode == "light" ? "/gibraltar-stone-800.svg" : "/gibraltar-stone-300.svg"} width={90} height={90} className={"select-none ml-6 fixed cursor-pointer hidden md:max-2xl:block"} alt="NAVIGATOR logo"></Image>
                    
                    <Image src={lightingMode == "light" ? "/gibraltar-stone-800.svg" : "/gibraltar-stone-300.svg"} width={105} height={105} className={"select-none ml-6 fixed cursor-pointer hidden 2xl:block"} alt="NAVIGATOR logo"></Image>
                </Link>
                <h1 className={`${lightingMode == "light" ? "text-stone-700" : "text-stone-300"} font-thin absoltue pt-6 md:mb-0 md:pt-7 2xl:pt-8 ml-[97%] md:ml-32 2xl:ml-36 text-3xl md:text-4xl 2xl:text-5xl`}>Navigator</h1>
            </div>
            <div className={"block md:hidden"}>
                <HamburgerMenu lightingMode={lightingMode}></HamburgerMenu>
            </div>
            <ul className={"w-1/2 list-none mt-10 pr-10 md:pr-24 flex flex-row text-right justify-end max-md:invisible md:visible"}>
                {Array.from(navItems.entries()).map(([title, details], index) => (
                    <Link key={index} className={`${lightingMode == "light" ? "text-stone-700 hover:border-b-stone-700 " : "text-stone-300 hover:border-b-stone-300"} 2xl:text-xl mx-4 hover:border-b-4 cursor-pointer hover:border-solid border-l-0 border-t-0 border-r-0 hidden md:block`} href={details.link}>{title}</Link>
                ))}
            </ul>
        </div>
    );
}

export default NavBar;