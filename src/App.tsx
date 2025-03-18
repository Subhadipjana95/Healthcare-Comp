import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthForm } from './components/auth/auth-form';
import { UserProfile } from './components/profile/user-profile';
import { EmergencyServices } from './components/profile/emergency-services';
import { HealthDocuments } from './components/profile/health-documents';
import { MedicationReminder } from './components/profile/medication-reminder';
import { RightNow } from './components/emergency/right-now';
import { MentalHealth } from './components/profile/mental-health';
import { Home } from './components/home';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Link to="/" className="flex items-center space-x-2 hover-scale transition-all">
                    <span className="text-3xl text-primary">🏥</span>
                    <span className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">HealthCare Companion</span>
                  </Link>
                </div>
                <div className="hidden sm:ml-2 sm:flex sm:space-x-6 min-w-[750px]">
                  <Link to="/profile" className="text-gray-900 inline-flex items-center px-2 pt-1 text-sm font-medium border-b-2 border-transparent hover:border-primary hover:text-primary transition-all duration-200 transform hover:scale-105 group">
                    <span className="mr-2 text-2xl group-hover:scale-110 transition-transform duration-200 hover:rotate-6">👤</span> Profile
                  </Link>
                  <Link to="/medications" className="text-gray-900 inline-flex items-center px-2 pt-1 text-sm font-medium border-b-2 border-transparent hover:border-primary hover:text-primary transition-all duration-200 transform hover:scale-105 group">
                    <span className="mr-2 text-2xl group-hover:scale-110 transition-transform duration-200 hover:rotate-6">💊</span> Medications
                  </Link>
                  <Link to="/mental-health" className="text-gray-900 inline-flex items-center px-2 pt-1 text-sm font-medium border-b-2 border-transparent hover:border-primary hover:text-primary transition-all duration-200 transform hover:scale-105 group">
                    <span className="mr-2 text-2xl group-hover:scale-110 transition-transform duration-200 hover:rotate-6">🧠</span> Mental Health
                  </Link>
                  <Link to="/emergency" className="text-gray-900 inline-flex items-center px-2 pt-1 text-sm font-medium border-b-2 border-transparent hover:border-primary hover:text-primary transition-all duration-200 transform hover:scale-105 group">
                    <span className="mr-2 text-2xl group-hover:scale-110 transition-transform duration-200 hover:rotate-6">🚑</span> Right Now 
                  </Link>
                  <Link to="/right-now" className="text-gray-900 inline-flex items-center px-2 pt-1 text-sm font-medium border-b-2 border-transparent hover:border-primary hover:text-primary transition-all duration-200 transform hover:scale-105 group">
                    <span className="mr-2 text-2xl group-hover:scale-110 transition-transform duration-200 hover:rotate-6">🚨</span> Emergency
                  </Link>
                  <Link to="/documents" className="text-gray-900 inline-flex items-center px-2 pt-1 text-sm font-medium border-b-2 border-transparent hover:border-primary hover:text-primary transition-all duration-200 transform hover:scale-105 group">
                    <span className="mr-2 text-2xl group-hover:scale-110 transition-transform duration-200 hover:rotate-6">📄</span> Documents
                  </Link>
                </div>
              </div>
              <div className="flex items-center pr-2">
                <Link to="/login" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-all hover-scale">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<AuthForm mode="login" />} />
            <Route path="/signup" element={<AuthForm mode="signup" />} />
            <Route path="/profile" element={<UserProfile user={{ name: "John Doe", email: "john@example.com" }} />} />
            <Route path="/emergency" element={<EmergencyServices />} />
            <Route path="/documents" element={<HealthDocuments />} />
            <Route path="/medications" element={<MedicationReminder />} />
            <Route path="/right-now" element={<RightNow />} />
            <Route path="/mental-health" element={<MentalHealth />} />
          </Routes>
        </main>

        <footer className="bg-white border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">🏥</span>
                  <span className="text-xl font-bold text-primary">HealthCare Companion</span>
                </div>
                <p className="text-sm text-gray-600">Your trusted healthcare management platform, making healthcare accessible and organized.</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Quick Links</h3>
                <ul className="space-y-3">
                  <li><Link to="/profile" className="text-base text-gray-600 hover:text-primary">Profile</Link></li>
                  <li><Link to="/emergency" className="text-base text-gray-600 hover:text-primary">Emergency Services</Link></li>
                  <li><Link to="/documents" className="text-base text-gray-600 hover:text-primary">Health Documents</Link></li>
                  <li><Link to="/medications" className="text-base text-gray-600 hover:text-primary">Medication Reminders</Link></li>
                  <li><Link to="/mental-health" className="text-base text-gray-600 hover:text-primary">Mental Health Support</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Support</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-base text-gray-600 hover:text-primary">Help Center</a></li>
                  <li><a href="#" className="text-base text-gray-600 hover:text-primary">Privacy Policy</a></li>
                  <li><a href="#" className="text-base text-gray-600 hover:text-primary">Terms of Service</a></li>
                  <li><a href="#" className="text-base text-gray-600 hover:text-primary">Contact Us</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Connect With Us</h3>
                <div className="flex space-x-6">
                  <a href="#" className="text-gray-600 hover:text-primary text-2xl">📱</a>
                  <a href="#" className="text-gray-600 hover:text-primary text-2xl">💬</a>
                  <a href="#" className="text-gray-600 hover:text-primary text-2xl">📧</a>
                  <a href="#" className="text-gray-600 hover:text-primary text-2xl">📸</a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-center text-base text-gray-600">&copy; {new Date().getFullYear()} HealthCare Companion. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
