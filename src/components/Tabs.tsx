import { useState, type ReactElement } from "react";
import { Tabs, Tab } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export interface TabItems {
    label: string;
    content: React.ReactNode;
}

export interface TabsComponentProps {
    tabs: TabItems[];
    isMobile: boolean
}

export function TabsComponent(tabsComponent: TabsComponentProps): ReactElement {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setSelectedTab(newValue);
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1, overflowY: "auto", minHeight: 0 }}>
            <Tabs
                value={selectedTab}
                onChange={handleChange}
                centered
                textColor="inherit"
                indicatorColor="secondary"
                variant={tabsComponent.isMobile ? "standard" : "fullWidth"}
                sx={{
                    borderBottom: 1,
                    borderColor: "text.primary",
                    py: 1.5
                }}
            >
                {tabsComponent.tabs.map((tab, index) => (
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
                    overflowY: "auto",
                    minHeight: 0,
                }}
            >
                <Typography component="div" fontFamily={"monospace"}>{tabsComponent.tabs[selectedTab].content}</Typography>
            </Box>
        </Box>
    );
}