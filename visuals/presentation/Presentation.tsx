import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, BarChart2, Users, Database, Server, Shield, Zap, Download } from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  // Slide components
  const TitleSlide = () => (
    <div className="flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold text-blue-800 mb-4">Dr. Burger Digital Transformation Strategy</h1>
      <h2 className="text-2xl text-blue-600 mb-8">Building the Next-Generation Restaurant Experience</h2>
      <p className="text-xl mb-2">March 20, 2025</p>
      <p className="text-lg text-gray-600">Presented by: Digital Transformation Team</p>
    </div>
  );

  const ExecutiveOverviewSlide = () => (
    <div className="flex flex-col">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">Executive Overview</h2>
      <div className="bg-blue-50 p-6 rounded-lg mb-6">
        <ul className="space-y-4 text-lg">
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">•</span>
            <span>Comprehensive 24-month transformation roadmap</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">•</span>
            <span>From traditional QSR to digital food service platform</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">•</span>
            <span>Four strategic phases: Foundation → Expansion → Integration → Innovation</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">•</span>
            <span>Key outcomes: Revenue growth, customer engagement, operational efficiency</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">•</span>
            <span>Total investment: $26M with expected 3-year ROI of 165%</span>
          </li>
        </ul>
      </div>
    </div>
  );

  const VisionSlide = () => (
    <div className="flex flex-col">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">Digital Transformation Vision</h2>
      <div className="bg-blue-50 p-6 rounded-lg mb-6">
        <h3 className="text-xl font-semibold mb-4">Vision Statement</h3>
        <p className="text-lg italic mb-6 border-l-4 border-blue-500 pl-4">
          "To transform Dr. Burger from a traditional fast-food chain into a digitally-enabled food service platform that delivers personalized experiences, creates new revenue streams, and builds deeper customer relationships through innovative technology integration."
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">Guiding Principles</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <p className="font-medium text-blue-700">Customer-centric design</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <p className="font-medium text-blue-700">Data-driven decision making</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <p className="font-medium text-blue-700">Platform business model</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <p className="font-medium text-blue-700">Seamless omnichannel experiences</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <p className="font-medium text-blue-700">Operational excellence through technology</p>
          </div>
        </div>
      </div>
    </div>
  );

  const ChallengesOpportunitiesSlide = () => (
    <div className="flex flex-col">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">Business Challenges & Opportunities</h2>
      <div className="grid grid-cols-2 gap-8">
        <div className="bg-red-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-red-700 mb-4">Challenges</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-2">•</span>
              <span>Growing competition from digital-first delivery platforms</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-2">•</span>
              <span>Changing consumer expectations for convenience and personalization</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-2">•</span>
              <span>Pressure on traditional revenue streams and margins</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-2">•</span>
              <span>Legacy systems limiting business agility</span>
            </li>
          </ul>
        </div>
        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-green-700 mb-4">Opportunities</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              <span>Expand digital ordering and engagement channels</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              <span>Create subscription and platform revenue models</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              <span>Build deeper customer relationships through personalization</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              <span>Optimize operations through digital automation</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              <span>Enable rapid innovation and market adaptation</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  const DigitalMaturitySlide = () => (
    <div className="flex flex-col">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">Digital Maturity Assessment</h2>
      <div className="flex mb-6">
        <div className="flex-1 pr-8">
          <p className="text-lg mb-4">
            Current state: <span className="font-medium text-orange-500">Level 2 (Emerging)</span> on 5-point scale
          </p>
          <p className="text-lg mb-4">
            Target state: <span className="font-medium text-green-600">Level 4 (Leading)</span> within 24 months
          </p>
          <p className="text-lg mb-4">
            Key gaps in data capabilities, technology architecture, and digital organization
          </p>
          <p className="text-lg">
            Foundation for measuring transformation progress
          </p>
        </div>
        <div className="flex-1">
          <div className="bg-white rounded-lg p-4 shadow border border-gray-200">
            <h3 className="text-center text-lg font-medium mb-4">Maturity by Dimension</h3>
            <div className="space-y-3">
              {[
                { name: "Customer Experience", current: 2, target: 4 },
                { name: "Operations & Supply Chain", current: 2, target: 4 },
                { name: "Data & Analytics", current: 1, target: 4 },
                { name: "Technology Architecture", current: 2, target: 4 },
                { name: "Organization & Culture", current: 2, target: 4 },
                { name: "Innovation & Strategy", current: 2, target: 4 }
              ].map((dimension, i) => (
                <div key={i} className="flex items-center">
                  <span className="w-48 text-sm">{dimension.name}</span>
                  <div className="flex-1 h-6 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-orange-400 rounded-l-full" 
                      style={{ width: `${dimension.current * 20}%` }}
                    ></div>
                  </div>
                  <div className="w-6"></div>
                  <div className="flex-1 h-6 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-green-500 rounded-l-full" 
                      style={{ width: `${dimension.target * 20}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-4 text-sm text-gray-600">
              <div className="flex items-center mr-4">
                <div className="w-3 h-3 rounded-full bg-orange-400 mr-1"></div>
                <span>Current</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
                <span>Target</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const StrategicPillarsSlide = () => (
    <div className="flex flex-col">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">Four Strategic Pillars</h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-blue-50 p-5 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-700 mb-3 flex items-center">
            <Server className="mr-2" size={20} />
            Platform-Based Revenue Model
          </h3>
          <ul className="pl-4 space-y-2">
            <li>"Dr. Burger Prime" subscription program</li>
            <li>Marketplace integration with complementary vendors</li>
            <li>Ethical data monetization</li>
            <li>Dynamic pricing optimization</li>
          </ul>
        </div>
        <div className="bg-purple-50 p-5 rounded-lg">
          <h3 className="text-xl font-semibold text-purple-700 mb-3 flex items-center">
            <Users className="mr-2" size={20} />
            Customer Experience Enhancement
          </h3>
          <ul className="pl-4 space-y-2">
            <li>AI-powered personalization</li>
            <li>Gamified loyalty program</li>
            <li>Omnichannel engagement</li>
            <li>Community building features</li>
          </ul>
        </div>
        <div className="bg-green-50 p-5 rounded-lg">
          <h3 className="text-xl font-semibold text-green-700 mb-3 flex items-center">
            <Zap className="mr-2" size={20} />
            Operational Transformation
          </h3>
          <ul className="pl-4 space-y-2">
            <li>Digital-first supply chain</li>
            <li>Flexible fulfillment options</li>
            <li>Dark kitchen implementation</li>
            <li>Autonomous operations</li>
          </ul>
        </div>
        <div className="bg-orange-50 p-5 rounded-lg">
          <h3 className="text-xl font-semibold text-orange-700 mb-3 flex items-center">
            <Database className="mr-2" size={20} />
            Strategic Partnership Ecosystem
          </h3>
          <ul className="pl-4 space-y-2">
            <li>Technology integration partners</li>
            <li>Entertainment & lifestyle partnerships</li>
            <li>Local supplier network</li>
            <li>Open API ecosystem</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const ImplementationRoadmapSlide = () => (
    <div className="flex flex-col">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">Implementation Roadmap</h2>
      <p className="text-lg mb-4">24-month phased approach</p>
      
      <div className="relative mb-8">
        <div className="absolute top-7 left-0 w-full h-2 bg-gray-200 z-0"></div>
        
        {/* Phase Circles and Labels */}
        <div className="flex justify-between relative z-10">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
              Phase 1
            </div>
            <p className="mt-2 text-blue-800 font-medium">Foundation</p>
            <p className="text-sm text-gray-600">Months 1-6</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-purple-600 text-white flex items-center justify-center font-semibold">
              Phase 2
            </div>
            <p className="mt-2 text-purple-800 font-medium">Expansion</p>
            <p className="text-sm text-gray-600">Months 7-12</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center font-semibold">
              Phase 3
            </div>
            <p className="mt-2 text-green-800 font-medium">Integration</p>
            <p className="text-sm text-gray-600">Months 13-18</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-orange-600 text-white flex items-center justify-center font-semibold">
              Phase 4
            </div>
            <p className="mt-2 text-orange-800 font-medium">Innovation</p>
            <p className="text-sm text-gray-600">Months 19-24</p>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-xl font-medium mb-3 text-blue-800">Key Milestones</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 p-3 rounded border border-blue-200">
            <p className="font-medium text-blue-700">Mobile app redesign</p>
            <p className="text-sm text-gray-600">Month 3</p>
          </div>
          <div className="bg-purple-50 p-3 rounded border border-purple-200">
            <p className="font-medium text-purple-700">Subscription launch</p>
            <p className="text-sm text-gray-600">Month 9</p>
          </div>
          <div className="bg-green-50 p-3 rounded border border-green-200">
            <p className="font-medium text-green-700">Marketplace platform</p>
            <p className="text-sm text-gray-600">Month 15</p>
          </div>
          <div className="bg-orange-50 p-3 rounded border border-orange-200">
            <p className="font-medium text-orange-700">Autonomous operations</p>
            <p className="text-sm text-gray-600">Month 22</p>
          </div>
        </div>
      </div>
    </div>
  );

  const Phase1Slide = () => (
    <div className="flex flex-col">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">Phase 1 - Foundation (Months 1-6)</h2>
      
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="space-y-4">
          <div className="bg-blue-50 p-5 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">Key Initiatives</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <span>Mobile app redesign with loyalty integration</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <span>API gateway implementation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <span>Customer data platform</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <span>Real-time inventory tracking</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <span>Digital skills development</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Budget Allocation</h3>
            <div className="flex items-center">
              <div className="w-20 h-20 rounded-full bg-blue-100 border-4 border-blue-500 flex items-center justify-center text-xl font-bold text-blue-700">
                $3.8M
              </div>
              <div className="ml-4 flex-1">
                <div className="w-full h-6 bg-gray-200 rounded-full">
                  <div className="h-6 bg-blue-500 rounded-full" style={{ width: '15%' }}></div>
                </div>
                <div className="flex justify-between mt-1 text-sm">
                  <span>15% of total budget</span>
                  <span>$3.8M / $26.0M</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col">
          <div className="bg-white p-5 rounded-lg shadow border border-gray-200 mb-4">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Key Deliverables</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <span className="text-lg font-bold">30%</span>
                </div>
                <div className="ml-4">
                  <p className="font-medium">Enhanced mobile app</p>
                  <p className="text-sm text-gray-600">Improved experience</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <span className="text-lg font-bold">25%</span>
                </div>
                <div className="ml-4">
                  <p className="font-medium">Digital loyalty program</p>
                  <p className="text-sm text-gray-600">Customer adoption</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <span className="text-lg font-bold">✓</span>
                </div>
                <div className="ml-4">
                  <p className="font-medium">Centralized customer data platform</p>
                  <p className="text-sm text-gray-600">Unified customer view</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <span className="text-lg font-bold">50%</span>
                </div>
                <div className="ml-4">
                  <p className="font-medium">Digital skills training</p>
                  <p className="text-sm text-gray-600">Staff trained</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-medium text-blue-800 mb-2">Digital Maturity Progress</h3>
            <div className="mb-2 text-sm">End of Phase 1 Target:</div>
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="w-32 text-sm">Customer Experience</span>
                <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-l-full" style={{ width: '60%' }}></div>
                </div>
                <span className="ml-2 text-sm font-medium">L3</span>
              </div>
              <div className="flex items-center">
                <span className="w-32 text-sm">Data & Analytics</span>
                <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-l-full" style={{ width: '40%' }}></div>
                </div>
                <span className="ml-2 text-sm font-medium">L2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const Phase2Slide = () => (
    <div className="flex flex-col">
      <h2 className="text-3xl font-bold text-purple-800 mb-6">Phase 2 - Expansion (Months 7-12)</h2>
      
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="space-y-4">
          <div className="bg-purple-50 p-5 rounded-lg">
            <h3 className="text-xl font-semibold text-purple-700 mb-3">Key Initiatives</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-purple-600 font-bold mr-2">•</span>
                <span>AI-driven personalization engine</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 font-bold mr-2">•</span>
                <span>"Dr. Burger Prime" subscription launch</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 font-bold mr-2">•</span>
                <span>Flexible fulfillment implementation</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 font-bold mr-2">•</span>
                <span>Advanced analytics platform</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 font-bold mr-2">•</span>
                <span>Agile organizational scaling</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Budget Allocation</h3>
            <div className="flex items-center">
              <div className="w-20 h-20 rounded-full bg-purple-100 border-4 border-purple-500 flex items-center justify-center text-xl font-bold text-purple-700">
                $7.2M
              </div>
              <div className="ml-4 flex-1">
                <div className="w-full h-6 bg-gray-200 rounded-full">
                  <div className="h-6 bg-purple-500 rounded-full" style={{ width: '28%' }}></div>
                </div>
                <div className="flex justify-between mt-1 text-sm">
                  <span>28% of total budget</span>
                  <span>$7.2M / $26.0M</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col">
          <div className="bg-white p-5 rounded-lg shadow border border-gray-200 mb-4">
            <h3 className="text-xl font-semibold text-purple-800 mb-4">Key Deliverables</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                  <span className="text-lg font-bold">20%</span>
                </div>
                <div className="ml-4">
                  <p className="font-medium">Personalization impact</p>
                  <p className="text-sm text-gray-600">Increased conversion</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                  <span className="text-lg font-bold">5%</span>
                </div>
                <div className="ml-4">
                  <p className="font-medium">Subscription service</p>
                  <p className="text-sm text-gray-600">Customer adoption</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                  <span className="text-lg font-bold">30%</span>
                </div>
                <div className="ml-4">
                  <p className="font-medium">Multiple fulfillment options</p>
                  <p className="text-sm text-gray-600">Wait time reduction</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                  <span className="text-lg font-bold">60%</span>
                </div>
                <div className="ml-4">
                  <p className="font-medium">Analytics platform</p>
                  <p className="text-sm text-gray-600">Decision-maker adoption</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-medium text-purple-800 mb-2">Digital Maturity Progress</h3>
            <div className="mb-2 text-sm">End of Phase 2 Target:</div>
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="w-32 text-sm">Customer Experience</span>
                <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 rounded-l-full" style={{ width: '70%' }}></div>
                </div>
                <span className="ml-2 text-sm font-medium">L3.5</span>
              </div>
              <div className="flex items-center">
                <span className="w-32 text-sm">Data & Analytics</span>
                <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 rounded-l-full" style={{ width: '60%' }}></div>
                </div>
                <span className="ml-2 text-sm font-medium">L3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const Phase3Slide = () => (
    <div className="flex flex-col">
      <h2 className="text-3xl font-bold text-green-800 mb-6">Phase 3 - Integration (Months 13-18)</h2>
      
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="space-y-4">
          <div className="bg-green-50 p-5 rounded-lg">
            <h3 className="text-xl font-semibold text-green-700 mb-3">Key Initiatives</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">•</span>
                <span>Marketplace platform with third-party vendors</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">•</span>
                <span>Digital supply chain with blockchain traceability</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">•</span>
                <span>Dark kitchen implementation in key markets</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">•</span>
                <span>Partner API ecosystem</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">•</span>
                <span>Digital-first organizational model</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Budget Allocation</h3>
            <div className="flex items-center">
              <div className="w-20 h-20 rounded-full bg-green-100 border-4 border-green-500 flex items-center justify-center text-xl font-bold text-green-700">
                $8.5M
              </div>
              <div className="ml-4 flex-1">
                <div className="w-full h-6 bg-gray-200 rounded-full">
                  <div className="h-6 bg-green-500 rounded-full" style={{ width: '33%' }}></div>
                </div>
                <div className="flex justify-between mt-1 text-sm">
                  <span>33% of total budget</span>
                  <span>$8.5M / $26.0M</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col">
          <div className="bg-white p-5 rounded-lg shadow border border-gray-200 mb-4">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Key Deliverables</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <span className="text-lg font-bold">8%</span>
                </div>
                <div className="ml-4">
                  <p className="font-medium">Marketplace revenue</p>
                  <p className="text-sm text-gray-600">Of total revenue</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <span className="text-lg font-bold">40%</span>
                </div>
                <div className="ml-4">
                  <p className="font-medium">Dark kitchens</p>
                  <p className="text-sm text-gray-600">Higher profit margin</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <span className="text-lg font-bold">✓</span>
                </div>
                <div className="ml-4">
                  <p className="font-medium">End-to-end digital supply chain</p>
                  <p className="text-sm text-gray-600">Full implementation</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <span className="text-lg font-bold">15+</span>
                </div>
                <div className="ml-4">
                  <p className="font-medium">External partner integrations</p>
                  <p className="text-sm text-gray-600">API-driven partnerships</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-medium text-green-800 mb-2">Digital Maturity Progress</h3>
            <div className="mb-2 text-sm">End of Phase 3 Target:</div>
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="w-32 text-sm">Customer Experience</span>
                <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-l-full" style={{ width: '80%' }}></div>
                </div>
                <span className="ml-2 text-sm font-medium">L4</span>
              </div>
              <div className="flex items-center">
                <span className="w-32 text-sm">Data & Analytics</span>
                <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-l-full" style={{ width: '70%' }}></div>
                </div>
                <span className="ml-2 text-sm font-medium">L3.5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const Phase4Slide = () => (
    <div className="flex flex-col">
      <h2 className="text-3xl font-bold text-orange-800 mb-6">Phase 4 - Innovation (Months 19-24)</h2>
      
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="space-y-4">
          <div className="bg-orange-50 p-5 rounded-lg">
            <h3 className="text-xl font-semibold text-orange-700 mb-3">Key Initiatives</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-orange-600 font-bold mr-2">•</span>
                <span>Autonomous kitchen operations</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 font-bold mr-2">•</span>
                <span>Edge computing implementation</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 font-bold mr-2">•</span>
                <span>Advanced data monetization</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 font-bold mr-2">•</span>
                <span>Predictive experience design</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 font-bold mr-2">•</span>
                <span>Industry digital leadership</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Budget Allocation</h3>
            <div className="flex items-center">
              <div className="w-20 h-20 rounded-full bg-orange-100 border-4 border-orange-500 flex items-center justify-center text-xl font-bold text-orange-700">
                $6.5M
              </div>
              <div className="ml-4 flex-1">
                <div className="w-full h-6 bg-gray-200 rounded-full">
                  <div className="h-6 bg-orange-500 rounded-full" style={{ width: '25%' }}></div>
                </div>
                <div className="flex justify-between mt-1 text-sm">
                  <span>25% of total budget</span>
                  <span>$6.5M / $26.0M</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col">
          <div className="bg-white p-5 rounded-lg shadow border border-gray-200 mb-4">
            <h3 className="text-xl font-semibold text-orange-800 mb-4">Key Deliverables</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                  <span className="text-lg font-bold">50%</span>
                </div>
                <div className="ml-4">
                  <p className="font-medium">Core kitchen processes</p>
                  <p className="text-sm text-gray-600">Automated</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                  <span className="text-lg font-bold">3%</span>
                </div>
                <div className="ml-4">
                  <p className="font-medium">Data products</p>
                  <p className="text-sm text-gray-600">Revenue generation</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                  <span className="text-lg font-bold">30%</span>
                </div>
                <div className="ml-4">
                  <p className="font-medium">Predictive experiences</p>
                  <p className="text-sm text-gray-600">Satisfaction increase</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                  <span className="text-lg font-bold">✓</span>
                </div>
                <div className="ml-4">
                  <p className="font-medium">Industry-recognized position</p>
                  <p className="text-sm text-gray-600">Digital leadership</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-orange-50 p-4 rounded-lg">
            <h3 className="font-medium text-orange-800 mb-2">Digital Maturity Progress</h3>
            <div className="mb-2 text-sm">End of Phase 4 Target:</div>
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="w-32 text-sm">Customer Experience</span>
                <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-500 rounded-l-full" style={{ width: '90%' }}></div>
                </div>
                <span className="ml-2 text-sm font-medium">L4.5</span>
              </div>
              <div className="flex items-center">
                <span className="w-32 text-sm">Data & Analytics</span>
                <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-500 rounded-l-full" style={{ width: '80%' }}></div>
                </div>
                <span className="ml-2 text-sm font-medium">L4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const TechnologyArchitectureSlide = () => (
    <div className="flex flex-col">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">Technology Architecture</h2>
      
      <div className="bg-gray-50 p-4 rounded-lg mb-4 relative" style={{ height: "360px" }}>
        {/* Architecture Layers */}
        <div className="absolute bottom-8 left-4 right-4 h-64 flex flex-col">
          {/* Cloud Infrastructure Layer */}
          <div className="bg-blue-100 border-2 border-blue-400 rounded-lg h-12 flex items-center justify-center mb-2 z-10">
            <span className="font-medium text-blue-700">Cloud Infrastructure Layer</span>
          </div>
          
          {/* DevOps & Security Layer */}
          <div className="bg-purple-100 border-2 border-purple-400 rounded-lg h-12 flex items-center justify-center mb-2 z-20">
            <span className="font-medium text-purple-700">DevOps & Security Layer</span>
          </div>
          
          {/* Data Platform Layer */}
          <div className="bg-green-100 border-2 border-green-400 rounded-lg h-12 flex items-center justify-center mb-2 z-30">
            <span className="font-medium text-green-700">Data Platform Layer</span>
          </div>
          
          {/* Integration Layer */}
          <div className="bg-yellow-100 border-2 border-yellow-500 rounded-lg h-12 flex items-center justify-center mb-2 z-40">
            <span className="font-medium text-yellow-700">Integration Layer (APIs & Events)</span>
          </div>
          
          {/* Microservices Layer */}
          <div className="bg-red-100 border-2 border-red-400 rounded-lg h-16 z-50 px-2">
            <div className="text-center mb-1 mt-1">
              <span className="font-medium text-red-700">Microservices Layer</span>
            </div>
            <div className="flex justify-between">
              <div className="bg-white px-2 py-1 rounded text-xs border border-red-300">User</div>
              <div className="bg-white px-2 py-1 rounded text-xs border border-red-300">Order</div>
              <div className="bg-white px-2 py-1 rounded text-xs border border-red-300">Payment</div>
              <div className="bg-white px-2 py-1 rounded text-xs border border-red-300">Inventory</div>
              <div className="bg-white px-2 py-1 rounded text-xs border border-red-300">Loyalty</div>
            </div>
          </div>
          
          {/* Applications Layer */}
          <div className="bg-teal-100 border-2 border-teal-400 rounded-lg h-12 flex items-center justify-center z-60">
            <span className="font-medium text-teal-700">Applications Layer</span>
          </div>
        </div>
        
        {/* User & External Systems */}
        <div className="absolute top-4 left-4 right-4 flex justify-between">
          <div className="bg-orange-100 border-2 border-orange-400 rounded-lg p-2 w-32 text-center">
            <div className="font-medium text-orange-700 text-sm mb-1">Customer Interfaces</div>
            <div className="text-xs text-orange-600">Mobile, Web, Kiosk</div>
          </div>
          
          <div className="bg-orange-100 border-2 border-orange-400 rounded-lg p-2 w-32 text-center">
            <div className="font-medium text-orange-700 text-sm mb-1">External Systems</div>
            <div className="text-xs text-orange-600">Partners, Payment</div>
          </div>
        </div>
        
        {/* Connecting Lines */}
        <div className="absolute top-20 left-1/4 h-40 w-px bg-gray-400"></div>
        <div className="absolute top-20 right-1/4 h-40 w-px bg-gray-400"></div>
        
        {/* Architecture Principles */}
        <div className="absolute bottom-1 left-0 right-0 flex justify-center space-x-2">
          <div className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">Cloud-Native</div>
          <div className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">API-First</div>
          <div className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">Event-Driven</div>
          <div className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">Security by Design</div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-6 mt-2">
        <div>
          <h3 className="text-lg font-medium text-blue-800 mb-2">Core Components</h3>
          <ul className="space-y-1">
            <li className="flex items-center">
              <Server className="text-blue-600 mr-2" size={16} />
              <span>Cloud-native microservices architecture</span>
            </li>
            <li className="flex items-center">
              <Zap className="text-blue-600 mr-2" size={16} />
              <span>API-first integration approach</span>
            </li>
            <li className="flex items-center">
              <Database className="text-blue-600 mr-2" size={16} />
              <span>Data platform for unified analytics</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-medium text-blue-800 mb-2">Key Principles</h3>
          <ul className="space-y-1">
            <li className="flex items-center">
              <Shield className="text-blue-600 mr-2" size={16} />
              <span>Security and compliance by design</span>
            </li>
            <li className="flex items-center">
              <BarChart2 className="text-blue-600 mr-2" size={16} />
              <span>Event-driven communication</span>
            </li>
            <li className="flex items-center">
              <Users className="text-blue-600 mr-2" size={16} />
              <span>DevOps and continuous delivery</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  const FinancialImpactSlide = () => (
    <div className="flex flex-col">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">Financial Impact</h2>
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-medium text-blue-800 mb-2">Revenue Growth</h3>
            <div className="flex items-center">
              <div className="w-24 h-24 rounded-full border-8 border-blue-500 flex items-center justify-center text-2xl font-bold text-blue-700">
                35%
              </div>
              <div className="ml-4">
                <p>Over baseline</p>
                <p className="text-sm text-gray-600">by completion</p>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-medium text-green-800 mb-2">Profit Margin Improvement</h3>
            <div className="flex items-center">
              <div className="w-24 h-24 rounded-full border-8 border-green-500 flex items-center justify-center text-2xl font-bold text-green-700">
                8pts
              </div>
              <div className="ml-4">
                <p>Percentage points</p>
                <p className="text-sm text-gray-600">increased margin</p>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-medium text-purple-800 mb-2">New Revenue Streams</h3>
            <div className="flex items-center">
              <div className="w-24 h-24 rounded-full border-8 border-purple-500 flex items-center justify-center text-2xl font-bold text-purple-700">
                15%
              </div>
              <div className="ml-4">
                <p>Of total revenue</p>
                <p className="text-sm text-gray-600">by completion</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="bg-gray-50 p-5 rounded-lg mb-6">
            <h3 className="text-xl font-medium text-gray-800 mb-4">Investment & Return</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center border-b pb-2">
                <span className="font-medium">Total Investment</span>
                <span className="text-xl font-bold text-blue-700">$26.0M</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span className="font-medium">Expected 3-year ROI</span>
                <span className="text-xl font-bold text-green-600">165%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Breakeven Point</span>
                <span className="text-xl font-bold text-orange-600">Month 30</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="text-xl font-medium text-gray-800 mb-3">Revenue Projection</h3>
            <div className="h-40 relative">
              <div className="absolute inset-0 flex items-end">
                <div className="w-1/4 h-20 bg-blue-200 border-t-4 border-blue-600"></div>
                <div className="w-1/4 h-28 bg-blue-300 border-t-4 border-blue-600"></div>
                <div className="w-1/4 h-32 bg-blue-400 border-t-4 border-blue-600"></div>
                <div className="w-1/4 h-40 bg-blue-500 border-t-4 border-blue-600"></div>
              </div>
              <div className="absolute bottom-0 w-full flex justify-between px-2 text-sm text-gray-600">
                <span>Year 0</span>
                <span>Year 1</span>
                <span>Year 2</span>
                <span>Year 3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const KPISlide = () => (
    <div className="flex flex-col">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">Key Performance Indicators</h2>
      
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-blue-50 p-5 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-700 mb-4 flex items-center">
            <Users className="mr-2" size={20} />
            Customer Experience
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Digital Channel Adoption</span>
                <span className="text-sm font-medium">65% Target</span>
              </div>
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 rounded-l-full" style={{ width: '65%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Mobile App Rating</span>
                <span className="text-sm font-medium">4.5+/5.0</span>
              </div>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star, i) => (
                  <svg key={i} className={`w-5 h-5 ${i < 4.5 ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Customer Satisfaction</span>
                <span className="text-sm font-medium">85%+ Target</span>
              </div>
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 rounded-l-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Personalization Impact</span>
                <span className="text-sm font-medium">25% Higher</span>
              </div>
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 rounded-l-full" style={{ width: '25%' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-green-50 p-5 rounded-lg">
          <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center">
            <Zap className="mr-2" size={20} />
            Operations & Efficiency
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Digital Process Automation</span>
                <span className="text-sm font-medium">70% Target</span>
              </div>
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-green-600 rounded-l-full" style={{ width: '70%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Food Waste Reduction</span>
                <span className="text-sm font-medium">Less than 5%</span>
              </div>
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-green-600 rounded-l-full" style={{ width: '95%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Order Fulfillment Accuracy</span>
                <span className="text-sm font-medium">99%+ Target</span>
              </div>
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-green-600 rounded-l-full" style={{ width: '99%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Supply Chain Visibility</span>
                <span className="text-sm font-medium">95% Target</span>
              </div>
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-green-600 rounded-l-full" style={{ width: '95%' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-purple-50 p-5 rounded-lg">
          <h3 className="text-xl font-semibold text-purple-700 mb-4 flex items-center">
            <BarChart2 className="mr-2" size={20} />
            Digital Business Impact
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Digital Channel Revenue</span>
                <span className="text-sm font-medium">50%+ Target</span>
              </div>
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-purple-600 rounded-l-full" style={{ width: '50%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">New Digital Revenue</span>
                <span className="text-sm font-medium">15% Target</span>
              </div>
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-purple-600 rounded-l-full" style={{ width: '15%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Digital Operating Efficiency</span>
                <span className="text-sm font-medium">30% Target</span>
              </div>
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-purple-600 rounded-l-full" style={{ width: '30%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Speed to Market</span>
                <span className="text-sm font-medium">75% Reduction</span>
              </div>
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-purple-600 rounded-l-full" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const OrganizationSlide = () => (
    <div className="flex flex-col">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">Organization & Governance</h2>
      
      <div className="grid grid-cols-2 gap-6">
        <div>
          <div className="bg-blue-50 p-5 rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">Transformation Office Structure</h3>
            
            <div className="relative pt-6">
              {/* Executive Level */}
              <div className="flex justify-center mb-6">
                <div className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center w-64">
                  <p className="font-medium">Executive Steering Committee</p>
                </div>
              </div>
              
              {/* Connecting Line */}
              <div className="absolute top-14 left-1/2 w-0.5 h-6 bg-blue-400"></div>
              
              {/* Middle Level */}
              <div className="flex justify-center mb-6">
                <div className="bg-blue-500 text-white px-4 py-2 rounded-lg text-center w-64">
                  <p className="font-medium">Digital Transformation Office</p>
                </div>
              </div>
              
              {/* Connecting Lines to workstreams */}
              <div className="flex justify-center relative mb-4">
                <div className="absolute top-0 left-1/4 w-1/2 h-0.5 bg-blue-400"></div>
                <div className="absolute top-0 left-1/4 w-0.5 h-6 bg-blue-400"></div>
                <div className="absolute top-0 left-1/2 w-0.5 h-6 bg-blue-400"></div>
                <div className="absolute top-0 left-3/4 w-0.5 h-6 bg-blue-400"></div>
              </div>
              
              {/* Workstream Level */}
              <div className="flex justify-between mb-2">
                <div className="bg-blue-400 text-white px-3 py-1.5 rounded text-center w-28 text-sm">
                  <p>Workstream Teams</p>
                </div>
                <div className="bg-blue-400 text-white px-3 py-1.5 rounded text-center w-28 text-sm">
                  <p>Workstream Teams</p>
                </div>
                <div className="bg-blue-400 text-white px-3 py-1.5 rounded text-center w-28 text-sm">
                  <p>Workstream Teams</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-50 p-5 rounded-lg">
            <h3 className="text-xl font-semibold text-purple-700 mb-4">Digital Talent Strategy</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white p-3 rounded shadow-sm border border-purple-100">
                <p className="font-medium text-purple-800">New Digital Roles</p>
                <p className="text-sm text-gray-600">Product owners, engineers, data scientists</p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm border border-purple-100">
                <p className="font-medium text-purple-800">Upskilling Workforce</p>
                <p className="text-sm text-gray-600">Digital literacy training program</p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm border border-purple-100">
                <p className="font-medium text-purple-800">Agile Ways of Working</p>
                <p className="text-sm text-gray-600">Scrum methodology adoption</p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm border border-purple-100">
                <p className="font-medium text-purple-800">Leadership Development</p>
                <p className="text-sm text-gray-600">Digital transformation coaching</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-green-50 p-5 rounded-lg">
          <h3 className="text-xl font-semibold text-green-700 mb-4">Governance Framework</h3>
          
          <div className="space-y-5">
            <div className="bg-white p-4 rounded shadow-sm border border-green-100">
              <p className="font-medium text-green-800 mb-2">Decision-Making Framework</p>
              <div className="flex justify-between text-sm">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 mx-auto mb-1 flex items-center justify-center text-blue-700">
                    <span className="font-bold">Strategic</span>
                  </div>
                  <p>Steering Committee</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-purple-100 mx-auto mb-1 flex items-center justify-center text-purple-700">
                    <span className="font-bold">Tactical</span>
                  </div>
                  <p>DTO</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 mx-auto mb-1 flex items-center justify-center text-green-700">
                    <span className="font-bold">Operational</span>
                  </div>
                  <p>Workstreams</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded shadow-sm border border-green-100">
                <p className="font-medium text-green-800">Progress Tracking</p>
                <ul className="text-sm mt-1">
                  <li>• Weekly status reports</li>
                  <li>• Monthly KPI dashboards</li>
                  <li>• Quarterly reviews</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded shadow-sm border border-green-100">
                <p className="font-medium text-green-800">Risk Management</p>
                <ul className="text-sm mt-1">
                  <li>• Risk register</li>
                  <li>• Mitigation planning</li>
                  <li>• Regular assessment</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded shadow-sm border border-green-100">
                <p className="font-medium text-green-800">Value Realization</p>
                <ul className="text-sm mt-1">
                  <li>• Benefits tracking</li>
                  <li>• ROI calculation</li>
                  <li>• Value reporting</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded shadow-sm border border-green-100">
                <p className="font-medium text-green-800">Change Control</p>
                <ul className="text-sm mt-1">
                  <li>• Change request process</li>
                  <li>• Impact assessment</li>
                  <li>• Approval workflow</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const CriticalSuccessFactorsSlide = () => (
    <div className="flex flex-col">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">Critical Success Factors</h2>
      
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center text-blue-700 font-bold mr-3">
              1
            </div>
            <h3 className="text-xl font-semibold text-blue-700">Executive Alignment and Sponsorship</h3>
          </div>
          <ul className="space-y-2 ml-13">
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              <span>Visible leadership commitment</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              <span>Resource prioritization</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              <span>Regular executive engagement</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-purple-50 p-6 rounded-lg shadow-sm">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 font-bold mr-3">
              2
            </div>
            <h3 className="text-xl font-semibold text-purple-700">Organization Change Management</h3>
          </div>
          <ul className="space-y-2 ml-13">
            <li className="flex items-start">
              <span className="text-purple-600 font-bold mr-2">•</span>
              <span>Comprehensive communication strategy</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 font-bold mr-2">•</span>
              <span>Skills development program</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 font-bold mr-2">•</span>
              <span>Cultural transformation</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-green-50 p-6 rounded-lg shadow-sm">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center text-green-700 font-bold mr-3">
              3
            </div>
            <h3 className="text-xl font-semibold text-green-700">Technology Foundation</h3>
          </div>
          <ul className="space-y-2 ml-13">
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              <span>Scalable, secure architecture</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              <span>Data integration and quality</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              <span>Technical debt reduction</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-orange-50 p-6 rounded-lg shadow-sm">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-orange-200 flex items-center justify-center text-orange-700 font-bold mr-3">
              4
            </div>
            <h3 className="text-xl font-semibold text-orange-700">Customer-Centered Approach</h3>
          </div>
          <ul className="space-y-2 ml-13">
            <li className="flex items-start">
              <span className="text-orange-600 font-bold mr-2">•</span>
              <span>Continuous customer feedback</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 font-bold mr-2">•</span>
              <span>Value delivery at each phase</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 font-bold mr-2">•</span>
              <span>Experience-led design</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-lg shadow-sm col-span-2">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center text-blue-700 font-bold mr-3">
              5
            </div>
            <h3 className="text-xl font-semibold text-blue-700">Agile Implementation</h3>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-3 rounded shadow-sm">
              <p className="font-medium text-blue-800">Iterative Approach</p>
              <p className="text-sm text-gray-600">Frequent releases with continuous feedback</p>
            </div>
            <div className="bg-white p-3 rounded shadow-sm">
              <p className="font-medium text-blue-800">Adaptability</p>
              <p className="text-sm text-gray-600">Responding to changing conditions</p>
            </div>
            <div className="bg-white p-3 rounded shadow-sm">
              <p className="font-medium text-blue-800">Portfolio Management</p>
              <p className="text-sm text-gray-600">Balancing quick wins and strategic initiatives</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const NextStepsSlide = () => (
    <div className="flex flex-col">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">Implementation Timeline & Next Steps</h2>
      
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-blue-50 p-5 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-700 mb-3">Immediate Actions (Next 30 Days)</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              <span>Finalize executive sponsorship and governance</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              <span>Establish Transformation Office</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              <span>Complete detailed planning for Phase 1</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              <span>Begin key talent acquisition</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-purple-50 p-5 rounded-lg">
          <h3 className="text-xl font-semibold text-purple-700 mb-3">90-Day Milestones</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-purple-600 font-bold mr-2">•</span>
              <span>Mobile app development kickoff</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 font-bold mr-2">•</span>
              <span>Customer data platform vendor selection</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 font-bold mr-2">•</span>
              <span>API gateway implementation started</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 font-bold mr-2">•</span>
              <span>Digital skills assessment completed</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="bg-green-50 p-5 rounded-lg">
        <h3 className="text-xl font-semibold text-green-700 mb-3">Approval Request</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-3 rounded shadow-sm">
            <p className="font-medium">Executive sponsorship confirmation</p>
          </div>
          <div className="bg-white p-3 rounded shadow-sm">
            <p className="font-medium">Phase 1 budget approval ($3.8M)</p>
          </div>
          <div className="bg-white p-3 rounded shadow-sm">
            <p className="font-medium">Transformation Office establishment</p>
          </div>
          <div className="bg-white p-3 rounded shadow-sm">
            <p className="font-medium">Authority to proceed with hiring plan</p>
          </div>
        </div>
      </div>
    </div>
  );

  const ThankYouSlide = () => (
    <div className="flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold text-blue-800 mb-8">Thank You</h1>
      <div className="bg-blue-50 p-8 rounded-lg shadow-sm mb-6 w-2/3">
        <h2 className="text-2xl text-blue-700 mb-4">Questions?</h2>
        <p className="text-lg">We welcome your feedback and questions</p>
      </div>
      <p className="text-lg text-gray-600">Dr. Burger Digital Transformation Team</p>
    </div>
  );

  // Define all slides
  const slides = [
    <TitleSlide key="title" />,
    <ExecutiveOverviewSlide key="overview" />,
    <VisionSlide key="vision" />,
    <ChallengesOpportunitiesSlide key="challenges" />,
    <DigitalMaturitySlide key="maturity" />,
    <StrategicPillarsSlide key="pillars" />,
    <ImplementationRoadmapSlide key="roadmap" />,
    <Phase1Slide key="phase1" />,
    <Phase2Slide key="phase2" />,
    <Phase3Slide key="phase3" />,
    <Phase4Slide key="phase4" />,
    <TechnologyArchitectureSlide key="tech" />,
    <FinancialImpactSlide key="financial" />,
    <KPISlide key="kpi" />,
    <OrganizationSlide key="organization" />,
    <CriticalSuccessFactorsSlide key="success-factors" />,
    <NextStepsSlide key="nextsteps" />,
    <ThankYouSlide key="thankyou" />
  ];

  // PDF Export Function
  const exportToPDF = async () => {
    try {
      // Dynamically import jspdf and html2canvas only when needed
      const jsPDF = (await import('jspdf')).default;
      const html2canvas = (await import('html2canvas')).default;
      
      const doc = new jsPDF('landscape', 'mm', 'a4');
      const slideContainer = document.getElementById('current-slide');
      const totalSlides = slides.length;
      const originalSlide = currentSlide;
      
      // Show PDF generation message
      alert('Starting PDF generation. This may take a moment...');
      
      // Function to capture a slide and add it to the PDF
      const captureSlide = async (slideIndex) => {
        if (slideIndex >= totalSlides) {
          // We've captured all slides, save the PDF
          doc.save('Dr-Burger-Digital-Transformation.pdf');
          setCurrentSlide(originalSlide); // Return to the original slide
          return;
        }
        
        // Set current slide to the one we want to capture
        setCurrentSlide(slideIndex);
        
        // Wait a moment for the slide to render
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Capture the slide
        const canvas = await html2canvas(slideContainer, {scale: 2});
        const imgData = canvas.toDataURL('image/jpeg', 1.0);
        
        // Add to PDF
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        doc.addImage(imgData, 'JPEG', 0, 0, pageWidth, pageHeight);
        
        // Add a new page if this isn't the last slide
        if (slideIndex < totalSlides - 1) {
          doc.addPage();
        }
        
        // Capture the next slide
        captureSlide(slideIndex + 1);
      };
      
      // Start the capture process with the first slide
      captureSlide(0);
      
    } catch (error) {
      console.error('PDF generation failed:', error);
      alert('PDF generation failed. Please make sure you have jspdf and html2canvas installed.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header with logo and slide counter */}
      <div className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
            DB
          </div>
          <h1 className="ml-3 text-xl font-semibold text-gray-800">Dr. Burger</h1>
        </div>
        <div className="text-gray-600">
          Slide {currentSlide + 1} of {slides.length}
        </div>
      </div>
      
      {/* Main content area */}
      <div className="flex-1 flex flex-col p-8">
        <div className="flex-1 bg-white rounded-lg shadow-sm p-8 mb-6">
          {slides[currentSlide]}
        </div>
        
        {/* Navigation controls */}
        <div className="flex justify-between items-center">
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`flex items-center px-4 py-2 rounded-md ${
              currentSlide === 0 
                ? 'text-gray-400 bg-gray-100' 
                : 'text-blue-600 bg-blue-50 hover:bg-blue-100'
            }`}
          >
            <ChevronLeft size={20} className="mr-1" />
            Previous
          </button>
          
          <div className="flex space-x-1">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              ></button>
            ))}
          </div>
          
          <button 
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`flex items-center px-4 py-2 rounded-md ${
              currentSlide === slides.length - 1 
                ? 'text-gray-400 bg-gray-100' 
                : 'text-blue-600 bg-blue-50 hover:bg-blue-100'
            }`}
          >
            Next
            <ChevronRight size={20} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
