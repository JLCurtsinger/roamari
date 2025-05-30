import { useTranslation } from 'react-i18next';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// Only include languages with complete translations
const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' }
];

export const LanguageSelector = () => {
  const { i18n, t } = useTranslation();
  const { toast } = useToast();

  const handleLanguageChange = async (value: string) => {
    try {
      await i18n.changeLanguage(value);
      localStorage.setItem('i18nextLng', value);
      toast({
        title: t('common.success'),
        description: t('common.languageChanged'),
      });
    } catch (error) {
      console.error('Failed to change language:', error);
      toast({
        title: t('common.error'),
        description: "Failed to change language. Defaulting to English.",
        variant: "destructive",
      });
      i18n.changeLanguage('en');
    }
  };

  const getCurrentLanguageName = (code: string = i18n.language) => {
    return languages.find(lang => lang.code === code)?.name || 'English';
  };

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-gray-600 dark:text-gray-300" />
      <Select defaultValue={i18n.language} onValueChange={handleLanguageChange}>
        <SelectTrigger className="w-[140px] bg-white dark:bg-gray-800">
          <SelectValue defaultValue={i18n.language}>
            {getCurrentLanguageName()}
          </SelectValue>
        </SelectTrigger>
        <SelectContent className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          {languages.map((lang) => (
            <SelectItem 
              key={lang.code} 
              value={lang.code}
              className="hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {lang.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};