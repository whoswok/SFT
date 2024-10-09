'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, User, Book, Star } from 'lucide-react'

export default function MainLayout({ children }: { children: React.ReactNode }) {
const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false)
  return (
    <div className="min-h-screen flex flex-col">
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Book className="h-8 w-8 text-blue-500 mr-2" />
          <span className="text-xl font-bold">TutorConnect</span>
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="/main/find-tutor" className="text-gray-500 hover:text-gray-900">Find a Tutor</Link>
          <Link href="/main/find-class" className="text-gray-500 hover:text-gray-900">Find a Class</Link>
          <Link href="/main/discussion-forum" className="text-gray-500 hover:text-gray-900">Discussion Forum</Link>
          <Link href="/main/study-with-ai" className="text-gray-500 hover:text-gray-900">Study with AI</Link>
        </nav>
        <div className="relative">
          <Button 
            variant="ghost" 
            className="rounded-full p-2"
            onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
          >
            <User className="h-6 w-6" />
          </Button>
          {isProfileDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
              <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
              <Link href="/history" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">History</Link>
              <Link href="/progress" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Progress</Link>
              <Link href="/my-questions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Questions</Link>
              <Link href="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Log out</Link>
            </div>
          )}
        </div>
      </div>
    </header>

      <main className="flex-grow">
        {children}
      </main>
    </div>
  )
}