"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Login() {
    const [user, setUser] = React.useState({
        email: "",
        password: "",

    });

    const onLogin = async () => {
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Login</h1>
            <hr />
            <form onSubmit={onLogin} className="flex flex-col">
                <input
                    className="p-1 border text-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                    id="email"
                    type="text"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    placeholder="email"
                />
                <input
                    className="p-1 border text-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                    id="password"
                    type="text"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    placeholder="password"
                />
                <button
                    type="submit"
                    className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">
                    Login
                </button>
            </form>
            <Link href="/signup">
                Signup
            </Link>
        </div>
    )
}