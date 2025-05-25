import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import translationService from '../services/translationService';

const Emergency = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  useEffect(() => {
    console.log('Current Language:', currentLanguage);
    console.log('Available Translations:', translationService.staticTranslations[currentLanguage]);
  }, [currentLanguage]);

  const guidelines = [
    {
      title: translationService.translate('emergency.guidelines.domesticViolence.title', currentLanguage),
      description: translationService.translate('emergency.guidelines.domesticViolence.description', currentLanguage),
      steps: translationService.translate('emergency.guidelines.domesticViolence.steps', currentLanguage),
      icon: '🛡️'
    },
    {
      title: translationService.translate('emergency.guidelines.legalAid.title', currentLanguage),
      description: translationService.translate('emergency.guidelines.legalAid.description', currentLanguage),
      steps: translationService.translate('emergency.guidelines.legalAid.steps', currentLanguage),
      icon: '⚖️'
    },
    {
      title: translationService.translate('emergency.guidelines.police.title', currentLanguage),
      description: translationService.translate('emergency.guidelines.police.description', currentLanguage),
      steps: translationService.translate('emergency.guidelines.police.steps', currentLanguage),
      icon: '👮'
    },
    {
      title: translationService.translate('emergency.guidelines.medical.title', currentLanguage),
      description: translationService.translate('emergency.guidelines.medical.description', currentLanguage),
      steps: translationService.translate('emergency.guidelines.medical.steps', currentLanguage),
      icon: '🏥'
    }
  ];

  // Log the translated content
  useEffect(() => {
    console.log('Translated Guidelines:', guidelines);
  }, [guidelines]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {translationService.translate('emergency.guidelines.title', currentLanguage)}
        </h2>
        <p className="text-lg text-gray-600">
          {translationService.translate('emergency.guidelines.subtitle', currentLanguage)}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {guidelines.map((guideline, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">{guideline.icon}</span>
              <h3 className="text-xl font-semibold text-gray-900">
                {guideline.title}
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              {guideline.description}
            </p>
            <ul className="space-y-2">
              {Array.isArray(guideline.steps) ? guideline.steps.map((step, stepIndex) => (
                <li key={stepIndex} className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span className="text-gray-700">{step}</span>
                </li>
              )) : null}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Emergency; 