import React from 'react'
import { UserAuth } from '../../Context/authContext'

function Header() {
    
    // const [userMenu, setUserMenu] = useState(false)

    // const handleUserMenuToggle = () => {
    //     userMenu ? setUserMenu (false) : setUserMenu(true);
    // }

    const { googleSignIn, user } = UserAuth();
  
    const handleGoogleSignIn = async () => {
      try {
        await googleSignIn()
      }
      catch (error) {
        console.log(error)
      }
    }


    return (
        <>
            <div className='h-max px-12 py-9 flex bg-[#121212] justify-end items-center border-b border-[#3B3B3B] '>

                <div className=' h-full select-none'>
                    {user?.displayName ? <h3 className='cursor-pointer flex items-center gap-x-2 text-xl text-[#DBDBDB]' >{user?.displayName}</h3>  :  <button className='text-xl text-[#FDCA40] border-[#3B3B3B] rounded-md' onClick={handleGoogleSignIn}>Sign in with Google</button>}
                    
                </div>

                {/* <div className={ userMenu ? 'absolute flex flex-col bg-[#232323] border border-[#3B3B3B] justify-center w-56 h-36 py-3 rounded-xl right-6 top-28' : 'hidden'} >
                    <h3 className='hover:bg-[#f7f7f710] cursor-pointer text-[#D3D3D3] gap-x-4 px-4 w-full h-full text-xl flex items-center'><UserCircle size={36} color="#FDCA40" weight="light" /> Account</h3>
                    <h3 onClick={handleSignOut} className='hover:bg-[#f7f7f710] cursor-pointer text-[#D3D3D3] gap-x-4 px-4 w-full h-full text-xl flex items-center' ><SignOut size={36} color="#FDCA40" weight="light" /> Logout</h3>
                </div>   */}
            </div>
        </>
    )
}

export default Header






// <button  >Logout</button> 