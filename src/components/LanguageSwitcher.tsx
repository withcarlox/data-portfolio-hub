import { ChevronDown } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const LanguageSwitcher = () => {
    const { setLanguage, t } = useLanguage();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="flex items-center gap-2 px-0 hover:bg-transparent text-foreground/80 hover:text-foreground transition-colors duration-300 text-sm tracking-wide font-normal"
                >
                    <span>{t.nav.language}</span>
                    <ChevronDown className="w-4 h-4 opacity-50" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage("pt")} className="gap-2 cursor-pointer">
                    <span className="text-lg" role="img" aria-label="Brazil Flag">🇧🇷</span>
                    <span>Português</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("en")} className="gap-2 cursor-pointer">
                    <span className="text-lg" role="img" aria-label="USA Flag">🇺🇸</span>
                    <span>English</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default LanguageSwitcher;
