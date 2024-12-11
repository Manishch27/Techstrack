import { University } from '@/types/university'

export const universities: University[] = [

  // -------------------------------------------------OnlineUniversities ---------------------------------------------

  // JAIN UNIVERSITY
  {
    id: 'jain-university',
    name: 'Jain University Online',
    logo: '/placeholder.svg?height=80&width=80',
    image: 'https://i.ibb.co/jyrRSkf/Sarthi.png',
    mode: 'Online',
    accreditation: {
      grade: 'A++',
      body: 'NAAC'
    },

    courses: [
      {
        program: "MBA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 40000,
        brochure: "link-to-mba-brochure",
      },
      {
        program: "MCA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 37500,
        brochure: "link-to-mca-brochure",
      },
      {
        program: "MCOM",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 26250,
        brochure: "link-to-mcom-brochure",
      },
      {
        program: "MA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 22500,
        brochure: "link-to-ma-brochure",
      },
      {
        program: "BBA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 27500,
        brochure: "link-to-bba-brochure",
      },
      {
        program: "BCOM",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 21250,
        brochure: "link-to-bcom-brochure",
      },
      {
        program: "BCA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 21250, // Adjust fees if necessary
        brochure: "link-to-bca-brochure",
      }
    ],

    location: {
      city: 'Bengaluru',
      state: 'Karnataka'
    },

    approvals: [
      { name: 'UGC', image: '/placeholder.svg?height=100&width=100', description: 'University Grants Commission' },
      { name: 'AICTE', image: '/placeholder.svg?height=100&width=100', description: 'All India Council for Technical Education' },
      { name: 'AIU', image: '/placeholder.svg?height=100&width=100', description: 'Association of Indian Universities' },
      { name: 'NIRF', image: '/placeholder.svg?height=100&width=100', description: 'National Institutional Ranking Framework' },
      { name: 'WES', image: '/placeholder.svg?height=100&width=100', description: 'World Education Services' },
      { name: 'NAAC A++', image: '/placeholder.svg?height=100&width=100', description: 'National Assessment and Accreditation Council' },
      { name: 'QS World University', image: '/placeholder.svg?height=100&width=100', description: 'QS World University Rankings' },
      { name: 'AUAP', image: '/placeholder.svg?height=100&width=100', description: 'Association of Universities of Asia and the Pacific' }
    ],

    about: "Jain Online is the dedicated e-learning platform of the renowned Jain Deemed-to-be University, based in Bengaluru. Backed by over three decades of excellence, the Jain Group has established a strong reputation for delivering quality education that blends academic rigor with practical insights. Recognized as a leader in higher education, Jain University goes beyond academics by fostering innovation, research, and entrepreneurship. <br> With a rich legacy of nurturing talent, the institution has consistently adapted to modern learning needs, offering a wide range of programs designed to empower students for global opportunities. Its online platform reflects this commitment by providing flexible, accessible, and industry-relevant education to learners worldwide.",

    keyHighlights: [
      "UGC-DEB approved online programs",
      "Industry-aligned curriculum",
      "70+ electives available",
      "20K+ courses on LinkedIn Learning",
      "Global professional partnerships",
      "Flexible learning schedule"
    ],


    emiOptions: "Flexible EMI options available. Contact our admissions team for personalized plans.",
    whyChoose: [
      "Industry-relevant curriculum",
      "Expert faculty",
      "Flexible study options",
      "Career support and placement assistance",
      "Global recognition"
    ],
    benefitsOfStudying: [
      "Learn at your own pace",
      "Access to digital library resources",
      "Interactive online sessions",
      "Networking opportunities",
      "Recognized degree with global acceptance"
    ],
    examConduct: "Exams are conducted through a secure online proctoring system. Students can take exams from the comfort of their homes while ensuring academic integrity.",
    accreditationsApprovals: ['UGC-DEB', 'NAAC A++', 'AIU', 'AICTE'],
    academicApproach: "Our academic approach focuses on blending theoretical knowledge with practical skills. We employ innovative teaching methodologies, case studies, and project-based learning to ensure students are well-prepared for their future careers.",
    quantitativeMetrics: {
      placementRate: "95%",
      corporateTieups: "500+",
      students: "50,000+",
      experience: "30+ years"
    },
    placements: {
      sectors: [
        "IT & Software",
        "Finance & Banking",
        "Marketing & Sales",
        "Healthcare",
        "E-commerce",
        "Consulting"
      ],

      images: [
        "https://i.imgur.com/6QKQ5jB.jpg",
      ]
    },
    moreThanDegree: {
      description: "At Jain University Online, we offer more than just a degree. Our programs are designed to provide industry-relevant skills, soft skills development, internship opportunities, networking events, and career counseling.",
      sampleDegree: {
        name: "MBA",
        description: "Our MBA program offers a comprehensive curriculum covering core subjects, specializations, and practical projects to ensure you're industry-ready upon graduation.",
        image: 'https://distanceeducationschool.com/wp-content/uploads/2022/09/JAIN-Sample-Certificate-1536x1280.jpg.webp'
      }
    },
    admissionProcess: [
      "Visit our official website",
      "Choose your preferred program",
      "Fill out the online application form",
      "Upload required documents",
      "Pay the application fee",
      "Await admission confirmation",
      "Complete the enrollment process"
    ],
    faqs: [
      {
        question: "Is the degree recognized?",
        answer: "Yes, our degrees are recognized by UGC-DEB and NAAC A++ and are accepted globally."
      },
      {
        question: "How are classes conducted?",
        answer: "Classes are conducted through our state-of-the-art online learning platform, featuring live sessions, recorded lectures, and interactive study materials."
      },
      {
        question: "What are the admission requirements?",
        answer: "Admission requirements vary by program. Generally, you'll need to have completed your 10+2 for undergraduate programs and a bachelor's degree for postgraduate programs."
      },
      {
        question: "Is placement assistance provided?",
        answer: "Yes, we offer comprehensive placement assistance including resume building, interview preparation, and connections with our industry partners."
      }
    ],
    Brochures: {
      "MBA Brochure": "https://distanceeducationschool.com/wp-content/uploads/202",
    }
  },

  // GLA UNIVERSITY
  {
    id: 'gla-university',
    name: 'GLA University Online',
    logo: '/placeholder.svg?height=80&width=80',
    image: 'https://i.ibb.co/GPZq8Xc/GLA.png',
    mode: 'Online',
    accreditation: {
      grade: 'A+',
      body: 'NAAC'
    },

    courses: [
      {
        program: "MBA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 42500,
        brochure: "link-to-mba-brochure"
      },
      {
        program: "MCA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 39500,
        brochure: "link-to-mca-brochure"
      },
      {
        program: "BBA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 22500,
        brochure: "link-to-bba-brochure"
      },
      {
        program: "BCA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 20500,
        brochure: "link-to-bca-brochure"
      },
      {
        program: "BCOM",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 18500,
        brochure: "link-to-bcom-brochure"
      }
    ],

    location: {
      city: 'Mathura',
      state: 'Uttar Pradesh'
    },

    approvals: [
      { name: 'UGC', image: '/placeholder.svg?height=100&width=100', description: 'University Grants Commission' },
      { name: 'AICTE', image: '/placeholder.svg?height=100&width=100', description: 'All India Council for Technical Education' },
      { name: 'NAAC A+', image: '/placeholder.svg?height=100&width=100', description: 'National Assessment and Accreditation Council' },
      { name: 'NIRF', image: '/placeholder.svg?height=100&width=100', description: 'National Institutional Ranking Framework' }
    ],

    about: "GLA University Online provides students with a flexible and accessible learning platform for higher education. With a focus on quality education and holistic development, GLA University empowers students to achieve their academic and career goals through innovative online programs.",

    keyHighlights: [
      "UGC-DEB approved online programs",
      "NAAC A+ accreditation",
      "Comprehensive curriculum",
      "Experienced faculty",
      "State-of-the-art learning management system"
    ],

    emiOptions: "Flexible EMI options available for all programs. Contact the admissions team for more details.",
    whyChoose: [
      "Accredited and recognized programs",
      "Affordable tuition fees",
      "Interactive and engaging online classes",
      "Placement assistance and career counseling",
      "Student-focused support services"
    ],
    benefitsOfStudying: [
      "Flexible learning schedule",
      "Access to digital library resources",
      "Industry-relevant curriculum",
      "Global networking opportunities",
      "Recognized degrees with high acceptance"
    ],
    examConduct: "Exams are conducted securely online, ensuring a smooth and stress-free experience for students.",
    accreditationsApprovals: ['UGC-DEB', 'NAAC A+', 'AICTE'],
    academicApproach: "GLA University employs a balanced mix of theoretical knowledge and practical application. With a focus on case studies, real-world projects, and innovative teaching methods, students gain an industry-aligned education.",
    quantitativeMetrics: {
      placementRate: "93%",
      corporateTieups: "300+",
      students: "25,000+",
      experience: "22+ years"
    },
    placements: {
      sectors: [
        "IT & Software",
        "Banking & Finance",
        "E-commerce",
        "Consulting",
        "Education & Training"
      ],
      images: [
        "https://i.ibb.co/GPZq8Xc/placement-image.jpg"
      ]
    },
    moreThanDegree: {
      description: "At GLA University Online, students receive more than just a degree. Our programs include skill development, live projects, mentorship opportunities, and career-focused workshops.",
      sampleDegree: {
        name: "MBA",
        description: "The MBA program provides students with essential business knowledge and leadership skills to succeed in today's competitive market.",
        image: 'https://example.com/gla-sample-degree.jpg'
      }
    },
    admissionProcess: [
      "Visit the official website",
      "Select your desired program",
      "Complete the application form",
      "Upload necessary documents",
      "Pay the application fee",
      "Receive admission confirmation",
      "Start your online journey"
    ],
    faqs: [
      {
        question: "Are the degrees recognized?",
        answer: "Yes, our programs are UGC-DEB approved and NAAC A+ accredited."
      },
      {
        question: "How are classes delivered?",
        answer: "Classes are conducted online through live lectures, recorded sessions, and interactive course materials."
      },
      {
        question: "What is the eligibility criteria?",
        answer: "Eligibility varies by program. Generally, 10+2 is required for undergraduate programs and a bachelor's degree for postgraduate programs."
      },
      {
        question: "Is there placement assistance?",
        answer: "Yes, students receive placement support including resume building, interview training, and connections with recruiters."
      }
    ],
    UniBrochure: {
      file: "file.pdf"
    }
  },

  // AMITY UNIVERSITY
  {
    id: 'amity-university',
    name: 'Amity University Online',
    logo: '/placeholder.svg?height=80&width=80',
    image: 'https://i.ibb.co/Yb3TZkF/Amity.png',
    mode: 'Online',
    accreditation: {
      grade: 'A+',
      body: 'NAAC'
    },

    courses: [
      {
        program: "MBA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 50000,
        brochure: "link-to-mba-brochure"
      },
      {
        program: "MCA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 40000,
        brochure: "link-to-mca-brochure"
      },
      {
        program: "BBA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 30000,
        brochure: "link-to-bba-brochure"
      },
      {
        program: "BCA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 28000,
        brochure: "link-to-bca-brochure"
      },
      {
        program: "BCOM",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 25000,
        brochure: "link-to-bcom-brochure"
      }
    ],

    location: {
      city: 'Noida',
      state: 'Uttar Pradesh'
    },

    approvals: [
      { name: 'UGC', image: '/placeholder.svg?height=100&width=100', description: 'University Grants Commission' },
      { name: 'AICTE', image: '/placeholder.svg?height=100&width=100', description: 'All India Council for Technical Education' },
      { name: 'NAAC A+', image: '/placeholder.svg?height=100&width=100', description: 'National Assessment and Accreditation Council' },
      { name: 'WES', image: '/placeholder.svg?height=100&width=100', description: 'World Education Services Accredited' }
    ],

    about: "Amity University Online is a leading institution in providing high-quality education through online platforms. With over two decades of experience in academia, Amity has established itself as a pioneer in distance learning. The university offers a wide range of UGC-recognized online programs designed to cater to the diverse needs of working professionals, students, and lifelong learners. Amity emphasizes the importance of practical knowledge alongside theoretical learning, ensuring students are job-ready upon graduation. The university's robust online infrastructure includes live virtual classes, discussion forums, e-learning modules, and personalized mentorship. Dedicated to fostering global standards of education, Amity has collaborations with numerous international universities and organizations. Its state-of-the-art learning management system and access to expert faculty make Amity Online an ideal choice for those seeking to enhance their careers without disrupting their professional or personal lives.",

    keyHighlights: [
      "Globally recognized online degrees",
      "NAAC A+ accreditation",
      "Collaborations with international universities",
      "24/7 access to course material",
      "Dedicated placement support"
    ],

    emiOptions: "Affordable EMI options are available for all programs. Contact the admissions team for more details.",
    whyChoose: [
      "Globally recognized programs",
      "Affordable and flexible fee structure",
      "Dynamic and industry-relevant curriculum",
      "Access to global alumni network",
      "Comprehensive placement support"
    ],
    benefitsOfStudying: [
      "Flexible learning hours",
      "Live interaction with industry experts",
      "Global exposure through international partnerships",
      "Skill enhancement through workshops and webinars",
      "Accredited degrees with industry relevance"
    ],
    examConduct: "All exams are conducted online using secure proctoring methods, ensuring integrity and flexibility for students.",
    accreditationsApprovals: ['UGC-DEB', 'NAAC A+', 'AICTE', 'WES'],
    academicApproach: "Amity Online integrates theoretical knowledge with hands-on projects, live sessions with industry leaders, and international case studies to ensure an industry-ready education.",
    quantitativeMetrics: {
      placementRate: "95%",
      corporateTieups: "500+",
      students: "150,000+",
      experience: "20+ years"
    },
    placements: {
      sectors: [
        "IT & Technology",
        "Banking & Finance",
        "Consulting",
        "Healthcare",
        "Media & Entertainment"
      ],
      images: [
        "https://i.ibb.co/Yb3TZkF/placement-image.jpg"
      ]
    },
    moreThanDegree: {
      description: "Amity Online goes beyond academics to provide skill-based learning, leadership training, and hands-on experience through live projects and workshops. Students graduate with not just a degree, but also the confidence to excel in their careers.",
      sampleDegree: {
        name: "MBA",
        description: "The MBA program at Amity Online equips students with leadership, analytical, and strategic skills needed to thrive in competitive industries.",
        image: 'https://example.com/amity-sample-degree.jpg'
      }
    },
    admissionProcess: [
      "Visit the official Amity Online website",
      "Choose your preferred program",
      "Fill out the online application form",
      "Upload required documents",
      "Submit application fee",
      "Receive confirmation of admission",
      "Begin your academic journey"
    ],
    faqs: [
      {
        question: "Are the degrees valid internationally?",
        answer: "Yes, Amity Online degrees are WES accredited and recognized globally."
      },
      {
        question: "What is the mode of delivery?",
        answer: "All programs are delivered online through a robust learning management system."
      },
      {
        question: "What is the eligibility for postgraduate courses?",
        answer: "Applicants must hold a recognized bachelor's degree in any discipline."
      },
      {
        question: "Does Amity Online offer placement assistance?",
        answer: "Yes, students receive extensive placement support, including resume building, mock interviews, and recruiter connections."
      }
    ],
    Brochures: {
      "MBA Brochure": "https://example.com/amity-mba-brochure.pdf",
      "MCA Brochure": "https://example.com/amity-mca-brochure.pdf",
      "BBA Brochure": "https://example.com/amity-bba-brochure.pdf"
    }
  },


  // LOVELY PROFESSIONAL UNIVERSITY
  {
    id: 'lovely-professional-university',
    name: 'Lovely Professional University Online',
    logo: '/placeholder.svg?height=80&width=80',
    image: 'https://i.ibb.co/Yb3TZkF/LPU.png',
    mode: 'Online',
    accreditation: {
      grade: 'A++',
      body: 'NAAC'
    },

    courses: [
      {
        program: "MBA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 55000,
        brochure: "link-to-mba-brochure"
      },
      {
        program: "MCA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 50000,
        brochure: "link-to-mca-brochure"
      },
      {
        program: "BBA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 32000,
        brochure: "link-to-bba-brochure"
      },
      {
        program: "BCA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 30000,
        brochure: "link-to-bca-brochure"
      },
      {
        program: "BCOM",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 28000,
        brochure: "link-to-bcom-brochure"
      }
    ],

    location: {
      city: 'Jalandhar',
      state: 'Punjab'
    },

    approvals: [
      { name: 'UGC-DEB', image: '/placeholder.svg?height=100&width=100', description: 'University Grants Commission for Distance Education' },
      { name: 'NAAC A++', image: '/placeholder.svg?height=100&width=100', description: 'National Assessment and Accreditation Council' },
      { name: 'AIU', image: '/placeholder.svg?height=100&width=100', description: 'Association of Indian Universities' },
      { name: 'WES', image: '/placeholder.svg?height=100&width=100', description: 'World Education Services' }
    ],

    about: "Lovely Professional University Online is a distinguished institution recognized for delivering flexible and affordable online education to students across the globe. Founded on the principles of innovation and inclusivity, LPU is among India’s largest private universities. It has consistently set benchmarks in quality education through its state-of-the-art curriculum, cutting-edge technology, and industry-relevant programs. LPU Online ensures that learners are not just educated but also empowered to excel in the global job market. Through live lectures, recorded sessions, mentorship programs, and practical projects, students gain hands-on experience in their chosen fields. The university prides itself on its holistic approach, offering extensive placement support, personalized career counseling, and opportunities for global exposure. LPU Online is a pioneer in integrating education with technology, utilizing AI-driven learning tools and virtual labs. Its steadfast commitment to academic excellence, coupled with a student-centric approach, makes it the ideal destination for learners aspiring to achieve greatness in their professional journeys.",

    keyHighlights: [
      "Global rankings for quality education",
      "NAAC A++ accreditation, ensuring academic excellence",
      "Affordable, flexible fee structures",
      "Advanced virtual learning environment with AI-driven tools",
      "Strong industry tie-ups for career advancement"
    ],

    emiOptions: "Flexible EMI options are available to make education accessible for everyone.",
    whyChoose: [
      "Top-tier accreditation and recognition",
      "A robust curriculum designed for real-world challenges",
      "Global network of alumni and industry partnerships",
      "Comprehensive student support services",
      "Placement assistance with leading companies"
    ],
    benefitsOfStudying: [
      "Interactive live classes and recorded sessions",
      "Networking opportunities through global peer interactions",
      "Focus on skill development and employability",
      "Access to virtual labs and simulation tools",
      "24/7 access to learning materials and mentorship"
    ],
    examConduct: "Exams are conducted online with secure and proctored systems, ensuring fairness and flexibility.",
    accreditationsApprovals: ['UGC-DEB', 'NAAC A++', 'AIU', 'WES'],
    academicApproach: "LPU Online combines academic rigor with experiential learning, focusing on practical skills, global case studies, and interactive assessments to prepare students for the demands of modern industries.",
    quantitativeMetrics: {
      placementRate: "98%",
      corporateTieups: "700+",
      students: "200,000+",
      experience: "15+ years"
    },
    placements: {
      sectors: [
        "E-commerce",
        "Finance",
        "Technology",
        "Education",
        "Healthcare"
      ],
      images: [
        "https://i.ibb.co/Yb3TZkF/lpu-placements.jpg"
      ]
    },
    moreThanDegree: {
      description: "At LPU Online, education goes beyond the classroom. Students gain access to real-world applications, certifications, and leadership training that prepare them to excel in competitive industries. LPU empowers learners to transform their careers through its dynamic, globally recognized programs.",
      sampleDegree: {
        name: "MBA",
        description: "LPU's online MBA program focuses on fostering strategic thinking, leadership abilities, and practical problem-solving skills.",
        image: 'https://example.com/lpu-sample-degree.jpg'
      }
    },
    admissionProcess: [
      "Visit the LPU Online official website",
      "Choose your desired program",
      "Complete the online application form",
      "Upload necessary documents",
      "Pay the application fee",
      "Receive confirmation and begin your studies"
    ],
    faqs: [
      {
        question: "Are the online degrees recognized internationally?",
        answer: "Yes, LPU Online degrees are WES accredited and globally recognized."
      },
      {
        question: "What types of support are available for students?",
        answer: "LPU Online offers 24/7 academic and technical support, as well as career counseling and placement services."
      },
      {
        question: "What is the eligibility criteria for undergraduate courses?",
        answer: "Applicants must have completed 10+2 or equivalent from a recognized board."
      },
      {
        question: "Are scholarships available?",
        answer: "Yes, LPU Online provides scholarships based on merit and specific eligibility criteria."
      }
    ],
    Brochures: {
      "MBA Brochure": "https://example.com/lpu-mba-brochure.pdf",
      "MCA Brochure": "https://example.com/lpu-mca-brochure.pdf",
      "BBA Brochure": "https://example.com/lpu-bba-brochure.pdf"
    }
  },

  // CHANDIGARH UNIVERSITY
  {
    id: 'chandigarh-university',
    name: 'Chandigarh University Online',
    logo: '/placeholder.svg?height=80&width=80',
    image: 'https://i.ibb.co/zW7ZQtm/Chandigarh-University.png',
    mode: 'Online',
    accreditation: {
      grade: 'A+',
      body: 'NAAC'
    },

    courses: [
      {
        program: "MBA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 50000,
        brochure: "link-to-mba-brochure"
      },
      {
        program: "MCA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 45000,
        brochure: "link-to-mca-brochure"
      },
      {
        program: "BBA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 30000,
        brochure: "link-to-bba-brochure"
      },
      {
        program: "BCA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 28000,
        brochure: "link-to-bca-brochure"
      },
      {
        program: "BCom",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 26000,
        brochure: "link-to-bcom-brochure"
      }
    ],

    location: {
      city: 'Chandigarh',
      state: 'Punjab'
    },

    approvals: [
      { name: 'UGC-DEB', image: '/placeholder.svg?height=100&width=100', description: 'University Grants Commission for Distance Education' },
      { name: 'NAAC A+', image: '/placeholder.svg?height=100&width=100', description: 'National Assessment and Accreditation Council' },
      { name: 'AIU', image: '/placeholder.svg?height=100&width=100', description: 'Association of Indian Universities' },
      { name: 'WES', image: '/placeholder.svg?height=100&width=100', description: 'World Education Services' }
    ],

    about: "Chandigarh University Online is a prestigious institution dedicated to providing world-class education through a flexible and accessible digital platform. With its strong academic foundation, state-of-the-art technology, and innovative learning tools, the university offers programs that cater to diverse learner needs. Chandigarh University has established itself as a leader in online education by integrating interactive live classes, recorded sessions, and virtual labs with a robust support system for students. The institution prides itself on a comprehensive curriculum designed to meet global standards and industry expectations, ensuring that students are well-prepared for their professional journeys. The university fosters a culture of excellence, emphasizing skill development, entrepreneurship, and employability. With a commitment to personalized attention, career counseling, and placement support, Chandigarh University Online continues to empower learners worldwide to achieve their goals and transform their futures.",

    keyHighlights: [
      "Recognized among India’s top private universities",
      "Accredited with NAAC A+ for excellence in academics",
      "Industry-aligned curriculum for real-world applications",
      "Affordable fee structure with flexible payment options",
      "State-of-the-art virtual learning environment"
    ],

    emiOptions: "EMI options available for all programs to make education accessible to everyone.",
    whyChoose: [
      "Top-ranked university for online education",
      "Curriculum tailored for practical and professional skills",
      "Extensive student support services",
      "Global networking opportunities",
      "Comprehensive placement assistance"
    ],
    benefitsOfStudying: [
      "Interactive live classes with industry experts",
      "Recorded sessions for self-paced learning",
      "Virtual labs and hands-on project work",
      "Access to online libraries and resources",
      "Dedicated academic and career mentorship"
    ],
    examConduct: "Exams are conducted through secure, AI-proctored online systems to ensure credibility and convenience.",
    accreditationsApprovals: ['UGC-DEB', 'NAAC A+', 'AIU', 'WES'],
    academicApproach: "Chandigarh University Online combines theoretical knowledge with practical applications, leveraging modern technology to provide a rich learning experience for students in diverse fields.",
    quantitativeMetrics: {
      placementRate: "96%",
      corporateTieups: "600+",
      students: "150,000+",
      experience: "10+ years"
    },
    placements: {
      sectors: [
        "IT & Software",
        "Finance",
        "Healthcare",
        "Education",
        "Manufacturing"
      ],
      images: [
        "https://i.ibb.co/zW7ZQtm/chandigarh-placements.jpg"
      ]
    },
    moreThanDegree: {
      description: "Chandigarh University Online goes beyond academics, offering students exposure to certifications, real-world projects, and networking opportunities. The programs are designed to help learners acquire leadership qualities, entrepreneurial skills, and global perspectives.",
      sampleDegree: {
        name: "MBA",
        description: "The online MBA program equips students with strategic thinking and leadership capabilities for thriving in the global business environment.",
        image: 'https://example.com/cu-sample-degree.jpg'
      }
    },
    admissionProcess: [
      "Visit the Chandigarh University Online website",
      "Select the desired program",
      "Fill out the online application form",
      "Upload necessary documents",
      "Pay the admission fee",
      "Receive confirmation and begin learning"
    ],
    faqs: [
      {
        question: "Are Chandigarh University Online degrees globally recognized?",
        answer: "Yes, the degrees are WES accredited and recognized internationally."
      },
      {
        question: "What types of support are available for students?",
        answer: "The university offers academic mentoring, career counseling, and technical assistance 24/7."
      },
      {
        question: "What is the eligibility criteria for postgraduate courses?",
        answer: "Applicants must hold a recognized bachelor’s degree in the relevant field."
      },
      {
        question: "Are scholarships available for online programs?",
        answer: "Yes, Chandigarh University Online provides scholarships based on merit and specific criteria."
      }
    ],
    Brochures: {
      "MBA Brochure": "https://example.com/cu-mba-brochure.pdf",
      "MCA Brochure": "https://example.com/cu-mca-brochure.pdf",
      "BBA Brochure": "https://example.com/cu-bba-brochure.pdf"
    }
  },


  // MANGALAYATAN UNIVERSITY
  {
    id: 'mangalayatan-university',
    name: 'Mangalayatan University Online',
    logo: '/placeholder.svg?height=80&width=80',
    image: 'https://i.ibb.co/album-placeholder/Mangalayatan-University.png',
    mode: 'Online',
    accreditation: {
      grade: 'A+',
      body: 'NAAC'
    },

    courses: [
      {
        program: "MBA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 40000,
        brochure: "link-to-mba-brochure"
      },
      {
        program: "MCA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 38000,
        brochure: "link-to-mca-brochure"
      },
      {
        program: "BBA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 25000,
        brochure: "link-to-bba-brochure"
      },
      {
        program: "BCA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 24000,
        brochure: "link-to-bca-brochure"
      },
      {
        program: "BA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 20000,
        brochure: "link-to-ba-brochure"
      }
    ],

    location: {
      city: 'Aligarh',
      state: 'Uttar Pradesh'
    },

    approvals: [
      { name: 'UGC-DEB', image: '/placeholder.svg?height=100&width=100', description: 'University Grants Commission for Distance Education' },
      { name: 'NAAC A+', image: '/placeholder.svg?height=100&width=100', description: 'National Assessment and Accreditation Council' },
      { name: 'AIU', image: '/placeholder.svg?height=100&width=100', description: 'Association of Indian Universities' }
    ],

    about: "Mangalayatan University Online is committed to delivering high-quality education to students across the globe. Known for its innovative teaching methodologies and strong academic framework, the university offers a range of programs designed to meet the dynamic needs of students and professionals. Mangalayatan University leverages advanced technology to provide a seamless and engaging learning experience through live classes, recorded lectures, and interactive study materials. Its focus on holistic development and skill enhancement ensures that students are well-equipped to meet global challenges. The institution emphasizes experiential learning, real-world projects, and extensive support services, including career guidance and placement assistance, making it a trusted choice for online learners. With a vision to inspire and empower learners, Mangalayatan University Online continues to set benchmarks in quality education and academic excellence.",

    keyHighlights: [
      "Dynamic curriculum tailored to meet industry demands",
      "Comprehensive online education tools for flexibility",
      "Affordable fee structure and scholarship options",
      "Global recognition and strong alumni network",
      "Interactive virtual classrooms with expert faculty"
    ],

    emiOptions: "Affordable EMI options available to ease financial constraints for students.",
    whyChoose: [
      "Recognized for academic excellence and innovation",
      "Programs aligned with professional and personal growth",
      "Flexible learning schedule for working professionals",
      "Strong placement network with leading companies",
      "Dedicated student support and mentorship"
    ],
    benefitsOfStudying: [
      "Access to world-class faculty and resources",
      "Interactive live and recorded sessions",
      "Career-oriented certifications and internships",
      "Flexible learning environment to balance work and study",
      "Regular assessments and feedback for continuous improvement"
    ],
    examConduct: "Examinations are conducted online using secure, AI-proctored systems ensuring integrity and convenience.",
    accreditationsApprovals: ['UGC-DEB', 'NAAC A+', 'AIU'],
    academicApproach: "Mangalayatan University Online integrates theoretical foundations with practical applications to nurture critical thinking, creativity, and problem-solving abilities.",
    quantitativeMetrics: {
      placementRate: "95%",
      corporateTieups: "500+",
      students: "75,000+",
      experience: "15+ years"
    },
    placements: {
      sectors: [
        "Information Technology",
        "Banking & Finance",
        "Marketing & Sales",
        "Education & Research",
        "Healthcare & Wellness"
      ],
      images: [
        "https://i.ibb.co/album-placeholder/mangalayatan-placements.jpg"
      ]
    },
    moreThanDegree: {
      description: "Mangalayatan University Online ensures a comprehensive learning experience, offering additional certifications, hands-on projects, and networking opportunities to help students excel beyond academics.",
      sampleDegree: {
        name: "MBA",
        description: "The MBA program focuses on developing leadership, strategic thinking, and managerial skills for modern business challenges.",
        image: 'https://example.com/mangalayatan-sample-degree.jpg'
      }
    },
    admissionProcess: [
      "Visit the Mangalayatan University Online website",
      "Explore available programs and select the desired one",
      "Complete the online application form",
      "Submit necessary documents for verification",
      "Pay the admission fee",
      "Receive enrollment confirmation and start learning"
    ],
    faqs: [
      {
        question: "Is Mangalayatan University Online recognized internationally?",
        answer: "Yes, it holds accreditations such as AIU, making its degrees globally valid."
      },
      {
        question: "What support is provided for online learners?",
        answer: "Students receive personalized mentorship, technical assistance, and career counseling throughout the course."
      },
      {
        question: "What is the eligibility criteria for undergraduate programs?",
        answer: "Candidates must have completed 10+2 or equivalent from a recognized board."
      },
      {
        question: "Does Mangalayatan University offer scholarships?",
        answer: "Yes, the university provides merit-based scholarships for eligible students."
      }
    ],
    Brochures: {
      "MBA Brochure": "https://example.com/mangalayatan-mba-brochure.pdf",
      "MCA Brochure": "https://example.com/mangalayatan-mca-brochure.pdf",
      "BBA Brochure": "https://example.com/mangalayatan-bba-brochure.pdf"
    }
  },

  // MANIPAL UNIVERSITY JAIPUR
  {
    id: 'manipal-university-jaipur',
    name: 'Manipal University Jaipur Online (MUJ)',
    logo: '/placeholder.svg?height=80&width=80',
    image: 'https://i.ibb.co/album-placeholder/Manipal-University-Jaipur.png',
    mode: 'Online',
    accreditation: {
      grade: 'A+',
      body: 'NAAC'
    },

    courses: [
      {
        program: "MBA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 60000,
        brochure: "link-to-mba-brochure"
      },
      {
        program: "MCA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 55000,
        brochure: "link-to-mca-brochure"
      },
      {
        program: "BBA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 40000,
        brochure: "link-to-bba-brochure"
      },
      {
        program: "BCA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 38000,
        brochure: "link-to-bca-brochure"
      },
      {
        program: "BA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 35000,
        brochure: "link-to-ba-brochure"
      }
    ],

    location: {
      city: 'Jaipur',
      state: 'Rajasthan'
    },

    approvals: [
      { name: 'UGC-DEB', image: '/placeholder.svg?height=100&width=100', description: 'University Grants Commission for Distance Education' },
      { name: 'NAAC A+', image: '/placeholder.svg?height=100&width=100', description: 'National Assessment and Accreditation Council' },
      { name: 'AICTE', image: '/placeholder.svg?height=100&width=100', description: 'All India Council for Technical Education' }
    ],

    about: "Manipal University Jaipur (MUJ) Online is a prestigious institution offering high-quality online programs that combine academic rigor with innovative teaching methodologies. As part of the globally recognized Manipal Education Group, MUJ emphasizes accessibility, flexibility, and relevance in its online learning programs. The university caters to both fresh graduates and working professionals, offering a robust platform to achieve academic excellence and professional growth. With state-of-the-art technology, an experienced faculty, and a learner-centric approach, MUJ Online ensures a seamless and engaging educational experience. The institution's vision is to empower students with knowledge, skills, and values to excel in the modern world. Through comprehensive curriculums, career-oriented programs, and extensive support services, MUJ Online is committed to shaping future leaders and innovators.",

    keyHighlights: [
      "Globally recognized Manipal Education Group legacy",
      "Interactive learning with live classes and recorded sessions",
      "Affordable and flexible fee structure",
      "AI-enabled learning platform for seamless education",
      "100% placement assistance for professional programs"
    ],

    emiOptions: "Flexible EMI options available to make quality education affordable for all students.",
    whyChoose: [
      "Strong emphasis on skill development and employability",
      "Programs designed to meet industry requirements",
      "Recognized faculty with a wealth of experience",
      "Robust alumni network and global reach",
      "Dedicated career guidance and mentorship services"
    ],
    benefitsOfStudying: [
      "Personalized learning paths tailored to individual needs",
      "Access to cutting-edge technology and learning tools",
      "Global networking opportunities with peers and professionals",
      "Real-world case studies and projects",
      "Certification from a NAAC A+ accredited institution"
    ],
    examConduct: "Examinations are conducted online with strict AI-proctoring to ensure a fair and secure assessment process.",
    accreditationsApprovals: ['UGC-DEB', 'NAAC A+', 'AICTE'],
    academicApproach: "MUJ Online integrates a multi-disciplinary approach with practical applications to create a holistic and enriching learning environment.",
    quantitativeMetrics: {
      placementRate: "97%",
      corporateTieups: "600+",
      students: "80,000+",
      experience: "20+ years"
    },
    placements: {
      sectors: [
        "Information Technology",
        "Finance & Banking",
        "Marketing & Advertising",
        "Healthcare Management",
        "Engineering & Manufacturing"
      ],
      images: [
        "https://i.ibb.co/album-placeholder/muj-placements.jpg"
      ]
    },
    moreThanDegree: {
      description: "MUJ Online provides students with opportunities for additional certifications, industry exposure, and soft skills development, ensuring an all-round growth experience.",
      sampleDegree: {
        name: "MBA",
        description: "The MBA program emphasizes strategic thinking, leadership, and entrepreneurship to prepare students for the dynamic global business environment.",
        image: 'https://example.com/muj-sample-degree.jpg'
      }
    },
    admissionProcess: [
      "Visit the MUJ Online website",
      "Choose the desired program and check eligibility",
      "Complete the online application form",
      "Upload necessary documents for verification",
      "Pay the admission fee and complete enrollment",
      "Receive confirmation and access course materials"
    ],
    faqs: [
      {
        question: "Is the degree from MUJ Online valid internationally?",
        answer: "Yes, MUJ Online degrees are recognized globally and hold NAAC A+ accreditation."
      },
      {
        question: "Are scholarships available for online courses?",
        answer: "Yes, MUJ Online provides merit-based scholarships for eligible candidates."
      },
      {
        question: "Can working professionals enroll in these programs?",
        answer: "Yes, the courses are designed to accommodate the needs of working professionals with flexible schedules."
      },
      {
        question: "Does MUJ Online offer placement support?",
        answer: "Yes, the university has a dedicated placement cell to assist students with career opportunities."
      }
    ],
    Brochures: {
      "MBA Brochure": "https://example.com/muj-mba-brochure.pdf",
      "MCA Brochure": "https://example.com/muj-mca-brochure.pdf",
      "BBA Brochure": "https://example.com/muj-bba-brochure.pdf"
    }
  },

  // SIKKIM MANIPAL UNIVERSITY
  {
    id: 'sikkim-manipal-university',
    name: 'Sikkim Manipal University Online (SMU)',
    logo: '/placeholder.svg?height=80&width=80',
    image: 'https://i.ibb.co/album-placeholder/Sikkim-Manipal-University.png',
    mode: 'Online',
    accreditation: {
      grade: 'A+',
      body: 'NAAC'
    },

    courses: [
      {
        program: "MBA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 50000,
        brochure: "link-to-mba-brochure"
      },
      {
        program: "MCA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 48000,
        brochure: "link-to-mca-brochure"
      },
      {
        program: "BBA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 36000,
        brochure: "link-to-bba-brochure"
      },
      {
        program: "BCA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 34000,
        brochure: "link-to-bca-brochure"
      },
      {
        program: "B.Com",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 32000,
        brochure: "link-to-bcom-brochure"
      }
    ],

    location: {
      city: 'Gangtok',
      state: 'Sikkim'
    },

    approvals: [
      { name: 'UGC-DEB', image: '/placeholder.svg?height=100&width=100', description: 'University Grants Commission for Distance Education' },
      { name: 'NAAC A+', image: '/placeholder.svg?height=100&width=100', description: 'National Assessment and Accreditation Council' },
      { name: 'AICTE', image: '/placeholder.svg?height=100&width=100', description: 'All India Council for Technical Education' }
    ],

    about: "Sikkim Manipal University (SMU) Online is one of India's premier institutions offering quality online education for students and professionals alike. As a part of the prestigious Manipal Group, SMU combines its legacy of academic excellence with cutting-edge online learning technologies. The university is dedicated to empowering students through flexible and accessible education, ensuring they can learn from anywhere, at any time. SMU Online courses are designed to foster critical thinking, innovation, and problem-solving skills, preparing students for the challenges of the global workforce. With a commitment to providing top-notch education, SMU boasts a distinguished faculty, industry-aligned curricula, and comprehensive student support services. Its vision is to bridge the gap between traditional and modern education, creating opportunities for learners worldwide.",

    keyHighlights: [
      "Legacy of the prestigious Manipal Education Group",
      "Seamless online education with advanced learning platforms",
      "Industry-relevant courses and skill-building programs",
      "Affordable and accessible to students across the globe",
      "Strong alumni network and placement support"
    ],

    emiOptions: "Flexible EMI options available for all programs, making education affordable and stress-free.",
    whyChoose: [
      "Recognized by UGC-DEB for online and distance education",
      "Courses designed for skill enhancement and career growth",
      "Highly qualified and experienced faculty members",
      "Comprehensive learning materials and e-library access",
      "Global recognition of degrees with NAAC accreditation"
    ],
    benefitsOfStudying: [
      "Opportunity to learn from industry experts",
      "Flexibility to study at your own pace",
      "Online assessments with robust proctoring",
      "Career counseling and mentorship programs",
      "High-quality interactive course content"
    ],
    examConduct: "Examinations are conducted online with AI and manual proctoring to ensure integrity and fairness.",
    accreditationsApprovals: ['UGC-DEB', 'NAAC A+', 'AICTE'],
    academicApproach: "SMU Online focuses on a learner-centered approach, integrating technology and pedagogy to create an immersive educational experience.",
    quantitativeMetrics: {
      placementRate: "95%",
      corporateTieups: "500+",
      students: "1,00,000+",
      experience: "20+ years"
    },
    placements: {
      sectors: [
        "Banking & Financial Services",
        "Information Technology",
        "Healthcare & Pharma",
        "E-commerce & Retail",
        "Engineering & Manufacturing"
      ],
      images: [
        "https://i.ibb.co/album-placeholder/smu-placements.jpg"
      ]
    },
    moreThanDegree: {
      description: "Sikkim Manipal University Online provides a holistic educational experience that goes beyond degrees, offering certification programs, industry projects, and career development services to ensure comprehensive growth.",
      sampleDegree: {
        name: "MBA",
        description: "The MBA program emphasizes leadership, strategic thinking, and global business practices to prepare students for managerial roles.",
        image: 'https://example.com/smu-sample-degree.jpg'
      }
    },
    admissionProcess: [
      "Visit the official SMU Online website",
      "Select your desired program and review the details",
      "Complete the online registration form",
      "Upload required documents for eligibility verification",
      "Pay the admission fees through the secure portal",
      "Receive confirmation and access learning resources"
    ],
    faqs: [
      {
        question: "Are SMU Online degrees recognized globally?",
        answer: "Yes, SMU Online degrees are globally recognized and accredited by UGC-DEB and NAAC A+."
      },
      {
        question: "What support is available for working professionals?",
        answer: "SMU Online offers flexible schedules and mentorship programs tailored for working professionals."
      },
      {
        question: "Does SMU provide placement assistance?",
        answer: "Yes, SMU Online has a dedicated placement cell to assist students in securing job opportunities."
      },
      {
        question: "Are there any scholarships for online students?",
        answer: "Merit-based scholarships are available for eligible students."
      }
    ],
    Brochures: {
      "MBA Brochure": "https://example.com/smu-mba-brochure.pdf",
      "MCA Brochure": "https://example.com/smu-mca-brochure.pdf",
      "BBA Brochure": "https://example.com/smu-bba-brochure.pdf"
    }
  },


  // Sharda University

  {
    id: "sharda-university",
    name: "Sharda University Online",
    logo: "/placeholder.svg?height=80&width=80",
    image: "https://i.ibb.co/album-placeholder/Sharda-University.png",
    mode: "Online",
    accreditation: {
      grade: "A+",
      body: "NAAC"
    },
    courses: [
      {
        program: "MBA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 25000,
        brochure: "link-to-mba-brochure"
      },
      {
        program: "MCA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 25000,
        brochure: "link-to-mca-brochure"
      },
      {
        program: "BBA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 17500,
        brochure: "link-to-bba-brochure"
      },
      {
        program: "BCA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 17500,
        brochure: "link-to-bca-brochure"
      },
      {
        program: "BA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 17500,
        brochure: "link-to-ba-brochure"
      }
    ],
    location: {
      city: "Greater Noida",
      state: "Uttar Pradesh"
    },
    approvals: [
      {
        name: "UGC-DEB",
        image: "/placeholder.svg?height=100&width=100",
        description: "University Grants Commission for Distance Education"
      },
      {
        name: "NAAC A+",
        image: "/placeholder.svg?height=100&width=100",
        description: "National Assessment and Accreditation Council"
      }
    ],
    about: "Sharda University Online provides quality online education across multiple disciplines. It is known for its industry-relevant curriculum, global recognition, and learner-centric approach, making education accessible worldwide.",
    keyHighlights: [
      "Accredited by NAAC with an A+ grade",
      "Flexible learning with advanced technology platforms",
      "Affordable education with EMI options",
      "Global recognition and strong alumni network",
      "Dedicated placement support"
    ],
    emiOptions: "Flexible EMI options available for all programs, making education accessible and stress-free.",
    whyChoose: [
      "Recognized by UGC-DEB for online and distance education",
      "Courses tailored for skill development and career growth",
      "Comprehensive learning resources and e-library access",
      "Expert faculty with industry experience",
      "Wide array of specializations in undergraduate and postgraduate programs"
    ],
    benefitsOfStudying: [
      "Learn at your own pace with a flexible schedule",
      "Access to virtual labs and industry projects",
      "Online assessments with AI-proctoring for fairness",
      "Career counseling and placement assistance",
      "Interactive and engaging course content"
    ],
    examConduct: "Examinations are conducted online with AI and manual proctoring to ensure academic integrity.",
    accreditationsApprovals: ["UGC-DEB", "NAAC A+"],
    academicApproach: "Sharda Online integrates technology and pedagogy to create a learner-centric environment.",
    quantitativeMetrics: {
      placementRate: "90%",
      corporateTieups: "400+",
      students: "50,000+",
      experience: "28+ years"
    },
    placements: {
      sectors: [
        "IT & Software",
        "Banking & Finance",
        "Healthcare",
        "E-commerce",
        "Media & Entertainment"
      ],
      images: [
        "https://i.ibb.co/album-placeholder/sharda-placements.jpg"
      ]
    },
    moreThanDegree: {
      description: "Sharda University Online offers holistic education with certifications, industry projects, and career services.",
      sampleDegree: {
        name: "MBA",
        description: "Focused on leadership, strategy, and global business practices.",
        image: "https://example.com/sharda-sample-degree.jpg"
      }
    },
    admissionProcess: [
      "Visit the official Sharda University Online website",
      "Select your desired program and review the details",
      "Complete the online application form",
      "Upload necessary documents",
      "Pay the admission fees through the secure portal",
      "Receive confirmation and access learning materials"
    ],
    faqs: [
      {
        question: "Are Sharda Online degrees globally recognized?",
        answer: "Yes, they are UGC-DEB and NAAC-accredited, ensuring global recognition."
      },
      {
        question: "What support is available for working professionals?",
        answer: "Sharda Online offers flexible schedules and dedicated mentorship."
      },
      {
        question: "Does Sharda provide placement assistance?",
        answer: "Yes, a dedicated placement cell supports students with job opportunities."
      },
      {
        question: "Are there scholarships available?",
        answer: "Yes, merit-based scholarships are offered to eligible students."
      }
    ],
    brochures: {
      "MBA Brochure": "https://example.com/sharda-mba-brochure.pdf",
      "MCA Brochure": "https://example.com/sharda-mca-brochure.pdf",
      "BBA Brochure": "https://example.com/sharda-bba-brochure.pdf",
      "BCA Brochure": "https://example.com/sharda-bca-brochure.pdf",
      "BA Brochure": "https://example.com/sharda-ba-brochure.pdf"
    }
  },

  // Uttaranchal University 
  {
    id: 'uttaranchal-university',
    name: 'Uttaranchal University Online',
    logo: '/placeholder.svg?height=80&width=80',
    image: 'https://i.ibb.co/album-placeholder/Uttaranchal-University.png',
    mode: 'Online',
    accreditation: {
      grade: 'A+',
      body: 'NAAC',
    },
    courses: [
      {
        program: 'BBA',
        degree: 'Bachelor Degree',
        duration: '3 Years',
        feesPerSemester: 40000,
        brochure: 'link-to-bba-brochure',
      },
      {
        program: 'BCA',
        degree: 'Bachelor Degree',
        duration: '3 Years',
        feesPerSemester: 42000,
        brochure: 'link-to-bca-brochure',
      },
      {
        program: 'BA',
        degree: 'Bachelor Degree',
        duration: '3 Years',
        feesPerSemester: 38000,
        brochure: 'link-to-ba-brochure',
      },
      {
        program: 'MBA',
        degree: 'Master Degree',
        duration: '2 Years',
        feesPerSemester: 60000,
        brochure: 'link-to-mba-brochure',
      },
      {
        program: 'MCA',
        degree: 'Master Degree',
        duration: '2 Years',
        feesPerSemester: 58000,
        brochure: 'link-to-mca-brochure',
      },
    ],
    location: {
      city: 'Dehradun',
      state: 'Uttarakhand',
    },
    approvals: [
      { name: 'UGC-DEB', image: '/placeholder.svg?height=100&width=100', description: 'University Grants Commission for Distance Education' },
      { name: 'NAAC A+', image: '/placeholder.svg?height=100&width=100', description: 'National Assessment and Accreditation Council' },
    ],
    about: "Uttaranchal University is a renowned institution offering quality online education. It combines academic excellence with digital innovation to provide flexible, accessible learning options. Its courses focus on developing industry-relevant skills to meet the needs of a global workforce.",
    keyHighlights: [
      'NAAC-accredited institution with an A+ grade',
      'Seamless online education via advanced platforms',
      'Industry-relevant programs designed for career growth',
      'Flexible schedules for working professionals',
      'Dedicated placement support with industry tie-ups',
    ],
    emiOptions: "Flexible EMI options available for all programs, making education affordable.",
    whyChoose: [
      'Recognized by UGC-DEB for online and distance education',
      'Courses tailored for career advancement',
      'Comprehensive learning resources and e-library',
      'Highly qualified faculty with industry experience',
    ],
    benefitsOfStudying: [
      'Flexibility to study at your own pace',
      'AI-driven online assessments for fairness',
      'Career counseling and placement support',
      'Interactive, high-quality learning materials',
    ],
    examConduct: 'Examinations are conducted online with AI-based and manual proctoring.',
    accreditationsApprovals: ['UGC-DEB', 'NAAC A+'],
    academicApproach: 'Focused on learner-centric pedagogy integrating technology with education.',
    quantitativeMetrics: {
      placementRate: '92%',
      corporateTieups: '300+',
      students: '50,000+',
      experience: '15+ years',
    },
    placements: {
      sectors: [
        'Banking & Financial Services',
        'Information Technology',
        'E-commerce & Retail',
        'Healthcare',
        'Engineering',
      ],
      images: ['https://i.ibb.co/album-placeholder/placements.jpg'],
    },
    admissionProcess: [
      'Visit the official Uttaranchal University website.',
      'Select your program and review the details.',
      'Complete the online registration form.',
      'Upload required documents for eligibility verification.',
      'Pay admission fees through the secure portal.',
      'Receive confirmation and access learning resources.',
    ],
    faqs: [
      {
        question: 'Are Uttaranchal University online degrees recognized globally?',
        answer: 'Yes, they are globally recognized and accredited by UGC-DEB and NAAC A+.',
      },
      {
        question: 'Does Uttaranchal University offer placement assistance?',
        answer: 'Yes, the university has tie-ups with top companies to support student placements.',
      },
      {
        question: 'Are scholarships available for online students?',
        answer: 'Merit-based scholarships are offered to eligible students.',
      },
    ],
    brochures: {
      'BBA Brochure': 'https://example.com/uttaranchal-bba-brochure.pdf',
      'BCA Brochure': 'https://example.com/uttaranchal-bca-brochure.pdf',
      'MBA Brochure': 'https://example.com/uttaranchal-mba-brochure.pdf',
      'MCA Brochure': 'https://example.com/uttaranchal-mca-brochure.pdf',
    },
  },

  // SHOOLINI UNIVERSITY
  {
    id: 'shoolini-university',
    name: 'Shoolini University Online',
    logo: '/placeholder.svg?height=80&width=80',
    image: 'https://i.ibb.co/album-placeholder/Shoolini-University.png',
    mode: 'Online',
    accreditation: {
      grade: 'A++',
      body: 'NAAC'
    },

    courses: [
      {
        program: "MBA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 54000,
        brochure: "link-to-mba-brochure"
      },
      {
        program: "M.Com",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 48000,
        brochure: "link-to-mcom-brochure"
      },
      {
        program: "BBA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 40000,
        brochure: "link-to-bba-brochure"
      },
      {
        program: "BCA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 38000,
        brochure: "link-to-bca-brochure"
      },
      {
        program: "B.Sc.",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 36000,
        brochure: "link-to-bsc-brochure"
      }
    ],

    location: {
      city: 'Solan',
      state: 'Himachal Pradesh'
    },

    approvals: [
      { name: 'UGC-DEB', image: '/placeholder.svg?height=100&width=100', description: 'University Grants Commission for Distance Education' },
      { name: 'NAAC A++', image: '/placeholder.svg?height=100&width=100', description: 'National Assessment and Accreditation Council' },
      { name: 'AICTE', image: '/placeholder.svg?height=100&width=100', description: 'All India Council for Technical Education' }
    ],

    about: "Shoolini University Online is a trailblazer in higher education, combining academic excellence with an innovative online platform to cater to students worldwide. Known for its research-driven approach, Shoolini University provides a nurturing environment for learners, with state-of-the-art digital resources and an emphasis on practical skills. With a mission to transform education, the university delivers high-quality online programs that align with industry demands, fostering a generation of leaders and professionals. Students benefit from a rich learning experience, supported by a highly qualified faculty, personalized mentorship, and collaborative projects. The institution takes pride in its robust placement track record, ensuring students are equipped to excel in their careers. Shoolini University is committed to creating global citizens through holistic and accessible online education.",

    keyHighlights: [
      "First Indian university with a QS 5-star rating in research",
      "Award-winning online learning platforms",
      "Strong focus on innovation and entrepreneurship",
      "Highly affordable yet globally recognized degrees",
      "Exceptional student support and mentorship programs"
    ],

    emiOptions: "Shoolini University provides easy EMI payment plans to support students financially.",
    whyChoose: [
      "Recognized by NAAC with an A++ grade",
      "Leading-edge online learning methodologies",
      "Industry-integrated curriculum for real-world readiness",
      "Strong placement support with leading companies",
      "Research opportunities even for online learners"
    ],
    benefitsOfStudying: [
      "Practical learning with a research focus",
      "24/7 access to a world-class e-library and learning resources",
      "Flexible and interactive virtual classrooms",
      "Networking opportunities with peers and alumni",
      "Global recognition and career enhancement"
    ],
    examConduct: "Exams are conducted online with secure AI-enabled proctoring to ensure fairness and credibility.",
    accreditationsApprovals: ['UGC-DEB', 'NAAC A++', 'AICTE'],
    academicApproach: "The university's approach blends theoretical concepts with experiential learning, utilizing advanced online tools to create a collaborative environment.",
    quantitativeMetrics: {
      placementRate: "98%",
      corporateTieups: "600+",
      students: "50,000+",
      experience: "15+ years"
    },
    placements: {
      sectors: [
        "Banking & Financial Services",
        "Technology & Consulting",
        "Healthcare & Life Sciences",
        "Retail & E-commerce",
        "Education & Research"
      ],
      images: [
        "https://i.ibb.co/album-placeholder/shoolini-placements.jpg"
      ]
    },
    moreThanDegree: {
      description: "Beyond degrees, Shoolini University provides avenues for research, professional certifications, and skill development, creating a well-rounded academic journey.",
      sampleDegree: {
        name: "BBA",
        description: "This BBA program focuses on entrepreneurial skills, global business practices, and leadership development.",
        image: 'https://example.com/shoolini-sample-degree.jpg'
      }
    },
    admissionProcess: [
      "Visit the official Shoolini University Online website",
      "Select your program and go through the details",
      "Fill out the registration form with personal and academic information",
      "Submit the required documents for verification",
      "Make the admission fee payment securely online",
      "Receive confirmation and access to the student dashboard"
    ],
    faqs: [
      {
        question: "How is the online experience at Shoolini University different from others?",
        answer: "Shoolini University integrates research-based learning with cutting-edge online tools, offering students a unique and engaging experience."
      },
      {
        question: "What types of students benefit most from Shoolini's programs?",
        answer: "Shoolini's programs cater to working professionals, students seeking flexibility, and anyone aspiring for a global standard of education."
      },
      {
        question: "Does Shoolini provide any guidance for research projects?",
        answer: "Yes, students are mentored by experienced faculty members and have access to research facilities for various projects."
      },
      {
        question: "Are the programs suitable for international students?",
        answer: "Absolutely. The programs are globally recognized and designed to accommodate international learners."
      },
      {
        question: "What kind of technical support is available for online learners?",
        answer: "A dedicated technical support team is available 24/7 to assist students with any platform or course-related issues."
      }
    ],
    Brochures: {
      "MBA Brochure": "https://example.com/shoolini-mba-brochure.pdf",
    }
  },

  // UPES UNIVERSITY
  {
    id: 'upes-university',
    name: 'UPES Online',
    logo: '/placeholder.svg?height=80&width=80',
    image: 'https://i.ibb.co/album-placeholder/UPES-University.png',
    mode: 'Online',
    accreditation: {
      grade: 'A',
      body: 'NAAC'
    },

    courses: [
      {
        program: "MBA (Energy Management)",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 75000,
        brochure: "link-to-mba-energy-management-brochure"
      },
      {
        program: "BBA (Digital Marketing)",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 50000,
        brochure: "link-to-bba-digital-marketing-brochure"
      },
      {
        program: "MBA (International Business)",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 75000,
        brochure: "link-to-mba-ib-brochure"
      },
      {
        program: "B.Com (Banking and Insurance)",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 45000,
        brochure: "link-to-bcom-banking-insurance-brochure"
      }
    ],

    location: {
      city: 'Dehradun',
      state: 'Uttarakhand'
    },

    approvals: [
      { name: 'UGC-DEB', image: '/placeholder.svg?height=100&width=100', description: 'University Grants Commission for Distance Education' },
      { name: 'NAAC A', image: '/placeholder.svg?height=100&width=100', description: 'National Assessment and Accreditation Council' },
      { name: 'AICTE', image: '/placeholder.svg?height=100&width=100', description: 'All India Council for Technical Education' }
    ],

    about: "UPES Online is an innovative initiative by the University of Petroleum and Energy Studies, offering high-quality education in a flexible online format. With a focus on catering to industry demands, UPES Online provides specialized programs in energy, business, and digital domains. Leveraging advanced technology and experienced faculty, the university aims to empower students with practical skills and knowledge for career advancement. UPES Online is ideal for working professionals and students who seek academic excellence combined with the convenience of online learning.",

    keyHighlights: [
      "Recognized as a leader in specialized education",
      "Flexible online programs tailored for working professionals",
      "Experienced faculty with strong industry expertise",
      "Interactive learning with access to premium digital resources",
      "Placement support and career guidance"
    ],

    emiOptions: "UPES Online offers EMI options to ease the financial burden of education.",
    whyChoose: [
      "Programs designed to meet industry-specific requirements",
      "Globally recognized curriculum and degrees",
      "Opportunities to interact with industry experts",
      "Support for career growth and placements",
      "Accredited by UGC-DEB and NAAC with an ‘A’ grade"
    ],
    benefitsOfStudying: [
      "Industry-aligned curriculum",
      "Flexible schedules for online learning",
      "Access to a vast digital library",
      "Collaborative projects and case studies",
      "Placement opportunities with reputed firms"
    ],
    examConduct: "Online examinations with secure proctoring systems.",
    accreditationsApprovals: ['UGC-DEB', 'NAAC A', 'AICTE'],
    academicApproach: "UPES Online emphasizes practical learning combined with academic excellence to prepare students for global challenges.",
    quantitativeMetrics: {
      placementRate: "96%",
      corporateTieups: "500+",
      students: "15,000+",
      experience: "20+ years"
    },
    placements: {
      sectors: [
        "Energy and Environment",
        "Digital Marketing",
        "Banking and Insurance",
        "International Business"
      ],
      images: [
        "https://i.ibb.co/album-placeholder/upes-placements.jpg"
      ]
    },
    moreThanDegree: {
      description: "UPES Online offers more than just degrees by integrating certifications, real-world projects, and industry-relevant training.",
      sampleDegree: {
        name: "MBA (Energy Management)",
        description: "A focused MBA program tailored to prepare professionals for leadership roles in the energy sector.",
        image: 'https://example.com/upes-sample-degree.jpg'
      }
    },
    admissionProcess: [
      "Visit the UPES Online website",
      "Explore the online programs and choose the right one for you",
      "Complete the application form online",
      "Upload the required documents",
      "Pay the registration fee online",
      "Receive your admission confirmation and login credentials"
    ],
    faqs: [
      {
        question: "Are UPES Online programs industry-recognized?",
        answer: "Yes, UPES Online programs are designed to meet industry standards and are globally recognized."
      },
      {
        question: "Can I manage UPES Online studies with a full-time job?",
        answer: "Yes, the programs are flexible, allowing working professionals to balance work and studies."
      },
      {
        question: "What resources are available for online students?",
        answer: "UPES Online provides access to a comprehensive e-library, live sessions, and recorded lectures."
      },
      {
        question: "How does UPES Online ensure quality education?",
        answer: "With experienced faculty, industry-aligned courses, and interactive learning tools, UPES Online ensures top-notch education."
      },
      {
        question: "Is there any support for career development?",
        answer: "Yes, students receive placement assistance, mentorship, and career guidance to enhance their prospects."
      }
    ],
    Brochures: {
      "MBA (Energy Management) Brochure": "https://example.com/upes-mba-energy-management-brochure.pdf",
    }
  },

  // VIVEKANAND GLOBAL UNIVERSITY
  {
    id: 'vivekanand-global-university',
    name: 'Vivekanand Global University Online',
    logo: '/placeholder.svg?height=80&width=80',
    image: 'https://i.ibb.co/album-placeholder/VGU-University.png',
    mode: 'Online',
    accreditation: {
      grade: 'A',
      body: 'NAAC'
    },

    courses: [
      {
        program: "MBA (Business Analytics)",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 65000,
        brochure: "link-to-mba-business-analytics-brochure"
      },
      {
        program: "BBA (Hospital Management)",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 50000,
        brochure: "link-to-bba-hospital-management-brochure"
      },
      {
        program: "M.Com (Financial Analysis)",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 45000,
        brochure: "link-to-mcom-financial-analysis-brochure"
      },
      {
        program: "B.Sc (Data Science)",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 55000,
        brochure: "link-to-bsc-data-science-brochure"
      }
    ],

    location: {
      city: 'Jaipur',
      state: 'Rajasthan'
    },

    approvals: [
      { name: 'UGC-DEB', image: '/placeholder.svg?height=100&width=100', description: 'University Grants Commission for Distance Education' },
      { name: 'NAAC A', image: '/placeholder.svg?height=100&width=100', description: 'National Assessment and Accreditation Council' }
    ],

    about: "Vivekanand Global University Online (VGU) is a pioneering institution dedicated to delivering quality education through flexible online programs. Based in Jaipur, Rajasthan, VGU emphasizes skill-oriented learning to meet the dynamic demands of the global workforce. Through cutting-edge technology, experienced faculty, and industry-focused curricula, VGU Online ensures that students gain practical skills, knowledge, and certifications that align with their career aspirations. The online programs are designed for students and professionals seeking excellence in education without compromising their personal or professional commitments.",

    keyHighlights: [
      "Skill-based, industry-relevant programs",
      "Flexibility for working professionals",
      "Experienced faculty and practical learning modules",
      "Digital-first approach to education",
      "Dedicated career and placement support"
    ],

    emiOptions: "VGU Online provides affordable EMI options to make education accessible.",
    whyChoose: [
      "Skill-focused, industry-aligned curriculum",
      "Recognized by NAAC and UGC-DEB",
      "Flexible online programs suitable for all learners",
      "Placement assistance with top recruiters",
      "Global exposure through virtual platforms"
    ],
    benefitsOfStudying: [
      "Practical and project-based learning",
      "Industry certifications included in programs",
      "Flexible schedules and personalized support",
      "Interactive online learning with recorded sessions",
      "Internship and placement support for career growth"
    ],
    examConduct: "Secure online exams with proctored systems for fairness and transparency.",
    accreditationsApprovals: ['UGC-DEB', 'NAAC A'],
    academicApproach: "VGU Online focuses on a learner-centric, application-driven educational approach for global readiness.",
    quantitativeMetrics: {
      placementRate: "95%",
      corporateTieups: "200+",
      students: "10,000+",
      experience: "15+ years"
    },
    placements: {
      sectors: [
        "Data Science and Analytics",
        "Business Management",
        "Hospital Administration",
        "Finance and Banking"
      ],
      images: [
        "https://i.ibb.co/album-placeholder/vgu-placements.jpg"
      ]
    },
    moreThanDegree: {
      description: "VGU Online ensures a holistic learning experience by integrating additional certifications, practical projects, and skill-based training within the curriculum.",
      sampleDegree: {
        name: "MBA (Business Analytics)",
        description: "A comprehensive program designed to build analytical and strategic management expertise.",
        image: 'https://example.com/vgu-sample-degree.jpg'
      }
    },
    admissionProcess: [
      "Explore VGU Online's website for available programs",
      "Choose a program and fill out the application form online",
      "Upload required documents for verification",
      "Pay the registration fee through the online portal",
      "Receive confirmation and start your academic journey"
    ],
    faqs: [
      {
        question: "What makes VGU Online programs unique?",
        answer: "VGU Online focuses on practical and industry-driven education to prepare students for global opportunities."
      },
      {
        question: "How flexible are the online programs?",
        answer: "The programs are designed to allow learners to manage studies alongside professional commitments."
      },
      {
        question: "Do students receive placement support?",
        answer: "Yes, students have access to placement assistance and career mentoring services."
      },
      {
        question: "What resources are available for online students?",
        answer: "Students get access to e-books, recorded lectures, live sessions, and project resources."
      },
      {
        question: "Can international students apply to VGU Online programs?",
        answer: "Yes, VGU Online welcomes international students to its flexible programs."
      }
    ],
    Brochures: {
      "MBA (Business Analytics) Brochure": "https://example.com/vgu-mba-business-analytics-brochure.pdf",
      "BBA (Hospital Management) Brochure": "https://example.com/vgu-bba-hospital-management-brochure.pdf",
      "B.Sc (Data Science) Brochure": "https://example.com/vgu-bsc-data-science-brochure.pdf"
    }
  },


  // VIGNAN UNIVERSITY
  {
    id: 'vignan-university',
    name: "Vignan University",
    logo: '/placeholder.svg?height=80&width=80',
    image: 'https://i.ibb.co/album-placeholder/vignan-university.png',
    mode: 'Online',
    accreditation: {
      grade: 'A',
      body: 'NAAC'
    },

    courses: [
      {
        program: "MBA (General Management)",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 60000,
        brochure: "link-to-mba-general-management-brochure"
      },
      {
        program: "BBA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 40000,
        brochure: "link-to-bba-brochure"
      }
    ],

    location: {
      city: 'Guntur',
      state: 'Andhra Pradesh'
    },

    approvals: [
      { name: 'UGC-DEB', image: '/placeholder.svg?height=100&width=100', description: 'University Grants Commission for Distance Education' },
      { name: 'NAAC A', image: '/placeholder.svg?height=100&width=100', description: 'National Assessment and Accreditation Council' }
    ],

    about: "Vignan University Online provides innovative and flexible learning opportunities for students and working professionals. Known for its emphasis on research and quality education, the university designs its online programs to deliver industry-relevant knowledge and skills. It offers a robust learning management system with access to comprehensive resources, ensuring an enriching academic experience. With a focus on holistic development, Vignan University aims to create future-ready professionals equipped to excel in competitive environments.",

    keyHighlights: [
      "NAAC 'A' accredited university",
      "Specialized online programs for professionals",
      "Experienced faculty and personalized mentorship",
      "Seamless digital learning experience",
      "Placement assistance and career support"
    ],

    emiOptions: "Flexible EMI plans are available to make education accessible for all learners.",
    whyChoose: [
      "Accredited university with a strong reputation",
      "Programs designed with industry collaboration",
      "Interactive and engaging virtual learning",
      "Focus on both academic and practical skill-building",
      "Career-oriented education with placement support"
    ],
    benefitsOfStudying: [
      "Learn from experienced industry-oriented faculty",
      "Flexible schedules for working professionals",
      "Access to recorded lectures and study materials",
      "Opportunity to network with peers and experts",
      "Certification from a reputed institution"
    ],
    examConduct: "Vignan University conducts online exams using secure proctoring technology to maintain assessment integrity.",
    accreditationsApprovals: ['UGC-DEB', 'NAAC A'],
    academicApproach: "The university integrates practical learning with academic concepts, emphasizing innovation and problem-solving skills.",
    quantitativeMetrics: {
      placementRate: "90%",
      corporateTieups: "100+",
      students: "10,000+",
      experience: "15+ years"
    },
    placements: {
      sectors: [
        "Business Management",
        "Entrepreneurship",
        "Finance",
        "Operations and Supply Chain"
      ],
      images: [
        "https://i.ibb.co/album-placeholder/vignan-placements.jpg"
      ]
    },
    moreThanDegree: {
      description: "Vignan University's online programs offer skill-building courses, practical projects, and career development initiatives that go beyond traditional education.",
      sampleDegree: {
        name: "MBA (General Management)",
        description: "A comprehensive program tailored for aspiring business leaders, focusing on strategic management and leadership skills.",
        image: 'https://example.com/vignan-sample-degree.jpg'
      }
    },
    admissionProcess: [
      "Visit the official Vignan University Online website",
      "Choose the desired program and complete the application form",
      "Upload necessary documents for eligibility verification",
      "Pay the registration fee through the secure portal",
      "Start learning after admission confirmation"
    ],
    faqs: [
      {
        question: "What makes Vignan University's online programs unique?",
        answer: "The programs are designed to combine theoretical knowledge with practical skills, catering to the needs of modern industries."
      },
      {
        question: "Are placement services offered for online courses?",
        answer: "Yes, students receive placement support and career guidance to enhance their employment opportunities."
      },
      {
        question: "How are online classes conducted?",
        answer: "Classes are delivered through an advanced learning management system with live and recorded lectures."
      },
      {
        question: "Can international students enroll in these programs?",
        answer: "Yes, the programs are open to international students, providing them with flexible learning options."
      },
      {
        question: "Is financial assistance available?",
        answer: "Yes, EMI options are available to make the courses more affordable for students."
      }
    ],
    Brochures: {
      "MBA (General Management) Brochure": "https://example.com/vignan-mba-general-management-brochure.pdf",
      "BBA Brochure": "https://example.com/vignan-bba-brochure.pdf"
    }
  },


  // KURUKSHETRA UNIVERSITY
  {
    id: 'kurukshetra-university',
    name: "Kurukshetra University Online",
    logo: '/placeholder.svg?height=80&width=80',
    image: 'https://i.ibb.co/album-placeholder/kurukshetra-university.png',
    mode: 'Online',
    accreditation: {
      grade: 'A+',
      body: 'NAAC'
    },

    courses: [
      {
        program: "Master of Arts (English)",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 10000,
        brochure: "link-to-ma-english-brochure"
      },
      {
        program: "Bachelor of Arts (General)",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 6000,
        brochure: "link-to-ba-general-brochure"
      }
    ],

    location: {
      city: 'Kurukshetra',
      state: 'Haryana'
    },

    approvals: [
      { name: 'UGC-DEB', image: '/placeholder.svg?height=100&width=100', description: 'University Grants Commission for Distance Education' },
      { name: 'NAAC A+', image: '/placeholder.svg?height=100&width=100', description: 'National Assessment and Accreditation Council' }
    ],

    about: "Kurukshetra University is a prestigious institution with a legacy of academic excellence. The university's online programs are designed to offer accessible and high-quality education to students worldwide. Leveraging cutting-edge technology, Kurukshetra University ensures an engaging and interactive learning experience. The curriculum is industry-aligned and focuses on holistic development to prepare students for competitive professional environments.",

    keyHighlights: [
      "NAAC 'A+' accredited university",
      "Renowned for its academic heritage",
      "Affordable and flexible online programs",
      "Comprehensive learning resources",
      "Placement support and guidance"
    ],

    emiOptions: "Easy EMI options are available for all eligible students.",
    whyChoose: [
      "Recognized university with decades of academic excellence",
      "Cost-effective online education",
      "Accessible learning from any location",
      "Expert faculty with practical insights",
      "Supportive learning environment"
    ],
    benefitsOfStudying: [
      "Learn from a university with a rich legacy",
      "Flexible scheduling for working professionals",
      "Access to online resources and recorded lectures",
      "Focused on both theoretical and practical knowledge",
      "Globally recognized degree credentials"
    ],
    examConduct: "Examinations are conducted online with strict proctoring to ensure integrity and transparency.",
    accreditationsApprovals: ['UGC-DEB', 'NAAC A+'],
    academicApproach: "Kurukshetra University emphasizes academic rigor combined with practical learning methodologies to create a balanced and enriching educational experience.",
    quantitativeMetrics: {
      placementRate: "85%",
      corporateTieups: "50+",
      students: "20,000+",
      experience: "65+ years"
    },
    placements: {
      sectors: [
        "Education",
        "Public Administration",
        "Creative Writing",
        "Content Development"
      ],
      images: [
        "https://i.ibb.co/album-placeholder/kurukshetra-placements.jpg"
      ]
    },
    moreThanDegree: {
      description: "Kurukshetra University's online courses provide opportunities to build employability skills, practical knowledge, and a solid academic foundation for lifelong learning.",
      sampleDegree: {
        name: "Master of Arts (English)",
        description: "A program designed to deepen understanding of English literature and enhance critical thinking, writing, and analytical skills.",
        image: 'https://example.com/kurukshetra-sample-degree.jpg'
      }
    },
    admissionProcess: [
      "Visit the Kurukshetra University Online portal",
      "Select your preferred program and register",
      "Upload all required academic documents",
      "Submit the application fee online",
      "Receive admission confirmation and start learning"
    ],
    faqs: [
      {
        question: "What are the benefits of Kurukshetra University's online programs?",
        answer: "The programs are designed for flexibility, affordability, and accessibility, catering to students from diverse backgrounds."
      },
      {
        question: "Is placement support available?",
        answer: "Yes, Kurukshetra University provides career guidance and placement support for its online program students."
      },
      {
        question: "How are the online classes conducted?",
        answer: "Classes are delivered through an interactive online platform with live sessions, recorded lectures, and resources."
      },
      {
        question: "Are the degrees recognized globally?",
        answer: "Yes, the degrees offered by Kurukshetra University are recognized and hold significant value."
      },
      {
        question: "What financial assistance options are available?",
        answer: "EMI options and scholarships may be available for eligible students."
      }
    ],
    Brochures: {
      "Master of Arts (English) Brochure": "https://example.com/kurukshetra-ma-english-brochure.pdf",
      "Bachelor of Arts (General) Brochure": "https://example.com/kurukshetra-ba-general-brochure.pdf"
    }
  },

  // DY PATIL UNIVERSITY
  {
    id: 'dy-patil-university',
    name: 'DY Patil University Online',
    logo: '/placeholder.svg?height=80&width=80',
    image: 'https://i.ibb.co/album-placeholder/DY-Patil-University.png',
    mode: 'Online',
    accreditation: {
      grade: 'A++',
      body: 'NAAC'
    },

    courses: [
      {
        program: "MBA (Marketing Management)",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 75000,
        brochure: "link-to-mba-marketing-management-brochure"
      },
      {
        program: "MBA (Human Resource Management)",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 75000,
        brochure: "link-to-mba-hr-management-brochure"
      },
      {
        program: "BBA (Finance)",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 50000,
        brochure: "link-to-bba-finance-brochure"
      },
      {
        program: "B.Sc (Hospitality and Tourism Management)",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 60000,
        brochure: "link-to-bsc-hospitality-management-brochure"
      }
    ],

    location: {
      city: 'Navi Mumbai',
      state: 'Maharashtra'
    },

    approvals: [
      { name: 'UGC-DEB', image: '/placeholder.svg?height=100&width=100', description: 'University Grants Commission for Distance Education' },
      { name: 'NAAC A++', image: '/placeholder.svg?height=100&width=100', description: 'National Assessment and Accreditation Council' }
    ],

    about: "DY Patil University Online is a top-tier institution in India, offering flexible and high-quality online programs designed to cater to diverse academic and professional needs. With a focus on innovation, global exposure, and industry relevance, DY Patil University aims to provide a world-class education to students across the globe. Its online programs are crafted to equip learners with practical knowledge and skills essential for today's dynamic job market. The university is known for its strong emphasis on academic excellence, cutting-edge research, and holistic development, ensuring students thrive in their careers.",

    keyHighlights: [
      "State-of-the-art virtual learning platform",
      "Experienced faculty with industry expertise",
      "NAAC A++ accreditation ensures academic excellence",
      "Flexible schedules for working professionals",
      "Comprehensive career support and placement assistance"
    ],

    emiOptions: "Affordable EMI options are available to make online programs accessible for all students.",
    whyChoose: [
      "Globally recognized, NAAC A++ accredited university",
      "Innovative, industry-aligned curriculum",
      "Flexible learning tailored for working professionals",
      "Placement support with top recruiters across various sectors",
      "Robust student support services"
    ],
    benefitsOfStudying: [
      "Hands-on projects and practical learning",
      "Interactive and engaging online classes",
      "Global networking opportunities",
      "Access to recorded lectures and study materials",
      "Career-oriented certifications and mentorship programs"
    ],
    examConduct: "DY Patil University conducts secure online examinations using AI-based proctoring to ensure integrity and fairness.",
    accreditationsApprovals: ['UGC-DEB', 'NAAC A++'],
    academicApproach: "The university adopts a learner-centric, application-focused pedagogy to create industry-ready professionals.",
    quantitativeMetrics: {
      placementRate: "97%",
      corporateTieups: "250+",
      students: "20,000+",
      experience: "20+ years"
    },
    placements: {
      sectors: [
        "Marketing and Sales",
        "Human Resources",
        "Finance and Banking",
        "Hospitality and Tourism"
      ],
      images: [
        "https://i.ibb.co/album-placeholder/dy-patil-placements.jpg"
      ]
    },
    moreThanDegree: {
      description: "DY Patil Online goes beyond traditional education by integrating certifications, real-world projects, and skill-building exercises into its programs.",
      sampleDegree: {
        name: "MBA (Marketing Management)",
        description: "An advanced program designed to build strategic marketing and managerial expertise.",
        image: 'https://example.com/dy-patil-sample-degree.jpg'
      }
    },
    admissionProcess: [
      "Visit the official DY Patil University Online website",
      "Select a program and fill out the online application form",
      "Upload the necessary documents for eligibility verification",
      "Pay the application fee through the secure portal",
      "Receive admission confirmation and begin the course"
    ],
    faqs: [
      {
        question: "What are the benefits of choosing DY Patil Online programs?",
        answer: "DY Patil Online provides flexible, industry-relevant programs that align with career aspirations, ensuring students excel in the professional world."
      },
      {
        question: "How are online classes conducted?",
        answer: "Classes are conducted on an advanced digital platform with live sessions, recorded lectures, and interactive modules."
      },
      {
        question: "Are placement services available for online students?",
        answer: "Yes, dedicated placement support is provided to help students secure jobs in leading companies."
      },
      {
        question: "What is the mode of assessment for online programs?",
        answer: "Assessments include assignments, projects, and proctored online exams."
      },
      {
        question: "Is there an option for international students to enroll?",
        answer: "Yes, international students are welcome to apply and benefit from the flexible online programs."
      }
    ],
    Brochures: {
      "MBA (Marketing Management) Brochure": "https://example.com/dy-patil-mba-marketing-management-brochure.pdf",
      "BBA (Finance) Brochure": "https://example.com/dy-patil-bba-finance-brochure.pdf"
    }
  },

  // AMRITA UNIVERSITY
  {
    id: 'amrita-university',
    name: "Amrita Vishwa Vidyapeetham Online",
    logo: '/placeholder.svg?height=80&width=80',
    image: 'https://i.ibb.co/album-placeholder/amrita-university.png',
    mode: 'Online',
    accreditation: {
      grade: 'A++',
      body: 'NAAC'
    },

    courses: [
      {
        program: "Master of Business Administration (MBA)",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 45000,
        brochure: "link-to-mba-brochure"
      },
      {
        program: "Bachelor of Commerce (B.Com)",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 30000,
        brochure: "link-to-bcom-brochure"
      }
    ],

    location: {
      city: 'Coimbatore',
      state: 'Tamil Nadu'
    },

    approvals: [
      { name: 'UGC-DEB', image: '/placeholder.svg?height=100&width=100', description: 'University Grants Commission for Distance Education' },
      { name: 'NAAC A++', image: '/placeholder.svg?height=100&width=100', description: 'National Assessment and Accreditation Council' }
    ],

    about: "Amrita Vishwa Vidyapeetham is a globally recognized institution offering high-quality online education. With a mission to impart value-based education, the university's online programs are meticulously designed to balance theoretical knowledge and practical skills. Amrita University leverages advanced digital platforms to provide a seamless and engaging learning experience, making education accessible to students across the world.",

    keyHighlights: [
      "NAAC 'A++' accredited university",
      "Global recognition for academic excellence",
      "Interactive online learning modules",
      "Industry-aligned curriculum",
      "Dedicated placement support"
    ],

    emiOptions: "Flexible EMI options are available for all eligible students.",
    whyChoose: [
      "Ranked among the top universities in India",
      "Highly experienced faculty and mentors",
      "Blended learning approach with online tools",
      "Affordable fee structure with global recognition",
      "Comprehensive placement assistance"
    ],
    benefitsOfStudying: [
      "Flexibility for working professionals and students",
      "Innovative learning methodologies",
      "Access to a wide range of resources and mentors",
      "Opportunities to engage with global academic communities",
      "Recognized degrees with a focus on employability"
    ],
    examConduct: "Examinations are conducted online through a secure and proctored system.",
    accreditationsApprovals: ['UGC-DEB', 'NAAC A++', 'NIRF Top Ranked'],
    academicApproach: "Amrita focuses on combining technology-driven education with traditional academic values to deliver an enriched learning experience.",
    quantitativeMetrics: {
      placementRate: "90%",
      corporateTieups: "70+",
      students: "25,000+",
      experience: "20+ years"
    },
    placements: {
      sectors: [
        "Banking and Finance",
        "IT Services",
        "Management Consulting",
        "E-commerce"
      ],
      images: [
        "https://i.ibb.co/album-placeholder/amrita-placements.jpg"
      ]
    },
    moreThanDegree: {
      description: "Amrita University emphasizes holistic learning that extends beyond academics, ensuring students are equipped with essential skills for personal and professional growth.",
      sampleDegree: {
        name: "Master of Business Administration (MBA)",
        description: "An industry-oriented program designed to enhance leadership, managerial, and analytical skills, preparing students for the dynamic business environment.",
        image: 'https://example.com/amrita-sample-degree.jpg'
      }
    },
    admissionProcess: [
      "Visit the Amrita Online Programs portal",
      "Choose your desired course and sign up",
      "Upload necessary academic and personal documents",
      "Pay the application fee online",
      "Receive confirmation of admission and begin your journey"
    ],
    faqs: [
      {
        question: "What makes Amrita University's online programs unique?",
        answer: "Amrita focuses on value-based education, blending traditional knowledge with modern technology to deliver an exceptional learning experience."
      },
      {
        question: "Are there scholarships available?",
        answer: "Yes, Amrita offers merit-based scholarships for eligible students."
      },
      {
        question: "Can working professionals join these programs?",
        answer: "Absolutely, the online programs are designed to accommodate the schedules of working professionals."
      },
      {
        question: "What support is provided for placements?",
        answer: "The university provides extensive placement support, including career counseling and interview preparation."
      },
      {
        question: "What is the mode of class delivery?",
        answer: "Classes are conducted online with live sessions, pre-recorded lectures, and access to learning resources."
      }
    ],
    Brochures: {
      "MBA Brochure": "https://example.com/amrita-mba-brochure.pdf"
    }
  },

  {
    // ANDHRA UNIVERSITY
    id: 'andhra-university',
    name: "Andhra University Online",
    logo: '/placeholder.svg?height=80&width=80',
    image: 'https://i.ibb.co/album-placeholder/andhra-university.png',
    mode: 'Online',
    accreditation: {
      grade: 'A',
      body: 'NAAC'
    },

    courses: [
      {
        program: "Master of Business Administration (MBA)",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 40000,
        brochure: "link-to-mba-brochure"
      },
      {
        program: "Master of Arts in English (M.A. English)",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 15000,
        brochure: "link-to-ma-english-brochure"
      }
    ],

    location: {
      city: 'Visakhapatnam',
      state: 'Andhra Pradesh'
    },

    approvals: [
      { name: 'UGC-DEB', image: '/placeholder.svg?height=100&width=100', description: 'University Grants Commission for Distance Education' },
      { name: 'NAAC A', image: '/placeholder.svg?height=100&width=100', description: 'National Assessment and Accreditation Council' }
    ],

    about: "Andhra University, established in 1926, is one of India's oldest and most prestigious universities. The university offers a range of online programs tailored to meet the educational needs of students and working professionals. With a focus on delivering accessible and flexible education, Andhra University ensures quality learning through its cutting-edge digital platforms and robust academic resources.",

    keyHighlights: [
      "NAAC 'A' accredited university",
      "Wide array of industry-oriented programs",
      "Highly interactive and engaging online classes",
      "Strong emphasis on academic excellence and career development",
      "Affordable fee structure with installment options"
    ],

    emiOptions: "Flexible payment options, including EMIs, are available for all programs.",
    whyChoose: [
      "Renowned for academic heritage and quality",
      "Innovative curriculum designed for career advancement",
      "Experienced faculty with real-world expertise",
      "Digital tools to enhance learning outcomes",
      "Accessible programs for students across India and abroad"
    ],
    benefitsOfStudying: [
      "Opportunity to learn from a top-ranked university",
      "Flexibility to balance education with other commitments",
      "Access to extensive academic and career support resources",
      "Recognition from employers for accredited degrees",
      "Networking opportunities with peers and alumni"
    ],
    examConduct: "Online proctored exams are conducted to maintain transparency and academic integrity.",
    accreditationsApprovals: ['UGC-DEB', 'NAAC A'],
    academicApproach: "Andhra University emphasizes a learner-centric approach, combining theoretical foundations with practical applications for comprehensive education.",
    quantitativeMetrics: {
      placementRate: "88%",
      corporateTieups: "50+",
      students: "20,000+",
      experience: "95+ years"
    },
    placements: {
      sectors: [
        "Education and Research",
        "Corporate Management",
        "Public Administration",
        "Media and Communication"
      ],
      images: [
        "https://i.ibb.co/album-placeholder/andhra-placements.jpg"
      ]
    },
    moreThanDegree: {
      description: "Andhra University provides holistic education that equips students with critical skills and a strong foundation for lifelong learning.",
      sampleDegree: {
        name: "Master of Business Administration (MBA)",
        description: "Designed to foster leadership and strategic thinking skills, the program prepares students for diverse roles in the business sector.",
        image: 'https://example.com/andhra-sample-degree.jpg'
      }
    },
    admissionProcess: [
      "Visit Andhra University's online program portal",
      "Choose a course and fill in the application form",
      "Submit academic and personal documents",
      "Pay the registration fee",
      "Receive confirmation and access to the learning platform"
    ],
    faqs: [
      {
        question: "What programs are offered online by Andhra University?",
        answer: "Currently, MBA and M.A. English are offered in the online mode."
      },
      {
        question: "Are the online degrees recognized?",
        answer: "Yes, all online degrees are approved by UGC-DEB and NAAC."
      },
      {
        question: "How are exams conducted?",
        answer: "Examinations are conducted online under strict proctoring to ensure integrity."
      },
      {
        question: "Can I pursue online education while working full-time?",
        answer: "Yes, the programs are designed to provide flexibility for working professionals."
      },
      {
        question: "What kind of support will I receive during the course?",
        answer: "Students receive access to study materials, live sessions, and mentoring from experienced faculty."
      }
    ],
    Brochures: {
      "MBA Brochure": "https://example.com/andhra-mba-brochure.pdf",
      "M.A. English Brochure": "https://example.com/andhra-ma-english-brochure.pdf"
    }
  },

  //  ------------------------------------------------- Distance Learning Universities ----------------------------------------------

  // MANGALAYATAN UNIVERSITY ONLINE & DISTANCE LEARNING (MUODL)
  {
    id: 'mangalayatan-university-odl',
    name: "Mangalayatan University Online & Distance Learning (MUODL)",
    logo: '/placeholder.svg?height=80&width=80',
    image: 'https://i.ibb.co/album-placeholder/mangalayatan-university.png',
    mode: 'Distance Learning',
    accreditation: {
      grade: 'A+',
      body: 'NAAC'
    },

    courses: [
      {
        program: "Master of Business Administration (MBA)",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 45000,
        brochure: "link-to-mba-brochure"
      },
      {
        program: "Bachelor of Arts (B.A.)",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 20000,
        brochure: "link-to-ba-brochure"
      },
      {
        program: "Bachelor of Commerce (B.Com)",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 25000,
        brochure: "link-to-bcom-brochure"
      },
      {
        program: "Master of Arts (M.A.) in Political Science",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 15000,
        brochure: "link-to-ma-political-science-brochure"
      }
    ],

    location: {
      city: 'Aligarh',
      state: 'Uttar Pradesh'
    },

    approvals: [
      { name: 'UGC-DEB', image: '/placeholder.svg?height=100&width=100', description: 'University Grants Commission for Distance Education' },
      { name: 'NAAC Accredited', image: '/placeholder.svg?height=100&width=100', description: 'National Assessment and Accreditation Council' }
    ],

    about: "Mangalayatan University Online & Distance Learning (MUODL) is a forward-thinking institution that offers a wide range of distance education programs. Catering to the diverse educational needs of students and professionals, MUODL ensures quality education with an emphasis on flexibility and accessibility. With experienced faculty and a robust online learning infrastructure, MUODL is committed to empowering learners and fostering personal and professional growth.",

    keyHighlights: [
      "UGC-DEB-approved distance learning programs",
      "Wide range of undergraduate and postgraduate courses",
      "Affordable fee structure with installment options",
      "Student-centric learning environment",
      "Expert faculty with industry and academic experience"
    ],

    emiOptions: "EMI options are available to help students manage their education expenses conveniently.",
    whyChoose: [
      "Reputation for quality education and student satisfaction",
      "Flexible and accessible programs for working professionals",
      "Affordable fee structure compared to traditional programs",
      "Modern digital platforms for seamless learning",
      "Recognition from top employers for its accredited degrees"
    ],
    benefitsOfStudying: [
      "Enhance your career prospects with a recognized degree",
      "Balance learning with personal and professional commitments",
      "Access to expert guidance and comprehensive study material",
      "Expand knowledge and skills in a supportive academic environment",
      "Build a strong network with fellow students and alumni"
    ],
    examConduct: "MUODL conducts exams via both online and offline modes, offering flexibility to students.",
    accreditationsApprovals: ['UGC-DEB', 'NAAC A+'],
    academicApproach: "The university prioritizes learner-friendly methodologies, focusing on interactive and practical learning experiences.",
    quantitativeMetrics: {
      placementRate: "90%",
      corporateTieups: "60+",
      students: "15,000+",
      experience: "20+ years"
    },
    placements: {
      sectors: [
        "Banking & Finance",
        "Education & Teaching",
        "Public Administration",
        "Information Technology"
      ],
      images: [
        "https://i.ibb.co/album-placeholder/muodl-placements.jpg"
      ]
    },
    moreThanDegree: {
      description: "MUODL offers more than just a degree—it provides a comprehensive learning experience tailored to modern career requirements.",
      sampleDegree: {
        name: "Bachelor of Commerce (B.Com)",
        description: "A career-oriented program focusing on financial and accounting principles, designed to prepare students for a dynamic business world.",
        image: 'https://example.com/muodl-sample-degree.jpg'
      }
    },
    admissionProcess: [
      "Visit the MUODL website and navigate to the admissions section",
      "Select your desired program and fill out the application form",
      "Upload required academic documents and pay the application fee",
      "Complete the verification process",
      "Receive confirmation and login details for the learning platform"
    ],
    faqs: [
      {
        question: "What programs are offered through MUODL?",
        answer: "MUODL offers a variety of undergraduate and postgraduate courses, including MBA, B.A., B.Com, and M.A. Political Science."
      },
      {
        question: "Is a degree from MUODL recognized?",
        answer: "Yes, all degrees are recognized by UGC-DEB and accredited by NAAC."
      },
      {
        question: "How are classes conducted?",
        answer: "Classes are conducted online through an interactive platform with access to recorded lectures."
      },
      {
        question: "What is the duration of the programs?",
        answer: "Undergraduate programs are 3 years long, while postgraduate programs are typically 2 years."
      },
      {
        question: "Is there placement assistance for distance learners?",
        answer: "Yes, MUODL provides placement assistance and career counseling to all students."
      }
    ],
    Brochures: {
      "MBA Brochure": "https://example.com/muodl-mba-brochure.pdf",
      "B.A. Brochure": "https://example.com/muodl-ba-brochure.pdf",
      "B.Com Brochure": "https://example.com/muodl-bcom-brochure.pdf",
      "M.A. Political Science Brochure": "https://example.com/muodl-ma-political-science-brochure.pdf"
    }


  },

  // SUBHARTI UNIVERSITY ONLINE & DISTANCE LEARNING (SUODL)

  {
    id: 'subharti-university-odl',
    name: "Subharti University Online & Distance Learning (SUODL)",
    logo: '/placeholder.svg?height=80&width=80',
    image: 'https://i.ibb.co/album-placeholder/subharti-university.png',
    mode: 'Distance Learning',
    accreditation: {
      grade: 'A+',
      body: 'NAAC'
    },

    courses: [
      {
        program: "Master of Business Administration (MBA)",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 30000,
        brochure: "link-to-mba-brochure"
      },
      {
        program: "Bachelor of Commerce (B.Com)",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 15000,
        brochure: "link-to-bcom-brochure"
      },
      {
        program: "Bachelor of Arts (B.A.)",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 10000,
        brochure: "link-to-ba-brochure"
      },
      {
        program: "Master of Arts (M.A.) in History",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 12000,
        brochure: "link-to-ma-history-brochure"
      }
    ],

    location: {
      city: 'Meerut',
      state: 'Uttar Pradesh'
    },

    approvals: [
      { name: 'UGC-DEB', image: '/placeholder.svg?height=100&width=100', description: 'University Grants Commission for Distance Education' },
      { name: 'NAAC Accredited', image: '/placeholder.svg?height=100&width=100', description: 'National Assessment and Accreditation Council' }
    ],

    about: "Subharti University Online & Distance Learning (SUODL) offers a diverse range of distance education programs designed to cater to the needs of working professionals and students seeking flexible learning options. With a focus on quality education, SUODL provides accredited degrees that enable students to advance their careers through well-structured online courses and supported by experienced faculty.",

    keyHighlights: [
      "UGC-DEB approved distance education programs",
      "Affordable fee structure with easy installment options",
      "Student-centric approach with personalized support",
      "Interactive online learning platform with access to recorded lectures",
      "Strong alumni network and placement support"
    ],

    emiOptions: "EMI options are available to assist students in managing their tuition fees conveniently.",
    whyChoose: [
      "Wide range of accredited programs for career enhancement",
      "Access to high-quality faculty with industry experience",
      "Flexible learning options suitable for working professionals",
      "Affordable fees and easy payment plans",
      "Strong emphasis on student support and guidance"
    ],
    benefitsOfStudying: [
      "Recognized degrees that boost career opportunities",
      "Access to online library resources and study materials",
      "Flexible schedules allowing students to balance studies with work",
      "Career counseling and placement support for graduates",
      "Personalized academic support from experienced faculty"
    ],
    examConduct: "SUODL conducts exams via online and offline modes to provide flexibility to students based on their location and convenience.",
    accreditationsApprovals: ['UGC-DEB', 'NAAC A+'],
    academicApproach: "SUODL emphasizes a practical and interactive learning experience through its online platform, including live sessions, recorded lectures, and discussion forums.",
    quantitativeMetrics: {
      placementRate: "85%",
      corporateTieups: "50+",
      students: "20,000+",
      experience: "15+ years"
    },
    placements: {
      sectors: [
        "Banking & Finance",
        "Information Technology",
        "Education & Teaching",
        "Public Administration"
      ],
      images: [
        "https://i.ibb.co/album-placeholder/suodl-placements.jpg"
      ]
    },
    moreThanDegree: {
      description: "At SUODL, students gain more than just a degree; they receive a comprehensive learning experience that enhances their skills, knowledge, and employability.",
      sampleDegree: {
        name: "Bachelor of Commerce (B.Com)",
        description: "A program focusing on financial accounting, economics, and business management, designed to prepare students for careers in finance, banking, and commerce.",
        image: 'https://example.com/suodl-sample-degree.jpg'
      }
    },
    admissionProcess: [
      "Visit the SUODL website and select your desired program",
      "Fill out the online application form with necessary details",
      "Upload required documents including educational certificates and photograph",
      "Pay the application fee online",
      "Submit the application form and await confirmation"
    ],
    faqs: [
      {
        question: "What online courses are offered by SUODL?",
        answer: "SUODL offers various online courses such as MBA, B.Com, B.A., and M.A. History through its distance learning mode."
      },
      {
        question: "Is there placement assistance for distance learning students?",
        answer: "Yes, SUODL provides placement assistance through its extensive network of corporate partnerships."
      },
      {
        question: "How are classes conducted?",
        answer: "Classes are conducted through an online learning platform that includes live sessions, recorded lectures, and discussion forums."
      },
      {
        question: "What is the duration of the programs?",
        answer: "Undergraduate programs are typically 3 years, while postgraduate programs are 2 years."
      },
      {
        question: "Can I access study materials online?",
        answer: "Yes, all study materials, including lecture recordings, notes, and books, are available online for easy access."
      }
    ],
    Brochures: {
      "MBA Brochure": "https://example.com/suodl-mba-brochure.pdf",
      "B.Com Brochure": "https://example.com/suodl-bcom-brochure.pdf",
      "B.A. Brochure": "https://example.com/suodl-ba-brochure.pdf",
      "M.A. History Brochure": "https://example.com/suodl-ma-history-brochure.pdf"
    }
  },

  // ---------------------------------------------------- Regular Universities ----------------------------------------------------------

  // Sikkim Professional University (SPU)

  {
    id: 'sikkim-professional-university',
    name: "Sikkim Professional University (SPU)",
    logo: '/placeholder.svg?height=80&width=80',
    image: 'https://i.ibb.co/album-placeholder/spu-university.png',
    mode: 'Regular',
    accreditation: {
      grade: 'NAAC Accredited',
      body: 'NAAC & UGC'
    },

    courses: [
      {
        program: "Bachelor of Science in Nursing (B.Sc Nursing)",
        degree: "Bachelor Degree",
        duration: "4 Years",
        feesPerYear: 95000,
        brochure: "link-to-bsc-nursing-brochure"
      },
      {
        program: "Master of Business Administration (MBA)",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerYear: 120000,
        brochure: "link-to-mba-brochure"
      },
      {
        program: "Bachelor of Computer Applications (BCA)",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerYear: 75000,
        brochure: "link-to-bca-brochure"
      },
      {
        program: "Master of Science in Information Technology (M.Sc IT)",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerYear: 90000,
        brochure: "link-to-msc-it-brochure"
      }
    ],

    location: {
      city: 'Ranipool',
      state: 'Sikkim'
    },

    approvals: [
      { name: 'UGC', image: '/placeholder.svg?height=100&width=100', description: 'University Grants Commission Approved' },
      { name: 'NAAC Accredited', image: '/placeholder.svg?height=100&width=100', description: 'National Assessment and Accreditation Council' }
    ],

    about: "Sikkim Professional University (SPU), located in the scenic state of Sikkim, is committed to providing quality education that empowers students with skills and knowledge to excel in their professional careers. Known for its academic excellence and modern facilities, SPU offers a wide array of undergraduate and postgraduate programs across various disciplines. With a student-centric approach and experienced faculty, SPU stands out as a hub for innovation and learning in Northeast India.",

    keyHighlights: [
      "UGC-recognized and NAAC-accredited programs",
      "Experienced faculty with strong industry connections",
      "State-of-the-art infrastructure and facilities",
      "A wide variety of programs tailored to diverse career goals",
      "Scholarships and financial aid for meritorious students"
    ],

    emiOptions: "EMI options are available to support students in paying their tuition fees conveniently.",
    whyChoose: [
      "Comprehensive academic curriculum aligned with industry standards",
      "Focus on practical skills and research-based learning",
      "Serene and conducive environment for learning",
      "Strong placement support with top recruiters",
      "Commitment to holistic student development"
    ],
    benefitsOfStudying: [
      "Globally recognized degrees",
      "Opportunity for internships and live projects",
      "Personalized mentorship from dedicated faculty",
      "Access to cutting-edge technology and resources",
      "Networking opportunities with peers and industry professionals"
    ],
    examConduct: "SPU conducts semester-end examinations in offline mode at its main campus and affiliated centers.",
    accreditationsApprovals: ['UGC', 'NAAC'],
    academicApproach: "SPU focuses on experiential learning with an emphasis on practical applications, case studies, and industry exposure.",
    quantitativeMetrics: {
      placementRate: "90%",
      corporateTieups: "100+",
      students: "15,000+",
      experience: "10+ years"
    },
    placements: {
      sectors: [
        "Healthcare & Nursing",
        "Information Technology",
        "Business Management",
        "Education & Research"
      ],
      images: [
        "https://i.ibb.co/album-placeholder/spu-placements.jpg"
      ]
    },
    moreThanDegree: {
      description: "SPU offers students an enriching academic journey that combines rigorous learning with hands-on experience, preparing them for success in the global workforce.",
      sampleDegree: {
        name: "Bachelor of Science in Nursing (B.Sc Nursing)",
        description: "A comprehensive program designed to equip students with advanced nursing skills and a strong foundation in healthcare.",
        image: 'https://example.com/spu-sample-degree.jpg'
      }
    },
    admissionProcess: [
      "Visit the SPU official website to explore available courses",
      "Fill out the online application form with accurate details",
      "Submit required documents such as academic certificates and ID proof",
      "Pay the application fee through the provided payment gateway",
      "Await confirmation from the admissions office"
    ],
    faqs: [
      {
        question: "What programs are available at SPU?",
        answer: "SPU offers programs in Nursing, IT, Business Administration, and various other fields."
      },
      {
        question: "Does SPU provide placement support?",
        answer: "Yes, SPU offers strong placement assistance through its network of recruiters and career services."
      },
      {
        question: "Are scholarships available at SPU?",
        answer: "Yes, scholarships are available for deserving students based on academic performance and financial need."
      },
      {
        question: "What is the duration of the undergraduate programs?",
        answer: "Undergraduate programs generally last 3 to 4 years, depending on the course."
      },
      {
        question: "Can students avail on-campus facilities?",
        answer: "Yes, SPU provides modern on-campus facilities including libraries, laboratories, and hostels."
      }
    ],
    Brochures: {
      "B.Sc Nursing Brochure": "https://example.com/spu-bsc-nursing-brochure.pdf",
    }
  },

  // Asian International University (AIU)

  {
    id: 'asian-international-university',
    name: "Asian International University (AIU)",
    logo: '/placeholder.svg?height=80&width=80',
    image: 'https://i.ibb.co/album-placeholder/aiu-university.png',
    mode: 'Regular',
    accreditation: {
      grade: 'NAAC Accredited',
      body: 'NAAC & UGC'
    },

    courses: [
      {
        program: "Bachelor of Arts (B.A.) in Humanities",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerYear: 50000,
        brochure: "link-to-ba-humanities-brochure"
      },
      {
        program: "Master of Science (M.Sc.) in Data Science",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerYear: 120000,
        brochure: "link-to-msc-data-science-brochure"
      },
      {
        program: "Bachelor of Business Administration (BBA)",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerYear: 85000,
        brochure: "link-to-bba-brochure"
      },
      {
        program: "Master of Computer Applications (MCA)",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerYear: 110000,
        brochure: "link-to-mca-brochure"
      }
    ],

    location: {
      city: 'City Name',
      state: 'State Name'
    },

    approvals: [
      { name: 'UGC', image: '/placeholder.svg?height=100&width=100', description: 'University Grants Commission Approved' },
      { name: 'NAAC Accredited', image: '/placeholder.svg?height=100&width=100', description: 'National Assessment and Accreditation Council' }
    ],

    about: "Asian International University (AIU) is a premier educational institution dedicated to fostering innovation and academic excellence. Located in a vibrant urban setting, AIU provides an array of undergraduate and postgraduate programs designed to prepare students for the demands of the global workforce. With state-of-the-art facilities and a diverse community, AIU promotes holistic development through a blend of rigorous academics, research opportunities, and co-curricular activities.",

    keyHighlights: [
      "UGC-recognized and NAAC-accredited institution",
      "Experienced faculty with industry expertise",
      "Comprehensive infrastructure for advanced learning",
      "Wide range of academic disciplines tailored to industry needs",
      "Scholarships for academically bright students"
    ],

    emiOptions: "AIU offers flexible EMI plans for tuition fee payments, ensuring affordability for all students.",
    whyChoose: [
      "Global recognition for academic excellence",
      "Focus on practical and research-driven education",
      "Industry-aligned curriculum",
      "Diverse cultural environment",
      "Strong alumni network and placement record"
    ],
    benefitsOfStudying: [
      "Gain globally competitive skills",
      "Opportunities for internships and industry exposure",
      "Dynamic and interactive learning environment",
      "State-of-the-art laboratories and research centers",
      "Comprehensive student support services"
    ],
    examConduct: "All exams are conducted offline at designated centers or the main campus, ensuring academic integrity.",
    accreditationsApprovals: ['UGC', 'NAAC'],
    academicApproach: "AIU's curriculum emphasizes experiential learning, integrating theoretical knowledge with practical applications to meet industry standards.",
    quantitativeMetrics: {
      placementRate: "88%",
      corporateTieups: "150+",
      students: "20,000+",
      experience: "15+ years"
    },
    placements: {
      sectors: [
        "Information Technology",
        "Business Management",
        "Healthcare",
        "Social Sciences"
      ],
      images: [
        "https://i.ibb.co/album-placeholder/aiu-placements.jpg"
      ]
    },
    moreThanDegree: {
      description: "AIU offers more than a degree by nurturing students' overall personality, equipping them with the skills and confidence to excel globally.",
      sampleDegree: {
        name: "Bachelor of Business Administration (BBA)",
        description: "A business-oriented program that builds a strong foundation in management principles and entrepreneurial skills.",
        image: 'https://example.com/aiu-sample-degree.jpg'
      }
    },
    admissionProcess: [
      "Visit the AIU website and navigate to the Admissions section",
      "Complete the application form with the required personal and academic details",
      "Submit necessary documents such as mark sheets and identity proofs",
      "Pay the application fee through the online payment gateway",
      "Await confirmation from the university's admissions team"
    ],
    faqs: [
      {
        question: "What courses does AIU offer?",
        answer: "AIU provides courses in humanities, business, technology, and sciences, including BBA, MCA, and M.Sc. in Data Science."
      },
      {
        question: "Is placement assistance available at AIU?",
        answer: "Yes, AIU provides robust placement support with top companies visiting the campus regularly."
      },
      {
        question: "Can students avail scholarships at AIU?",
        answer: "AIU offers merit-based scholarships to deserving students."
      },
      {
        question: "Are hostel facilities available on campus?",
        answer: "Yes, AIU provides on-campus accommodation with modern amenities."
      },
      {
        question: "What is the mode of instruction at AIU?",
        answer: "AIU follows an interactive and student-centric approach, with classes conducted in a regular offline mode."
      }
    ],
    Brochures: {
      "B.A. Humanities Brochure": "https://example.com/aiu-ba-humanities-brochure.pdf",
    }
  },

  // Dr. Preeti Global University
  {
    id: 'dr-preeti-global-university',
    name: "Dr. Preeti Global University (PGU)",
    logo: '/placeholder.svg?height=80&width=80',
    image: 'https://i.ibb.co/album-placeholder/pgu-university.png',
    mode: 'Regular Learning',
    accreditation: {
      grade: 'NAAC Accredited',
      body: 'NAAC & UGC'
    },

    courses: [
      {
        program: "Bachelor of Commerce (B.Com)",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerYear: 45000,
        brochure: "link-to-bcom-brochure"
      },
      {
        program: "Master of Arts (M.A.) in English Literature",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerYear: 35000,
        brochure: "link-to-ma-english-brochure"
      },
      {
        program: "Bachelor of Science (B.Sc.) in Biotechnology",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerYear: 55000,
        brochure: "link-to-bsc-biotech-brochure"
      },
      {
        program: "Doctor of Philosophy (Ph.D.) in Management",
        degree: "Doctorate",
        duration: "3-5 Years",
        feesPerYear: 150000,
        brochure: "link-to-phd-management-brochure"
      }
    ],

    location: {
      city: 'City Name',
      state: 'State Name'
    },

    approvals: [
      { name: 'UGC', image: '/placeholder.svg?height=100&width=100', description: 'University Grants Commission Approved' },
      { name: 'NAAC Accredited', image: '/placeholder.svg?height=100&width=100', description: 'National Assessment and Accreditation Council' }
    ],

    about: "Dr. Preeti Global University (PGU) is a forward-thinking institution committed to providing quality education across diverse disciplines. Located in a serene campus setting, PGU emphasizes a balanced approach to academic rigor and extracurricular activities. The university fosters innovation, research, and holistic student development, equipping learners to succeed in a competitive global environment.",

    keyHighlights: [
      "UGC-recognized and NAAC-accredited",
      "Highly qualified faculty with a focus on mentoring",
      "State-of-the-art infrastructure and labs",
      "Emphasis on employability and career development",
      "Cultural diversity with a supportive learning atmosphere"
    ],

    emiOptions: "PGU provides flexible EMI options to make quality education accessible to all students.",
    whyChoose: [
      "Reputation for academic excellence and innovation",
      "Collaborative learning environment with small class sizes",
      "Industry-integrated curriculum",
      "Active placement cell with strong corporate ties",
      "Modern campus facilities designed for comfort and productivity"
    ],
    benefitsOfStudying: [
      "Access to advanced labs and research facilities",
      "Comprehensive skill development programs",
      "Strong alumni network for guidance and opportunities",
      "Extracurricular activities for overall personality development",
      "Supportive faculty and administrative staff"
    ],
    examConduct: "All exams are conducted in offline mode with stringent academic integrity measures at designated examination centers.",
    accreditationsApprovals: ['UGC', 'NAAC'],
    academicApproach: "PGU integrates theory with hands-on practice, ensuring students gain industry-relevant knowledge and skills.",
    quantitativeMetrics: {
      placementRate: "92%",
      corporateTieups: "120+",
      students: "15,000+",
      experience: "10+ years"
    },
    placements: {
      sectors: [
        "Finance and Accounting",
        "Biotechnology",
        "Education",
        "Media and Communication"
      ],
      images: [
        "https://i.ibb.co/album-placeholder/pgu-placements.jpg"
      ]
    },
    moreThanDegree: {
      description: "PGU equips students with not just a degree but also the confidence and skills needed to thrive in their chosen careers.",
      sampleDegree: {
        name: "B.Sc. in Biotechnology",
        description: "A specialized program designed to prepare students for careers in the rapidly evolving field of biotechnology.",
        image: 'https://example.com/pgu-sample-degree.jpg'
      }
    },
    admissionProcess: [
      "Visit the official PGU website and navigate to the admissions page",
      "Complete the online application form with accurate details",
      "Upload all required documents such as previous academic records and ID proof",
      "Pay the non-refundable application fee",
      "Receive admission confirmation after review by the university"
    ],
    faqs: [
      {
        question: "What is the mode of instruction at PGU?",
        answer: "PGU primarily offers regular, on-campus programs with an emphasis on interactive learning."
      },
      {
        question: "Does PGU offer financial aid or scholarships?",
        answer: "Yes, PGU provides need-based and merit-based scholarships to eligible students."
      },
      {
        question: "Are hostel facilities available for students?",
        answer: "Yes, the university offers modern, well-equipped hostels for both male and female students."
      },
      {
        question: "How can I apply for courses at PGU?",
        answer: "You can apply online via the university's admissions portal, completing all necessary steps including fee payment."
      },
      {
        question: "What is the placement support at PGU like?",
        answer: "PGU boasts an active placement cell that connects students with top recruiters and prepares them for job interviews."
      }
    ],
    Brochures: {
      "B.Com Brochure": "https://example.com/pgu-bcom-brochure.pdf",
      "M.A. English Literature Brochure": "https://example.com/pgu-ma-english-brochure.pdf",
      "B.Sc. Biotechnology Brochure": "https://example.com/pgu-bsc-biotech-brochure.pdf",
      "Ph.D. Management Brochure": "https://example.com/pgu-phd-management-brochure.pdf"
    }
  },

  // Mind Power University (MPU)
  {
    id: 'mind-power-university',
    name: "Mind Power University (MPU)",
    logo: '/placeholder.svg?height=80&width=80',
    image: 'https://i.ibb.co/album-placeholder/mpu-university.png',
    mode: 'Regular Learning',
    accreditation: {
      grade: 'NAAC Accredited',
      body: 'UGC & AICTE Approved'
    },

    courses: [
      {
        program: "Bachelor of Business Administration (BBA)",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerYear: 60000,
        brochure: "link-to-bba-brochure"
      },
      {
        program: "Master of Science (M.Sc.) in Psychology",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerYear: 50000,
        brochure: "link-to-msc-psychology-brochure"
      },
      {
        program: "Bachelor of Arts (B.A.) in Sociology",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerYear: 40000,
        brochure: "link-to-ba-sociology-brochure"
      },
      {
        program: "Doctor of Philosophy (Ph.D.) in Cognitive Sciences",
        degree: "Doctorate",
        duration: "3-5 Years",
        feesPerYear: 140000,
        brochure: "link-to-phd-cognitive-sciences-brochure"
      }
    ],

    location: {
      city: 'City Name',
      state: 'State Name'
    },

    approvals: [
      { name: 'UGC', image: '/placeholder.svg?height=100&width=100', description: 'University Grants Commission Approved' },
      { name: 'AICTE', image: '/placeholder.svg?height=100&width=100', description: 'All India Council for Technical Education Approved' }
    ],

    about: "Mind Power University (MPU) is a unique institution dedicated to advancing the understanding of human cognition, behavior, and societal impact. With a mission to empower students with practical knowledge and critical thinking, MPU focuses on creating leaders who excel in psychology, business, and social sciences. The university provides an inclusive environment where innovation, research, and personal growth are nurtured.",

    keyHighlights: [
      "Specialized in cognitive sciences and social psychology",
      "Accredited by UGC and AICTE",
      "Collaborative research projects with global universities",
      "Modern infrastructure and psychology labs",
      "Active student organizations and community engagement"
    ],

    emiOptions: "MPU offers convenient EMI payment plans for course fees, ensuring affordability for all students.",
    whyChoose: [
      "Innovative academic programs focused on mental health and leadership",
      "Experienced faculty with practical industry expertise",
      "Opportunities for global exchange programs",
      "Comprehensive career guidance and placement support",
      "Supportive campus culture fostering creativity and resilience"
    ],
    benefitsOfStudying: [
      "Advanced learning facilities with hands-on training opportunities",
      "Strong emphasis on research and innovation",
      "Access to a diverse network of alumni and professionals",
      "Tailored mentoring programs for personal and career growth",
      "Integration of theoretical and practical knowledge"
    ],
    examConduct: "MPU conducts all exams in offline mode with strict guidelines to maintain academic integrity.",
    accreditationsApprovals: ['UGC', 'AICTE', 'NAAC'],
    academicApproach: "At MPU, the academic approach integrates experiential learning with cutting-edge research, empowering students with skills that align with industry needs.",
    quantitativeMetrics: {
      placementRate: "95%",
      corporateTieups: "150+",
      students: "20,000+",
      experience: "12+ years"
    },
    placements: {
      sectors: [
        "Mental Health and Counseling",
        "Human Resource Management",
        "Education and Training",
        "Social Development Programs"
      ],
      images: [
        "https://i.ibb.co/album-placeholder/mpu-placements.jpg"
      ]
    },
    moreThanDegree: {
      description: "At MPU, students gain not just a degree but also the insights and skills to positively impact society and lead with confidence.",
      sampleDegree: {
        name: "M.Sc. in Psychology",
        description: "A comprehensive program designed to provide in-depth knowledge and practical expertise in psychological assessment and therapy.",
        image: 'https://example.com/mpu-sample-degree.jpg'
      }
    },
    admissionProcess: [
      "Navigate to the MPU official website and open the admissions page",
      "Fill out the online application form accurately",
      "Upload necessary documents like previous academic records and photo ID",
      "Pay the application fee online via secure payment gateways",
      "Wait for admission confirmation upon verification of documents"
    ],
    faqs: [
      {
        question: "What makes MPU unique?",
        answer: "MPU specializes in human cognition and societal behavior, providing an academic focus that is unmatched in traditional universities."
      },
      {
        question: "Does MPU provide scholarships?",
        answer: "Yes, MPU offers scholarships based on merit and need for eligible students."
      },
      {
        question: "Are there on-campus research opportunities?",
        answer: "Absolutely! MPU encourages students to participate in research projects and publish their findings in reputed journals."
      },
      {
        question: "How is the campus environment?",
        answer: "The campus fosters a supportive, inclusive, and stimulating learning atmosphere with numerous extracurricular activities."
      },
      {
        question: "What is the placement scenario at MPU?",
        answer: "MPU boasts a robust placement cell that connects students with top organizations in relevant fields."
      }
    ],
    Brochures: {
      "BBA Brochure": "https://example.com/mpu-bba-brochure.pdf",
      "M.Sc. Psychology Brochure": "https://example.com/mpu-msc-psychology-brochure.pdf",
      "B.A. Sociology Brochure": "https://example.com/mpu-ba-sociology-brochure.pdf",
      "Ph.D. Cognitive Sciences Brochure": "https://example.com/mpu-phd-cognitive-sciences-brochure.pdf"
    }
  },

  //  Starex University

  {
    id: 'starex-university-vocational',
    name: "Starex University",
    logo: '/placeholder.svg?height=80&width=80',
    image: 'https://i.ibb.co/album-placeholder/starex-university.png',
    mode: 'Regular Learning',
    accreditation: {
      grade: 'NAAC Accredited',
      body: 'UGC Approved'
    },

    courses: [
      {
        program: "Diploma in Culinary Arts",
        degree: "Diploma",
        duration: "1 Year",
        feesPerYear: 50000,
        brochure: "link-to-culinary-arts-brochure"
      },
      {
        program: "Certificate in Fashion Designing",
        degree: "Certificate",
        duration: "6 Months",
        feesPerYear: 30000,
        brochure: "link-to-fashion-designing-brochure"
      },
      {
        program: "Advanced Diploma in Information Technology",
        degree: "Advanced Diploma",
        duration: "2 Years",
        feesPerYear: 70000,
        brochure: "link-to-it-diploma-brochure"
      },
      {
        program: "Certificate in Digital Marketing",
        degree: "Certificate",
        duration: "6 Months",
        feesPerYear: 25000,
        brochure: "link-to-digital-marketing-brochure"
      }
    ],

    location: {
      city: 'Gurugram',
      state: 'Haryana'
    },

    approvals: [
      { name: 'UGC', image: '/placeholder.svg?height=100&width=100', description: 'University Grants Commission Approved' }
    ],

    about: "Starex University, located in Gurugram, Haryana, is a distinguished institution offering an array of vocational courses designed to equip students with practical skills and industry-relevant expertise. The university emphasizes experiential learning and hands-on training to prepare graduates for immediate employment in their chosen fields. With state-of-the-art facilities and a focus on innovation, Starex University is committed to fostering a culture of excellence in vocational education.",

    keyHighlights: [
      "Comprehensive range of vocational and skill-based courses",
      "Experienced faculty with industry expertise",
      "State-of-the-art labs and workshops for hands-on training",
      "Strategic location near major industrial and corporate hubs",
      "Strong focus on employability and practical skill development"
    ],

    emiOptions: "Affordable EMI options are available for fee payments to support students from diverse backgrounds.",
    whyChoose: [
      "Practical-oriented curriculum tailored to industry demands",
      "Wide variety of vocational courses to choose from",
      "Dedicated placement support for vocational programs",
      "Modern campus facilities to support skill-based learning",
      "Access to corporate internships and real-world exposure"
    ],
    benefitsOfStudying: [
      "Learn from industry professionals with practical experience",
      "Opportunities to work on live projects during the course",
      "Access to the latest tools and technologies in training facilities",
      "Network with industry experts through seminars and workshops",
      "Certification and diplomas that enhance employability"
    ],
    examConduct: "Exams are conducted offline with a strong focus on practical assessments to evaluate real-world application skills.",
    accreditationsApprovals: ['UGC', 'NAAC'],
    academicApproach: "Starex University's academic approach combines traditional teaching methods with experiential learning and industry collaborations.",
    quantitativeMetrics: {
      placementRate: "90%",
      corporateTieups: "120+",
      students: "10,000+",
      experience: "7+ years"
    },
    placements: {
      sectors: [
        "Hospitality and Culinary Arts",
        "Fashion and Textile Design",
        "Information Technology and Digital Marketing",
        "Entrepreneurship and Small Business Management"
      ],
      images: [
        "https://i.ibb.co/album-placeholder/starex-placements.jpg"
      ]
    },
    moreThanDegree: {
      description: "Students at Starex University gain not just academic credentials but also practical skills and the confidence to excel in dynamic industries.",
      sampleDegree: {
        name: "Advanced Diploma in Information Technology",
        description: "A specialized program that offers in-depth training in IT systems, networking, and software development.",
        image: 'https://example.com/starex-it-diploma.jpg'
      }
    },
    admissionProcess: [
      "Visit the official Starex University website and access the admissions section",
      "Complete the online application form with accurate details",
      "Upload required documents such as academic certificates and ID proof",
      "Submit the application fee via the available payment methods",
      "Receive confirmation and further instructions from the admissions office"
    ],
    faqs: [
      {
        question: "What are the benefits of vocational courses at Starex University?",
        answer: "Vocational courses at Starex focus on skill development, hands-on training, and industry-readiness, ensuring better job prospects."
      },
      {
        question: "Are there internship opportunities available for vocational students?",
        answer: "Yes, Starex University has tie-ups with various industries to provide internships for practical exposure."
      },
      {
        question: "Can I pursue multiple vocational certificates simultaneously?",
        answer: "It is recommended to focus on one course at a time to ensure a thorough understanding and mastery of skills."
      },
      {
        question: "What kind of support does the university provide for placements?",
        answer: "The university offers dedicated placement assistance, including resume building, interview preparation, and industry connections."
      },
      {
        question: "Are scholarships available for vocational courses?",
        answer: "Yes, scholarships are provided based on merit and financial need to deserving candidates."
      }
    ],
    Brochures: {
      "Diploma in Culinary Arts Brochure": "https://example.com/starex-culinary-arts-brochure.pdf",
      "Fashion Designing Certificate Brochure": "https://example.com/starex-fashion-design-brochure.pdf",
      "Advanced Diploma in IT Brochure": "https://example.com/starex-it-diploma-brochure.pdf",
      "Digital Marketing Certificate Brochure": "https://example.com/starex-digital-marketing-brochure.pdf"
    }
  }

]