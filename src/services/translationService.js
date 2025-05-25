class TranslationService {
  constructor() {
    // Replace with your actual Gemini API key
    this.apiKey = 'YOUR_ACTUAL_GEMINI_API_KEY_HERE';
    this.baseUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';
    
    // Static translations for common UI elements
    this.staticTranslations = {
      en: {
        // App
        'app.title': 'Legal Rights Advisor',
        'app.subtitle': 'Know Your Rights, Protect Your Future',
        
        // Navigation
        'nav.home': 'Home',
        'nav.faq': 'FAQ',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        'nav.search': 'Search',
        'nav.calculator': 'Calculator',
        'nav.documents': 'Documents',
        'nav.emergency': 'Emergency',
        
        // Features
        'features.title': 'Powerful Features',
        'features.subtitle': 'Comprehensive legal tools for Indian laws',
        'features.search.title': 'AI-Powered Legal Search',
        'features.search.description': 'Get comprehensive legal information using advanced AI technology',
        'calculator.title': 'Legal Rights Calculator',
        'calculator.description': 'Calculate your legal rights based on specific situations',
        'calculator.categories.labor.title': 'Labor Rights',
        'calculator.categories.labor.description': 'Calculate minimum wage, overtime, and worker benefits',
        'calculator.categories.property.title': 'Property Rights',
        'calculator.categories.property.description': 'Understand property ownership and inheritance laws',
        'calculator.categories.consumer.title': 'Consumer Rights',
        'calculator.categories.consumer.description': 'Know your rights as a consumer and compensation claims',
        'calculator.fields.workHours': 'Daily Work Hours',
        'calculator.fields.salary': 'Monthly Salary (₹)',
        'calculator.fields.workDays': 'Work Days per Month',
        'calculator.fields.propertyValue': 'Property Value (₹)',
        'calculator.fields.ownershipType': 'Ownership Type',
        'calculator.fields.location': 'Property Location',
        'calculator.fields.purchaseAmount': 'Purchase Amount (₹)',
        'calculator.fields.issueType': 'Issue Type',
        'calculator.fields.purchaseDate': 'Purchase Date',
        'calculator.buttons.calculate': 'Calculate My Rights',
        'calculator.buttons.back': 'Back',
        'calculator.results.title': 'Your Legal Rights Analysis',
        'calculator.results.recommendations': 'Legal Recommendations',
        'calculator.select.placeholder': 'Select {field}',
        'calculator.input.placeholder': 'Enter {field}',
        'documents.title': 'Legal Documents',
        'documents.description': 'Download legal forms in multiple Indian languages',
        'chatbot.title': 'AI Legal Assistant',
        'chatbot.description': 'Chat with AI for instant legal guidance and advice',
        'voice.title': 'Voice Support',
        'voice.description': 'Ask questions and get answers using voice commands',
        'language.title': 'Multi-Language Support',
        'language.description': 'Available in English, Hindi, Marathi, and Telugu',
        
        // Search
        'search.placeholder': 'Ask about your legal rights...',
        'search.results': 'Search Results',
        'search.button': 'Search',
        'search.listening': 'Listening... speak now',
        'search.notSupported': 'Voice search not supported',
        
        // Buttons & Actions
        'button.download': 'Download',
        'button.preview': 'Preview',
        'button.call': 'Call',
        'button.clear': 'Clear',
        'button.send': 'Send',
        'button.close': 'Close',
        
        // Common
        'loading': 'Loading...',
        'error': 'Error occurred',
        'success': 'Success',
        'required': 'Required',
        'optional': 'Optional',
        'date': 'Date',
        'signature': 'Signature',
        
        // Legal Terms
        'legal.complaint': 'Complaint',
        'legal.application': 'Application',
        'legal.rights': 'Legal Rights',
        'legal.laws': 'Relevant Laws',
        'legal.steps': 'Recommended Steps',
        'legal.emergency': 'Emergency',
        'legal.urgent': 'Urgent',
        'legal.medium': 'Medium Priority',
        'legal.low': 'Low Priority',
        
        // Features Grid
        'features.grid.title': 'Powerful Features for',
        'features.grid.subtitle': 'Legal Empowerment',
        'features.grid.description': 'Access comprehensive legal tools designed specifically for Indian laws and rights',
        
        // Privacy
        'privacy.title': 'Privacy Protected',
        'privacy.description': 'Your legal queries are completely confidential and secure',
        
        // Common UI Elements
        'ui.learnMore': 'Learn More',
        'ui.readMore': 'Read More',
        'ui.viewAll': 'View All',
        'ui.back': 'Back',
        'ui.next': 'Next',
        'ui.previous': 'Previous',
        'ui.submit': 'Submit',
        'ui.cancel': 'Cancel',
        'ui.save': 'Save',
        'ui.edit': 'Edit',
        'ui.delete': 'Delete',
        'ui.confirm': 'Confirm',
        'ui.yes': 'Yes',
        'ui.no': 'No',
        'ui.more': 'More',
        'ui.less': 'Less',
        
        // Form Labels
        'form.name': 'Name',
        'form.email': 'Email',
        'form.phone': 'Phone',
        'form.message': 'Message',
        'form.subject': 'Subject',
        'form.description': 'Description',
        'form.address': 'Address',
        'form.city': 'City',
        'form.state': 'State',
        'form.country': 'Country',
        'form.zipCode': 'ZIP Code',
        
        // Messages
        'message.success': 'Operation completed successfully',
        'message.error': 'An error occurred. Please try again',
        'message.loading': 'Please wait...',
        'message.noResults': 'No results found',
        'message.noData': 'No data available',
        'message.confirmDelete': 'Are you sure you want to delete this item?',
        'message.unsavedChanges': 'You have unsaved changes. Do you want to leave?',
        
        about: {
          title: 'About Legal Rights Advisor',
          subtitle: 'Empowering every Indian citizen with accessible legal knowledge and tools to understand and protect their rights.',
          values: {
            justice: {
              title: 'Justice for All',
              description: 'We believe every person deserves access to legal knowledge and justice, regardless of their background or education.'
            },
            community: {
              title: 'Community First',
              description: 'Our focus is on empowering rural and underserved communities with essential legal information.'
            },
            protection: {
              title: 'Privacy & Security',
              description: 'Your legal queries and personal information are completely confidential and secure.'
            },
            compassion: {
              title: 'Compassionate Support',
              description: 'We provide legal guidance with empathy, understanding the challenges faced by those seeking justice.'
            }
          },
          stats: {
            people: 'People Helped',
            cases: 'Legal Cases',
            support: 'Support Available',
            languages: 'Languages Supported'
          },
          features: {
            personalized: {
              title: 'Personalized Guidance',
              description: 'Get personalized legal advice based on your specific situation'
            },
            verified: {
              title: 'Verified Information',
              description: 'All legal information is verified by Indian laws and experts'
            }
          }
        },
        
        // FAQ
        'faq.title': 'Frequently Asked Questions',
        'faq.subtitle': 'Find answers to common legal questions and concerns',
        'faq.search.placeholder': 'Search questions...',
        'faq.noResults': 'No questions found matching your search',
        'faq.contact.title': 'Still have questions?',
        'faq.contact.description': 'Our legal experts are here to help you with any specific questions or concerns',
        'faq.contact.chatButton': 'Chat with Expert',
        'faq.contact.contactButton': 'Contact Support',
        
        // Contact
        'contact.title': 'Contact Us',
        'contact.subtitle': 'Have questions about your legal rights? We\'re here to help.',
        'contact.form.name': 'Name *',
        'contact.form.email': 'Email *',
        'contact.form.phone': 'Phone',
        'contact.form.subject': 'Subject *',
        'contact.form.message': 'Message *',
        'contact.form.messagePlaceholder': 'Describe your legal concern or question...',
        'contact.form.submit': 'Send Message',
        'contact.form.success': 'Message sent successfully! We will get back to you soon.',
        'contact.form.error': 'Error sending message. Please try again.',
        'contact.info.email.title': 'Email Us',
        'contact.info.email.description': 'Get in touch via email',
        'contact.info.phone.title': 'Call Us',
        'contact.info.phone.description': '24/7 Legal Helpline',
        'contact.info.visit.title': 'Visit Us',
        'contact.info.visit.description': 'Our headquarters',
        'contact.info.visit.address': 'Mumbai, Maharashtra, India',
        'contact.quickLinks.chat.title': 'Start Live Chat',
        'contact.quickLinks.chat.description': 'For instant assistance',
        'contact.quickLinks.hours.title': 'Office Hours',
        'contact.quickLinks.hours.description': 'Monday - Friday: 9 AM - 6 PM',
        'contact.responseTime': 'We respond to all messages within 24 hours. For emergency matters, please call our helpline.',
        
        // Emergency Contacts
        'emergency.legalAid.title': 'Legal Aid Services',
        'emergency.legalAid.inState': 'in {state}',
        'emergency.legalAid.hours': 'Hours: {hours}',
        
        // Subjects
        'subjects.legalQuery': 'Legal Query',
        'subjects.domesticViolence': 'Domestic Violence',
        'subjects.workerRights': 'Worker Rights',
        'subjects.propertyDispute': 'Property Dispute',
        'subjects.consumerRights': 'Consumer Rights',
        'subjects.appSupport': 'App Support',
        'subjects.other': 'Other',
        
        // FAQ Categories
        'faq.categories.constitutionalRights': 'Constitutional Rights',
        'faq.categories.domesticViolence': 'Domestic Violence',
        'faq.categories.laborRights': 'Labor Rights',
        'faq.categories.consumerRights': 'Consumer Rights',
        'faq.categories.legalAid': 'Legal Aid',
        'faq.categories.propertyRights': 'Property Rights',
        'faq.categories.rightToInformation': 'Right to Information',
        'faq.categories.criminalLaw': 'Criminal Law',

        // FAQ Questions and Answers
        'faq.questions.basicRights.question': 'What are my basic legal rights in India?',
        'faq.questions.basicRights.answer': 'Every Indian citizen has fundamental rights including right to equality (Article 14), freedom of speech and expression (Article 19), right to life and personal liberty (Article 21), right against exploitation (Articles 23-24), and right to constitutional remedies (Article 32). These are guaranteed by the Constitution and are enforceable by courts.',
        
        'faq.questions.domesticViolence.question': 'How can I file a complaint for domestic violence?',
        'faq.questions.domesticViolence.answer': 'You can file a complaint under the Protection of Women from Domestic Violence Act, 2005 at the nearest magistrate\'s court or police station. You can also contact the National Women Helpline at 1091. Our app provides ready-to-use complaint templates that you can download and fill.',
        
        'faq.questions.minimumWage.question': 'What should I do if my employer doesn\'t pay minimum wage?',
        'faq.questions.minimumWage.answer': 'You can file a complaint with the Labour Commissioner or approach the industrial tribunal. Keep records of your work hours and salary payments as evidence. The current minimum wage varies by state but is approximately ₹300 per day for most workers.',
        
        'faq.questions.consumerComplaint.question': 'How long do I have to file a consumer complaint?',
        'faq.questions.consumerComplaint.answer': 'Consumer complaints must be filed within 2 years from the date of purchase or when the problem was discovered. Keep all receipts, warranty documents, and evidence of the defect. You can file complaints online through the National Consumer Helpline.',
        
        'faq.questions.legalAid.question': 'Can I get free legal aid?',
        'faq.questions.legalAid.answer': 'Yes, free legal aid is available for those who cannot afford legal services. Contact your local Legal Services Authority or call the legal aid helpline at 15100. Eligibility includes families with annual income below ₹5 lakhs.',
        
        'faq.questions.propertyRegistration.question': 'What documents do I need for property registration?',
        'faq.questions.propertyRegistration.answer': 'You need sale deed, property tax receipts, survey settlement records, encumbrance certificate, identity and address proofs of both parties, and passport-size photographs. Stamp duty and registration fees apply as per state regulations.',
        
        'faq.questions.rtiApplication.question': 'How do I file an RTI application?',
        'faq.questions.rtiApplication.answer': 'You can file RTI applications online through the RTI portal or submit physically to the concerned Public Information Officer (PIO). Include specific information you seek, contact details, and pay the prescribed fee (₹10 for most applications).',
        
        'faq.questions.policeComplaint.question': 'What is the procedure for police complaint?',
        'faq.questions.policeComplaint.answer': 'You can file an FIR for cognizable offenses or a simple complaint for non-cognizable offenses. Visit the nearest police station, provide details in writing, and ensure you get a copy of the complaint with acknowledgment.',
        
        // Emergency Guidelines
        'emergency.guidelines.title': 'Emergency Guidelines',
        'emergency.guidelines.immediateDanger.title': 'Immediate Danger',
        'emergency.guidelines.immediateDanger.description': 'Call 100 for police immediately. Stay in a safe location and follow police instructions.',
        'emergency.guidelines.legalEmergency.title': 'Legal Emergency',
        'emergency.guidelines.legalEmergency.description': 'Contact legal aid services during business hours or call the 24/7 helpline for urgent matters.',
        'emergency.guidelines.importantTips.title': 'Important Tips',
        'emergency.guidelines.importantTips.description': 'Keep important documents safe, record incidents when possible, and always prioritize your safety.',

        // Hindi translations
        'emergency.guidelines.title': 'आपातकालीन दिशानिर्देश',
        'emergency.guidelines.immediateDanger.title': 'तत्काल खतरा',
        'emergency.guidelines.immediateDanger.description': 'तुरंत पुलिस को 100 पर कॉल करें। सुरक्षित स्थान पर रहें और पुलिस के निर्देशों का पालन करें।',
        'emergency.guidelines.legalEmergency.title': 'कानूनी आपातकाल',
        'emergency.guidelines.subtitle': 'Important information for emergency situations',
        'emergency.guidelines.domesticViolence.title': 'Domestic Violence',
        'emergency.guidelines.domesticViolence.description': 'If you are in immediate danger, call the police at 100 or the women\'s helpline at 1091',
        'emergency.guidelines.domesticViolence.steps': [
          'Call emergency services immediately',
          'Find a safe place if possible',
          'Contact a trusted friend or family member',
          'Document any injuries or evidence',
          'File a police complaint'
        ],
        'emergency.guidelines.legalAid.title': 'Legal Aid',
        'emergency.guidelines.legalAid.description': 'Free legal assistance is available for those who cannot afford it',
        'emergency.guidelines.legalAid.steps': [
          'Contact your nearest Legal Services Authority',
          'Call the legal aid helpline at 15100',
          'Visit the National Legal Services Authority website',
          'Document your financial situation',
          'Prepare relevant documents'
        ],
        'emergency.guidelines.police.title': 'Police Assistance',
        'emergency.guidelines.police.description': 'How to file a police complaint and get immediate assistance',
        'emergency.guidelines.police.steps': [
          'Visit the nearest police station',
          'File an FIR for cognizable offenses',
          'Get a copy of your complaint',
          'Follow up on your case',
          'Keep all documents safe'
        ],
        'emergency.guidelines.medical.title': 'Medical Emergency',
        'emergency.guidelines.medical.description': 'Steps to take in case of medical emergencies',
        'emergency.guidelines.medical.steps': [
          'Call ambulance at 102',
          'Visit the nearest government hospital',
          'Keep medical records',
          'Document injuries with photos',
          'Get medical certificates'
        ],
        'telelaw.title': 'Tele-Law Services',
        'telelaw.hours': 'Hours: 9 AM - 6 PM'
      },
      
      hi: {
        // App
        'app.title': 'कानूनी अधिकार सलाहकार',
        'app.subtitle': 'अपने अधिकारों को जानें, अपने भविष्य की रक्षा करें',
        
        // Navigation
        'nav.home': 'होम',
        'nav.faq': 'प्रश्न उत्तर',
        'nav.about': 'हमारे बारे में',
        'nav.contact': 'संपर्क करें',
        'nav.search': 'खोजें',
        'nav.calculator': 'कैलकुलेटर',
        'nav.documents': 'दस्तावेज़',
        'nav.emergency': 'आपातकाल',
        
        // Features
        'features.title': 'शक्तिशाली सुविधाएं',
        'features.subtitle': 'भारतीय कानूनों के लिए व्यापक कानूनी उपकरण',
        'features.search.title': 'AI-संचालित कानूनी खोज',
        'features.search.description': 'उन्नत AI तकनीक का उपयोग करके व्यापक कानूनी जानकारी प्राप्त करें',
        'calculator.title': 'कानूनी अधिकार कैलकुलेटर',
        'calculator.description': 'अपनी विशिष्ट स्थिति के आधार पर कानूनी अधिकारों की गणना करें',
        'calculator.categories.labor.title': 'श्रम अधिकार',
        'calculator.categories.labor.description': 'न्यूनतम मजदूरी, ओवरटाइम और कर्मचारी लाभों की गणना करें',
        'calculator.categories.property.title': 'संपत्ति अधिकार',
        'calculator.categories.property.description': 'संपत्ति स्वामित्व और उत्तराधिकार कानूनों को समझें',
        'calculator.categories.consumer.title': 'उपभोक्ता अधिकार',
        'calculator.categories.consumer.description': 'उपभोक्ता के रूप में अपने अधिकारों और मुआवजे के दावों को जानें',
        'calculator.fields.workHours': 'दैनिक कार्य घंटे',
        'calculator.fields.salary': 'मासिक वेतन (₹)',
        'calculator.fields.workDays': 'प्रति माह कार्य दिवस',
        'calculator.fields.propertyValue': 'संपत्ति मूल्य (₹)',
        'calculator.fields.ownershipType': 'स्वामित्व प्रकार',
        'calculator.fields.location': 'संपत्ति स्थान',
        'calculator.fields.purchaseAmount': 'खरीद राशि (₹)',
        'calculator.fields.issueType': 'समस्या प्रकार',
        'calculator.fields.purchaseDate': 'खरीद तिथि',
        'calculator.buttons.calculate': 'मेरे अधिकारों की गणना करें',
        'calculator.buttons.back': 'वापस',
        'calculator.results.title': 'आपका कानूनी अधिकार विश्लेषण',
        'calculator.results.recommendations': 'कानूनी सिफारिशें',
        'calculator.select.placeholder': '{field} चुनें',
        'calculator.input.placeholder': '{field} दर्ज करें',
        'emergency.title': 'आपातकालीन संपर्क',
        'emergency.description': 'कानूनी सहायता और आपातकालीन सेवाओं तक त्वरित पहुंच',
        'chatbot.title': 'AI कानूनी सहायक',
        'chatbot.description': 'तत्काल कानूनी मार्गदर्शन और सलाह के लिए AI के साथ चैट करें',
        'voice.title': 'आवाज सहायता',
        'voice.description': 'आवाज कमांड का उपयोग करके प्रश्न पूछें और उत्तर प्राप्त करें',
        'language.title': 'बहुभाषी समर्थन',
        'language.description': 'अंग्रेजी, हिंदी, मराठी और तेलुगु में उपलब्ध',
        
        // Search
        'search.placeholder': 'अपने कानूनी अधिकारों के बारे में पूछें...',
        'search.results': 'खोज परिणाम',
        'search.button': 'खोजें',
        'search.listening': 'सुन रहे हैं... अब बोलें',
        'search.notSupported': 'आवाज खोज समर्थित नहीं है',
        
        // Buttons & Actions
        'button.download': 'डाउनलोड करें',
        'button.preview': 'पूर्वावलोकन',
        'button.call': 'कॉल करें',
        'button.clear': 'साफ करें',
        'button.send': 'भेजें',
        'button.close': 'बंद करें',
        
        // Common
        'loading': 'लोड हो रहा है...',
        'error': 'त्रुटि हुई',
        'success': 'सफलता',
        'required': 'आवश्यक',
        'optional': 'वैकल्पिक',
        'date': 'दिनांक',
        'signature': 'हस्ताक्षर',
        
        // Legal Terms
        'legal.complaint': 'शिकायत',
        'legal.application': 'आवेदन',
        'legal.rights': 'कानूनी अधिकार',
        'legal.laws': 'संबंधित कानून',
        'legal.steps': 'सुझाए गए कदम',
        'legal.emergency': 'आपातकाल',
        'legal.urgent': 'तत्काल',
        'legal.medium': 'मध्यम प्राथमिकता',
        'legal.low': 'कम प्राथमिकता',
        
        // Features Grid
        'features.grid.title': 'के लिए शक्तिशाली सुविधाएं',
        'features.grid.subtitle': 'कानूनी सशक्तिकरण',
        'features.grid.description': 'भारतीय कानूनों और अधिकारों के लिए विशेष रूप से डिज़ाइन किए गए व्यापक कानूनी उपकरणों तक पहुंच',
        
        // Privacy
        'privacy.title': 'गोपनीयता संरक्षित',
        'privacy.description': 'आपकी कानूनी पूछताछ पूरी तरह से गोपनीय और सुरक्षित है',
        
        // Common UI Elements
        'ui.learnMore': 'और जानें',
        'ui.readMore': 'और पढ़ें',
        'ui.viewAll': 'सभी देखें',
        'ui.back': 'वापस',
        'ui.next': 'अगला',
        'ui.previous': 'पिछला',
        'ui.submit': 'जमा करें',
        'ui.cancel': 'रद्द करें',
        'ui.save': 'सहेजें',
        'ui.edit': 'संपादित करें',
        'ui.delete': 'हटाएं',
        'ui.confirm': 'पुष्टि करें',
        'ui.yes': 'हाँ',
        'ui.no': 'नहीं',
        'ui.more': 'और',
        'ui.less': 'कम',
        
        // Form Labels
        'form.name': 'नाम',
        'form.email': 'ईमेल',
        'form.phone': 'फोन',
        'form.message': 'संदेश',
        'form.subject': 'विषय',
        'form.description': 'विवरण',
        'form.address': 'पता',
        'form.city': 'शहर',
        'form.state': 'राज्य',
        'form.country': 'देश',
        'form.zipCode': 'पिन कोड',
        
        // Messages
        'message.success': 'कार्य सफलतापूर्वक पूरा हुआ',
        'message.error': 'एक त्रुटि हुई। कृपया पुनः प्रयास करें',
        'message.loading': 'कृपया प्रतीक्षा करें...',
        'message.noResults': 'कोई परिणाम नहीं मिला',
        'message.noData': 'कोई डेटा उपलब्ध नहीं है',
        'message.confirmDelete': 'क्या आप वाकई इस आइटम को हटाना चाहते हैं?',
        'message.unsavedChanges': 'आपके पास असहेजित परिवर्तन हैं। क्या आप छोड़ना चाहते हैं?',
        
        about: {
          title: 'कानूनी अधिकार सलाहकार के बारे में',
          subtitle: 'भारत के हर नागरिक को सुलभ कानूनी ज्ञान और उनके अधिकारों को समझने और सुरक्षित करने के लिए उपकरण प्रदान करना।',
          values: {
            justice: {
              title: 'सभी के लिए न्याय',
              description: 'हम मानतो की प्रत्येक व्यक्तीला त्यांची पार्श्वभूमी किंवा शिक्षणाची पर्वा न करता कायदेशीर ज्ञान आणि न्यायाचा अधिकार आहे.'
            },
            community: {
              title: 'समुदाय पहले',
              description: 'हमारा फोकस ग्रामीण और वंचित समुदायों को आवश्यक कानूनी जानकारी के साथ सशक्त बनाने पर है।'
            },
            protection: {
              title: 'गोपनीयता और सुरक्षा',
              description: 'आपकी कानूनी पूछताछ और व्यक्तिगत जानकारी पूरी तरह से गोपनीय और सुरक्षित है।'
            },
            compassion: {
              title: 'दयालु सहायता',
              description: 'हम न्याय की तलाश करने वालों की चुनौतियों को समझते हुए सहानुभूति के साथ कानूनी मार्गदर्शन प्रदान करते हैं।'
            }
          },
          stats: {
            people: 'लोगों की मदद की',
            cases: 'कानूनी मामले',
            support: 'सहायता उपलब्ध',
            languages: 'भाषाओं में उपलब्ध'
          },
          features: {
            personalized: {
              title: 'व्यक्तिगत सलाह',
              description: 'आपकी विशिष्ट स्थिति के आधार पर व्यक्तिगत कानूनी सलाह'
            },
            verified: {
              title: 'प्रमाणित जानकारी',
              description: 'सभी कानूनी जानकारी भारतीय कानूनों और विशेषज्ञों द्वारा सत्यापित है'
            }
          }
        },
        
        // FAQ
        'faq.title': 'अक्सर पूछे जाने वाले प्रश्न',
        'faq.subtitle': 'सामान्य कानूनी प्रश्नों और चिंताओं के उत्तर खोजें',
        'faq.search.placeholder': 'प्रश्न खोजें...',
        'faq.noResults': 'आपकी खोज से मेल खाता कोई प्रश्न नहीं मिला',
        'faq.contact.title': 'अभी भी प्रश्न हैं?',
        'faq.contact.description': 'हमारे कानूनी विशेषज्ञ आपकी किसी भी विशिष्ट प्रश्न या चिंता में मदद करने के लिए यहां हैं',
        'faq.contact.chatButton': 'विशेषज्ञ से चैट करें',
        'faq.contact.contactButton': 'सहायता से संपर्क करें',
        
        // Contact
        'contact.title': 'संपर्क करें',
        'contact.subtitle': 'अपने कानूनी अधिकारों के बारे में प्रश्न हैं? हम यहाँ मदतीसाठी येथे आहोत.',
        'contact.form.name': 'नाम *',
        'contact.form.email': 'ईमेल *',
        'contact.form.phone': 'फोन',
        'contact.form.subject': 'विषय *',
        'contact.form.message': 'संदेश *',
        'contact.form.messagePlaceholder': 'तुमची कानूनी चिंता किंवा प्रश्नाचे वर्णन करा...',
        'contact.form.submit': 'संदेश पाठवा',
        'contact.form.success': 'संदेश यशस्वीरित्या पाठवला गेला! आम्ही लवकरच तुमच्याशी संपर्क करू.',
        'contact.form.error': 'संदेश पाठवण्यात त्रुटी झाली. कृपया पुन्हा प्रयास करा.',
        'contact.info.email.title': 'आम्हाला ईमेल करा',
        'contact.info.email.description': 'ईमेलद्वारे संपर्क साधा',
        'contact.info.phone.title': 'आम्हाला कॉल करा',
        'contact.info.phone.description': '24/7 कानूनी हेल्पलाइन',
        'contact.info.visit.title': 'आमच्याशी भेटा',
        'contact.info.visit.description': 'आमचे मुख्यालय',
        'contact.info.visit.address': 'मुंबई, महाराष्ट्र, भारत',
        'contact.quickLinks.chat.title': 'लाइव्ह चॅट सुरू करा',
        'contact.quickLinks.chat.description': 'त्वरित मदतीसाठी',
        'contact.quickLinks.hours.title': 'कार्यालयीन वेळ',
        'contact.quickLinks.hours.description': 'सोमवार - शుक्रवार: 9 AM - 6 PM',
        'contact.responseTime': 'आम्ही 24 तासांच्या आत सर्व संदेशांना उत्तर देतो. आणीबाणीच्या प्रकरणांसाठी, कृपया आमच्या हेल्पलाइनवर कॉल करा.',
        
        // Emergency Contacts
        'emergency.legalAid.title': 'कानूनी सहायता सेवा',
        'emergency.legalAid.inState': '{state} मध्ये',
        'emergency.legalAid.hours': 'वेळ: {hours}',
        
        // Subjects
        'subjects.legalQuery': 'कानूनी प्रश्न',
        'subjects.domesticViolence': 'घरगुती हिंसाचार',
        'subjects.workerRights': 'कामगार हक्क',
        'subjects.propertyDispute': 'मालमत्ता वाद',
        'subjects.consumerRights': 'ग्राहक हक्क',
        'subjects.appSupport': 'अॅप सपोर्ट',
        'subjects.other': 'इतर',
        
        // Emergency Guidelines
        'emergency.guidelines.title': 'आपातकालीन दिशानिर्देश',
        'emergency.guidelines.subtitle': 'आपातकालीन स्थितियों के लिए महत्वपूर्ण जानकारी',
        'emergency.guidelines.domesticViolence.title': 'घरेलू हिंसाचार',
        'emergency.guidelines.domesticViolence.description': 'यदि आप तत्काल खतरे में हैं, तो पुलिस को 100 या महिला हेल्पलाइन को 1091 पर कॉल करें',
        'emergency.guidelines.domesticViolence.steps': [
          'तुरंत आपातकालीन सेवाओं को कॉल करें',
          'शक्य असल्यास सुरक्षित ठिकाण शोधा',
          'विश्वसनीय मित्र किंवा कुटुंबीयांशी संपर्क करें',
          'किसी भी चोट या सबूत को दस्तावेज करें',
          'पुलिस शिकायत दर्ज करें'
        ],
        'emergency.guidelines.legalAid.title': 'कानूनी सहायता',
        'emergency.guidelines.legalAid.description': 'जो लोग इसे वहन नहीं कर सकते उनके लिए मुफ्त कानूनी सहायता उपलब्ध है',
        'emergency.guidelines.legalAid.steps': [
          'अपने निकटतम कानूनी सेवा प्राधिकरण से संपर्क करें',
          'कानूनी सहायता हेल्पलाइन 15100 पर कॉल करें',
          'राष्ट्रीय कानूनी सेवा प्राधिकरण की वेबसाइट पर जाएं',
          'अपनी वित्तीय स्थिति का दस्तावेजीकरण करें',
          'प्रासंगिक दस्तावेज तैयार करें'
        ],
        'emergency.guidelines.police.title': 'पुलिस सहायता',
        'emergency.guidelines.police.description': 'पुलिस शिकायत कैसे दर्ज करें और तत्काल सहायता कैसे प्राप्त करें',
        'emergency.guidelines.police.steps': [
          'निकटतम पुलिस स्टेशन पर जाएं',
          'संज्ञेय अपराधों के लिए एफआईआर दर्ज करें',
          'अपनी शिकायत की प्रति प्राप्त करें',
          'अपने मामले का अनुवर्तन करें',
          'सभी दस्तावेजों को सुरक्षित रखें'
        ],
        'emergency.guidelines.medical.title': 'चिकित्सा आपातकाल',
        'emergency.guidelines.medical.description': 'चिकित्सा आपातकाल के मामले में उठाए जाने वाले कदम',
        'emergency.guidelines.medical.steps': [
          'एम्बुलेंस को 102 पर कॉल करें',
          'निकटतम सरकारी अस्पताल में जाएं',
          'चिकित्सा रिकॉर्ड रखें',
          'चोटों का फोटो के साथ दस्तावेजीकरण करें',
          'चिकित्सा प्रमाणपत्र प्राप्त करें'
        ],
        'telelaw.title': 'टेली-लॉ सेवा',
        'telelaw.hours': 'समय: सुबह 9 बजे - शाम 6 बजे'
      },
      
      mr: {
        // App
        'app.title': 'कायदेशीर हक्क सल्लागार',
        'app.subtitle': 'तुमचे हक्क जाणा, तुमच्या भविष्याचे रक्षण करा',
        
        // Navigation
        'nav.home': 'होम',
        'nav.faq': 'प्रश्न उत्तरे',
        'nav.about': 'आमच्याबद्दल',
        'nav.contact': 'संपर्क',
        'nav.search': 'शोधा',
        'nav.calculator': 'कॅल्क्युलेटर',
        'nav.documents': 'कागदपत्रे',
        'nav.emergency': 'आपत्काल',
        
        // Features
        'features.title': 'शक्तिशाली वैशिष्ट्ये',
        'features.subtitle': 'भारतीय कायद्यांसाठी व्यापक कायदेशीर साधने',
        'features.search.title': 'AI-चालित कायदेशीर शोध',
        'features.search.description': 'प्रगत AI तंत्रज्ञानाचा वापर करून व्यापक कायदेशीर माहिती मिळवा',
        'calculator.title': 'कायदेशीर हक्क कॅल्क्युलेटर',
        'calculator.description': 'तुमच्या विशिष्ट परिस्थितीनुसार कायदेशीर हक्कांची गणना करा',
        'calculator.categories.labor.title': 'कामगार हक्क',
        'calculator.categories.labor.description': 'किमान वेतन, ओव्हरटाइम आणि कर्मचारी लाभांची गणना करें',
        'calculator.categories.property.title': 'मालमत्ता हक्क',
        'calculator.categories.property.description': 'मालमत्तेचे मालकी हक्क आणि वारसा कायदे समजून घ्या',
        'calculator.categories.consumer.title': 'ग्राहक हक्क',
        'calculator.categories.consumer.description': 'ग्राहक म्हणून तुमचे हक्क आणि नुकसानभरपाईचे दावे जाणून घ्या',
        'calculator.fields.workHours': 'दैनिक कामाचे तास',
        'calculator.fields.salary': 'मासिक पगार (₹)',
        'calculator.fields.workDays': 'महिन्यातील कामाचे दिवस',
        'calculator.fields.propertyValue': 'मालमत्तेचे मूल्य (₹)',
        'calculator.fields.ownershipType': 'मालकीचा प्रकार',
        'calculator.fields.location': 'मालमत्तेचे स्थान',
        'calculator.fields.purchaseAmount': 'खरीद राशि (₹)',
        'calculator.fields.issueType': 'समस्येचा प्रकार',
        'calculator.fields.purchaseDate': 'खरीद तारीख',
        'calculator.buttons.calculate': 'माझ्या हक्कांची गणना करा',
        'calculator.buttons.back': 'मागे',
        'calculator.results.title': 'तुमचे कायदेशीर हक्क विश्लेषण',
        'calculator.results.recommendations': 'कायदेशीर शिफारसी',
        'calculator.select.placeholder': '{field} निवडा',
        'calculator.input.placeholder': '{field} प्रविष्ट करा',
        'emergency.title': 'आणीबाणीची संपर्क',
        'emergency.description': 'कायदेशीर मदत आणि आणीबाणीच्या सेवांना त्वरित प्रवेश',
        'chatbot.title': 'AI कायदेशीर सहाय्यक',
        'chatbot.description': 'त्वरित कायदेशीर मार्गदर्शन आणि सलाह के लिए AI शी चॅट करा',
        'voice.title': 'आवाज समर्थन',
        'voice.description': 'आवाज कमांड वापरून प्रश्न विचारा आणि उत्तरे मिळवा',
        'language.title': 'बहुभाषी समर्थन',
        'language.description': 'इंग्रजी, हिंदी, मराठी आणि तेलुगूमध्ये उपलब्ध',
        
        // Search
        'search.placeholder': 'तुमच्या कायदेशीर हक्कांबद्दल विचारा...',
        'search.results': 'शोध परिणाम',
        'search.button': 'शोधा',
        'search.listening': 'ऐकत आहे... आता बोला',
        'search.notSupported': 'आवाज शोध समर्थित नाही',
        
        // Buttons & Actions
        'button.download': 'डाउनलोड करें',
        'button.preview': 'पूर्वावलोकन',
        'button.call': 'कॉल करें',
        'button.clear': 'साफ करें',
        'button.send': 'भेजें',
        'button.close': 'बंद करें',
        
        // Common
        'loading': 'लोड होत आहे...',
        'error': 'त्रुटी हुई',
        'success': 'यश',
        'required': 'आवश्यक',
        'optional': 'वैकल्पिक',
        'date': 'दिनांक',
        'signature': 'स्वाक्षरी',
        
        // Legal Terms
        'legal.complaint': 'तक्रार',
        'legal.application': 'अर्ज',
        'legal.rights': 'कायदेशीर हक्क',
        'legal.laws': 'संबंधित कायदे',
        'legal.steps': 'शिफारस केलेली पावले',
        'legal.emergency': 'आणीबाणी',
        'legal.urgent': 'तातडीचे',
        'legal.medium': 'मध्यम प्राथमिकता',
        'legal.low': 'कमी प्राथमिकता',
        
        // Features Grid
        'features.grid.title': 'साठी शक्तिशाली वैशिष्ट्ये',
        'features.grid.subtitle': 'कायदेशीर सक्षमीकरण',
        'features.grid.description': 'भारतीय कायदे आणि हक्कांसाठी विशेषतः डिझाइन केलेल्या व्यापक कायदेशीर साधनांना प्रवेश',
        
        // Privacy
        'privacy.title': 'गोपनीयता संरक्षित',
        'privacy.description': 'तुमच्या कायदेशीर चौकशी पूर्णपणे गोपनीय आणि सुरक्षित आहेत',
        
        // Common UI Elements
        'ui.learnMore': 'अधिक जाणा',
        'ui.readMore': 'अधिक वाचा',
        'ui.viewAll': 'सभी देखें',
        'ui.back': 'वापस',
        'ui.next': 'अगला',
        'ui.previous': 'पिछला',
        'ui.submit': 'जमा करें',
        'ui.cancel': 'रद्द करें',
        'ui.save': 'सहेजें',
        'ui.edit': 'संपादित करें',
        'ui.delete': 'हटवा',
        'ui.confirm': 'पुष्टी करें',
        'ui.yes': 'होय',
        'ui.no': 'नाही',
        'ui.more': 'अधिक',
        'ui.less': 'कमी',
        
        // Form Labels
        'form.name': 'नाव',
        'form.email': 'ईमेल',
        'form.phone': 'फोन',
        'form.message': 'संदेश',
        'form.subject': 'विषय',
        'form.description': 'विवरण',
        'form.address': 'पत्ता',
        'form.city': 'शहर',
        'form.state': 'राज्य',
        'form.country': 'देश',
        'form.zipCode': 'पिन कोड',
        
        // Messages
        'message.success': 'कार्य यशस्वीरित्या पूर्ण झाले',
        'message.error': 'एक त्रुटी आली. कृपया पुन्हा प्रयत्न करा',
        'message.loading': 'कृपया प्रतीक्षा करें...',
        'message.noResults': 'कोणतेही परिणाम सापडले नाहीत',
        'message.noData': 'कोणताही डेटा उपलब्ध नाही',
        'message.confirmDelete': 'तुम्हाला खात्री आहे की तुम्ही हा आयटम हटवू इच्छिता?',
        'message.unsavedChanges': 'तुमच्याकडे न जतन केलेले बदल आहेत. तुम्ही सोडू इच्छिता?',
        
        about: {
          title: 'कायदेशीर हक्क सल्लागार बद्दल',
          subtitle: 'प्रत्येक भारतीय नागरिकाला त्यांचे हक्क समजून घेण्यासाठी आणि संरक्षणासाठी सुलभ कायदेशीर ज्ञान आणि साधने प्रदान करणे.',
          values: {
            justice: {
              title: 'सर्वांसाठी न्याय',
              description: 'आम्ही मानतो की प्रत्येक व्यक्तीला त्यांची पार्श्वभूमी किंवा शिक्षणाची पर्वा न करता कायदेशीर ज्ञान आणि न्यायाचा अधिकार आहे.'
            },
            community: {
              title: 'समुदाय प्रथम',
              description: 'आमचे लक्ष ग्रामीण आणि वंचित समुदायांना आवश्यक कायदेशीर माहितीसह सक्षम करण्यावर आहे.'
            },
            protection: {
              title: 'गोपनीयता आणि सुरक्षा',
              description: 'तुमच्या कायदेशीर चौकशी आणि वैयक्तिक माहिती पूर्णपणे गोपनीय आणि सुरक्षित आहे.'
            },
            compassion: {
              title: 'दयाळू समर्थन',
              description: 'आम्ही न्यायाच्या शोधात असलेल्यांच्या आव्हानांना समजून सहानुभूतीसह कायदेशीर मार्गदर्शन देतो.'
            }
          },
          stats: {
            people: 'लोकांना मदत केली',
            cases: 'कायदेशीर प्रकरणे',
            support: 'सपोर्ट उपलब्ध',
            languages: 'भाषांमध्ये उपलब्ध'
          },
          features: {
            personalized: {
              title: 'वैयक्तिक सलाह',
              description: 'तुमच्या विशिष्ट परिस्थिती आधारित वैयक्तिक कायदेशीर सल्ला'
            },
            verified: {
              title: 'प्रमाणित माहिती',
              description: 'सर्व कायदेशीर माहिती भारतीय कायद्यांनी आणि तज्ञांनी सत्यापित आहे'
            }
          }
        },
        
        // FAQ
        'faq.title': 'वारंवार विचारले जाणारे प्रश्न',
        'faq.subtitle': 'सामान्य कायदेशीर प्रश्न आणि चिंता यांची उत्तरे शोधा',
        'faq.search.placeholder': 'प्रश्न शोधा...',
        'faq.noResults': 'तुमच्या शोधाशी जुळणारा कोणताही प्रश्न सापडला नाही',
        'faq.contact.title': 'अजूनही प्रश्न आहेत?',
        'faq.contact.description': 'आमचे कायदेशीर तज्ज्ञ तुमच्या कोणत्याही विशिष्ट प्रश्न किंवा चिंतेत मदत करण्यासाठी येथे आहेत',
        'faq.contact.chatButton': 'तज्ज्ञांशी चॅट करा',
        'faq.contact.contactButton': 'सपोर्टशी संपर्क साधा',
        
        // Contact
        'contact.title': 'संपर्क साधा',
        'contact.subtitle': 'तुमच्या कायदेशीर हक्कांबद्दल प्रश्न आहेत? आम्ही मदतीसाठी येथे आहोत.',
        'contact.form.name': 'नाव *',
        'contact.form.email': 'ईमेल *',
        'contact.form.phone': 'फोन',
        'contact.form.subject': 'विषय *',
        'contact.form.message': 'संदेश *',
        'contact.form.messagePlaceholder': 'तुमची कायदेशीर चिंता किंवा प्रश्नाचे वर्णन करा...',
        'contact.form.submit': 'संदेश पाठवा',
        'contact.form.success': 'संदेश यशस्वीरित्या पाठवला गेला! आम्ही लवकरच तुमच्याशी संपर्क करू.',
        'contact.form.error': 'संदेश पाठवण्यात त्रुटी झाली. कृपया पुन्हा प्रयास करा.',
        'contact.info.email.title': 'आम्हाला ईमेल करा',
        'contact.info.email.description': 'ईमेलद्वारे संपर्क साधा',
        'contact.info.phone.title': 'आम्हाला कॉल करा',
        'contact.info.phone.description': '24/7 कायदेशीर हेल्पलाइन',
        'contact.info.visit.title': 'आमच्याशी भेटा',
        'contact.info.visit.description': 'आमचे मुख्यालय',
        'contact.info.visit.address': 'मुंबई, महाराष्ट्र, भारत',
        'contact.quickLinks.chat.title': 'लाइव्ह चॅट सुरू करा',
        'contact.quickLinks.chat.description': 'त्वरित मदतीसाठी',
        'contact.quickLinks.hours.title': 'कार्यालयीन वेळ',
        'contact.quickLinks.hours.description': 'सोमवार - शుक्रवार: 9 AM - 6 PM',
        'contact.responseTime': 'आम्ही 24 तासांच्या आत सर्व संदेशांना उत्तर देतो. आणीबाणीच्या प्रकरणांसाठी, कृपया आमच्या हेल्पलाइनवर कॉल करा.',
        
        // Emergency Contacts
        'emergency.legalAid.title': 'कायदेशीर सहायता सेवा',
        'emergency.legalAid.inState': '{state} मध्ये',
        'emergency.legalAid.hours': 'वेळ: {hours}',
        
        // Subjects
        'subjects.legalQuery': 'कायदेशीर प्रश्न',
        'subjects.domesticViolence': 'घरगुती हिंसाचार',
        'subjects.workerRights': 'कामगार हक्क',
        'subjects.propertyDispute': 'मालमत्ता वाद',
        'subjects.consumerRights': 'ग्राहक हक्क',
        'subjects.appSupport': 'अॅप सपोर्ट',
        'subjects.other': 'इतर',
        
        // Emergency Guidelines
        'emergency.guidelines.title': 'आपत्कालीन मार्गदर्शक तत्त्वे',
        'emergency.guidelines.subtitle': 'आपत्कालीन परिस्थितींसाठी महत्त्वाची माहिती',
        'emergency.guidelines.domesticViolence.title': 'घरगुती हिंसाचार',
        'emergency.guidelines.domesticViolence.description': 'जर तुम्ही तातडीच्या धोक्यात असाल तर पोलीसांना 100 किंवा महिला हेल्पलाइनला 1091 वर कॉल करें',
        'emergency.guidelines.domesticViolence.steps': [
          'तातडीने आपत्कालीन सेवांना कॉल करा',
          'शक्य असल्यास सुरक्षित ठिकाण शोधा',
          'विश्वसनीय मित्र किंवा कुटुंबीयांशी संपर्क साधा',
          'कोणत्याही जखमा किंवा पुराव्यांचे दस्तऐवजीकरण करा',
          'पोलीस तक्रार दाखल करा'
        ],
        'emergency.guidelines.legalAid.title': 'कायदेशीर सहायता',
        'emergency.guidelines.legalAid.description': 'जे लोग ते परवडू शकत नाहीत त्यांच्यासाठी मोफत कायदेशीर सहायता उपलब्ध आहे',
        'emergency.guidelines.legalAid.steps': [
          'तुमच्या जवळच्या कायदेशीर सेवा प्राधिकरणाशी संपर्क साधा',
          'कायदेशीर सहायता हेल्पलाइन 15100 वर कॉल करें',
          'राष्ट्रीय कायदेशीर सेवा प्राधिकरणाच्या वेबसाइटला भेट द्या',
          'तुमच्या आर्थिक परिस्थितीचे दस्तऐवजीकरण करा',
          'संबंधित कागदपत्रे तयार करा'
        ],
        'emergency.guidelines.police.title': 'पोलीस सहायता',
        'emergency.guidelines.police.description': 'पोलीस शिकायत कैसे दर्ज करें और तत्काल सहायता कैसे प्राप्त करें',
        'emergency.guidelines.police.steps': [
          'निकटतम पुलिस स्टेशन पर जाएं',
          'संज्ञेय अपराधों के लिए एफआईआर दर्ज करें',
          'अपनी शिकायत की प्रति प्राप्त करें',
          'अपने मामले का अनुवर्तन करें',
          'सभी दस्तावेजों को सुरक्षित रखें'
        ],
        'emergency.guidelines.medical.title': 'वैद्यकीय आपत्काल',
        'emergency.guidelines.medical.description': 'वैद्यकीय आपत्कालीन परिस्थितीत उचलावयाचे पावले',
        'emergency.guidelines.medical.steps': [
          'एम्बुलन्सला 102 वर कॉल करें',
          'जवळच्या सरकारी रुग्णालयाला भेट द्या',
          'वैद्यकीय रेकॉर्ड ठेवा',
          'जखमांचे फोटोसह दस्तऐवजीकरण करा',
          'वैद्यकीय प्रमाणपत्रे मिळवा'
        ],
        'telelaw.title': 'टेली-लॉ सेवा',
        'telelaw.hours': 'वेळ: सकाळी 9 ते संध्याकाळी 6'
      },
      
      te: {
        // App
        'app.title': 'న్యాయ హక్కుల సలహాదారు',
        'app.subtitle': 'మీ హక్కులను తెలుసుకోండి, మీ భవిష్యత్తును రక్షించుకోండి',
        
        // Navigation
        'nav.home': 'హోమ్',
        'nav.faq': 'ప్రశ్న సమాధానాలు',
        'nav.about': 'మా గురించి',
        'nav.contact': 'సంప్రదించండి',
        'nav.search': 'వెతకండి',
        'nav.calculator': 'కాలిక్యులేటర్',
        'nav.documents': 'పత్రాలు',
        'nav.emergency': 'అత్యవసరం',
        
        // Features
        'features.title': 'శక్తివంతమైన లక్షణాలు',
        'features.subtitle': 'భారతీయ చట్టాల కోసం సమగ్ర న్యాయ సాధనాలు',
        'features.search.title': 'AI-శక్తితో న్యాయ శోధన',
        'features.search.description': 'అధునాతన AI సాంకేతికతను ఉపయోగించి సమగ్ర న్యాయ సమాచారం పొందండి',
        'calculator.title': 'చట్టపరమైన హక్కులు కాలిక్యులేటర్',
        'calculator.description': 'మీ నిర్దిష్ట పరిస్థితి ఆధారంగా చట్టపరమైన హక్కులను లెక్కించండి',
        'calculator.categories.labor.title': 'కార్మిక హక్కులు',
        'calculator.categories.labor.description': 'కనీస వేతనం, ఓవర్‌టైమ్ మరియు కార్మిక ప్రయోజనాలను లెక్కించండి',
        'calculator.categories.property.title': 'ఆస్తి హక్కులు',
        'calculator.categories.property.description': 'ఆస్తి యాజమాన్యం మరియు వారసత్వ చట్టాలను అర్థం చేసుకోండి',
        'calculator.categories.consumer.title': 'వినియోగదారు హక్కులు',
        'calculator.categories.consumer.description': 'వినియోగదారుగా మీ హక్కులు మరియు పరిహార దావాలను తెలుసుకోండి',
        'calculator.fields.workHours': 'రోజువారీ పని గంటలు',
        'calculator.fields.salary': 'నెలవారీ జీతం (₹)',
        'calculator.fields.workDays': 'నెలకు పని రోజులు',
        'calculator.fields.propertyValue': 'ఆస్తి విలువ (₹)',
        'calculator.fields.ownershipType': 'యాజమాన్య రకం',
        'calculator.fields.location': 'ఆస్తి స్థానం',
        'calculator.fields.purchaseAmount': 'కొనుగోలు మొత్తం (₹)',
        'calculator.fields.issueType': 'సమస్య రకం',
        'calculator.fields.purchaseDate': 'కొనుగోలు తేదీ',
        'calculator.buttons.calculate': 'నా హక్కులను లెక్కించండి',
        'calculator.buttons.back': 'వెనుకకు',
        'calculator.results.title': 'మీ చట్టపరమైన హక్కులు విశ్లేషణ',
        'calculator.results.recommendations': 'చట్టపరమైన సిఫార్సులు',
        'calculator.select.placeholder': '{field} ఎంచుకోండి',
        'calculator.input.placeholder': '{field} నమోదు చేయండి',
        'documents.title': 'న్యాయ పత్రాలు',
        'documents.description': 'బహుళ భారతీయ భాషలలో న్యాయ ఫారమ్లను డౌన్‌లోడ్ చేయండి',
        'emergency.title': 'అత్యవసర సంప్రదింపులు',
        'emergency.description': 'న్యాయ సహాయం మరియు అత్యవసర సేవలకు త్వరిత ప్రాప్యత',
        'chatbot.title': 'AI న్యాయ సహాయకుడు',
        'chatbot.description': 'తక్షణ న్యాయ మార్గదర్శకత్వం మరియు సలహా కోసం AIతో చాట్ చేయండి',
        'voice.title': 'వాయిస్ మద్దతు',
        'voice.description': 'వాయిస్ ఆదేశాలను ఉపయోగించి ప్రశ్నలు అడగండి మరియు సమాధానాలు పొందండి',
        'language.title': 'బహుభాష మద్దతు',
        'language.description': 'ఇంగ్లీష్, హిందీ, మరాఠీ మరియు తెలుగులో అందుబాటులో',
        
        // Search
        'search.placeholder': 'మీ న్యాయ హక్కుల గురించి అడగండి...',
        'search.results': 'శోధన ఫలితాలు',
        'search.button': 'వెతకండి',
        'search.listening': 'వింటున్నాం... ఇప్పుడు మాట్లాడండి',
        'search.notSupported': 'వాయిస్ సెర్చ్ మద్దతు లేదు',
        
        // Buttons & Actions
        'button.download': 'డౌన్‌లోడ్ చేయండి',
        'button.preview': 'ప్రివ్యూ',
        'button.call': 'కాల్ చేయండి',
        'button.clear': 'క్లియర్ చేయండి',
        'button.send': 'పంపండి',
        'button.close': 'మూసివేయండి',
        
        // Common
        'loading': 'లోడ్ అవుతోంది...',
        'error': 'లోపం సంభవించింది',
        'success': 'విజయం',
        'required': 'అవసరం',
        'optional': 'ఐచ్ఛికం',
        'date': 'తేదీ',
        'signature': 'సంతకం',
        
        // Legal Terms
        'legal.complaint': 'ఫిర్యాదు',
        'legal.application': 'దరఖాస్తు',
        'legal.rights': 'న్యాయ హక్కులు',
        'legal.laws': 'సంబంధిత చట్టాలు',
        'legal.steps': 'సిఫార్సు చేయబడిన చర్యలు',
        'legal.emergency': 'అత్యవసరం',
        'legal.urgent': 'అత్యవసరం',
        'legal.medium': 'మధ్యస్థ ప్రాధాన్యత',
        'legal.low': 'తక్కువ ప్రాధాన్యత',
        
        // Features Grid
        'features.grid.title': 'కోసం శక్తివంతమైన లక్షణాలు',
        'features.grid.subtitle': 'న్యాయ సాధికారత',
        'features.grid.description': 'భారతీయ చట్టాలు మరియు హక్కుల కోసం ప్రత్యేకంగా రూపొందించబడిన సమగ్ర న్యాయ సాధనాలకు ప్రాప్యత',
        
        // Privacy
        'privacy.title': 'గోప్యత రక్షించబడింది',
        'privacy.description': 'మీ న్యాయ ప్రశ్నలు పూర్తిగా రహస్యంగా మరియు సురక్షితంగా ఉంటాయి',
        
        // Common UI Elements
        'ui.learnMore': 'మరింత తెలుసుకోండి',
        'ui.readMore': 'మరింత చదవండి',
        'ui.viewAll': 'అన్నీ చూడండి',
        'ui.back': 'వెనుకకు',
        'ui.next': 'తదుపరి',
        'ui.previous': 'మునుపటి',
        'ui.submit': 'సమర్పించండి',
        'ui.cancel': 'రద్దు చేయండి',
        'ui.save': 'సేవ్ చేయండి',
        'ui.edit': 'సవరించండి',
        'ui.delete': 'తొలగించండి',
        'ui.confirm': 'నిర్ధారించండి',
        'ui.yes': 'అవును',
        'ui.no': 'కాదు',
        'ui.more': 'మరిన్ని',
        'ui.less': 'తక్కువ',
        
        // Form Labels
        'form.name': 'పేరు',
        'form.email': 'ఇమెయిల్',
        'form.phone': 'ఫోన్',
        'form.message': 'సందేశం',
        'form.subject': 'విషయం',
        'form.description': 'వివరణ',
        'form.address': 'చిరునామా',
        'form.city': 'నగరం',
        'form.state': 'రాష్ట్రం',
        'form.country': 'దేశం',
        'form.zipCode': 'పిన్ కోడ్',
        
        // Messages
        'message.success': 'కార్యకలాపం విజయవంతంగా పూర్తయింది',
        'message.error': 'లోపం సంభవించింది. దయచేసి మళ్లీ ప్రయత్నించండి',
        'message.loading': 'దయచేసి వేచి ఉండండి...',
        'message.noResults': 'ఫలితాలు ఏమీ కనుగొనబడలేదు',
        'message.noData': 'డేటా అందుబాటులో లేదు',
        'message.confirmDelete': 'మీరు ఈ అంశాన్ని తొలగించాలనుకుంటున్నారా?',
        'message.unsavedChanges': 'మీకు సేవ్ చేయని మార్పులు ఉన్నాయి. మీరు వెళ్లాలనుకుంటున్నారా?',
        
        about: {
          title: 'న్యాయ హక్కుల సలహాదారుని గురించి',
          subtitle: 'ప్రతి భారతీయ పౌరుడికి వారి హక్కులను అర్థం చేసుకోవడానికి మరియు రక్షించుకోవడానికి అందుబాటులో ఉన్న న్యాయ జ్ఞానం మరియు సాధనాలను అందించడం.',
          values: {
            justice: {
              title: 'అందరికీ న్ୟాయం',
              description: 'ప్రతి వ్యక్తికి వారి నేపథ్యం లేదా విద్య లేకుండా న్యాయ జ్ఞానం మరియు న్యాయానికి ప్రాప్యత అధికారం ఉందని మేము నమ్ముతున్నాము.'
            },
            community: {
              title: 'కమ్యూనిటీ మొదట',
              description: 'గ్రామీణ మరియు వెనుకబడిన కమ్యూనిటీలను అవసరమైన న్యాయ సమాచారంతో శక్తివంతం చేయడంలో మా దృష్టి ఉంది.'
            },
            protection: {
              title: 'గోప్యత & భద్రత',
              description: 'మీ న్యాయ ప్రశ్నలు మరియు వ్యక్తిగత సమాచారం పూర్తిగా రహస్యంగా మరియు సురక్షితంగా ఉంటాయి.'
            },
            compassion: {
              title: 'దయతో మద్దతు',
              description: 'న్యాయం కోరుకునే వారి సవాళ్లను అర్థం చేసుకుని సానుభూతితో న్యాయ మార్గదర్శకత్వం అందిస్తాము.'
            }
          },
          stats: {
            people: 'ప్రజలకు సహాయం చేశాము',
            cases: 'న్యాయ కేసులు',
            support: 'మద్దతు అందుబాటులో',
            languages: 'భాషలలో అందుబాటులో'
          },
          features: {
            personalized: {
              title: 'వ్యక్తిగత సలహా',
              description: 'మీ ప్రత్యేక పరిస్థితి ఆధారంగా వ్యక్తిగత న్యాయ సలహా'
            },
            verified: {
              title: 'ధృవీకరించబడిన సమాచారం',
              description: 'అన్ని న్యాయ సమాచారం భారతీయ చట్టాలు మరియు నిపుణులచే ధృవీకరించబడింది'
            }
          }
        },
        
        // FAQ
        'faq.title': 'తరచుగా అడిగే ప్రశ్నలు',
        'faq.subtitle': 'సాధారణ న్యాయ ప్రశ్నలు మరియు ఆందోళనలకు సమాధానాలు కనుగొనండి',
        'faq.search.placeholder': 'ప్రశ్నలను శోధించండి...',
        'faq.noResults': 'మీ శోధనకు సరిపోలే ప్రశ్నలు కనుగొనబడలేదు',
        'faq.contact.title': 'ఇంకా ప్రశ్నలు ఉన్నాయా?',
        'faq.contact.description': 'మా న్యాయ నిపుణులు మీ ఏదైనా నిర్దిష్ట ప్రశ్నలు లేదా ఆందోళనలకు సహాయం చేయడానికి ఇక్కడ ఉన్నారు',
        'faq.contact.chatButton': 'నిపుణులతో చాట్ చేయండి',
        'faq.contact.contactButton': 'సపోర్ట్‌తో సంప్రదించండి',
        
        // Contact
        'contact.title': 'సంప్రదించండి',
        'contact.subtitle': 'మీ న్యాయ హక్కుల గురించి ప్రశ్నలు ఉన్నాయా? మేము సహాయం చేయడానికి ఇక్కడ ఉన్నాము.',
        'contact.form.name': 'పేరు *',
        'contact.form.email': 'ఇమెయిల్ *',
        'contact.form.phone': 'ఫోన్',
        'contact.form.subject': 'విషయం *',
        'contact.form.message': 'సందేశం *',
        'contact.form.messagePlaceholder': 'మీ న్యాయ ఆందోళన లేదా ప్రశ్నను వివరించండి...',
        'contact.form.submit': 'సందేశం పంపండి',
        'contact.form.success': 'సందేశం విజయవంతంగా పంపబడింది! మేము త్వరలో మిమ్మల్ని సంప్రదిస్తాము.',
        'contact.form.error': 'సందేశం పంపడంలో లోపం వచ్చింది. దయచేసి మళ్లీ ప్రయత్నించండి.',
        'contact.info.email.title': 'మాకు ఇమెయిల్ చేయండి',
        'contact.info.email.description': 'ఇమెయిల్ ద్వారా సంప్రదించండి',
        'contact.info.phone.title': 'మాకు కాల్ చేయండి',
        'contact.info.phone.description': '24/7 న్యాయ హెల్ప్‌లైన్',
        'contact.info.visit.title': 'మమ్మల్ని కలవండి',
        'contact.info.visit.description': 'మా ప్రధాన కార్యాలయం',
        'contact.info.visit.address': 'ముంబై, మహారాష్ట్ర, భారతదేశం',
        'contact.quickLinks.chat.title': 'లైవ్ చాట్ ప్రారంభించండి',
        'contact.quickLinks.chat.description': 'తక్షణ సహాయం కోసం',
        'contact.quickLinks.hours.title': 'కార్యాలయ సమయం',
        'contact.quickLinks.hours.description': 'సోమవారం - శుక్రవారం: 9 AM - 6 PM',
        'contact.responseTime': 'మేము 24 గంటలలోపు అన్ని సందేశాలకు ప్రత్యుత్తరం ఇస్తాము. అత్యవసర విషయాల కోసం, దయచేసి మా హెల్ప్‌లైన్‌కు కాల్ చేయండి.',
        
        // Emergency Contacts
        'emergency.legalAid.title': 'న్యాయ సహాయ సేవలు',
        'emergency.legalAid.inState': '{state} లో',
        'emergency.legalAid.hours': 'సమయం: {hours}',
        
        // Subjects
        'subjects.legalQuery': 'న్యాయ ప్రశ్న',
        'subjects.domesticViolence': 'గృహ హింస',
        'subjects.workerRights': 'కార్మిక హక్కులు',
        'subjects.propertyDispute': 'ఆస్తి వివాదం',
        'subjects.consumerRights': 'గారక హక్కులు',
        'subjects.appSupport': 'యాప్ మద్దతు',
        'subjects.other': 'ఇతర',
        
        // Emergency Guidelines
        'emergency.guidelines.title': 'అత్యవసర మార్గదర్శకాలు',
        'emergency.guidelines.subtitle': 'అత్యవసర పరిస్థితుల కోసం ముఖ్యమైన సమాచారం',
        'emergency.guidelines.domesticViolence.title': 'గృహ హింస',
        'emergency.guidelines.domesticViolence.description': 'మీరు తక్షణ ప్రమాదంలో ఉంటే, పోలీసులను 100 లేదా మహిళా హెల్ప్‌లైన్‌ను 1091 వద్ద కాల్ చేయండి',
        'emergency.guidelines.domesticViolence.steps': [
          'తక్షణం అత్యవసర సేవలను కాల్ చేయండి',
          'సాధ్యమైతే సురక్షితమైన ప్రదేశాన్ని కనుగొనండి',
          'నమ్మదగిన స్నేహితుడు లేదా కుటుంబ సభ్యుని సంప్రదించండి',
          'ఏదైనా గాయాలు లేదా ఆధారాలను డాక్యుమెంట్ చేయండి',
          'పోలీసు ఫిర్యాదు దాఖలు చేయండి'
        ],
        'emergency.guidelines.legalAid.title': 'న్యాయ సహాయం',
        'emergency.guidelines.legalAid.description': 'దీన్ని భరించలేని వారికి ఉచిత న్యాయ సహాయం అందుబాటులో ఉంది',
        'emergency.guidelines.legalAid.steps': [
          'మీ సమీప న్యాయ సేవా అధికారితో సంప్రదించండి',
          'న్యాయ సహాయ హెల్ప్‌లైన్ 15100 వద్ద కాల్ చేయండి',
          'జాతీయ న్యాయ సేవా అధికారి వెబ్‌సైట్‌ని సందర్శించండి',
          'మీ ఆర్థిక పరిస్థితిని డాక్యుమెంట్ చేయండి',
          'సంబంధిత పత్రాలను సిద్ధం చేయండి'
        ],
        'emergency.guidelines.police.title': 'పోలీసు సహాయం',
        'emergency.guidelines.police.description': 'పోలీసు ఫిర్యాదు ఎలా దాఖలు చేయాలి మరియు తక్షణ సహాయం ఎలా పొందాలి',
        'emergency.guidelines.police.steps': [
          'సమీప పోలీసు స్టేషన్‌కు వెళ్లండి',
          'సంజ్ఞేయ నేరాల కోసం FIR దాఖలు చేయండి',
          'మీ ఫిర్యాదు కాపీని పొందండి',
          'మీ కేస్‌పై ఫాలో అప్ చేయండి',
          'అన్ని పత్రాలను సురక్షితంగా ఉంచండి'
        ],
        'emergency.guidelines.medical.title': 'వైద్య అత్యవసరం',
        'emergency.guidelines.medical.description': 'వైద్య అత్యవసర పరిస్థితులలో తీసుకోవాల్సిన చర్యలు',
        'emergency.guidelines.medical.steps': [
          'అంబులెన్స్‌ని 102 వద్ద కాల్ చేయండి',
          'సమీప ప్రభుత్వ ఆసుపత్రికి వెళ్లండి',
          'వైద్య రికార్డ్‌లను ఉంచండి',
          'గాయాలను ఫోటోలతో డాక్యుమెంట్ చేయండి',
          'వైద్య ధృవీకరణ పత్రాలను పొందండి'
        ],
        'telelaw.title': 'టెలి-లా సేవలు',
        'telelaw.hours': 'సమయం: ఉదయం 9 - సాయంత్రం 6'
      }
    };
  }

  // Get static translation
  translate(key, language = 'en') {
    console.log('Translation Request:', { key, language });
    
    // Check if the language exists in our translations
    if (!this.staticTranslations[language]) {
      console.warn(`Language ${language} not found, falling back to English`);
      language = 'en';
    }

    // Get the translation
    const translation = this.staticTranslations[language]?.[key];
    
    // If translation doesn't exist in requested language, try English
    if (!translation && language !== 'en') {
      console.warn(`Translation for key ${key} not found in ${language}, falling back to English`);
      return this.staticTranslations.en[key] || key;
    }

    console.log('Translation Result:', translation);
    return translation || key;
  }

  // Dynamic translation using Gemini AI (for user-generated content)
  async translateDynamic(text, targetLanguage, sourceLanguage = 'en') {
    if (!text || targetLanguage === sourceLanguage) return text;
    
    try {
      const languageNames = {
        'en': 'English',
        'hi': 'Hindi',
        'mr': 'Marathi', 
        'te': 'Telugu'
      };
      
      const prompt = `Translate the following text from ${languageNames[sourceLanguage]} to ${languageNames[targetLanguage]}. 
      Keep the meaning accurate and use appropriate legal terminology if applicable:
      
      "${text}"
      
      Only provide the translation, no explanations.`;

      const response = await fetch(`${this.baseUrl}?key=${this.apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt
                }
              ]
            }
          ]
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts[0]) {
        return data.candidates[0].content.parts[0].text.trim();
      }
      
      return text;
    } catch (error) {
      console.error('Dynamic translation error:', error);
      return text; // Return original text if translation fails
    }
  }

  // Get supported languages
  getSupportedLanguages() {
    return [
      { code: 'en', name: 'English', nativeName: 'English' },
      { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
      { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
      { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' }
    ];
  }

  // Check if language is supported
  isLanguageSupported(languageCode) {
    return Object.keys(this.staticTranslations).includes(languageCode);
  }

  // Get language direction (for RTL languages if needed in future)
  getLanguageDirection(languageCode) {
    // All current supported languages are LTR
    return 'ltr';
  }
}

export default new TranslationService();
