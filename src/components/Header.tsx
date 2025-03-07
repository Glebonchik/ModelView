import Logo from '../assets/react.svg'
import DefaultAvatar from '../assets/no-avatar.svg'

const Header = () => {
  return (
<div className="flex justify-between items-center p-4 bg-gray-100">
    <div className="flex items-center">
        <img src={Logo} alt="logo" className="w-8 h-8 mr-2" />
        <h3 className="text-lg font-bold text-blue-600">ModelView</h3>
    </div>

    <nav className="hidden md:flex justify-center flex-grow">
        <ul className="flex space-x-4 text-gray-700">
            <li className="hover:text-blue-500 cursor-pointer">Main</li>
            <li className="hover:text-blue-500 cursor-pointer">About</li>
            <li className="hover:text-blue-500 cursor-pointer">Projects</li>
        </ul>
    </nav>

    <div>
        <img
            className="rounded-full border-2 border-blue-500 w-20 h-20"
            src={DefaultAvatar}
            alt="Avatar-img"
        />
    </div>
</div>
  )
}

export default Header