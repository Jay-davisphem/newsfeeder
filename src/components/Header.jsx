import img from "../favicon.svg";
import { MdCancel as AiOutlineMenuUnfold } from "react-icons/md";
import {GoThreeBars as AiOutlineMenuFold } from 'react-icons/go'
import {FcGlobe} from 'react-icons/fc'
import { useState, useCallback, useEffect } from "react";
import NavItems from './NavItems'
import moment from 'moment'
function Header() {
  const [isToggle, setToggle] = useState(false);
  const toggle = useCallback(() => setToggle((isToggle) => !isToggle), []);
  const [date, setDate] = useState(moment().format('MMMM Do YYYY, h:mm:ss a'))
  useEffect(() => {
  const interval = setInterval(() => {
    setDate(moment().format('MMMM Do YYYY, h:mm:ss a'))
  }, 1000);
  return () => clearInterval(interval);
}, []);
  return (
    <>
      <header className="flex items-center bg-[#E9FFF9] sticky md:relative top-0 inset-x-0 justify-between">
        <a href='/' className='outline-none bg-none'><FcGlobe className="hover:opacity-50 p-1 rounded-full border shadow-md  shadow-txt-cl" size='3em'/></a>
        <h2 className='font-special font-bold text-h-txt-cl text-lg md:text-4xl justify-center hover:underline'><a href='/'>News Feeder</a></h2>
        <div>
          {isToggle ? (
            <AiOutlineMenuUnfold
              className="block md:hidden hover:opacity-50"
              onClick={toggle}
              id="menu-button"
              aria-expanded="false"
              aria-haspopup="false"
              size="2em"
            />
          ) : (
            <AiOutlineMenuFold
              className="block md:hidden hover:opacity-50 border  border-2 hover:border-none"
              onClick={toggle}
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
              size="2em"
            />
          )}
        </div>
        <NavItems isToggle={isToggle} />
      </header>
      <section className='px-auto mt-8'>
        <div className='text-right'>
          <h3>CURATED AT</h3>
          <p>{date}</p>
        </div>
      </section>
    </>
  );
}
export default Header;
