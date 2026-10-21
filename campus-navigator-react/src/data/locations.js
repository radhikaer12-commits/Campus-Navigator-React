export const locations = [
    // Academic buildings..
    {
        id: "library",
        name: "Central Library",
        category: "academic",
        type: "building",
        image: "/images/library.jpg",

        description: "The main library of the campus.",
        schedule: {
            weekdays: {
                open: "00:00",
                close: "24:00"
            },
            weekends: {
                open: "06:00",
                close: "21:30"
            }
        },
        access: [
            "Students",
            "Faculty",
            "Staff"
        ],
        facilities: [
            "Reading Area",
            "Computer Lab",
            "Wi-Fi",
            "Sitting Area",
            "Property Area"
        ]

    },
    {
        id: "explore-hub",
        name: "Explore Hub",
        category: "miscellaneous",
        type: "building",
        image: "/images/explore-hub.jpg",

        description: "",
        schedule: {
            weekdays: {
                open: "09:00",
                close: "19:00"
            },
            weekends: {
                open: "09:00",
                close: "12:00"
            }
        },
        access: [
            "Students",
            "Faculty",
            "Staff"
        ],
        facilities: [
            "Reading Area",
            "Computer Lab",
            "Wi-Fi",
            "Sitting Area",
            "Property Area"
        ]

    },
    {
        id: "moon-hall",
        name: "Moon Hall",
        category: "academic",
        type: "building",
        description: "",
        schedule: {
            weekdays: {
                open: "08:00",
                close: "17:00"
            },
            weekends: {
                closed: true
            }
        },
        access: [
            "Students",
            "Faculty",
            "Staff"
        ],
        facilities: [
            "Reading Area",
            "Computer Lab",
            "Wi-Fi",
            "Sitting Area",
            "Property Area"
        ]

    },
    {
        id: "martin-luther",
        name: "Martin Luther Block",
        category: "academic",
        type: "building",
        image: "/images/martin.jpg",

        description: "Academic block containing classrooms and faculty offices for CSE and AI & ML department.",
        schedule: {
            weekdays: {
                open: "07:00",
                close: "21:30"
            },
            weekends: {
                closed: true
            }
        },
        access: [
            "Students",
            "Faculty",
            "Staff"
        ],
        facilities: [
            "Classrooms",
            "Lecture Halls",
            "Wi-Fi",
            "Sitting Area",
            "Washrooms"
        ]

    },
    {
        id: "rockefeller-block",
        name: "Rockefeller Block",
        category: "academic",
        type: "building",
        image: "/images/rockefeller.jpg",

        description: "It is a major academic building and an award-winning green infrastructure project that hosts coding cups, student activities and sustainability programs",
        schedule: {
            weekdays: {
                open: "07:00",
                close: "21:30"
            },
            weekends: {
                closed: true
            }
        },
        access: [
            "Students",
            "Faculty",
            "Staff"
        ],
        facilities: [
            "Reading Area",
            "Lecture Halls",
            "Wi-Fi",
            "Sitting Area",
            "Washrooms"
        ]

    },
    {
        id: "turing-block",
        name: "Turing Block",
        category: "academic",
        type: "building",
        image: "/images/turing.jpg",

        description: "Academic block containing classrooms, lecture halls, and faculty offices for CSE (core) department.",
        schedule: {
            weekdays: {
                open: "07:00",
                close: "21:30"
            },
            weekends: {
                closed: true
            }
        },
        access: [
            "Students",
            "Faculty",
            "Staff"
        ],
        facilities: [
            "Classrooms",
            "Lecture Halls",
            "Wi-Fi",
            "Sitting Area",
            "Washrooms"
        ]

    },
    {
        id: "edison-block",
        name: "Edison Block",
        category: "academic",
        type: "building",
        image: "/images/edison.jpg",

        description: "Academic block containing classrooms, lecture halls, and faculty offices for ECE department.",
        schedule: {
            weekdays: {
                open: "07:00",
                close: "17:30"
            },
            weekends: {
                closed: true
            }
        },
        access: [
            "Students",
            "Faculty",
            "Staff"
        ],
        facilities: [
            "Classrooms",
            "Labs",
            "Lecture Halls",
            "Wi-Fi",
            "Sitting Area",
            "Washrooms"
        ]

    },
    {
        id: "newton-block",
        name: "Newton Block",
        category: "academic",
        type: "building",
        image: "/images/newton.jpg",

        description: "Academic block with classrooms, lecture halls, and laboratories.",

        schedule: {
            weekdays: {
                open: "08:00",
                close: "21:30"
            },
            weekends: {
                closed: true
            }
        },

        access: ["Students", "Faculty", "Staff"],

        facilities: [
            "Classrooms",
            "Lecture Halls",
            "Laboratories",
            "Wi-Fi",
            "Washrooms"
        ]
    },
    {
        id: "escoffer-block",
        name: "Chitkara School of Hospitality Management.",
        category: "academic",
        type: "building",
        image: "/images/escoffier.jpg",

        description: "Academic block containing classrooms, lecture halls, and faculty offices for Hospitality Management Departments.",
        schedule: {
            weekdays: {
                open: "08:00",
                close: "17:30"
            },
            weekends: {
                closed: true
            }
        },
        access: [
            "Students",
            "Faculty",
            "Staff"
        ],
        facilities: [
            "Kitchen Areas",
            "Classrooms",
            "Wi-Fi",
            "Sitting Area",
            "Washrooms"
        ]

    },
    {
        id: "fleming-block",
        name: "Chitkara College of Pharmacy/Fleming Block",
        category: "academic",
        type: "building",
        image: "/images/pharmacy.jpg",

        description: "Academic block containing classrooms, lecture halls, and faculty offices for Bachelor Of Pharmacy.",
        schedule: {
            weekdays: {
                open: "07:00",
                close: "21:30"
            },
            weekends: {
                closed: true
            }
        },
        access: [
            "Students",
            "Faculty",
            "Staff"
        ],
        facilities: [
            "Classrooms",
            "Pharmacology labs",
            "Lecture Halls",
            "Wi-Fi",
            "Sitting Area",
            "Washrooms"
        ]

    },
    {
        id: "law",
        name: "Chitkara Law School",
        category: "academic",
        type: "building",
        image: "/images/law-school.jpg",

        description: "Academic block containing classrooms, lecture halls, and faculty offices for Department Of Law.",
        schedule: {
            weekdays: {
                open: "07:00",
                close: "17:00"
            },
            weekends: {
                closed: true
            }
        },
        access: [
            "Students",
            "Faculty",
            "Staff"
        ],
        facilities: [
            "Classrooms",
            "Lecture Halls",
            "Wi-Fi",
            "Sitting Area",
            "Washrooms"
        ]

    },
    {
        id: "tesla-block",
        name: "Tesla Block",
        category: "academic",
        type: "building",
        description: "Academic block containing classrooms, lecture halls, and faculty offices for the Department of Mechanical Engineering.",
        schedule: {
            weekdays: {
                open: "07:00",
                close: "17:00"
            },
            weekends: {
                closed: true
            }
        },
        access: [
            "Students",
            "Faculty",
            "Staff"
        ],
        facilities: [
            "Classrooms",
            "Lecture Halls",
            "Thermal & Fluids Labs",
            "Wi-Fi",
            "Sitting Area",
            "Washrooms"
        ]

    },
    {
        id: "maritime-school",
        name: "Maritime School",
        category: "academic",
        type: "building",
        description: "Maritime Studies School.",
        schedule: {
            weekdays: {
                open: "07:00",
                close: "17:30"
            },
            weekends: {
                open: "07:00",
                close: "17:30"
            }
        },
        access: [
            "Students",
            "Faculty",
            "Staff"
        ],
        facilities: [
            "Reading Area",
            "Computer Lab",
            "Wi-Fi",
            "Sitting Area",
            "Property Area"
        ]

    },
    {
        id: "mechanical-workshop",
        name: "Mechanical Workshop",
        category: "academic",
        type: "building",
        description: "Workshop for practical training in manufacturing, machining, welding, fitting and fabricatinon.",
        schedule: {
            weekdays: {
                open: "08:00",
                close: "17:00"
            },
            weekends: {
                closed: true
            }
        },
        access: [
            "Students",
            "Faculty",
            "Staff"
        ],
        facilities: [
            "Machine Shop",
            "Welding Area",
            "Fitting Shop",
            "Workshop Equipment",
            "Safety Equipment"
        ]

    },
    {
        id: "omicron-learning-hub",
        name: "Omicron Learning Hub",
        category: "academic",
        type: "building",
        image: "/images/omicron.jpg",

        description: "Workshop for practical training in manufacturing, machining, welding, fitting and fabricatinon.",
        schedule: {
            weekdays: {
                open: "08:00",
                close: "21:30"
            },
            weekends: {
                closed: true
            }
        },
        access: [
            "Students",
            "Faculty",
            "Staff"
        ],
        facilities: [
            "Machine Shop",
            "Welding Area",
            "Fitting Shop",
            "Workshop Equipment",
            "Safety Equipment"
        ]

    },
    {
        id: "picasso-block",
        name: "Picasso Block",
        category: "academic",
        type: "building",
        image: "/images/picasso.jpg",

        description: "This block serves as the primary hub for Chitkara Design School and Chitkara School of Mass Communication.",
        schedule: {
            weekdays: {
                open: "08:00",
                close: "17:30"
            },
            weekends: {
                closed: true
            }
        },
        access: [
            "Students",
            "Faculty",
            "Staff"
        ],
        facilities: [
            "Design Classes",
            "Mass communication media labs",
            "Creative Workshops",
            "Fashion Studio",
            "Recording and broadcasting facilities",
            "Washrooms",
            "Sitting Areas",
            "Wi-Fi"
        ]

    },
    {
        id: "art-gallery",
        name: "D'Art Gallery",
        category: "academic",
        type: "building",
        image: "/images/art-gallery.jpg",

        description: "Fine arts displays and printmaking exhibitions",
        schedule: {
            weekdays: {
                open: "09:00",
                close: "17:00"
            },
            weekends: {
                closed: true
            }
        },
        access: [
            "Students",
            "Faculty",
            "Staff"
        ],
        facilities: [
            "Art Exihibitions",
            "Creative Workshops",
            "Student Displays",
            "Wi-Fi",
            "Sitting Area",

        ]

    },
    {
        id: "lecorbussier-block",
        name: "Chitkara School of Planning and Architecture/Le Corbusier Block",
        category: "academic",
        type: "building",
        image: "/images/le-corbusier.jpg",

        description: "Academic block hosting academic classes, design workshops and expert talks for the Chitkara School of Planning and Architecture.",
        schedule: {
            weekdays: {
                open: "08:00",
                close: "17:30"
            },
            weekends: {
                closed: true
            }
        },
        access: [
            "Students",
            "Faculty",
            "Staff"
        ],
        facilities: [
            "Creative Studios",
            "Lecture Halls",
            "Wi-Fi",
            "Sitting Area",
            "Washrooms"
        ]

    },
    {
        id: "pythagoras-block",
        name: "Pythagoras Block",
        category: "academic",
        type: "building",
        image: "/images/pythagoras.jpg",

        description: "The Pythagoras Block at Chitkara University is an academic building where engineering and computer science classes, technical workshops, coding club recruitment events, and major programming exams take place.",
        schedule: {
            weekdays: {
                open: "09:00",
                close: "17:30"
            },
            weekends: {
                closed: true
            }
        },
        access: [
            "Students",
            "Faculty",
            "Staff"
        ],
        facilities: [
            "Classrooms",
            "Lecture Halls",
            "Wi-Fi",
            "Sitting Area",
            "Washrooms"
        ]

    },
    {
        id: "bloom-block",
        name: "Bloom Block",
        category: "academic",
        type: "building",
        image: "/images/bloom.jpg",

        description: "Academic block with classrooms, language learning facilities, and laboratories.",

        schedule: {
            weekdays: {
                open: "08:00",
                close: "21:30"
            },
            weekends: {
                closed: true
            }
        },

        access: ["Students", "Faculty", "Staff"],

        facilities: [
            "Classrooms",
            "Language Labs",
            "Wi-Fi",
            "Washrooms"
        ]
    },
    {
        id: "deMorgan-block",
        name: "DeMorgan Block",
        category: "academic",
        type: "building",
        image: "/images/de-morgan.jpg",

        description: "Academic block supporting teaching, learning, and research activities.",

        schedule: {
            weekdays: {
                open: "08:00",
                close: "21:30"
            },
            weekends: {
                closed: true
            }
        },

        access: ["Students", "Faculty", "Staff"],

        facilities: [
            "Classrooms",
            "Laboratories",
            "Faculty Offices",
            "Wi-Fi"
        ]
    },
    {
        id: "martin-extension",
        name: "Martin Extension",
        category: "academic",
        type: "building",

        description: "Academic block supporting teaching, learning, and research activities.",

        schedule: {
            weekdays: {
                open: "08:00",
                close: "21:30"
            },
            weekends: {
                closed: true
            }
        },

        access: ["Students", "Faculty", "Staff"],

        facilities: [
            "Classrooms",
            "Laboratories",
            "Faculty Offices",
            "Wi-Fi"
        ]
    },
    {
        id: "rockefeller-extension",
        name: "Rockefeller Extension",
        category: "academic",
        type: "building",



        description: "Academic block supporting teaching, learning, and research activities.",

        schedule: {
            weekdays: {
                open: "08:00",
                close: "21:30"
            },
            weekends: {
                closed: true
            }
        },

        access: ["Students", "Faculty", "Staff"],

        facilities: [
            "Classrooms",
            "Laboratories",
            "Faculty Offices",
            "Wi-Fi"
        ],
    },
    {
        id: "galelio-block",
        name: "Galileo Block",
        category: "academic",
        type: "building",
        image: "/images/galileo.jpg",

        description: "Academic block housing classrooms, laboratories, and faculty offices.",

        schedule: {
            weekdays: {
                open: "08:00",
                close: "21:30"
            },
            weekends: {
                closed: true
            }
        },

        access: ["Students", "Faculty", "Staff"],

        facilities: [
            "Classrooms",
            "Laboratories",
            "Faculty Offices",
            "Wi-Fi",
            "Washrooms"
        ]
    },
    {
        id: "exploratorium",
        name: "Exploretorium",
        category: "academic",
        type: "building",
        image: "/images/exploretorium.jpg",

        description: "A large indoor amphitheatre-style event hall where major university events, ceremonies, performances, conferences, and other large-scale gatherings are held.",

        schedule: {
            weekdays: {
                open: "08:00",
                close: "21:30"
            },
            weekends: {
                open: "08:00",
                close: "21:30"
            }
        },

        access: [
            "Students",
            "Faculty",
            "Staff",
            "Visitors"
        ],

        facilities: [
            "Indoor Amphitheatre",
            "Large Event Hall",
            "Stage",
            "Audience Seating",
            "Audio-Visual Equipment",
            "Sound System",
            "Lighting System",
            "Backstage Area",
            "Wi-Fi"
        ]
    },
    {
        id: "ramanujan-block",
        name: "Ramanujan Block",
        category: "academic",
        type: "building",
        image: "/images/ramanujan.jpg",

        description: "Academic block supporting teaching, learning, and research activities.",

        schedule: {
            weekdays: {
                open: "08:00",
                close: "21:30"
            },
            weekends: {
                closed: true
            }
        },

        access: [
            "Students",
            "Faculty",
            "Staff"
        ],

        facilities: [
            "Classrooms",
            "Laboratories",
            "Lecture Halls",
            "Wi-Fi",
            "Washrooms"
        ]
    },
    {
        id: "infosys-apple",
        name: "iOS Development Centre(powered by Infosys and Apple",
        category: "academic",
        type: "building",
        image: "/images/ios-development.jpg",

        description: "A technology and learning centre focused on iOS development, Apple technologies, and hands-on application development.",

        schedule: {
            weekdays: {
                open: "09:00",
                close: "17:30"
            },
            weekends: {
                closed: true
            }
        },

        access: [
            "Students",
            "Faculty",
            "Staff"
        ],

        facilities: [
            "iOS Development Lab",
            "Apple Devices",
            "Development Workstations",
            "Training Area",
            "Wi-Fi",
            "Sitting Area"
        ]
    },
    {
        id: "apple-experience",
        name: "Apple Experience Centre",
        category: "miscellaneous",
        type: "building",

        description: "An interactive centre where students and visitors can explore and experience Apple products, devices, and technologies.",

        schedule: {
            weekdays: {
                open: "09:00",
                close: "17:30"
            },
            weekends: {
                closed: true
            }
        },

        access: [
            "Students",
            "Faculty",
            "Staff",
            "Visitors"
        ],

        facilities: [
            "Apple Product Showcase",
            "iPhone & iPad Experience Area",
            "Mac Experience Area",
            "Apple Accessories",
            "Interactive Demonstrations",
            "Wi-Fi",
            "Seating Area"
        ]
    },
    // Administrative

    {
        id: "chitkara-nurture-nest",
        name: "Chitkara Nurture Nest",
        category: "miscellaneous",
        type: "building",
        image: "/images/nurture-nest.jpg",

        description: "A dedicated campus facility providing a comfortable and supportive space for parents and young children.",

        schedule: {
            weekdays: {
                open: "09:00",
                close: "17:30"
            },
            weekends: {
                closed: true
            }
        },

        access: [
            "Students",
            "Faculty",
            "Staff",
            "Visitors"
        ],

        facilities: [
            "Child Care Area",
            "Nursing Room",
            "Seating Area",
            "Rest Area",
            "Washrooms"
        ]
    },
    {
        id: "babbage-block",
        name: "Babbage Block",
        category: "administration",
        type: "building",
        image: "/images/babbage.jpg",

        description: "Administrative block providing student support services, including fee payment and financial assistance.",

        schedule: {
            weekdays: {
                open: "09:00",
                close: "17:00"
            },
            weekends: {
                closed: true
            }
        },

        access: [
            "Students",
            "Faculty",
            "Staff",
            "Visitors"
        ],

        facilities: [
            "Accounts Office",
            "Finance Office",
            "Student Services",
            "Reception",
            "Waiting Area"
        ]
    },
    {
        id: "claude-bernard-lab",
        name: "Claude Bernard Laboratory Animal Research Centre",
        category: "academic",
        type: "building",
        image: "/images/bernard-lab.jpg",

        description: "Laboratory animal research centre supporting academic, scientific, and research activities.",

        schedule: {
            weekdays: {
                open: "08:00",
                close: "17:30"
            },
            weekends: {
                closed: true
            }
        },

        access: [
            "Students",
            "Faculty",
            "Staff",
            "Researchers"
        ],

        facilities: [
            "Research Laboratories",
            "Laboratory Animal Facilities",
            "Research Equipment",
            "Faculty Offices",
            "Wi-Fi",
            "Washrooms"
        ]
    },
    {
        id: "health-care",
        name: "Health Care",
        category: "health",
        type: "building",
        image: "/images/dispensary.jpg",

        description: "The  of the campus.",
        schedule: {
            weekdays: {
                open: "00:00",
                close: "24:00"
            },
            weekends: {
                open: "06:00",
                close: "21:30"
            }
        },
        access: [
            "Students",
            "Faculty",
            "Staff"
        ],
        facilities: [
            "Emergency",
            "OPD",
            "Sitting Area",
        ]

    },
    {
        id: "admission-block",
        name: "Admission Block",
        category: "administration",
        type: "building",

        description: "Administrative building assisting prospective students with admissions, counselling, and enrollment procedures.",

        schedule: {
            weekdays: {
                open: "09:00",
                close: "17:00"
            },
            weekends: {
                closed: true
            }
        },

        access: [
            "Prospective Students",
            "Students",
            "Parents",
            "Visitors",
            "Staff"
        ],

        facilities: [
            "Admission Counters",
            "Counselling Offices",
            "Reception",
            "Waiting Area"
        ]
    },
    // Miscellaneous..

    {
        id: "happiness-center",
        name: "Chitkara Happiness Center",
        category: "miscellaneous",
        type: "building",

        description: "Chitkara happiness center.",

        schedule: {
            weekdays: {
                open: "09:00",
                close: "17:00"
            },
            weekends: {
                closed: true
            }
        },

        access: [
            "Prospective Students",
            "Students",
            "Parents",
            "Visitors",
            "Staff"
        ],

        facilities: [
            "Admission Counters",
            "Counselling Offices",
            "Reception",
            "Waiting Area"
        ]
    },
    {
        id: "ATM",
        name: "ATM",
        category: "miscellaneous",
        type: "building",

        description: "HDFC Bank ATM",

        schedule: {
            weekdays: {
                open: "09:00",
                close: "17:00"
            },
            weekends: {
                closed: true
            }
        },

        access: [
            "Prospective Students",
            "Students",
            "Parents",
            "Visitors",
            "Staff"
        ],

        facilities: [
            "Cash Withdrawal and deposit"
        ]
    },
    {
        id: "salon",
        name: "Beauty Lounge",
        category: "miscellaneous",
        type: "building",

        description: "A convenient grooming facility providing personal care and styling services for students and staff.",

        schedule: {
            weekdays: {
                open: "09:00",
                close: "17:00"
            },
            weekends: {
                closed: true
            }
        },

        access: [
            "Prospective Students",
            "Students",
            "Visitors",
            "Staff"
        ],

        facilities: [
            "Haircut",
            "Hair Styling",
            "Hair Wash",
            "Beard Grooming",
            "Facial",
            "Manicure",
        ]
    },
    {
        id: "sports-building",
        name: "Sportorium",
        category: "miscellaneous",
        type: "building",

        description: "A multi-purpose sports facility offering indoor and outdoor recreational activities, fitness facilities and spaces for students to participate in sports and leisure activities.",

        schedule: {
            weekdays: {
                open: "09:00",
                close: "17:00"
            },
            weekends: {
                closed: true
            }
        },

        access: [
            "Prospective Students",
            "Students",
            "Parents",
            "Visitors",
            "Staff"
        ],

        facilities: [
            "Swimming Pool",
            "Pool Table",
            "Tennis Court",
            "Badminton Court",
            "Indoor Games",
            "Fitness Area",
            "Changing Rooms",
            "Seating Area"
        ]
    },
    {
        id: "tuck-shop",
        name: "Tuck Shop",
        category: "miscellaneous",
        type: "building",

        description: "A convenient campus shop offering everyday essentials for students and staff.",

        schedule: {
            weekdays: {
                open: "09:00",
                close: "17:00"
            },
            weekends: {
                closed: true
            }
        },

        access: [
            "Prospective Students",
            "Students",
            "Parents",
            "Visitors",
            "Staff"
        ],

        facilities: [
            "Stationery",
            "Daily Essentials",
        ]
    },
    // Hostels -- Girls
    createHostel("pi-hostel", "Pi Hostel", "Girls"),
    createHostel("IBN-hostel", "IBN Hostel", "Girls"),
    createHostel("NGH-hostel", "NGH Hostel", "Girls"),
    createHostel("vasco-hostel", "Vasco da Gama Hostel", "Girls"),
    createHostel("columbus-hostel", "Columbus Hostel", "Girls"),
    // Hostel -- Boys
    createHostel("armstrong-hostel", "Armstrong Hostel", "Boys"),
    createHostel("archemedes-hostel", "Archemedes Hostel", "Boys"),
    createHostel("aristotle-hostel", "Aristotle Hostel", "Boys"),
    createHostel("alfred-nobel-hostel", "Alfred Nobel Hostel", "Boys"),
    createHostel("franklin-hostel", "Franklin Hostel", "Boys"),
    createHostel("magallen-hostel", "Magallen Hostel", "Boys"),
    createHostel("marco-polo-hostel", "Marco Polo Hostel", "Boys and Girls"),

    // Food areas
    createFoodOutlet("square-2", "Square-2"),
    createFoodOutlet("grab-go", "Grab & Go"),
    createFoodOutlet("belgian-waffel", "The Belgian Waffel"),
    createFoodOutlet("bev-cafe", "Bev Cafe"),
    createFoodOutlet("holy-scoop", "The Holy Scoop"),
    createFoodOutlet("first-coffee", "First Coffee"),
    createFoodOutlet("subway", "Subway"),
    createFoodOutlet("doful", "Doful"),
    createFoodOutlet("amul", "Amul (under construction)"),
    createFoodOutlet("blue-tokai", "Blue Tokai"),
    createFoodOutlet("chai-vyanjan", "Chai Vyanjan"),
    createFoodOutlet("haveli", "The Haveli"),
    createFoodOutlet("dhaba", "The Indian Dhaba"),
     {
        id: 'square-1',
        name: 'Square 1',
        category: "food",
        type: "restaurant",

        schedule: {
            weekdays: {
                open: "00:00",
                close: "23:59"
            },

            weekends: {
                open: "00:00",
                close: "23:59"
            }
        },

        description:
            "Food outlet serving meals and refreshments.",

        access: ["Students", "Faculty", "Staff", "Visitors"],
        facilities: [
            "Meals",
            "Snacks",
            "Beverages",
            "Seating",
            "Washrooms"
        ],
        subOutlets: [
            {
                0: ['dominos','Keventers','Speedy Chow']
            },
            {
                1:['laPinozz Pizza','Momos Hunter x The Bun Story','Chai Nagri']
            },
            {
                2:['Panjaab 13','The South Circle','Paratha Corner']
            }
        ]
    },

    // Parkings

    createParking("parking-chaivyanjan", "Car Parking"),
    createParking("parking-maingate", "Car Parking"),
    createParking("parking-turing", "Two-Wheeler Parking"),
    createParking("parking-omega", "Parking"),
    createParking("parking-bus", "Bus Parking"),
    createParking("parking-chaivyanjan-left", "Car Parking"),
    createParking("parking-chaivyanjan-car", "Car Parking"),
    createParking("parking-tesla", "Car Parking"),

    // Sports Facilities
    createGround("sports-area", "Sports Arena"),

    // Grounds & Parks
    createGround("football-ground", "Football Ground"),
    createGround("beta-zone", "Beta Zone"),
    createGround("chsf-park", "CHSF Park"),
    createGround("chitkara-woods", "Chitkara Woods"),
    createGround("chitkara-university", "Chitkara University"),
    createGround("park-of-scluptures", "Park of Sculptures"),
    createGround("alpha-zone", "Alpha Zone"),
    createGround("omega-zone", "Omega Zone"),
    createGround("martin-fountain", "Martin Fountain"),

];

function createHostel(id, name, gender) {
    return {
        id,
        name,
        category: "hostel",
        type: "building",

        description: `${gender} student hostel providing residential accommodation.`,

        schedule: {
            weekdays: {
                open: "00:00",
                close: "24:00"
            },
            weekends: {
                open: "00:00",
                close: "24:00"
            }
        },

        access: ["Residents", "Staff"],

        facilities: [
            "Rooms",
            "Common Area",
            "Wi-Fi",
            "Laundry",
            "Washrooms"
        ]
    };
}

function createParking(id, name) {
    return {
        id,
        name,
        category: "parking",
        type: "parking",

        description: "Parking area for students, faculty, and visitors.",
        schedule: {
            weekdays: {
                open: "00:00",
                close: "21:30"
            },
            weekends: {
                open: "00:00",
                close: "19:00"
            }
        },

        access: ["Students", "Faculty", "Staff", "Visitors"],

        facilities: [
            "Two-Wheeler Parking",
            "Four-Wheeler Parking"
        ]
    };
}

function createFoodOutlet(id, name) {
    return {
        id,
        name,
        category: "food",
        type: "restaurant",

        schedule: {
            weekdays: {
                open: "00:00",
                close: "23:59"
            },

            weekends: {
                open: "00:00",
                close: "23:59"
            }
        },

        description:
            "Food outlet serving meals and refreshments.",

        access: ["Students", "Faculty", "Staff", "Visitors"],
        facilities: [
            "Meals",
            "Snacks",
            "Beverages",
            "Seating"
        ]
    };
}

function createGround(id, name) {
    return {
        id,
        name,

        category: "ground",
        type: "ground",

        schedule: {
            weekdays: {
                open: "00:00",
                close: "23:59"
            },

            weekends: {
                open: "00:00",
                close: "23:59"
            }
        },

        description:
            "Outdoor campus ground and recreational area.",

        access: ["Students", "Faculty", "Staff", "Visitors"],
        facilities: [
            "Football",
            "Cricket",
            "Athletics",
            "Outdoor Events"
        ]
    }
}




















