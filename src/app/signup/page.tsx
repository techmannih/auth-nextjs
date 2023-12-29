"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Signup() {
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    });

    const onSignup = async () => {
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Signup</h1>
            <hr />
            <form action="" onSubmit={onSignup} className="flex flex-col"></form>
            <input
                className="p-1 border text-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                id="username"
                type="text"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                placeholder="username"
            />
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
                Signup
            </button>
            <Link href="/login">
                Login
            </Link>
        </div>
    )
}