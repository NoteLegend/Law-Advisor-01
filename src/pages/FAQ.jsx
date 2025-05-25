import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Volume2, HelpCircle, Search } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { useTextToSpeech } from '../hooks/useTextToSpeech';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const FAQ = () => {
  const { t, language } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const { speak } = useTextToSpeech();

  const faqs = [
    {
      question: t('faq.questions.basicRights.question'),
      answer: t('faq.questions.basicRights.answer'),
      category: t('faq.categories.constitutionalRights')
    },
    {
      question: t('faq.questions.domesticViolence.question'),
      answer: t('faq.questions.domesticViolence.answer'),
      category: t('faq.categories.domesticViolence')
    },
    {
      question: t('faq.questions.minimumWage.question'),
      answer: t('faq.questions.minimumWage.answer'),
      category: t('faq.categories.laborRights')
    },
    {
      question: t('faq.questions.consumerComplaint.question'),
      answer: t('faq.questions.consumerComplaint.answer'),
      category: t('faq.categories.consumerRights')
    },
    {
      question: t('faq.questions.legalAid.question'),
      answer: t('faq.questions.legalAid.answer'),
      category: t('faq.categories.legalAid')
    },
    {
      question: t('faq.questions.propertyRegistration.question'),
      answer: t('faq.questions.propertyRegistration.answer'),
      category: t('faq.categories.propertyRights')
    },
    {
      question: t('faq.questions.rtiApplication.question'),
      answer: t('faq.questions.rtiApplication.answer'),
      category: t('faq.categories.rightToInformation')
    },
    {
      question: t('faq.questions.policeComplaint.question'),
      answer: t('faq.questions.policeComplaint.answer'),
      category: t('faq.categories.criminalLaw')
    }
  ];

  const filteredFaqs = searchQuery
    ? faqs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqs;

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const speakAnswer = (answer) => {
    speak(answer);
  };

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <HelpCircle className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('faq.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t('faq.subtitle')}
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('faq.search.placeholder')}
              className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-500 dark:text-gray-400">
                {t('faq.noResults')}
              </p>
            </motion.div>
          ) : (
            filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left focus:outline-none"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">
                            {faq.category}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {faq.question}
                        </h3>
                      </div>
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="ml-4"
                      >
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      </motion.div>
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <div className="flex justify-between items-start">
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed flex-1">
                              {faq.answer}
                            </p>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => speakAnswer(faq.answer)}
                              className="ml-4 flex-shrink-0"
                            >
                              <Volume2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))
          )}
        </div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <Card className="p-8 text-center bg-blue-50 dark:bg-blue-900/20">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              {t('faq.contact.title')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {t('faq.contact.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button>
                {t('faq.contact.chatButton')}
              </Button>
              <Button variant="outline">
                {t('faq.contact.contactButton')}
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
