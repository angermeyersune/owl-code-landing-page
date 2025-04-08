
import React from 'react';
import Navbar from '@/components/Navbar';
import Dashboard from '@/components/Dashboard';
import Sidebar from '@/components/Sidebar';
import ProgressSection from '@/components/ProgressSection';
import SkillsSection from '@/components/SkillsSection';
import GoalSection from '@/components/GoalSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 md:p-10">
          <Dashboard />
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Follow your progress</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <SkillsSection />
              </div>
              <div className="space-y-6">
                <ProgressSection />
                <GoalSection />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
