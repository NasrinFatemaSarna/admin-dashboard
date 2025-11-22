
import { Lock, Shield } from "lucide-react";
import SettingSection from "./SettingSection";

const Security = () => {
  return (
    <div>
      {/* Password Change Section */}
      <SettingSection icon={Lock} title={"Password"}>
        <div className="my-3">
          <p className="text-gray-100">
            It's a good idea to use a strong password that you're not using elsewhere.
          </p>
          <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500">
            Change Password
          </button>
        </div>
      </SettingSection>

      {/* Two-Factor Authentication Section */}
      <SettingSection icon={Shield} title={"Two-Factor Authentication"}>
        <div className="my-3">
          <p className="text-gray-100">
            Add an extra layer of security to your account by enabling 2FA.
          </p>
          <button className="mt-3 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500">
            Enable 2FA
          </button>
        </div>
      </SettingSection>

      {/* Account Activity */}
      <SettingSection icon={Shield} title={"Account Activity"}>
        <div className="my-3">
          <p className="text-gray-100">
            Monitor the recent activity on your account and manage connected devices.
          </p>
          <button className="mt-3 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500">
            View Activity
          </button>
        </div>
      </SettingSection>
    </div>
  );
};

export default Security;

