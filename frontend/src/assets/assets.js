import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Robiul Islam',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Robiul Islam is dedicated to providing holistic healthcare, emphasizing preventive care and personalized treatment plans to ensure the well-being of every patient.',
        fees: 50,
        address: {
            line1: 'House 12, Alipur',
            line2: 'Faridpur, Dhaka, Bangladesh'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Shayla Islam',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Shayla Islam specializes in women’s health, offering compassionate care for all gynecological needs with a focus on comfort and trust.',
        fees: 60,
        address: {
            line1: 'House 34, Zhiltuli',
            line2: 'Faridpur, Dhaka, Bangladesh'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Md. Solayman',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Md. Solayman focuses on skin health, providing effective treatments for a wide range of dermatological conditions with care and precision.',
        fees: 30,
        address: {
            line1: 'House 56, Komlapur',
            line2: 'Faridpur, Dhaka, Bangladesh'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Tanvir Ahmed',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Tanvir Ahmed is committed to child health, ensuring a friendly and reassuring environment for children while delivering expert pediatric care.',
        fees: 40,
        address: {
            line1: 'House 78, Ambikapur',
            line2: 'Faridpur, Dhaka, Bangladesh'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Nusrat Jahan',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Nusrat Jahan provides expert neurological care, diagnosing and treating conditions with a patient-focused and empathetic approach.',
        fees: 50,
        address: {
            line1: 'House 90, Faridpur Sadar',
            line2: 'Faridpur, Dhaka, Bangladesh'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Farhan Hossain',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Farhan Hossain is passionate about brain and nerve health, delivering precise and advanced treatments to improve patient quality of life.',
        fees: 50,
        address: {
            line1: 'House 21, Faridpur Medical',
            line2: 'Faridpur, Dhaka, Bangladesh'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Safik Ahmed',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Safik Ahmed provides comprehensive general healthcare with a focus on preventive medicine and personalized treatment for each patient.',
        fees: 50,
        address: {
            line1: 'House 43, Alipur',
            line2: 'Faridpur, Dhaka, Bangladesh'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Ayush Siddiqe',
        image: doc8,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Ayush Siddiqe delivers compassionate gynecological care, guiding patients through treatments with empathy and professionalism.',
        fees: 60,
        address: {
            line1: 'House 65, Zhiltuli',
            line2: 'Faridpur, Dhaka, Bangladesh'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Sofiya Khatun',
        image: doc9,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Sofiya Khatun is an expert in dermatology, providing modern and effective solutions for skin conditions while prioritizing patient comfort.',
        fees: 30,
        address: {
            line1: 'House 87, Komlapur',
            line2: 'Faridpur, Dhaka, Bangladesh'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Mahmudul Hasan',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Mahmudul Hasan specializes in pediatric care, focusing on both the physical and emotional well-being of young patients.',
        fees: 40,
        address: {
            line1: 'House 11, Ambikapur',
            line2: 'Faridpur, Dhaka, Bangladesh'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Tasmia Rahman',
        image: doc11,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Tasmia Rahman provides dedicated neurological care, using advanced techniques to support patients with nervous system disorders.',
        fees: 50,
        address: {
            line1: 'House 33, Faridpur Sadar',
            line2: 'Faridpur, Dhaka, Bangladesh'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Adnan Chowdhury',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Adnan Chowdhury focuses on neurological health, delivering treatments with precision and compassionate patient support.',
        fees: 50,
        address: {
            line1: 'House 55, Faridpur Medical',
            line2: 'Faridpur, Dhaka, Bangladesh'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Tamanna Akter',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Tamanna Akter provides thorough general healthcare, emphasizing preventive measures and patient-centered treatment plans.',
        fees: 50,
        address: {
            line1: 'House 77, Alipur',
            line2: 'Faridpur, Dhaka, Bangladesh'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Hasan Mahmud',
        image: doc14,
        speciality: 'Gastroenterologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Hasan Mahmud delivers expert gynecological care, combining medical expertise with empathy for each patient’s needs.',
        fees: 60,
        address: {
            line1: 'House 99, Zhiltuli',
            line2: 'Faridpur, Dhaka, Bangladesh'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Rafiya Sultana',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Rafiya Sultana provides dermatological care with a focus on effective treatment, skin health, and patient satisfaction.',
        fees: 30,
        address: {
            line1: 'House 22, Komlapur',
            line2: 'Faridpur, Dhaka, Bangladesh'
        }
    },
]
