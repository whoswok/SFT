'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, User, Book, Star } from 'lucide-react'

export default function MainPage() {
  const router = useRouter()
  const [currentCarouselSlide, setCurrentCarouselSlide] = useState(0)
  const [showTutorQuestion, setShowTutorQuestion] = useState(false)
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false)

  const carouselItems = [
    { title: "Learn from the best", description: "Connect with top-rated tutors" },
    { title: "Flexible scheduling", description: "Book lessons that fit your schedule" },
    { title: "Wide range of subjects", description: "From math to music, we've got you covered" },
  ]

  const recommendedTutors = [
    { name: "Dr. Jane Smith", subject: "Mathematics", rating: 4.9 },
    { name: "Prof. John Doe", subject: "Physics", rating: 4.8 },
    { name: "Ms. Emily Brown", subject: "English Literature", rating: 4.7 },
  ]

  const popularClasses = [
    { title: "Calculus Fundamentals", tutor: "Dr. Jane Smith", students: 120 },
    { title: "Quantum Mechanics 101", tutor: "Prof. John Doe", students: 85 },
    { title: "Shakespeare's Tragedies", tutor: "Ms. Emily Brown", students: 95 },
  ]

  const handleTutorClick = () => {
    setShowTutorQuestion(true)
  }

  const handleTutorQuestionResponse = (response: boolean) => {
    if (response) {
      router.push('/main/find-tutor')
    } else {
      setShowTutorQuestion(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-12">
          <div className="relative bg-blue-100 rounded-lg p-8">
            <div className="flex justify-between items-center mb-4">
              <Button onClick={() => setCurrentCarouselSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)}>
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button onClick={() => setCurrentCarouselSlide((prev) => (prev + 1) % carouselItems.length)}>
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
            <h2 className="text-3xl font-bold mb-2">{carouselItems[currentCarouselSlide].title}</h2>
            <p className="text-xl">{carouselItems[currentCarouselSlide].description}</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Recommended Tutors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendedTutors.map((tutor, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <User className="h-12 w-12 text-gray-400 bg-gray-100 rounded-full p-2 mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold">{tutor.name}</h3>
                    <p className="text-gray-600">{tutor.subject}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-1" />
                  <span>{tutor.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Popular Classes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularClasses.map((class_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-2">{class_.title}</h3>
                <p className="text-gray-600 mb-2">Tutor: {class_.tutor}</p>
                <div className="flex items-center">
                  <User className="h-5 w-5 text-gray-400 mr-1" />
                  <span>{class_.students} students</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Find Your Perfect Tutor</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">Ready to start learning?</h3>
                <p className="text-gray-600">Find a tutor that matches your needs and schedule.</p>
              </div>
              <Button onClick={handleTutorClick}>Find a Tutor</Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">TutorConnect</h3>
              <p className="text-gray-400">Connecting students with expert tutors worldwide.</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                <li><Link href="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white"><span className="sr-only">Facebook</span><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg></a>
                <a href="#" className="text-gray-400 hover:text-white"><span className="sr-only">Twitter</span><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg></a>
                <a href="#" className="text-gray-400 hover:text-white"><span className="sr-only">GitHub</span><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg></a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {showTutorQuestion && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Should we find you a tutor?</h3>
            <div className="flex justify-end space-x-4">
              <Button onClick={() => handleTutorQuestionResponse(false)} variant="default">No</Button>
              <Button onClick={() => handleTutorQuestionResponse(true)}>Yes</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}