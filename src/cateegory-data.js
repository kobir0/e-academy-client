const course = [
    {
        id: 1,
        category: 'Marketing',
        categoryImg: 'https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg'
    },
    {
        id: 2,
        category: 'It And Software',
        categoryImg: 'https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg'
    },
    {
        id: 3,
        category: 'Bussiness',
        categoryImg: 'https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg'
    },
    {
        id: 4,
        category: 'Photgraphy',
        categoryImg: 'https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg'
    },
    {
        id: 5,
        category: 'Music',
        categoryImg: 'https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg'
    },
    {
        id: 6,
        category: 'Design',
        categoryImg: 'https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg'
    },
];


const coursedetails = [
    {
        category: 'Marketing',
        courseTitle: 'The Complete Digital Marketing Course ',
        price: '200',
        courseImg: 'https://www.onlinecoursereport.com/wp-content/uploads/2020/02/shutterstock_524863186-1024x683.jpg',
        description: 'Master Digital Marketing Strategy, Social Media Marketing, SEO, YouTube, Email, Facebook Marketing, Analytics & More!',
        rating: '5',
        uid: '10',

    },
    {
        category: 'Marketing',
        courseTitle: 'Mega Digital Marketing Course ',
        price: '100',
        courseImg: 'https://www.scoopearth.com/wp-content/uploads/2022/04/1ff20015-8a46-48a8-8cfb-914d2f244b83-62701c6e666d.jpg',
        description: 'Digital Marketing Strategy, Social Media Marketing, WordPress, SEO, Digital Sale, Email, Instagram, Facebook, ads ..',
        rating: '4.5',
        uid: '11'

    },
    {
        category: 'Marketing',
        courseTitle: 'Digital Marketing Masterclass',
        price: '500',
        courseImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOEnd5Z-8qTx6Cu4xfq6IvYs-DYTwtq8gtg1nwhr_VXYgq4p8xg1c1WaX_tzHjgwRwhvc&usqp=CAU',
        description: 'Learn Social Media Marketing, Facebook Marketing, Content Marketing, YouTube Marketing, Email Marketing, SEO, Branding+',
        rating: '4.8',
        uid: '12'

    },
    {
        category: 'Marketing',
        courseTitle: 'The Ultimate Digital Marketing Course 2022',
        price: '400',
        courseImg: 'https://cosmosgroup.sgp1.cdn.digitaloceanspaces.com/news/2427717_free%20digital%20marketing%20course.jpg',
        description: 'Learn market research, website creation, copywriting, SEO, Google ads, Facebook ads, email marketing, Twitter ads + more',
        rating: '4.3',
        uid: '13'

    },
    {
        category: 'Marketing',
        courseTitle: 'Learn How To Start & Grow Your Own Digital Marketing Agency',
        price: '30',
        courseImg: 'https://1.bp.blogspot.com/-C8sZ0sXy5zM/YJhd_Bw_LlI/AAAAAAAAFDc/d9_msepd76wn3GRyPNPt7oG3o4wzvwVqQCLcBGAsYHQ/s562/IMG_20210510_041051.jpg',
        description: 'Learn how YOU can start & scale a digital marketing agency using a "simple" 3 step process without being an ads expert.',
        rating: '4.2',
        uid: '14'

    },
    {
        category: 'It And Software',
        courseTitle: 'The Complete Quality Assurance Course- Learn QA from Scratch',
        price: '230',
        courseImg: 'https://www.exascaleproject.org/wp-content/uploads/2019/11/Software-Deployment-scaled.jpg',
        description: 'Learn QA Software Testing both Manual and Automation. Become Developer in Test and Kick-start your Career in IT.',
        rating: '5',
        uid: '20',

    },
    {
        category: 'It And Software',
        courseTitle: 'IT Business Analyst & Project Managers Technical awareness',
        price: '280',
        courseImg: 'https://misgeeks.com/wp-content/uploads/2021/06/bg3.jpg',
        description: 'A quick introduction to software development & IT for business analyst and non technical managers overseeing IT teams.',
        rating: '5',
        uid: '21',

    },
    {
        category: 'It And Software',
        courseTitle: 'Software Roles, Responsibilities, IT Recruitment Masterclass  ',
        price: '500',
        courseImg: 'https://www.nestsoft.com/images/services/software-testing1s.jpg',
        description: 'Ultimate course for answering "What a software engineer does?". Understand the basics to recruit or work as developers.',
        rating: '5',
        uid: '22',

    },
    {
        category: 'It And Software',
        courseTitle: 'Software Development IT Specialist Exam Prep',
        price: '120',
        courseImg: 'https://media.itpro.co.uk/image/upload/f_auto,t_primary-image-mobile@1/v1570816546/itpro/2019/02/software_shutterstock_1290773869.jpg',
        description: 'Prepare for the Software Development IT Specialist exam with this Q&A style course with thorough concept explanations',
        rating: '5',
        uid: '23',

    },
    {
        category: 'Bussiness',
        courseTitle: 'Business Communication Skills: Business Writing & Grammar',
        price: '230',
        courseImg: 'https://attendnow.in/wp-content/uploads/2021/06/14112126/istockphoto-1162009708-612x612-1.jpg',
        description: 'Professional communication skills: Business writing, English grammar, business English, email, and presentations skills',
        rating: '5',
        uid: '30',

    },
    {
        category: 'Bussiness',
        courseTitle: 'The Complete Business Plan Course',
        price: '123',
        courseImg: 'https://i.pinimg.com/originals/22/b9/06/22b906589a0ee7c76cb3ccff50b48309.jpg',
        description: 'Everything You Need to Make a Great Business Plan by an Award Winning Business School Prof, VC & Successful Entrepreneur',
        rating: '5',
        uid: '31',

    },
    {
        category: 'Bussiness',
        courseTitle: 'The Business Intelligence Analyst Course 2022',
        price: '400',
        courseImg: 'https://i.pinimg.com/originals/b0/4f/eb/b04feb2b4a24eaed42c4e2fe8b4ec643.jpg',
        description: 'The skills you need to become a BI Analyst - Statistics, Database theory, SQL, Tableau - Everything is included',
        rating: '5',
        uid: '32',

    },
    {
        category: 'Bussiness',
        courseTitle: 'Business Fundamentals: Corporate Strategy',
        price: '250',
        courseImg: 'https://thumbs.dreamstime.com/b/art-illustration-175025459.jpg',
        description: 'Business Strategy: Understand What It Takes To Be Successful In Business',
        rating: '5',
        uid: '33',

    },
    {
        category: 'Photography',
        courseTitle: 'Photography Masterclass: A Complete Guide to Photography',
        price: '400',
        courseImg: 'https://static.skillshare.com/uploads/discussion/tmp/555ff002',
        description: 'The Best Online Professional Photography Class: How to Take Amazing Photos for Beginners & Advanced Photographers',
        rating: '5',
        uid: '40',

    },
    {
        category: 'Photography',
        courseTitle: 'Affinity Photo: Solid Foundations',
        price: '500',
        courseImg: 'https://i.ytimg.com/vi/bjUTJFs0x2g/maxresdefault.jpg',
        description: 'The best selling beginners guide to Affinity Photo - complete with a 50 page PDF to aid your study!',
        rating: '5',
        uid: '41',

    },
    {
        category: 'Photography',
        courseTitle: 'Advance Your Photography: Start Taking Better Photos Today',
        price: '120',
        courseImg: 'https://s3.amazonaws.com/contents.newzenler.com/7004/courses/19207/data/thumb/l-1.jpg',
        description: 'Take Your Photography to the Next Level with this Advanced Photography Course: Inspiration & Steps to Better Photography',
        rating: '5',
        uid: '42',

    },
    {
        category: 'Photography',
        courseTitle: 'Complete Photography : 21 Courses in 1 [Beginner to Expert]',
        price: '75',
        courseImg: 'https://uploads.sarvgyan.com/2014/07/photography-image.jpg',
        description: 'Learn Portrait Photography, Landscape Photography, Stock Photography, Photography Composition, Black and White, and more',
        rating: '5',
        uid: '43',

    },
    {
        category: 'Music',
        courseTitle: 'Complete Guitar Lessons System - Beginner to Advanced',
        price: '542',
        courseImg: 'https://www.lorrainemusicacademy.com/wp-content/uploads/2016/08/MUSIC-COURSE.jpg',
        description: 'All-in-one Guitar Course, Fingerstyle Guitar, Blues Guitar, Acoustic Guitar, Electric Guitar & Fingerpicking Guitarra',
        rating: '4.2',
        uid: '50',

    },
    {
        category: 'Music',
        courseTitle: 'Music Theory Comprehensive Complete!',
        price: '52',
        courseImg: 'https://media.istockphoto.com/vectors/kindergarten-teacher-playing-guitar-vector-id1227151753?k=20&m=1227151753&s=612x612&w=0&h=0DHB7rLfMD0XJGf2pH1kD3fm4KniuNGmJRVcUCCgfgU=',
        description: 'A Complete College-Level Music Theory Curriculum. This edition of the course includes levels 1, 2, & 3.',
        rating: '3.9',
        uid: '51',

    },
    {
        category: 'Music',
        courseTitle: 'Music Production in Logic Pro X - The Complete Course!',
        price: '253',
        courseImg: 'https://media.istockphoto.com/vectors/school-students-illustration-2-vector-id1201245730?k=20&m=1201245730&s=612x612&w=0&h=5KWxX5BUgjguPZI7VOkR7lF-g1XNFg-Wjjjr92zSpjc=',
        description: 'Join Successful Music Production + Logic Pro X students in Creating, Recording, Mixing Music + Mastering in Logic Pro X',
        rating: '4.0',
        uid: '52',

    },
    {
        category: 'Music',
        courseTitle: 'Music Theory for Electronic Music COMPLETE',
        price: '75',
        courseImg: 'https://thumbs.dreamstime.com/b/online-music-learning-young-performer-playing-professional-equipment-talented-musician-musical-instrumentss-vector-184132669.jpg',
        description: 'Electronic music theory, digital music theory, and dance music theory. Learn music theory with ableton live and more!',
        rating: '3.8',
        uid: '53',

    },
    {
        category: 'Design',
        courseTitle: 'Graphic Design Masterclass - Learn GREAT Design',
        price: '48',
        courseImg: 'https://bitm.org.bd/assets/media/course_photo/1527658353.png',
        description: 'The Ultimate Graphic Design Course Which Covers Photoshop, Illustrator, InDesign,Design Theory, Branding and Logo Design',
        rating: '3.8',
        uid: '60',

    },
    {
        category: 'Design',
        courseTitle: 'The Complete Graphic Design Theory for Beginners Course',
        price: '59',
        courseImg: 'https://www.ideatick.com/wp-content/uploads/2022/04/ideatck-Blog-img-1.jpg',
        description: 'Learn Graphic Design Theory and the Basic Principles of Color Theory, Typography, Branding, Logo Design, Layout & More!',
        rating: '3.5',
        uid: '61',

    },
    {
        category: 'Design',
        courseTitle: 'Complete Web & Mobile Designer in 2022: UI/UX, Figma, +more',
        price: '350',
        courseImg: 'https://w10.naukri.com/mailers/2021/naukri-learning/oct/27oct/What-is-UI-UX-Design.jpg',
        description: 'Become a Designer in 2022! Master Mobile and Web Design, User Interface + User Experience (UI/UX Design), HTML, and CSS',
        rating: '4.5',
        uid: '62',

    },
    {
        category: 'Design',
        courseTitle: 'Figma UI UX Design Essentials',
        price: '300',
        courseImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHn-oooeBrdY25HuvrDaSnQkKY2qEee_XziQ&usqp=CAU',
        description: 'Use Figma to get a job in UI Design, User Interface, User Experience design, UX Design & Web Design',
        rating: '4.3',
        uid: '63',

    },
    {
        category: 'Design',
        courseTitle: 'Motion Design with Figma: Animations, Motion Graphics, UX/UI',
        price: '400',
        courseImg: 'https://i.ytimg.com/vi/S_JFh8pD2Po/maxresdefault.jpg',
        description: 'Figma like a Pro! Learn Motion Design on Mobile and Web using modern practices that top designers use + build projects!',
        rating: '4.8',
        uid: '64',

    },




]

