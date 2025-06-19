import { useState } from 'react';
import Hero from './components/Hero';
import Layout from './components/Layout';
import CoffeeForm from './components/coffeeForm';
import Stats from './components/Stats';

function App() {
  const isAuthenticated = false; // Replace with actual authentication logic

  const authenticatedContent = (
    <>
      <Stats />
      <History />
    </>
  )
  return (
    <Layout>
      <Hero />
      <CoffeeForm />
      {isAuthenticated ? authenticatedContent : <p>Please log in to see your stats and history.</p>}
    </Layout>
  )
}

export default App
