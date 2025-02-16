import React from 'react';
import { HeroSection } from './components/HeroSection';
import { SubscriptionForm } from './components/SubscriptionForm';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <HeroSection />
        <SubscriptionForm />
      </div>
    </div>
  );
}

export default App;