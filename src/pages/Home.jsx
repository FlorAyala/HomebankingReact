import React from 'react'

const Home = () => {
  return (
    <main class="container mx-auto py-16 px-4">
        <section class="text-center">
            <h2 class="text-4xl font-bold mb-4 text-gold-500">Welcome to MyBank</h2>
            <p class="mb-8 text-lg">Experience seamless banking from the comfort of your home.</p>
            <a href="#" class="bg-gold-500 text-black py-2 px-4 rounded hover:bg-gold-300">Get Started</a>
        </section>
        <section class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-gray-800 p-6 rounded-lg">
                <h3 class="text-2xl font-bold text-gold-500 mb-2">Manage Accounts</h3>
                <p class="text-gray-400">View and manage all your bank accounts in one place.</p>
            </div>
            <div class="bg-gray-800 p-6 rounded-lg">
                <h3 class="text-2xl font-bold text-gold-500 mb-2">Transfer Funds</h3>
                <p class="text-gray-400">Easily transfer funds between your accounts or to others.</p>
            </div>
            <div class="bg-gray-800 p-6 rounded-lg">
                <h3 class="text-2xl font-bold text-gold-500 mb-2">Bill Payments</h3>
                <p class="text-gray-400">Pay your bills securely and on time with just a few clicks.</p>
            </div>
        </section>
    </main>
  )
}

export default Home