import React from "react";


export interface IRoute {
    name: string;
    path: string;
    exact?: boolean;
    Component?: JSX.Element<any, any>;
}
