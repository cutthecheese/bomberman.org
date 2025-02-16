import React, { useState } from 'react';
import { Bomb, Sparkles, TowerControl as GameController, Mail, CheckCircle2 } from 'lucide-react';

export function SubscriptionForm() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed ] = useState(false);
  const [token, setToken] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) { return; }
    const body = new URLSearchParams();
    body.append('EMAIL', email);
    body.append('cf-turnstile-response', token);
    fetch('https://91f27fec.sibforms.com/serve/MUIFAHicRbkrnuVSvJpNWSkvwBwAKCyKrMWEyRaH9UTjw3PRKmUy3bPq6p_grnh6H9iVYW_wz0szFqb7_AYVs6DDc4rqpglQA3sAnv2KZLLGJGhU5S1TLA3c2Tmx0tlLRGrLgK-ODCsFYemcg502x7Wa_V4KkF0iEh2whcVOH3DBxfdp2__MCfnUHGLh1Z0UVwEjecI3FMcDRJ2Q?isAjax=1', {
      method: 'POST',
      body,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setSubscribed(true);
          setSuccessMessage(data.message);
        } else {
          setErrorMessage(JSON.stringify(data.errors));
        }
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage('Something went wrong. Please try again.');
      });
    setEmail('');
    setToken('');
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white p-1">
        <div className="border-4 border-gray-800 p-6 relative">
          <CornerBombs />
          <FormHeader />
          {!subscribed ? (
            <EmailForm email={email} setEmail={setEmail} onSubmit={handleSubmit} />
          ) : (
            <SuccessMessage />
          )}

          {!errorMessage && (
            <div className="text-red-500">
              {errorMessage}
            </div>
          )}

          <div className="mt-6 text-center text-sm text-gray-500">
            No spam, just game-changing updates!
          </div>
        </div>
      </div>
    </div>
  );
}

function CornerBombs() {
  return (
    <>
      <Bomb className="absolute top-2 left-2 text-gray-800" size={24} />
      <Bomb className="absolute top-2 right-2 text-gray-800" size={24} />
      <Bomb className="absolute bottom-2 left-2 text-gray-800" size={24} />
      <Bomb className="absolute bottom-2 right-2 text-gray-800" size={24} />
    </>
  );
}

function FormHeader() {
  return (
    <div className="text-center mb-6">
      <div className="flex justify-center mb-4">
        <GameController className="text-blue-600 w-16 h-16" />
      </div>
      <h1 className="text-2xl font-bold text-gray-800 mb-2">
        JOIN THE BOMBERMAN SQUAD!
      </h1>
      <p className="text-gray-600">
        Subscribe for exclusive gaming news, tips, and special offers!
      </p>
    </div>
  );
}

function EmailForm({ 
  email, 
  setEmail, 
  onSubmit 
}: { 
  email: string; 
  setEmail: (email: string) => void; 
  onSubmit: (e: React.FormEvent) => void;
}) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="w-full pl-10 pr-4 py-2 border-2 border-gray-800 rounded focus:outline-none focus:border-blue-600 transition-colors"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200 flex items-center justify-center gap-2"
      >
        <Sparkles size={20} />
        POWER UP!
      </button>
    </form>
  );
}

function SuccessMessage() {
  return (
    <div className="text-center space-y-4">
      <div className="flex justify-center">
        <CheckCircle2 className="text-green-500 w-16 h-16" />
      </div>
      <h2 className="text-xl font-bold text-gray-800">
        BOOM! You're In!
      </h2>
      <p className="text-gray-600">
        Get ready for some explosive content coming your way!
      </p>
    </div>
  );
}