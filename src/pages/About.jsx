import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Users, Shield, Heart, Target, Award, Globe, BookOpen } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import Card from '../components/ui/Card';

const About = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: Scale,
      title: t('about.values.justice.title'),
      description: t('about.values.justice.description')
    },
    {
      icon: Users,
      title: t('about.values.community.title'),
      description: t('about.values.community.description')
    },
    {
      icon: Shield,
      title: t('about.values.protection.title'),
      description: t('about.values.protection.description')
    },
    {
      icon: Heart,
      title: t('about.values.compassion.title'),
      description: t('about.values.compassion.description')
    }
  ];

  const stats = [
    {
      number: '10K+',
      label: t('about.stats.people')
    },
    {
      number: '500+',
      label: t('about.stats.cases')
    },
    {
      number: '24/7',
      label: t('about.stats.support')
    },
    {
      number: '4',
      label: t('about.stats.languages')
    }
  ];

  const features = [
    {
      icon: Target,
      title: t('about.features.personalized.title'),
      description: t('about.features.personalized.description')
    },
    {
      icon: Award,
      title: t('about.features.verified.title'),
      description: t('about.features.verified.description')
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Scale className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('about.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t('about.subtitle')}
          </p>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {values.map((value, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <value.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                {stat.label}
              </div>
            </Card>
          ))}
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {features.map((feature, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
