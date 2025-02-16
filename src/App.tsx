import React, { useState } from 'react';
import { Bomb, Sparkles, TowerControl as GameController, Mail, CheckCircle2, Rocket, Zap } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Hero Section */}
        <div className="text-center text-white mb-8 space-y-6">
          <div className="flex items-center justify-center gap-4">
            <Rocket className="w-8 h-8 animate-bounce" />
            <h1 className="text-4xl font-bold">The Future of Bomberman</h1>
            <Zap className="w-8 h-8 animate-pulse" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Multiplayer Revolution</h3>
              <p>Cross-platform battles with next-gen graphics and physics</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Battle Royale Mode</h3>
              <p>100 players, one map, endless explosions</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Custom Maps</h3>
              <p>Create and share your own battlegrounds</p>
            </div>
          </div>
        </div>

        {/* Subscription Form */}
        <div className="max-w-md mx-auto">
          <div className="bg-white p-1">
            <div className="border-4 border-gray-800 p-6 relative">
              {/* Decorative bombs in corners */}
              <Bomb className="absolute top-2 left-2 text-gray-800" size={24} />
              <Bomb className="absolute top-2 right-2 text-gray-800" size={24} />
              <Bomb className="absolute bottom-2 left-2 text-gray-800" size={24} />
              <Bomb className="absolute bottom-2 right-2 text-gray-800" size={24} />

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

              {!subscribed ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="email"
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
              ) : (
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
              )}

              <div className="mt-6 text-center text-sm text-gray-500">
                No spam, just game-changing updates!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;