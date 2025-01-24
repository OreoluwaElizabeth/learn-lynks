import React from 'react';
import './settings.css';

const Settings = () => {
    return (
        <div className='settings'>
            <h1>Settings</h1>
            <section>
                <h2>Account settings</h2>
                <form>
                    <label>
                        Profile Information:
                        <input type="text" />
                    </label>
                    <label>
                        Change Password:
                        <input type="password" />
                    </label>
                    <button type="submit">Save Changes</button>
                </form>
            </section>
            <section>
                <h2>Notification Settings</h2>
                <form>
                    <label>
                        Notification Preferences:
                        <select>
                            <option value="email">Email</option>
                            <option value="push">Push Notifications</option>
                        </select>
                    </label>
                    <label>
                        Notification Frequency:
                        <select>
                            <option value="immediately">Immediately</option>
                            <option value="daily">Daily</option>
                        </select>
                    </label>
                    <button type="submit">Save Changes</button>
                </form>
            </section>
        </div>
    )
}

export default Settings;