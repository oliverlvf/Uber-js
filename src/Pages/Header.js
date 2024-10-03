import React from "react";
import "./style.css";

export default function Header() {
    return (
        <div>
            <header className="bg-primary altura">
                <div className="bg-black d-flex justify-content-between align-items-center h-100 w-100 px-3">
                    <div className="d-flex">
                        <a href="#" className="text-decoration-none text-white me-3">Company</a>
                        <a href="#" className="text-decoration-none text-white me-3">Safety</a>
                        <a href="#" className="text-decoration-none text-white">Help</a>
                    </div>

                    <div className="d-flex">
                        <a href="#" className="text-decoration-none text-white p-1 me-2">Login</a>
                        <a href="#" className="text-decoration-none text-black bg-white rounded-pill p-1">Sign Up</a>
                    </div>
                </div>
            </header>
        </div>
    );
}
