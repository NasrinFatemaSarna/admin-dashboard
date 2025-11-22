// import { useState } from "react"
// import SettingSection from "./SettingSection";
// import { Bell } from "lucide-react";
// import ToggleSwitch from "./ToggleSwitch";


// const Notification = () => {
//     const [notifications, setNotifications]= useState({
//         push: true,
//         email: false,
//         sms: true,
//         });
//   return (

//     <SettingSection icon={Bell} title={"Notification"}>
//     <ToggleSwitch 
//     label={"Push Notifications"}
//     isOn={notifications.push}
//     onToggle={(e)=>setNotifications({...notifications, push: e})}/>
//     <ToggleSwitch 
//     label={"Email Notifications"}
//     isOn={notifications.email}
//     onToggle={(e)=>setNotifications({...notifications, email: e})}
//     />
      
//     </SettingSection>
//   )
// }

// export default Notification
import { useState } from "react";
import SettingSection from "./SettingSection";
import { Bell } from "lucide-react";
import ToggleSwitch from "./ToggleSwitch";

const Notification = () => {
  const [notifications, setNotifications] = useState({
    push: true,
    email: false,
    sms: true,
  });

  return (
    <SettingSection icon={Bell} title={"Notifications"}>
      <ToggleSwitch
        label={"Push Notifications"}
        isOn={notifications.push}
        onToggle={(e) => setNotifications({ ...notifications, push: e })}
      />
      <ToggleSwitch
        label={"Email Notifications"}
        isOn={notifications.email}
        onToggle={(e) => setNotifications({ ...notifications, email: e })}
      />
      <ToggleSwitch
        label={"SMS Notifications"}
        isOn={notifications.sms}
        onToggle={(e) => setNotifications({ ...notifications, sms: e })}
      />
    </SettingSection>
  );
};

export default Notification;
