"use client";

import { useState } from "react";
import { useSession } from "@/hooks/useSession";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import LanguageSelector from "./LanguageSelector";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { data: session, signOut } = useSession();
  const t = useTranslations();
  const locale = useLocale();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">CW</span>
          </div>
          <span className="text-2xl font-bold text-gray-800">CoWorking</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors">
            {t("common.home")}
          </a>
          <a href="#servicios" className="text-gray-700 hover:text-blue-600 transition-colors">
            {t("common.services")}
          </a>
          <a href="#espacios" className="text-gray-700 hover:text-blue-600 transition-colors">
            {t("common.spaces")}
          </a>
          <a href="#reservar" className="text-gray-700 hover:text-blue-600 transition-colors">
            {t("common.book")}
          </a>
          
          <LanguageSelector />
          
          {session ? (
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">
                    {session.user?.name?.charAt(0).toUpperCase() || session.user?.email?.charAt(0).toUpperCase()}
                  </span>
                </div>
                <span>{session.user?.name || session.user?.email}</span>
              </button>
              
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  <Link
                    href={`/${locale}/profile`}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    {t("common.profile")}
                  </Link>
                  <button
                    onClick={async () => {
                      await signOut();
                      setIsUserMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    {t("common.logout")}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link
                href={`/${locale}/login`}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {t("common.login")}
              </Link>
              <Link
                href={`/${locale}/register`}
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                {t("common.register")}
              </Link>
            </div>
          )}
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#inicio" className="text-gray-700 hover:text-blue-600">{t("common.home")}</a>
            <a href="#servicios" className="text-gray-700 hover:text-blue-600">{t("common.services")}</a>
            <a href="#espacios" className="text-gray-700 hover:text-blue-600">{t("common.spaces")}</a>
            <a href="#reservar" className="text-gray-700 hover:text-blue-600">{t("common.book")}</a>
            
            <LanguageSelector />
            
            {session ? (
              <>
                <Link href={`/${locale}/profile`} className="text-gray-700 hover:text-blue-600">
                  {t("common.profile")}
                </Link>
                <button
                  onClick={async () => await signOut()}
                  className="bg-red-600 text-white px-6 py-2 rounded-full w-full"
                >
                  {t("common.logout")}
                </button>
              </>
            ) : (
              <>
                <Link
                  href={`/${locale}/login`}
                  className="text-gray-700 hover:text-blue-600"
                >
                  {t("common.login")}
                </Link>
                <Link
                  href={`/${locale}/register`}
                  className="bg-blue-600 text-white px-6 py-2 rounded-full w-full text-center"
                >
                  {t("common.register")}
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

