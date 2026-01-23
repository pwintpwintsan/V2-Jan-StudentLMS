
import { Teacher, Student, ClassInfo, Course, School } from './types.ts';

export const MOCK_SCHOOLS: School[] = [
  { 
    id: '12323', 
    name: 'Downtown School', 
    location: 'City Center', 
    region: 'Central',
    teacherQuota: 15, 
    currentTeacherCount: 8, 
    studentQuota: 300, 
    currentStudentCount: 210, 
    adminEmail: 'admin@downtown.dir.com',
    contactPerson: 'Mr. David Aung',
    contactPhone: '09-450-123-456',
    lat: 37.7749, 
    lng: -122.4194,
    type: 'HQ',
    approvedCourseIds: ['course-a', 'course-b'],
    description: "Our flagship learning center located in the heart of the city. We focus on bridging the gap between traditional education and future tech.",
    establishedDate: "2021-03-12",
    facilities: ["Advanced Robotics Lab", "AI Compute Station", "Smart Presentation Hall"]
  },
  { 
    id: 'sch2', 
    name: 'Westside Academy', 
    location: 'Western District', 
    region: 'West',
    teacherQuota: 8, 
    currentTeacherCount: 5, 
    studentQuota: 150, 
    currentStudentCount: 120, 
    adminEmail: 'manager@westside.dir.com',
    contactPerson: 'Ms. Hla Hla',
    contactPhone: '09-261-789-012',
    lat: 37.7599, 
    lng: -122.4148,
    type: 'Regional',
    approvedCourseIds: ['course-a'],
    description: "A specialized regional academy focused on primary digital literacy.",
    establishedDate: "2022-06-15",
    facilities: ["Digital Literacy Suite", "Maker Space"]
  },
];

export const MOCK_COURSES: Course[] = [
  { 
    id: 'course-a', 
    name: 'Starter: Digital Creators', 
    isPurchased: true, 
    thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop',
    description: "Foundation journey for young learners. Master the basics of digital logic and computer science.",
    category: "Starter Course",
    level: "Foundation",
    duration: "20 Hours",
    lastUpdated: "2024-08-01",
    modules: [
      {
        id: 'a_m1',
        title: 'Module 1: Binary Code Secret',
        lessons: [
          { id: 'al1', title: 'Thinking in 0s and 1s', type: 'video', isPublished: true },
          { 
            id: 'al2', 
            title: 'Logic Gates Quiz', 
            type: 'quiz', 
            quiz: [
              { id: 'aq1', question: 'How is the number 3 represented in binary?', options: ['10', '11', '01', '00'], correctAnswer: 1 },
              { id: 'aq2', question: 'In binary, what does 0 usually mean?', options: ['Yes/On', 'No/Off', 'Maybe', 'Always'], correctAnswer: 1 }
            ], 
            isPublished: true 
          },
          { id: 'al_doc1', title: 'Binary Cheat Sheet', type: 'document', fileName: 'Binary_Guide.pdf', fileSize: '1.2 MB', isPublished: true }
        ]
      },
      {
        id: 'a_m2',
        title: 'Module 2: The Flow of Data',
        lessons: [
          { 
            id: 'al3', 
            title: 'Data Paths Quiz', 
            type: 'quiz', 
            quiz: [
              { id: 'aq3', question: 'What is a network?', options: ['One computer', 'Connected devices', 'A screen', 'A keyboard'], correctAnswer: 1 }
            ], 
            isPublished: true 
          }
        ]
      },
      {
        id: 'a_m3',
        title: 'Module 3: Algorithm Logic',
        lessons: [
          { 
            id: 'al4', 
            title: 'Loop Patterns Quiz', 
            type: 'quiz', 
            quiz: [
              { id: 'aq4', question: 'What does a loop do?', options: ['Stops a program', 'Repeats code', 'Changes color', 'Deletes data'], correctAnswer: 1 }
            ], 
            isPublished: true 
          }
        ]
      }
    ]
  },
  { 
    id: 'course-b', 
    name: 'Robotics Masters Level 1', 
    isPurchased: true, 
    thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop',
    description: "Physical computing and autonomous robots using advanced DIR modules.",
    category: "Robotics",
    level: "Advanced",
    duration: "30 Hours",
    lastUpdated: "2024-08-05",
    modules: [
      {
        id: 'b_m1',
        title: 'Module 1: The Robots Brain',
        lessons: [
          { id: 'bl1', title: 'Intro to Controllers', type: 'video', isPublished: true },
          { 
            id: 'bl2', 
            title: 'Sensor Input Exam', 
            type: 'quiz', 
            quiz: [
              { id: 'bq1', question: 'Which sensor detects light?', options: ['Ultrasonic', 'LDR', 'Touch', 'Gyro'], correctAnswer: 1 }
            ], 
            isPublished: true 
          }
        ]
      },
      {
        id: 'b_m2',
        title: 'Module 2: Motion Dynamics',
        lessons: [
          { 
            id: 'bl3', 
            title: 'Motor Control Exam', 
            type: 'quiz', 
            quiz: [
              { id: 'bq2', question: 'What converts electrical energy to motion?', options: ['Battery', 'Motor', 'Wire', 'Plastic'], correctAnswer: 1 }
            ], 
            isPublished: true 
          }
        ]
      },
      {
        id: 'b_m3',
        title: 'Module 3: Visual Processing',
        lessons: [
          { 
            id: 'bl4', 
            title: 'AI Vision Exam', 
            type: 'quiz', 
            quiz: [
              { id: 'bq3', question: 'What allows a robot to see?', options: ['Speaker', 'Camera', 'Antenna', 'Wheel'], correctAnswer: 1 }
            ], 
            isPublished: true 
          }
        ]
      },
      {
        id: 'b_m4',
        title: 'Module 4: Logical Decison Making',
        lessons: [
          { 
            id: 'bl5', 
            title: 'Pathfinding Exam', 
            type: 'quiz', 
            quiz: [
              { id: 'bq4', question: 'Which algorithm is used for paths?', options: ['Sort', 'A*', 'Add', 'Print'], correctAnswer: 1 }
            ], 
            isPublished: true 
          }
        ]
      }
    ]
  },
];

export const MOCK_TEACHER: Teacher = {
  id: 't1',
  username: "T1234567",
  firstName: "Jane",
  lastName: "Smith",
  schoolName: "Downtown School",
  teacherCode: "DIR-4421",
  role: "Educator",
  assignedClassIds: ['c1', 'c2'],
  branchId: '12323'
};

export const MOCK_STUDENTS: Student[] = [
  { 
    id: '1', 
    username: '1000001', 
    firstName: 'Jane', 
    lastName: 'Smith', 
    finalGrade: 88, 
    passingRate: 80,
    attendance: 26, 
    studyTime: 480, 
    taskCompletion: 82,
    level: 'Starter: Digital Creators', 
    status: 'active',
    activationDate: '2023-09-15',
    registeredClasses: [{ id: 'c1', name: 'Junior Coders A' }]
  },
  { 
    id: '2', 
    username: '1000002', 
    firstName: 'Sarah', 
    lastName: 'Chen', 
    finalGrade: 94, 
    passingRate: 80,
    attendance: 30, 
    studyTime: 550, 
    taskCompletion: 98,
    level: 'Starter: Digital Creators', 
    status: 'active',
    activationDate: '2023-10-01',
    registeredClasses: [{ id: 'c1', name: 'Junior Coders A' }]
  }
];

export const MOCK_CLASSES: ClassInfo[] = [
  { 
    id: 'c1', 
    name: 'Junior Coders A', 
    level: 'Level 1', 
    students: MOCK_STUDENTS,
    teachers: [MOCK_TEACHER],
    courseId: 'course-a',
    schedule: 'Mon / Wed 10:00 AM',
    progress: 72,
    lastActivity: '1 hour ago'
  },
  { 
    id: 'c2', 
    name: 'Junior Coders B', 
    level: 'Level 2', 
    students: [],
    teachers: [MOCK_TEACHER],
    courseId: 'course-b',
    schedule: 'Tue / Thu 02:00 PM',
    progress: 0,
    lastActivity: 'Never'
  }
];

export const LEVELS = ['Starter: Digital Creators', 'Robotics Masters Level 1'];
export const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export const LANGUAGES = ['English', 'Spanish', 'Portuguese', 'Chinese'];
export const MODULES = ['Module 1', 'Module 2', 'Module 3', 'Module 4'];
export const REGIONS = ['North', 'South', 'East', 'West', 'Central', 'Overseas'];
