import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen w-full bg-[#f8f6f5] text-[#181111] antialiased overflow-hidden font-sans">
            <Sidebar />
            <main className="flex-1 flex flex-col h-full relative overflow-hidden">
                <Header />
                <div className="flex-1 overflow-y-auto p-6 lg:p-8">
                    <div className="max-w-[1200px] mx-auto flex flex-col gap-8">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
}
