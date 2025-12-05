"use client";

import { useState } from "react";
import TermsConditions from "../modals/TermsConditions/TermsConditions";
import PrivacyPolicy from "../modals/PrivacyPolicy/PrivacyPolicy";

interface TermsAcceptanceProps {
  accepted: boolean;
  setAccepted: (accepted: boolean) => void;
}

const TermsAcceptance = ({ accepted, setAccepted }: TermsAcceptanceProps) => {
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const handleCheckboxChange = () => {
    setAccepted(!accepted);
  };

  return (
    <div className="flex items-start gap-3">
      <div className="relative shrink-0">
        <input
          type="checkbox"
          id="terms-checkbox"
          checked={accepted}
          onChange={handleCheckboxChange}
          className="sr-only"
        />
        <label
          htmlFor="terms-checkbox"
          className={`flex items-center justify-center w-5 h-5 border-2 rounded cursor-pointer transition-all ${
            accepted
              ? "bg-green-500 border-green-500"
              : "bg-white border-gray-300 hover:border-gray-400"
          }`}
        >
          {accepted && (
            <svg
              className="w-3 h-3 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M5 13l4 4L19 7"></path>
            </svg>
          )}
        </label>
      </div>

      <div className="text-sm text-gray-700">
        I agree to oasisafrik{" "}
        <button
          type="button"
          onClick={() => setShowTermsModal(true)}
          className="text-green-600 hover:text-green-700 font-medium cursor-pointer"
        >
          terms
        </button>{" "}
        and{" "}
        <button
          type="button"
          onClick={() => setShowPrivacyModal(true)}
          className="text-green-600 hover:text-green-700 font-medium cursor-pointer"
        >
          privacy policy
        </button>
      </div>
      <TermsConditions
        showTermsModal={showTermsModal}
        setShowTermsModal={setShowTermsModal}
      />
      <PrivacyPolicy
        setShowPrivacyModal={setShowPrivacyModal}
        showPrivacyModal={showPrivacyModal}
      />
    </div>
  );
};

export default TermsAcceptance;
