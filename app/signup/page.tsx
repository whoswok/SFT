'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"

export default function SignupPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [education, setEducation] = useState('')
  const [age, setAge] = useState('')
  const [mbti, setMbti] = useState('')
  const [learningStyle, setLearningStyle] = useState('')
  const [level, setLevel] = useState('')
  const router = useRouter()

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the signup logic
    console.log('Signup attempted with:', { name, email, password, education, age, mbti, learningStyle, level })
    // For now, we'll just redirect to the profile setup page
    router.push('/profile-setup')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign Up for TutorConnect</h1>
        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1"
            />
          </div>
          <div>
            <label htmlFor="education" className="block text-sm font-medium text-gray-700">Highest Education</label>
            <Select
              id="education"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              required
              className="mt-1"
            >
              <option value="">Select Education</option>
              <option value="high-school">High School</option>
              <option value="bachelors">Bachelor's Degree</option>
              <option value="masters">Master's Degree</option>
              <option value="phd">Ph.D.</option>
            </Select>
          </div>
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
            <Input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
              className="mt-1"
            />
          </div>
          <div>
            <label htmlFor="mbti" className="block text-sm font-medium text-gray-700">MBTI</label>
            <Input
              type="text"
              id="mbti"
              value={mbti}
              onChange={(e) => setMbti(e.target.value)}
              placeholder="Or take the test"
              className="mt-1"
            />
          </div>
          <div>
            <label htmlFor="learningStyle" className="block text-sm font-medium text-gray-700">Learning Style</label>
            <Input
              type="text"
              id="learningStyle"
              value={learningStyle}
              onChange={(e) => setLearningStyle(e.target.value)}
              placeholder="Or take the test"
              className="mt-1"
            />
          </div>
          <div>
            <label htmlFor="level" className="block text-sm font-medium text-gray-700">Level</label>
            <Select
              id="level"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              required
              className="mt-1"
            >
              <option value="">Select Level</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </Select>
          </div>
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-blue-600 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  )
}