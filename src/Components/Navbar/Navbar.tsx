
import { useNavigate } from 'react-router-dom'

import Logo from '../../Assets/logo.png'
import DummyProfileImage from '../../Assets/user.png'
function Navbar () {
    const navigator = useNavigate()

    function returnToHomePage() {
        navigator('/')
    }
    return (
        <>
            <div className="navbar bg-[#333545]">
            <div className="flex-1">
                <div className='h-12 mr-8'>
                    <img onClick={returnToHomePage} className="h-[100%] w-36" src={Logo} />
                </div>
                <div className="form-control hidden lg:block lg:w-96">
                    <input type="text" placeholder="Search" className="input input-bordered md:w-full" />
                </div>
            </div>
            <div className="flex-none gap-2">
                
                <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img src={DummyProfileImage} />
                    </div>
                </label>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm text-white dropdown-content bg-[#333545] rounded-box w-52">
                    <li>
                    <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
                </div>
            </div>
            
        </div>
        <div className="text-white bg-[#22232d]">
                <div className='flex gap-4 w-[80vw] mx-auto py-2'>
                    <div>
                        Movies
                    </div>
                    <div>
                        Events
                    </div>
                    <div>
                        Stream
                    </div>
                    <div>
                        Plays
                    </div>
                </div>
                
            </div>

            {/* console.log("End here") */}
        </>
    )
}

export default Navbar;