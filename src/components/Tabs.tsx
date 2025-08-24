import { useState } from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import { PhotosTab } from "./Photos";
import { MusicTab } from "./Music";
import { ResumeTab } from "./Resume";

export interface TabItems {
    label: string;
    content: React.ReactNode;
}

interface TabsComponentProps {
    tabs: TabItems[];
}

export const getTabs: TabItems[] =
[
    {
        label: 'Resume',
        content: (<ResumeTab />)
    },
    {
        label: 'Photography',
        content: (<PhotosTab />) 
    },
    {
        label: 'Music',
        content: (<MusicTab />)
    }
];


export function TabsComponent({ tabs }: TabsComponentProps) {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setSelectedTab(newValue);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, overflowY: 'auto', minHeight: 0 }}>
            <Tabs
                value={selectedTab}
                onChange={handleChange}
                centered
                textColor="inherit"
                indicatorColor="primary"
                variant="standard"
                sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                    px: 1
                }}
            >
                {tabs.map((tab, index) => (
                    <Tab
                        key={index}
                        label={tab.label}
                    />
                ))}
            </Tabs>
            <Box
                sx={{
                    p: 1,
                    flexGrow: 1,
                    overflowY: 'auto',
                    minHeight: 0,
                }}
            >
                <Typography component="div" fontFamily={"monospace"}>{tabs[selectedTab].content}</Typography>
            </Box>
        </Box>
    );
}