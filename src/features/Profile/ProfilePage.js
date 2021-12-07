import { Card, Grid, Tabs } from "@mui/material"
import Tab from '@mui/material/Tab';
import { useState } from "react";
import { profile_options } from "../../app/config/profile";
import { TabPanel } from "../../components/TabPanel";

const ProfilePage = (props) => {

    const [value, setValue] = useState(0)

    const a11yProps = (index) => {
        return {
            id: `vertical-tab-${index}`,
            'aria-controls': `vertical-tabpanel-${index}`,
        };
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Grid container spacing={3}>
            <Grid item sm={3} xs={12}>
                <Card>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                    >
                        {profile_options.map((option, index) => (
                            <Tab icon={option.icon} iconPosition="start" label={option.title} {...a11yProps(index)} />
                        ))}
                    </Tabs>
                </Card>
            </Grid>
            <Grid item sm xs>
                <Card>
                    {profile_options.map((option, index) => (
                        <TabPanel value={value} index={index}>
                            <option.content />
                        </TabPanel>
                    ))}

                </Card>
            </Grid>
        </Grid>
    )
}

export default ProfilePage