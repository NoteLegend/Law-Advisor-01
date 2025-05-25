import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import toast from 'react-hot-toast';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Contact = () => {
  const { t, language } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    language: language
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success(t('contact.form.success'));
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        language: language
      });
    } catch (error) {
      toast.error(t('contact.form.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: t('contact.info.email.title'),
      description: t('contact.info.email.description'),
      contact: 'support@legalrights.in',
      action: 'mailto:support@legalrights.in'
    },
    {
      icon: Phone,
      title: t('contact.info.phone.title'),
      description: t('contact.info.phone.description'),
      contact: '+91-1800-LEGAL-AID',
      action: 'tel:+911800532252'
    },
    {
      icon: MapPin,
      title: t('contact.info.visit.title'),
      description: t('contact.info.visit.description'),
      contact: t('contact.info.visit.address'),
      action: '#'
    }
  ];

  const subjects = {
    en: [
      t('subjects.legalQuery'),
      t('subjects.domesticViolence'),
      t('subjects.workerRights'),
      t('subjects.propertyDispute'),
      t('subjects.consumerRights'),
      t('subjects.appSupport'),
      t('subjects.other')
    ],
    hi: [
      t('subjects.legalQuery'),
      t('subjects.domesticViolence'),
      t('subjects.workerRights'),
      t('subjects.propertyDispute'),
      t('subjects.consumerRights'),
      t('subjects.appSupport'),
      t('subjects.other')
    ],
    mr: [
      t('subjects.legalQuery'),
      t('subjects.domesticViolence'),
      t('subjects.workerRights'),
      t('subjects.propertyDispute'),
      t('subjects.consumerRights'),
      t('subjects.appSupport'),
      t('subjects.other')
    ],
    te: [
      t('subjects.legalQuery'),
      t('subjects.domesticViolence'),
      t('subjects.workerRights'),
      t('subjects.propertyDispute'),
      t('subjects.consumerRights'),
      t('subjects.appSupport'),
      t('subjects.other')
    ]
  };

  const quickLinks = [
    {
      icon: MessageSquare,
      title: t('contact.quickLinks.chat.title'),
      description: t('contact.quickLinks.chat.description')
    },
    {
      icon: Clock,
      title: t('contact.quickLinks.hours.title'),
      description: t('contact.quickLinks.hours.description')
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Mail className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contact.form.phone')}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contact.form.subject')}
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">{t('contact.form.subject')}</option>
                    {subjects[language].map((subject, index) => (
                      <option key={index} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={t('contact.form.messagePlaceholder')}
                />
              </div>
              <div className="flex justify-end">
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      {t('contact.form.submit')}
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Send className="w-4 h-4 mr-2" />
                      {t('contact.form.submit')}
                    </div>
                  )}
                </Button>
              </div>
            </form>
          </Card>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 text-center">
                <info.icon className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {info.description}
                </p>
                <a
                  href={info.action}
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                >
                  {info.contact}
                </a>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {quickLinks.map((link, index) => (
                <div key={index} className="flex items-start">
                  <link.icon className="h-6 w-6 text-blue-600 mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {link.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {link.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <p className="text-green-700 dark:text-green-300 text-sm">
                  {t('contact.responseTime')}
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
