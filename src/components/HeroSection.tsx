import React from 'react';
import { Rocket, Zap } from 'lucide-react';

export function HeroSection() {
  return (
    <div className="text-center text-white mb-8 space-y-6">
      <div className="flex items-center justify-center gap-4">
        <Rocket className="w-8 h-8 animate-bounce" />
        <h1 className="text-4xl font-bold">The Future of Bomberman</h1>
        <Zap className="w-8 h-8 animate-pulse" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <FeatureCard
          title="Multiplayer Revolution"
          description="Cross-platform battles with next-gen graphics and physics"
        />
        <FeatureCard
          title="Battle Royale Mode"
          description="100 players, one map, endless explosions"
        />
        <FeatureCard
          title="Custom Maps"
          description="Create and share your own battlegrounds"
        />
      </div>
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}