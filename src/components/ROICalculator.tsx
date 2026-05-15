import React, { useState, useMemo } from 'react';
import { TrendingUp, DollarSign, BarChart3, PieChart } from 'lucide-react';

const ROICalculator: React.FC = () => {
  const [annualRevenue, setAnnualRevenue] = useState(5000000);
  const [manualProcessCost, setManualProcessCost] = useState(250000);
  const [errorRate, setErrorRate] = useState(3);
  const [investmentAmount, setInvestmentAmount] = useState(100000);
  const [implementationMonths, setImplementationMonths] = useState(6);
  const [timeToROI, setTimeToROI] = useState(12);

  const calculations = useMemo(() => {
    const errorCosts = (annualRevenue * errorRate) / 100;
    const totalCurrentCost = manualProcessCost + errorCosts;

    const costReduction = totalCurrentCost * 0.65;
    const efficiencyGains = (annualRevenue * 0.05) * 0.1;
    const annualBenefit = costReduction + efficiencyGains;

    const months = timeToROI;
    const monthlyBenefit = annualBenefit / 12;
    const breakEvenMonth = Math.ceil(investmentAmount / monthlyBenefit);

    const totalBenefits = annualBenefit * 3;
    const roi = ((totalBenefits - investmentAmount) / investmentAmount) * 100;

    return {
      currentAnnualCost: totalCurrentCost,
      costReduction,
      efficiencyGains,
      annualBenefit,
      monthlyBenefit,
      breakEvenMonth,
      threYearBenefit: totalBenefits,
      threYearROI: roi,
      paybackPeriodMonths: Math.ceil(investmentAmount / monthlyBenefit)
    };
  }, [annualRevenue, manualProcessCost, errorRate, investmentAmount, timeToROI]);

  return (
    <section className="py-20 bg-brand-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <DollarSign className="w-8 h-8 text-brand-green" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white">ROI Calculator</h2>
          </div>
          <p className="text-gray-400 mb-12">
            Understand the business impact of investing in AI and automation solutions.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="bg-white/5 border border-brand-green/20 rounded-lg p-6 space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-white font-medium text-sm">Annual Revenue</label>
                    <span className="text-brand-green font-bold">${(annualRevenue / 1000000).toFixed(1)}M</span>
                  </div>
                  <input
                    type="range"
                    min="1000000"
                    max="50000000"
                    step="100000"
                    value={annualRevenue}
                    onChange={(e) => setAnnualRevenue(Number(e.target.value))}
                    className="w-full h-2 bg-brand-green/20 rounded-lg appearance-none cursor-pointer accent-brand-green"
                  />
                  <p className="text-xs text-gray-400 mt-1">Your organization's annual revenue</p>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-white font-medium text-sm">Current Manual Process Cost</label>
                    <span className="text-brand-green font-bold">${(manualProcessCost / 1000).toFixed(0)}K</span>
                  </div>
                  <input
                    type="range"
                    min="50000"
                    max="2000000"
                    step="10000"
                    value={manualProcessCost}
                    onChange={(e) => setManualProcessCost(Number(e.target.value))}
                    className="w-full h-2 bg-brand-green/20 rounded-lg appearance-none cursor-pointer accent-brand-green"
                  />
                  <p className="text-xs text-gray-400 mt-1">Annual cost of manual operations</p>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-white font-medium text-sm">Error Rate Impact</label>
                    <span className="text-brand-green font-bold">{errorRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="10"
                    step="0.5"
                    value={errorRate}
                    onChange={(e) => setErrorRate(Number(e.target.value))}
                    className="w-full h-2 bg-brand-green/20 rounded-lg appearance-none cursor-pointer accent-brand-green"
                  />
                  <p className="text-xs text-gray-400 mt-1">% of revenue lost to errors</p>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-white font-medium text-sm">Total Investment</label>
                    <span className="text-brand-green font-bold">${(investmentAmount / 1000).toFixed(0)}K</span>
                  </div>
                  <input
                    type="range"
                    min="25000"
                    max="500000"
                    step="5000"
                    value={investmentAmount}
                    onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                    className="w-full h-2 bg-brand-green/20 rounded-lg appearance-none cursor-pointer accent-brand-green"
                  />
                  <p className="text-xs text-gray-400 mt-1">Solution implementation cost</p>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-white font-medium text-sm">Implementation Timeline</label>
                    <span className="text-brand-green font-bold">{implementationMonths} months</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="12"
                    step="1"
                    value={implementationMonths}
                    onChange={(e) => setImplementationMonths(Number(e.target.value))}
                    className="w-full h-2 bg-brand-green/20 rounded-lg appearance-none cursor-pointer accent-brand-green"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-brand-green/20 to-brand-teal/20 border border-brand-green/30 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400 text-sm">Current Annual Cost</span>
                  <TrendingUp className="w-5 h-5 text-orange-400" />
                </div>
                <p className="text-3xl font-bold text-white">${(calculations.currentAnnualCost / 1000).toFixed(0)}K</p>
              </div>

              <div className="bg-gradient-to-br from-brand-green/10 to-brand-teal/10 border border-brand-green/30 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400 text-sm">Annual Benefit</span>
                  <TrendingUp className="w-5 h-5 text-brand-green" />
                </div>
                <p className="text-3xl font-bold text-brand-green">${(calculations.annualBenefit / 1000).toFixed(0)}K</p>
                <p className="text-xs text-gray-400 mt-2">
                  {((calculations.annualBenefit / calculations.currentAnnualCost) * 100).toFixed(0)}% reduction in costs
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 border border-brand-green/20 rounded-lg p-4">
                  <p className="text-xs text-gray-400 mb-2">Payback Period</p>
                  <p className="text-2xl font-bold text-brand-green">{calculations.paybackPeriodMonths}</p>
                  <p className="text-xs text-gray-400 mt-1">months</p>
                </div>

                <div className="bg-white/5 border border-brand-green/20 rounded-lg p-4">
                  <p className="text-xs text-gray-400 mb-2">3-Year ROI</p>
                  <p className="text-2xl font-bold text-brand-green">{calculations.threYearROI.toFixed(0)}%</p>
                </div>
              </div>

              <div className="bg-white/5 border border-brand-green/20 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400 text-sm">3-Year Total Benefit</span>
                  <BarChart3 className="w-5 h-5 text-brand-green" />
                </div>
                <p className="text-2xl font-bold text-white">${(calculations.threYearBenefit / 1000).toFixed(0)}K</p>
                <div className="mt-4 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Investment Cost</span>
                    <span className="text-white">-${(investmentAmount / 1000).toFixed(0)}K</span>
                  </div>
                  <div className="flex justify-between border-t border-brand-green/20 pt-2">
                    <span className="text-brand-green font-semibold">Net Benefit</span>
                    <span className="text-brand-green font-semibold">${((calculations.threYearBenefit - investmentAmount) / 1000).toFixed(0)}K</span>
                  </div>
                </div>
              </div>

              <button className="w-full px-4 py-3 bg-brand-gradient hover:bg-brand-gradient-hover text-white font-bold rounded-lg transition-all">
                Download ROI Report
              </button>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-brand-green/20 rounded-lg p-6 text-center">
              <p className="text-xs text-brand-green font-semibold mb-2">AVERAGE PAYBACK PERIOD</p>
              <p className="text-3xl font-bold text-white">6-8</p>
              <p className="text-sm text-gray-400 mt-2">months for most clients</p>
            </div>
            <div className="bg-white/5 border border-brand-green/20 rounded-lg p-6 text-center">
              <p className="text-xs text-brand-green font-semibold mb-2">TYPICAL COST REDUCTION</p>
              <p className="text-3xl font-bold text-white">60%</p>
              <p className="text-sm text-gray-400 mt-2">in operational expenses</p>
            </div>
            <div className="bg-white/5 border border-brand-green/20 rounded-lg p-6 text-center">
              <p className="text-xs text-brand-green font-semibold mb-2">3-YEAR AVERAGE ROI</p>
              <p className="text-3xl font-bold text-white">350%</p>
              <p className="text-sm text-gray-400 mt-2">across our client base</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;