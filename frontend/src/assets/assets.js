// import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
// import group_profiles from './group_profiles.png'
// import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.jpg'
import ram from './ram.jpg'
import history from './history.jpg'
import old_ram_mandir from './old_ram_mandir.jpg'
import baba from './baba.jpg'
import Current_Construction_Status from './Current_Construction_Status.jpg'
import future_vision from './future_vision.jpg'
import torusim_promote from './torusim_promote.png'
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
import pandit1 from './pandit1.jpg'
import pandit2 from './pandit2.jpg'
import pandit3 from './pandit3.jpg'
import pandit4 from './pandit4.jpg'
import room1 from './room1.jpg'
import room2 from './room2.jpg'
import room3 from './room3.jpg'
import room4 from './room4.jpg'
import photo1 from './photographer1.jpg'
import photo2 from './photographer2.jpg'
import photo3 from './photographer3.jpg'
import photo4 from './photographer4.jpg'
// import guide1 from './doc13.png'
// import guide2 from './doc14.png'
// import guide3 from './doc15.png'
// import guide4 from './doc14.png'
import Photographer5 from './photographer5.jpg'
import TouristGuide5 from './touristguide5.jpg'
import Pandit5 from './pandit5.jpg'
import LocalRooms from './localroom.png'
import TeransPort from './transport.jpg'
import FoodandDrink from './FoodandDrink.jpg'
import AyodhyaTour from './AyodhyaTour.jpg'
import header_img_2 from './header_img_2.jpg'
import header_img_3 from './header_img_3.jpg'
import header_img_4 from './header_img_4.jpg'
import header_img_5 from './header_img_5.jpg'

export const assets = {
    // appointment_img,
    header_img,
    // group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    // profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo,
    ram,
    history,
    old_ram_mandir,
    baba,
    Current_Construction_Status,
    future_vision,
    torusim_promote,
    header_img_2,
    header_img_3,
    header_img_4,
    header_img_5
}

export const specialityData = [
    {
        speciality: 'Pandit',
        image: Pandit5
    },
    {
        speciality: 'TouristGuide',
        image: TouristGuide5
    },
    {
        speciality: 'Photographer',
        image: Photographer5
    },
    {
        speciality: 'Hotels/Rooms',
        image: LocalRooms
    },
    {
        speciality: 'Transport',
        image: TeransPort
    },
    {
        speciality: 'Food&Drink',
        image: FoodandDrink
    },
    {
        speciality: 'AyodhyaTour',
        image: AyodhyaTour
    },
]

export const services = [
    {
        _id: 'pandit1',
        name: 'Pandit Raghunath Sharma',
        image: pandit1, // replace with actual image import
        speciality: 'Vedic Rituals & Pujas',
        // degree: 'Shastri (Vedic Studies)',
        experience: '15 Years',
        about: 'Pandit Raghunath Sharma is highly revered for his deep knowledge of Vedic scriptures and extensive experience conducting all types of Hindu rituals including Griha Pravesh, Satyanarayan Katha, and marriage ceremonies.',
        fees: 1500,
        address: {
            line1: '4th Cross, Banashankari',
            line2: 'Circle, Ring Road, Bengaluru'
        }
    },
    {
        _id: 'pandit2',
        name: 'Pandit Suresh Chaturvedi',
        image: pandit2,
        speciality: 'Marriage & Griha Shanti Puja',
        // degree: 'Acharya (Jyotish & Dharma Shastra)',
        experience: '10 Years',
        about: 'With a focus on auspicious ceremonies, Pandit Suresh specializes in vivah sanskar, vastu puja, and Griha Shanti. He is known for his precise pronunciation of mantras and adherence to tradition.',
        fees: 1200,
        address: {
            line1: '9th Cross, Lakshmi Nagar',
            line2: 'Near Hanuman Mandir, Pune'
        }
    },
    {
        _id: 'pandit3',
        name: 'Pandit Hari Om Tripathi',
        image: pandit3,
        speciality: 'Astrology & Sankalp Path',
        // degree: 'Jyotish Visharad',
        experience: '8 Years',
        about: 'Pandit Hari Om is a well-known astrologer and expert in Sankalp Path, Navgraha Shanti, and personalized birth chart consultations. His guidance is deeply rooted in the ancient science of Jyotisha.',
        fees: 1000,
        address: {
            line1: '12th Lane, Kashi Vishwanath Gali',
            line2: 'Varanasi, Uttar Pradesh'
        }
    },
    {
        _id: 'pandit4',
        name: 'Pandit Vishnu Bhatt',
        image: pandit4,
        speciality: 'Durga Saptashati & Havan',
        // degree: 'Vedacharya',
        experience: '12 Years',
        about: 'Pandit Vishnu Bhatt is proficient in Shakti pujas, Durga Saptashati recitation, and fire offerings (Yagna & Havan). His calm demeanor and spiritual presence are appreciated by all devotees.',
        fees: 1300,
        address: {
            line1: '22nd Cross, Sadar Bazar',
            line2: 'Near Laxmi Narayan Mandir, Delhi'
        }
    },
    {
        _id: 'guide1',
        name: 'Rajeev Menon',
        // image: guide1, // Replace with actual image import
        speciality: 'South India Cultural Tours',
        // degree: 'Certified Tourism Professional (CTP)',
        experience: '8 Years',
        about: 'Rajeev Menon is a seasoned tour guide specializing in South Indian temple architecture, classical music, and heritage walks. Fluent in English, Tamil, and Malayalam, he offers immersive cultural experiences in cities like Madurai, Thanjavur, and Kochi.',
        fees: 2500,
        address: {
            line1: '17th Cross, Mylapore',
            line2: 'Chennai, Tamil Nadu'
        }
    },
    {
        _id: 'guide2',
        name: 'Anita Kumari',
        // image: guide2,
        speciality: 'Golden Triangle Tour',
        // degree: 'Diploma in Heritage Tourism',
        experience: '6 Years',
        about: 'Anita is an expert in India’s Golden Triangle – Delhi, Agra, and Jaipur. Her guided tours focus on Mughal history, local crafts, and culinary experiences, making her a favorite among international tourists.',
        fees: 2800,
        address: {
            line1: '57th Cross, Karol Bagh',
            line2: 'Delhi, India'
        }
    },
    {
        _id: 'guide3',
        name: 'Vikram Singh Rathore',
        // image: guide3,
        speciality: 'Desert & Forts of Rajasthan',
        // degree: 'History & Tourism Studies',
        experience: '7 Years',
        about: 'Vikram specializes in showcasing the grandeur of Rajasthan – from the Thar desert camel safaris to exploring the palaces and forts of Jaipur, Jodhpur, and Udaipur. His stories bring royal history to life.',
        fees: 3000,
        address: {
            line1: '17th Cross, C-Scheme',
            line2: 'Jaipur, Rajasthan'
        }
    },
    {
        _id: 'guide4',
        name: 'Meenakshi Iyer',
        // image: guide4,
        speciality: 'Spiritual Journeys & Yoga Retreats',
        // degree: 'Masters in Indology',
        experience: '5 Years',
        about: 'Meenakshi curates spiritual journeys across Rishikesh, Varanasi, and Bodh Gaya. Her knowledge of Indian philosophy, yoga traditions, and temple etiquette makes her an ideal guide for seekers.',
        fees: 2200,
        address: {
            line1: '27th Cross, Haridwar Road',
            line2: 'Rishikesh, Uttarakhand'
        }
    },
    {
        _id: 'room1',
        name: 'Ava’s Garden View Room',
        image: room1, // Replace with actual image import
        speciality: 'Private Room with Garden Access',
        // degree: 'Hosted by Ava Mitchell',
        experience: '1 Year Hosting Experience',
        about: 'Enjoy a peaceful garden-view room perfect for solo travelers or couples. Located in a quiet neighborhood with easy access to local cafes, transport, and attractions.',
        fees: 1200, // price per night in INR
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Near Botanical Park, Pune'
        }
    },
    {
        _id: 'room2',
        name: 'King’s Family Suite',
        image: room2,
        speciality: '2-Bedroom Family Suite',
        // degree: 'Hosted by Jeffrey King',
        experience: '2 Years Hosting Experience',
        about: 'Spacious and family-friendly accommodation located close to shopping centers and public parks. Comes with kitchenette, WiFi, and children’s play area.',
        fees: 1800,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Near City Square Mall, Mumbai'
        }
    },
    {
        _id: 'room3',
        name: 'Zoe’s Cozy Studio',
        image: room3,
        speciality: 'Studio Apartment for Solo Travelers',
        // degree: 'Hosted by Zoe Kelly',
        experience: '4 Years Hosting Experience',
        about: 'A modern, fully-furnished studio ideal for business travelers or digital nomads. Includes work desk, mini kitchen, and high-speed internet.',
        fees: 1500,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Close to IT Park, Bangalore'
        }
    },
    {
        _id: 'room4',
        name: 'Patrick’s Rooftop Retreat',
        image: room4,
        speciality: 'Room with Rooftop Access',
        // degree: 'Hosted by Patrick Harris',
        experience: '4 Years Hosting Experience',
        about: 'A sunny room with rooftop garden access, perfect for relaxation and evening chai. Located near the riverfront and cultural landmarks.',
        fees: 1700,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Riverwalk Lane, Ahmedabad'
        }
    },
    {
        _id: 'photo1',
        name: 'Chloe Evans Photography',
        image: photo1, // Replace with actual image import
        speciality: 'Wedding & Candid Photography',
        // degree: 'Photographer: Chloe Evans',
        experience: '4 Years of Professional Experience',
        about: 'Chloe captures timeless wedding moments and candid emotions with an artistic touch. She specializes in natural lighting, pre-wedding shoots, and full wedding coverage.',
        fees: 15000, // fee per event/session in INR
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, Mumbai'
        }
    },
    {
        _id: 'photo2',
        name: 'Ryan Martinez Studio',
        image: photo2,
        speciality: 'Maternity & Baby Portraits',
        // degree: 'Photographer: Ryan Martinez',
        experience: '3 Years of Studio Experience',
        about: 'Ryan specializes in maternity portraits, newborn shoots, and themed baby photography. His warm and patient style helps families create lasting memories.',
        fees: 12000,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, Bengaluru'
        }
    },
    {
        _id: 'photo3',
        name: 'Amelia Hill Visuals',
        image: photo3,
        speciality: 'Fashion & Editorial Photography',
        // degree: 'Photographer: Amelia Hill',
        experience: '1 Year of Experience',
        about: 'Amelia focuses on bold and stylish editorial shots for fashion blogs, models, and brand campaigns. Her unique color grading and angles bring out a creative flair.',
        fees: 10000,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, Delhi'
        }
    },
    {
        _id: 'photo4',
        name: 'Karan Mehra Clicks',
        image: photo4, // Replace with actual image import
        speciality: 'Travel & Landscape Photography',
        // degree: 'Photographer: Karan Mehra',
        experience: '5 Years of Freelance Experience',
        about: 'Karan specializes in capturing the soul of places through vibrant travel and nature shots. From Himalayan treks to coastal sunsets, his work has been featured in national magazines.',
        fees: 8000,
        address: {
            line1: '50th Lane, Civil Lines',
            line2: 'Heritage Street, Varanasi'
        }
    }

]