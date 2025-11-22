import { User } from "lucide-react"
import SettingSection from "./SettingSection"


const Profile = () => {
  return (
    <SettingSection icon={User} title={'Profile'}>
        <div className="flex flex-col sm:flex-row items-center mb-6">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5VZ-0RwKsFhDsN2O84jb_Fa-4U1h4gozvVw&s" 
            alt="profile"
            className="rounded-full w-20 h-20 object-cover mr-4" />
            <div>
                <h3 className="text-lg font-semibold text-gray-100">Janny Doy</h3>
                <p className="text-gray-400">janny.doy@example.com</p>
            </div>
            </div>
            <div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md
            transition duration-200 w-full sm:w-auto">Edit Profile</button>
            </div>
      
    </SettingSection>
  )
}

export default Profile
