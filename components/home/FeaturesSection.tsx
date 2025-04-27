
import React from 'react';
import { useNavigate } from 'react-router-dom';
// Added Captions icon
import { BookOpen, Image, Mic, MessageCircle, HelpCircle, Puzzle, Captions } from 'lucide-react'; 
import DoodleCard from '@/components/DoodleCard';
import DoodleButton from '@/components/DoodleButton'; 
import DoodleDecoration from '@/components/DoodleDecoration';

const FeaturesSection = () => {
  const navigate = useNavigate();
  
  const handleNavigation = (path: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(path);
  };

  const openExternalLink = (url: string) => {
      window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Learn With Fun Tools</h2>
        {/* Adjusted grid for potentially more items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
          {/* Existing Cards ... */}
          <DoodleCard 
            title="English Grammar" 
            description="Learn grammar rules with interactive lessons and fun exercises." 
            icon={<BookOpen className="w-8 h-8" />} 
            color="green" 
            onClick={handleNavigation("/grammar")}
          />          
          <DoodleCard 
            title="Story Image Generator" 
            description="Create beautiful images to illustrate your stories and writing." 
            icon={<Image className="w-8 h-8" />} 
            color="yellow" 
            onClick={handleNavigation("/story-images")}
          />          
          <DoodleCard 
            title="Spoken English" 
            description="Practice pronunciation and speaking with audio lessons." 
            icon={<Mic className="w-8 h-8" />} 
            color="red" 
            onClick={handleNavigation("/spoken-english")}
          />          
          <DoodleCard 
            title="Voice Chat Bot" 
            description="Talk with an AI tutor that listens and responds to your voice." 
            icon={<MessageCircle className="w-8 h-8" />} 
            color="purple" 
            onClick={handleNavigation("/voice-bot")}
          />          
          <DoodleCard 
            title="Socratic Tutor" 
            description="Learn through guided questions that help you discover answers." 
            icon={<HelpCircle className="w-8 h-8" />} 
            color="orange" 
            onClick={handleNavigation("/socratic-tutor")}
          />
          <DoodleCard
            title="Word Guessor Game"
            description="Improve your vocabulary by guessing English words."
            icon={<Puzzle className="w-8 h-8" />}
            color="pink"
          >
            <div className="mt-4 pt-4 border-t border-border/40 flex justify-center">
                <DoodleButton
                    onClick={() => openExternalLink('https://letter-leap-guessing-game.vercel.app/')}
                    color="pink"
                    size="sm"
                >
                    Play Game
                </DoodleButton>
            </div>
          </DoodleCard>

          {/* --- Added YouTube Transcriber Card --- */}
          <DoodleCard
            title="YouTube Transcriber"
            description="Get text transcripts from YouTube videos quickly."
            icon={<Captions className="w-8 h-8" />}
            color="teal" // Using teal color
          >
            <div className="mt-4 pt-4 border-t border-border/40 flex justify-center">
                <DoodleButton
                    onClick={() => openExternalLink('https://tubescribe.vercel.app/')}
                    color="teal"
                    size="sm"
                >
                    Open Tool
                </DoodleButton>
            </div>
          </DoodleCard>
          {/* --- End Added Card --- */}
          
          {/* Removed Coming Soon Card to make space or adjust grid */}
          {/* <div className="card-doodle border-kid-pink flex flex-col items-center justify-center bg-gradient-to-br from-white to-pink-100 p-6">
            <DoodleDecoration type="heart" color="pink" size="md" />
            <h3 className="text-xl font-bold mt-4 mb-2">Coming Soon</h3>
            <p className="text-gray-600 text-center">More exciting features are on the way!</p>
          </div> */}

        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
