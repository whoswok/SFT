'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"

export default function ProfileSetupPage() {
  const [currentTest, setCurrentTest] = useState('welcome')
  const router = useRouter()

  const renderTest = () => {
    switch (currentTest) {
      case 'welcome':
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Welcome to Profile Setup</h2>
            <p className="mb-4">Let's set up your profile with some quick tests.</p>
            <Button onClick={() => setCurrentTest('mbti')}>Start MBTI Test</Button>
          </div>
        )
      case 'mbti':
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">MBTI Test</h2>
            <p className="mb-4">This is where the MBTI test would be implemented.</p>
            <Button onClick={() => setCurrentTest('learning-style')}>Next: Learning Style Test</Button>
          </div>
        )
      case 'learning-style':
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Learning Style Test</h2>
            <p className="mb-4">This is where the Learning Style test would be implemented.</p>
            <Button onClick={() => setCurrentTest('mock-test')}>Next: Mock Test</Button>
          </div>
        )
      case 'mock-test':
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Mock Test</h2>
            <p className="mb-4">This is where the Mock test would be implemented.</p>
            <Button onClick={() => router.push('/main')}>Finish Setup</Button>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-3xl font-bold mb-6 text-center">Profile Setup</h1>
        {renderTest()}
      </div>
    </div>
  )
}