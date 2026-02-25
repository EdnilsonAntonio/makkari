import Link from "next/link"
import { Facebook, Instagram, Twitter, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
    return (
        <footer className="bg-[#111111] border-t border-gray-800 pt-16 pb-8">
            <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <Link href="/" className="text-xl font-bold text-white hover:text-primary transition-colors">Makkari</Link>
                        </div>
                        <p className="text-sm text-gray-400 mb-6">
                            The fastest way to manage tasks and projects for modern teams.
                        </p>
                        <div className="flex gap-4">
                            <Link
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <span className="sr-only">Facebook</span>
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <span className="sr-only">Instagram</span>
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <span className="sr-only">X (Twitter)</span>
                                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </Link>
                            <Link
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <span className="sr-only">GitHub</span>
                                <Github className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Product
                        </h4>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Features</Link></li>
                            <li><Link href="#pricing" className="text-sm text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
                            <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Integrations</Link></li>
                            <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Changelog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Company
                        </h4>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">About</Link></li>
                            <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Team</Link></li>
                            <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                            <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Legal
                        </h4>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Cookie Policy</Link></li>
                            <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Security</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-500">
                        © 2026 Makkari Inc. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        {/* Subscribe or other bottom links could go here if needed, but social is moved up */}
                    </div>
                </div>
            </div>
        </footer>
    )
}
