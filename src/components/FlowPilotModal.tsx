import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FlowPilotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FlowPilotModal: React.FC<FlowPilotModalProps> = ({ isOpen, onClose }) => {
  const [selectedScenario, setSelectedScenario] = useState<'low-risk' | 'high-risk'>('low-risk');
  const [activeStepIndex, setActiveStepIndex] = useState<number>(-1);
  const [isRunning, setIsRunning] = useState(false);
  const [executionLog, setExecutionLog] = useState<string[]>([]);
  const [resultData, setResultData] = useState<{
    status: string;
    action: string;
    confidence: number;
    decision: string;
    details: string;
  } | null>(null);

  const steps = [
    'CAPTURE',
    'UNDERSTAND',
    'DECIDE',
    'VALIDATE',
    'ACT / ESCALATE',
    'NOTIFY',
    'LOG',
  ];

  const runSimulation = (scenario: 'low-risk' | 'high-risk') => {
    setIsRunning(true);
    setActiveStepIndex(0);
    setResultData(null);
    setExecutionLog(['[WEBHOOK] Incoming customer payload received...']);

    const delay = 450;
    steps.forEach((step, idx) => {
      setTimeout(() => {
        setActiveStepIndex(idx);
        if (idx === 1) {
          setExecutionLog((prev) => [
            ...prev,
            scenario === 'low-risk'
              ? '[LLM_PARSER] Intent: Duplicate payment refund request ($45.90 within 2 hours)'
              : '[LLM_PARSER] Intent: High-value refund request ($3,200.00 - IP mismatch / unverified)',
          ]);
        }
        if (idx === 2) {
          setExecutionLog((prev) => [
            ...prev,
            scenario === 'low-risk'
              ? '[RULE_ENGINE] Verified duplicate transaction ID: #TX-90412. Threshold check passed.'
              : '[RULE_ENGINE] Velocity threshold exceeded (> $1,000 policy limit). Anomaly detected.',
          ]);
        }
        if (idx === 3) {
          setExecutionLog((prev) => [
            ...prev,
            scenario === 'low-risk'
              ? '[VALIDATION] Guardrails verified. Confidence: 0.95. Risk score: 0.04 (LOW)'
              : '[VALIDATION] Policy violation. Confidence: 0.89. Risk score: 0.88 (HIGH)',
          ]);
        }
        if (idx === 4) {
          setExecutionLog((prev) => [
            ...prev,
            scenario === 'low-risk'
              ? '[ACTION] Executed Stripe API Refund -> REFUND_CREATED ($45.90)'
              : '[ESCALATE] Generated review ticket in Slack & CRM -> HUMAN_APPROVAL_REQUIRED',
          ]);
        }
        if (idx === 6) {
          setIsRunning(false);
          setResultData(
            scenario === 'low-risk'
              ? {
                  status: 'AUTO_RESOLVED',
                  action: 'REFUND_CREATED',
                  confidence: 0.95,
                  decision: 'SAFE_AUTONOMOUS_EXECUTION',
                  details: 'Autonomous refund dispatched to customer account without manual friction.',
                }
              : {
                  status: 'HUMAN_REVIEW',
                  action: 'APPROVAL_REQUIRED',
                  confidence: 0.89,
                  decision: 'ESCALATED_TO_COMPLIANCE',
                  details: 'Safely halted transaction; routed to human specialist with automated context brief.',
                }
          );
        }
      }, (idx + 1) * delay);
    });
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 12 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 12 }}
          className="relative w-full max-w-3xl bg-[#E9E9E7] rounded-3xl p-6 sm:p-8 md:p-10 border border-black/20 shadow-2xl z-10 my-auto text-[#050505]"
        >
          {/* Header */}
          <div className="flex items-start justify-between pb-6 border-b border-black/10">
            <div>
              <div className="text-xs font-mono tracking-widest text-black/50 mb-1">
                INTERACTIVE SIMULATOR // AGENTIC PIPELINE
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl text-[#050505]">
                FLOWPILOT AI DECISION ENGINE
              </h3>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/80 hover:bg-black hover:text-white transition-colors flex items-center justify-center font-mono text-sm border border-black/10 cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Test Case Selection */}
          <div className="mt-6 mb-6">
            <div className="text-xs font-mono uppercase tracking-wider text-black/60 mb-2">
              Select Test Scenario:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={() => {
                  setSelectedScenario('low-risk');
                  runSimulation('low-risk');
                }}
                disabled={isRunning}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  selectedScenario === 'low-risk'
                    ? 'bg-white border-black shadow-xs'
                    : 'bg-white/50 border-black/10 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-heading font-medium text-sm">
                    Scenario A: Low Risk
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                    Safe Case
                  </span>
                </div>
                <p className="text-xs text-black/70 font-body">
                  Duplicate payment ($45.90) within 2 hours. High confidence intent matching.
                </p>
              </button>

              <button
                onClick={() => {
                  setSelectedScenario('high-risk');
                  runSimulation('high-risk');
                }}
                disabled={isRunning}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  selectedScenario === 'high-risk'
                    ? 'bg-white border-black shadow-xs'
                    : 'bg-white/50 border-black/10 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-heading font-medium text-sm">
                    Scenario B: High Risk
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                    Human Review
                  </span>
                </div>
                <p className="text-xs text-black/70 font-body">
                  High-value refund request ($3,200.00). Geographic mismatch and policy exception.
                </p>
              </button>
            </div>
          </div>

          {/* Interactive Flow Pipeline Nodes */}
          <div className="bg-white/90 p-5 rounded-2xl border border-black/10 mb-6">
            <div className="text-[11px] font-mono uppercase tracking-widest text-black/50 mb-3">
              Autonomous Execution Flow
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-7 gap-2">
              {steps.map((step, idx) => {
                const isActive = activeStepIndex === idx;
                const isPassed = activeStepIndex > idx;
                return (
                  <div
                    key={step}
                    className={`p-2.5 rounded-lg border text-center transition-all ${
                      isActive
                        ? 'bg-[#050505] text-white border-black shadow-md scale-105'
                        : isPassed
                        ? 'bg-black/5 text-black border-black/20 font-medium'
                        : 'bg-black/[0.02] text-black/40 border-black/5'
                    }`}
                  >
                    <div className="text-[9px] font-mono tracking-wider opacity-60">
                      0{idx + 1}
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-heading font-semibold uppercase leading-tight mt-0.5">
                      {step}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Terminal Logs & Outcome Box */}
          <div className="bg-[#18181A] text-[#F0F0F0] rounded-2xl p-5 font-mono text-xs shadow-inner">
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/10 text-white/40 text-[11px]">
              <span>TERMINAL OBSERVABILITY // EXECUTION LOG</span>
              <span>{isRunning ? 'PIPELINE RUNNING...' : 'SYSTEM READY'}</span>
            </div>
            <div className="space-y-1.5 min-h-[90px] text-[11px] leading-relaxed">
              {executionLog.length === 0 ? (
                <div className="text-white/40 italic">
                  Click Scenario A or B above to execute the autonomous decision loop.
                </div>
              ) : (
                executionLog.map((log, i) => (
                  <div key={i} className="flex gap-2">
                    <span className="text-emerald-400 select-none">›</span>
                    <span className={log.includes('HIGH') || log.includes('ESCALATE') ? 'text-amber-300' : 'text-zinc-200'}>
                      {log}
                    </span>
                  </div>
                ))
              )}
            </div>

            {/* Final Decision Badge */}
            {resultData && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 pt-3 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white/5 p-3 rounded-xl"
              >
                <div>
                  <div className="text-[10px] tracking-wider text-white/50 uppercase">
                    Decision Outcome
                  </div>
                  <div className="font-heading text-sm text-white font-semibold flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${resultData.status === 'AUTO_RESOLVED' ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                    <span>{resultData.status}</span>
                    <span className="text-white/40">/</span>
                    <span>{resultData.action}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] tracking-wider text-white/50 uppercase">
                    Confidence
                  </div>
                  <div className="font-mono text-emerald-400 text-sm font-bold">
                    {(resultData.confidence * 100).toFixed(0)}%
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-black/10">
            <a
              href="https://github.com/Pranavreddyedula/flowpilot-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono underline hover:opacity-75 transition-opacity"
            >
              View Repository on GitHub ↗
            </a>
            <button
              onClick={() => runSimulation(selectedScenario)}
              disabled={isRunning}
              className="px-5 py-2.5 bg-[#050505] text-white rounded-full text-xs font-medium hover:bg-black/85 transition-all active:scale-95 cursor-pointer"
            >
              Re-run Decision Engine
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
