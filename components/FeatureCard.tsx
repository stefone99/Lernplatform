import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="glass p-6 rounded-xl hover-lift">
      <div className="flex flex-col h-full">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 flex-grow">{description}</p>
      </div>
    </div>
  );
}