import React from 'react';
import { 
  Linkedin, 
  Instagram, 
  Calendar,
  FileSpreadsheet,
  Stars,
  Waves,
  Moon,
  Sun
} from 'lucide-react';

function App() {
  const toggleDarkMode = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 dark:text-white">
      {/* Hero Section */}
      <header className="relative h-[300px] md:h-[350px] lg:h-[400px] bg-gradient-to-r from-purple-900/80 to-indigo-800/80 text-white overflow-hidden">
  <div className="absolute inset-0">
    <img 
      src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=2000&q=80" 
      alt="Ama Dablam mountain peak in Sagarmatha National Park, Nepal" 
      className="w-full h-full object-cover object-center opacity-95"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-indigo-800/30 backdrop-blur-[1px]" />
  </div>
  <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-lg">Mihir Chavan</h1>
    <div className="flex items-center gap-4">
      <a 
        href="https://linkedin.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="hover:text-purple-300 transition-colors"
      >
        <Linkedin className="w-7 h-7 drop-shadow-md" />
      </a>
      <a 
        href="https://instagram.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-purple-300 transition-colors"
      >
        <Instagram className="w-7 h-7 drop-shadow-md" />
      </a>
      <button 
        onClick={toggleDarkMode}
        className="hover:text-purple-300 transition-colors"
        aria-label="Toggle dark mode"
      >
        <Sun className="w-7 h-7 hidden dark:block drop-shadow-md" />
        <Moon className="w-7 h-7 dark:hidden drop-shadow-md" />
      </button>
    </div>
  </div>
</header>

      {/* Welcome Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md mb-12 p-8">
            <h2 className="text-3xl font-bold mb-6">Hello There!</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Welcome to my personal corner on the world wide web.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              My name is Mihir, and this is my own space to explore and express life's vibrance and variety. 
              To know more about me, check out my passion projects with the links below.
            </p>
          </div>

          {/* Passion Projects Section */}
          <h2 className="text-3xl font-bold mb-8">Explore My Passion Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Excel */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <FileSpreadsheet className="w-5 h-5" />
                  Microsoft Excel
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  I came across MS Excel as a workplace tool to maintain accounts and do tax computations back in 2009. 
                  Finding out you can have nested IF formulas was an excitement I couldn't very well describe in words. 
                  This began a journey of figuring out what more can be done and pushing excel to (my known) limits.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  My mission is simple: I want people to go from surviving Excel to thriving with Excel.
                </p>
                <button 
                  onClick={() => window.open('https://cal.com/hokagemihir/excel-consult')}
                  className="w-full bg-indigo-600 dark:bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Book Consultation
                </button>
              </div>
            </div>

            {/* Jyotish */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Stars className="w-5 h-5" />
                  Jyotish (Vaidic astrology)
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Jyoti means light and Jyotish is the light that guides. It is considered the first Vedanga (limb of Vedas) 
                  and the first principle for understanding the Vedas and life. Since childhood I had a fascination towards 
                  this ancient teaching that helps people navigate the highs and lows of living.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  I have successfully completed the Astromani program under Shri Alok Khandelwal at Asttrolok institute.
                </p>
                <button 
                  onClick={() => window.open('https://cal.com/hokagemihir/30')}
                  className="w-full bg-indigo-600 dark:bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Book Reading
                </button>
              </div>
            </div>

            {/* Marma */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Waves className="w-5 h-5" />
                  Marma
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Varmalogy is a systematic study of vital points (varmams) on human body. The vital points are located 
                  on nerves, nerve joints, bones, muscles, ligaments and internal organs. Right or wrong vibration of 
                  the vital points will either promote or impair health.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  This ancient practice gives surprisingly good results in just couple of sessions lasting not more than 10-15 mins.
                </p>
                <button 
                  onClick={() => window.open('https://cal.com/hokagemihir/marma-appointment')}
                  className="w-full bg-indigo-600 dark:bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Book Session
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 dark:text-gray-100">About Me</h2>
          <div className="bg-white dark:bg-gray-800/50 rounded-lg shadow-md p-6">
            <p className="text-gray-600 dark:text-gray-200 leading-relaxed">
              Your typical city bred, corporate employee with a varied experience in the finance field. With a bachelors 
              in commerce and MBA in Finance, I have been pursuing a work journey that aligns with my expertise. Aside 
              from work, I am also a certified marma practitioner and an astrologer in training. I have a certain love 
              of Microsoft Excel which I enjoy sharing with others to make life with Excel a much better experience.
            </p>
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 dark:text-gray-100">Career Journey</h2>
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800/50 rounded-lg shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-bold dark:text-gray-100">Redington Ltd - Program Manager Cloud Business</h3>
                <p className="text-gray-500 dark:text-gray-300 mb-4">2022-Present</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-200">
                  <li>Manage P&L for Cloud Business including AWS, Microsoft, and Google products</li>
                  <li>Track vendor schemes and programs, calculate estimated income</li>
                  <li>Establish systems and processes to enhance efficiency</li>
                  <li>Develop user-friendly, Excel-based program trackers</li>
                </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800/50 rounded-lg shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-bold dark:text-gray-100">Adani Ports & SEZ - Financial Planning & Analysis Manager</h3>
                <p className="text-gray-500 dark:text-gray-300 mb-4">2016-2022</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-200">
                  <li>Led MIS Reporting activities and analytical reports</li>
                  <li>Automated reports for better expense tracking</li>
                  <li>Prepared annual administrative costs budgets</li>
                  <li>Led UAT team for G-suite implementation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-200">© {new Date().getFullYear()} Mihir Chavan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;