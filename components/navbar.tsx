"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { LoginLink, LogoutLink, RegisterLink, useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"
import { useRouter } from "next/navigation"

export function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const router = useRouter();
    const { isAuthenticated } = useKindeBrowserClient();


    return (
        <header
            className={cn(
                "sticky top-0 z-50 w-full transition-all duration-300",
                scrolled
                    ? "bg-white/95 backdrop-blur-sm border-b border-[#f5f0f0] shadow-sm"
                    : "bg-transparent border-transparent"
            )}
        >
            <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <img className="h-10 w-auto object-contain" src="/assets/branding/Makkari Colored Symbol Transparent.png" alt="Makkari" />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link
                            href="#features"
                            className="text-sm font-semibold text-[#181111] hover:text-primary transition-colors"
                        >
                            Features
                        </Link>
                        <Link
                            href="#pricing"
                            className="text-sm font-semibold text-[#181111] hover:text-primary transition-colors"
                        >
                            Pricing
                        </Link>
                        <Link
                            href="#"
                            className="text-sm font-semibold text-[#181111] hover:text-primary transition-colors"
                        >
                            About
                        </Link>
                    </nav>

                    {/* Auth Buttons */}
                    <div className="flex items-center gap-3">
                        {isAuthenticated ? (
                            <>
                                <Button
                                    variant="ghost"
                                    onClick={() => router.push("/dashboard")}
                                    className="cursor-pointer hidden sm:flex h-9 items-center justify-center rounded-lg px-4 text-sm font-bold text-[#181111] hover:bg-gray-100 transition-colors"
                                >
                                    Dashboard
                                </Button>
                                <LogoutLink>
                                    <Button
                                        className="cursor-pointer flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold text-white shadow-sm hover:bg-[#3a0403] transition-colors"
                                    >
                                        Logout
                                    </Button>
                                </LogoutLink>
                            </>


                        ) : (
                            <>
                                <LoginLink>
                                    <Button
                                        variant="ghost"
                                        className="cursor-pointer hidden sm:flex h-9 items-center justify-center rounded-lg px-4 text-sm font-bold text-[#181111] hover:bg-gray-100 transition-colors"
                                    >
                                        Login
                                    </Button>
                                </LoginLink>

                                <RegisterLink>
                                    <Button className="cursor-pointer flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold text-white shadow-sm hover:bg-[#3a0403] transition-colors">
                                        Get Started
                                    </Button>
                                </RegisterLink>
                            </>

                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}
