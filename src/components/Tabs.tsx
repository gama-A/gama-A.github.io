import { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export interface TabItems {
    label: string;
    content: React.ReactNode;
}

interface TabsComponentProps {
    tabs: TabItems[];
}

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
                indicatorColor="secondary"
                variant="standard"
                sx={{
                    borderBottom: 1,
                    borderColor: 'text.primary',
                    py: 1.5
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