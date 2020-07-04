import React from "react";
import {Paper, Tabs, Tab} from "@material-ui/core";

export default Footer => {
    return (
        <Paper>
            <Tabs
                value={1}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
            </Tabs>
        </Paper>
    );
}
