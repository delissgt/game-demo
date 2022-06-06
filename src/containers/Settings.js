import React, { Component } from "react";
import SideNavigation from "../components/SideNavigation";
import SettingForm from "../components/Settings/SettingForm";
import { Redirect } from "react-router-dom";
import { checkTokenValid } from "../Helpers/TokenValid";

class Settings extends Component {
    render() {
        if (checkTokenValid() === false) {
            return <Redirect to={{ pathname: "/login" }} />;
        }

        return (
            <SideNavigation currentKey="2">
                <SettingForm />
            </SideNavigation>
        );
    }
}

export default Settings;
