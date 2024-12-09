import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const workStepsData = [
    {
      id: '01',
      title: 'Introduction to Financial Statements',
      subtitle:
        'Understanding the three main financial statements:\n' +
        'Income Statement: Shows revenue, expenses, and net profit.\n' +
        'Balance Sheet: Lists assets, liabilities, and equity.\n' +
        'Cash Flow Statement: Tracks cash inflows and outflows.\n' +
        'Learn how to analyze basic financial data.',
    },
    {
      id: '02',
      title: 'The Time Value of Money (TVM)',
      subtitle:
        'Explore the concept that money today is worth more than the same amount in the future due to its earning potential.\n' +
        'Learn formulas for present value (PV) and future value (FV).',
    },
    {
      id: '03',
      title: 'Budgeting and Personal Finance',
      subtitle:
        'Develop skills to create a personal or business budget.\n' +
        'Learn about savings, emergency funds, and managing debt effectively.',
    },
    {
      id: '04',
      title: 'Investment Basics',
      subtitle:
        'Introduction to financial markets (stocks, bonds, mutual funds).\n' +
        'Understand risk and return, diversification, and compound interest.',
    },
    {
      id: '05',
      title: 'Introduction to Corporate Finance',
      subtitle:
        'Basic concepts like capital budgeting, cost of capital, and financial decision-making.\n' +
        'Learn how companies raise funds and allocate resources.',
    },
    {
      id: '06',
      title: 'Banking and Credit',
      subtitle:
        'Understand the role of banks in the economy.\n' +
        'Learn about credit, loans, and interest rates.',
    },
    {
      id: '07',
      title: 'Financial Ratios and Analysis',
      subtitle:
        'Introduction to key financial ratios like:\n' +
        'Liquidity Ratios: Current Ratio, Quick Ratio.\n' +
        'Profitability Ratios: Net Profit Margin, ROA, ROE.\n' +
        'Leverage Ratios: Debt-to-Equity.\n' +
        'Use ratios to assess financial health.',
    },
    {
      id: '08',
      title: 'Introduction to Taxes',
      subtitle:
        'Basics of income taxes and their impact on personal and business finances.\n' +
        'Learn about tax planning and deductions.',
    },
    {
      id: '09',
      title: 'Risk Management and Insurance',
      subtitle:
        'Understand the importance of managing financial risks.\n' +
        'Overview of insurance types (health, life, property).',
    },
  ];
  

const WorkSteps = () => {
  const [activeStep, setActiveStep] = useState('01');

  const toggleStep = (id) => {
    if (activeStep !== id) {
      setActiveStep(id);
    }
  };

  return (
    <div className="work-steps py-10 sm:py-16 text-gray-800 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600">
      <div className="max-w-screen-xl mx-auto px-2 md:px-6 lg:px-8 xl:px-0">
        <div className="title text-center mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Our Process
          </h2>
        </div>
        <div className="subtitle text-center text-sm sm:text-md md:text-lg mb-8 sm:mb-10 text-white leading-relaxed px-2 sm:px-4 md:px-0">
          <p>
            Our process is carefully designed to ensure that we deliver results at every step. From initial consultation to continual improvement, we keep you informed and involved.
          </p>
        </div>

        <div className="space-y-8 ">
          {workStepsData.map((step) => (
            <div
              key={step.id}
              className={`step-item bg-white/30  backdrop-blur-lg shadow-lg rounded-lg p-6 transform transition duration-300 ${
                activeStep === step.id ? 'bg-[var(--green)]/80' : ''
              }`}
            >
              <div className="step-header flex items-center justify-between">
                <div className="flex items-center">
                  <div className="step-id">
                    <p className="text-3xl sm:text-4xl font-semibold text-white">{step.id}</p>
                  </div>
                  <div className="step-title pl-2 sm:pl-7">
                    <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white pr-3">{step.title}</p>
                  </div>
                </div>
                <div className="toggle-button-details">
                  <button
                    className="toggle-button w-8 h-8 md:w-14 md:h-14 border-2 text-2xl md:text-3xl rounded-full flex items-center justify-center bg-white"
                    onClick={() => toggleStep(step.id)}
                  >
                    {activeStep === step.id ? '-' : '+'}
                  </button>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {activeStep === step.id && (
                  <>
                    <motion.div
                      key={`${step.id}-line`}
                      className="border-2 border-white mt-5"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      exit={{ width: 0, transition: { duration: 0 } }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      key={`${step.id}-content`}
                      className="step-subtitle p-2 sm:p-4 rounded-b-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, transition: { duration: 0 } }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-white text-sm sm:text-base leading-relaxed min-h-[48px]">
                        {step.subtitle}
                      </p>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkSteps;
