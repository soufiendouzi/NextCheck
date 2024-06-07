import React from 'react'

import Link from 'next/link'
export default function  page ()  {
  return (
    <div>
      <nav class="bg-gray-800">
      <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            <Link href="/" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</Link>
            <Link href="About" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About</Link>
            <Link href="/Project" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</Link>
            <Link href="/Contact" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contact</Link>
          </div>
        </div>
      </nav>
    
 
</div>
  )
}

