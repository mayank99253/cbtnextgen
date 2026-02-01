import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import Hero from '../Hero' // Maan ke chal raha hoon aapka Hero component isi path pe hai

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in (Token check)
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token); // Agar token hai toh true, warna false
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Navbar hamesha dikhega, ya aap isse bhi conditional kar sakte ho */}
      <Navbar />

      <main className="relative">
        {isLoggedIn ? (
          <Sidebar />
        ) : (
          /* Login nahi hai toh Hero Section dikhao */
          <Hero />
        )}
      </main>
    </div>
  )
}

export default Home