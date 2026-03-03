"use client";

import { createContext, useContext, useEffect, useState } from "react";

type ThemeContextType = {
    theme: "light" | "dark";
    toggleTheme: () => void;
    setTheme: (theme: "light" | "dark") => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setThemeState] = useState<"light" | "dark">("light");

    // Initialize theme from localStorage or system preference if needed (optional)
    useEffect(() => {
        const storedTheme = localStorage.getItem("makkari-theme") as "light" | "dark" | null;
        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, []);

    const setTheme = (newTheme: "light" | "dark") => {
        setThemeState(newTheme);
        localStorage.setItem("makkari-theme", newTheme);
    };

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
