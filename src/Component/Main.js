import { Outlet } from "react-router-dom"
import React from 'react'

export function Main() {
    return (
        <div>
            <Outlet />
        </div>
    )
}