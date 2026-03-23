import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-4 sm:px-6 pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-24 lg:pb-32">
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gray-100 text-xs sm:text-sm mb-6 sm:mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-gray-700">Crush LinkedIn Limits 100% Safe & Fast</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl text-black mb-4 sm:mb-6 tracking-tight px-2">
            LinkedIn outreach that actually converts
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
            The only platform combining powerful automation with done-with-you agency support. Get the tool AND the expertise to launch campaigns that convert.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-black text-white hover:bg-black/90 text-base px-8 h-12"
              asChild
            >
              <a href="https://tidycal.com/srikar/outreach-with-hma-product-demo" target="_blank" rel="noopener noreferrer">
                Book a call
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="text-base px-8 h-12 border-gray-300"
            >
              Watch demo
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Quick onboarding</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>LinkedIn + Email Automation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>AI Personalisation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
        
        {/* Dashboard preview mockup */}
        <div className="mt-12 sm:mt-16 lg:mt-20 mx-auto max-w-6xl">
          <div className="relative rounded-xl border border-gray-200 shadow-2xl bg-white overflow-hidden">
            <div className="bg-gradient-to-r from-gray-900 to-black px-3 sm:px-6 py-3 sm:py-4 flex items-center justify-between border-b border-gray-700">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex gap-1 sm:gap-1.5">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-white font-semibold text-xs sm:text-base">Multi-Channel Automation Flow</div>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-green-500"></span>
                <span className="text-green-400 text-xs sm:text-sm">Live</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6 lg:p-12 relative overflow-hidden">
              {/* Static background pattern */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
                  backgroundSize: "50px 50px"
                }}
              />

              <div className="relative">
                {/* Main Flow Container - Redesigned with dual paths */}
                <div className="flex flex-col items-center gap-8">
                  
                  {/* Campaign Start Button */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl shadow-lg text-center"
                  >
                    <div className="flex items-center gap-2 justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="font-semibold">Campaign Start</span>
                    </div>
                  </motion.div>

                  {/* Vertical connector */}
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 24 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                    className="w-0.5 bg-gradient-to-b from-purple-600 to-blue-500"
                  />
                  
                  {/* TOP: LinkedIn Starting Point */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="relative w-full max-w-md"
                  >
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-2xl blur-xl" />
                    <div className="relative bg-white rounded-xl p-6 shadow-lg border-2 border-blue-500">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-[#0077B5] flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </div>
                        <div>
                          <div className="font-bold text-lg">LinkedIn Outreach</div>
                          <div className="text-sm text-gray-500">Connection Requests</div>
                        </div>
                      </div>

                      {/* LinkedIn requests animation */}
                      <div className="space-y-2">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 + i * 0.2, duration: 0.5 }}
                            className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg border border-blue-200"
                          >
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-300 to-gray-400" />
                            <div className="flex-1">
                              <div className="text-sm font-medium">Prospect {i + 1}</div>
                              <div className="text-xs text-gray-500">Request sent</div>
                            </div>
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </motion.div>
                        ))}
                      </div>

                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.7, type: "spring", stiffness: 200 }}
                        className="mt-4 text-center bg-blue-600 text-white py-2 rounded-lg font-semibold"
                      >
                        48 Hour Wait Timer ⏰
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Flowing line down to decision */}
                  <div className="relative w-1 h-12">
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                  </div>

                  {/* CENTER: Enhanced Decision Diamond */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: 2.3, type: "spring", stiffness: 150 }}
                    className="relative"
                    style={{ transform: "rotate(0deg)" }}
                  >
                    <div className="relative w-32 h-32 flex items-center justify-center">
                      {/* Diamond shape */}
                      <div className="absolute inset-0 rotate-45 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-2xl">
                        <motion.div
                          animate={{ opacity: [0.3, 0.5, 0.3] }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className="absolute inset-0 bg-white rounded-xl"
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="relative z-10 text-center bg-white rounded-lg p-3 shadow-lg border-2 border-purple-500">
                        <div className="font-bold text-sm mb-0.5">Smart Router</div>
                        <div className="text-[10px] text-gray-500">AI-powered logic</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* BRANCHING PATHS */}
                  <div className="relative w-full">
                    {/* Split connector visualization */}
                    <svg className="absolute left-1/2 top-0 -translate-x-1/2 w-full h-32" viewBox="0 0 800 100">
                      <motion.path
                        d="M 400 0 L 400 30 Q 400 50 420 60 L 600 100"
                        stroke="url(#gradient1)"
                        strokeWidth="3"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 2.7, duration: 1, repeat: Infinity, repeatDelay: 8 }}
                      />
                      <motion.path
                        d="M 400 0 L 400 30 Q 400 50 380 60 L 200 100"
                        stroke="url(#gradient2)"
                        strokeWidth="3"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 2.7, duration: 1, repeat: Infinity, repeatDelay: 8 }}
                      />
                      <defs>
                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#10B981" />
                          <stop offset="100%" stopColor="#059669" />
                        </linearGradient>
                        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#EF4444" />
                          <stop offset="100%" stopColor="#DC2626" />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Two outcome paths */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-32">
                      
                      {/* LEFT PATH: Connection Accepted → LinkedIn Conversation */}
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 3.3 }}
                        className="relative"
                      >
                        {/* Success badge */}
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 3.1, type: "spring" }}
                          className="absolute -top-6 left-1/2 -translate-x-1/2 bg-green-500 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg z-10"
                        >
                          ✓ Accepted (30%)
                        </motion.div>

                        <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl" />
                        <div className="relative bg-white rounded-xl p-4 sm:p-6 shadow-lg border-2 border-green-500">
                          <div className="flex items-center gap-2 sm:gap-3 mb-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                              </svg>
                            </div>
                            <div>
                              <div className="font-bold text-base sm:text-lg">LinkedIn Chat</div>
                              <div className="text-xs sm:text-sm text-gray-500">Direct Conversation</div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            {[
                              { delay: 3.5, msg: "Thanks for connecting!" },
                              { delay: 3.8, msg: "Book a call to discuss?" },
                            ].map((chat, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: chat.delay, duration: 0.5 }}
                                className="bg-green-50 p-2 sm:p-3 rounded-lg border border-green-200"
                              >
                                <div className="text-xs sm:text-sm">{chat.msg}</div>
                                <div className="text-xs text-gray-500 mt-1">Via LinkedIn</div>
                              </motion.div>
                            ))}
                          </div>

                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 4.3, duration: 0.5 }}
                            className="mt-4 text-center bg-gradient-to-r from-green-600 to-emerald-600 text-white py-2 rounded-lg font-semibold text-sm"
                          >
                            🔥 Engaged Lead
                          </motion.div>
                        </div>
                      </motion.div>

                      {/* RIGHT PATH: No Reply → Email Campaign */}
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 3.3 }}
                        className="relative"
                      >
                        {/* No reply badge */}
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 3.1, type: "spring" }}
                          className="absolute -top-6 left-1/2 -translate-x-1/2 bg-red-500 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg z-10"
                        >
                          ✗ No Reply (70%)
                        </motion.div>

                        <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl" />
                        <div className="relative bg-white rounded-xl p-4 sm:p-6 shadow-lg border-2 border-purple-500">
                          <div className="flex items-center gap-2 sm:gap-3 mb-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
                              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <div>
                              <div className="font-bold text-base sm:text-lg">Email Campaign</div>
                              <div className="text-xs sm:text-sm text-gray-500">Auto-Triggered</div>
                            </div>
                          </div>

                          {/* Email sequence animation */}
                          <div className="space-y-2">
                            {[
                              { delay: 3.5, label: "Lead Magnet", status: "📄 Shared" },
                              { delay: 3.8, label: "Follow-up", status: "⏰ Queue" },
                            ].map((email, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: email.delay, duration: 0.5 }}
                                className="relative p-2 sm:p-3 rounded-lg border-2 border-purple-300 bg-purple-50 overflow-hidden"
                              >
                                <div className="relative flex items-center justify-between">
                                  <div>
                                    <div className="text-xs sm:text-sm font-semibold">{email.label}</div>
                                    <div className="text-xs text-gray-600">Personalized</div>
                                  </div>
                                  <div className="text-xs font-medium bg-white px-2 py-1 rounded shadow-sm">
                                    {email.status}
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </div>

                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 4.3, duration: 0.5 }}
                            className="mt-4 text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg font-semibold text-sm"
                          >
                            🚀 Campaign Active
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Bottom stats bar */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 4.5 }}
                  className="mt-8 sm:mt-12 bg-black text-white rounded-xl p-4 sm:p-6 shadow-2xl"
                >
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center">
                    <div>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 4.7, type: "spring" }}
                        className="text-2xl sm:text-3xl font-bold text-blue-400"
                      >
                        100+
                      </motion.div>
                      <div className="text-xs sm:text-sm text-gray-400 mt-1">Requests/Day</div>
                    </div>
                    <div>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 4.9, type: "spring" }}
                        className="text-2xl sm:text-3xl font-bold text-purple-400"
                      >
                        Auto
                      </motion.div>
                      <div className="text-xs sm:text-sm text-gray-400 mt-1">Smart Routing</div>
                    </div>
                    <div>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 5.1, type: "spring" }}
                        className="text-2xl sm:text-3xl font-bold text-pink-400"
                      >
                        5x
                      </motion.div>
                      <div className="text-xs sm:text-sm text-gray-400 mt-1">More Replies</div>
                    </div>
                    <div>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 5.3, type: "spring" }}
                        className="text-2xl sm:text-3xl font-bold text-green-400"
                      >
                        0
                      </motion.div>
                      <div className="text-xs sm:text-sm text-gray-400 mt-1">Manual Work</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}