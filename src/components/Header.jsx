import { MdOutlineDarkMode } from "react-icons/md";

const Header = ({ toggleDarkMode, darkMode }) => {
  return (
    <>
        <header className='header'>
            <div>
                <b>Where in the world?</b>
            </div>
            <div onClick={toggleDarkMode} style={{ cursor: 'pointer' }} >
              <MdOutlineDarkMode className="light-icon" />
              <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
            </div>
        </header>
    </>
  )
}

export default Header