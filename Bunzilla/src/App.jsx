import React from 'react'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <section className="h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Welcome to Our Site</h1>
            <p className="text-xl">Scroll down to see the navbar effect</p>
          </div>
        </section>
        
        <section className="min-h-screen bg-white p-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">About Us</h2>
            <p className="text-lg text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-lg text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </section>
        
        <section className="min-h-screen bg-gray-100 p-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-3">Service 1</h3>
                <p className="text-gray-600">Professional service description here.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-3">Service 2</h3>
                <p className="text-gray-600">Professional service description here.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-3">Service 3</h3>
                <p className="text-gray-600">Professional service description here.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default App