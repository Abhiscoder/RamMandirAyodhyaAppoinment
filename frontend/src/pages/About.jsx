import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p className='text-orange-400'><b>ABOUT RAM MANDIR</b></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img
          className="w-full sm:max-w-[200px] md:max-w-[300px] lg:max-w-[400px]"
          src={assets.ram}
          alt="RAM"
        />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <h2 className='text-2xl text-orange-400'><b>The Legacy of Prabhu Shir RAM 🙏🏻</b></h2>
          <p className="text-justify">
            Shri Ram, or Lord Rama, is one of the most respected and worshipped deities in Hinduism. He is considered the seventh avatar of Lord Vishnu, who takes birth on Earth whenever good needs to be protected and evil needs to be destroyed. Shri Ram is known as Maryada Purushottam, meaning the ideal man who always follows truth, duty (dharma), and moral values.
            <br />
            Ram was born in Ayodhya, a holy city in present-day Uttar Pradesh, to King Dasharatha and Queen Kaushalya. He had three brothers—Lakshman, Bharat, and Shatrughna. Ram life is described in the great Hindu epic, the Ramayana, written by Valmiki. His story is not just about being a warrior or a king but about how to live a life of righteousness, kindness, and respect. <br />
            Ram married Sita, the daughter of King Janak. She is considered an avatar of Goddess Lakshmi. Just before Ram was to become king, he was sent into 14 years of exile because of a promise made by his father to Queen Kaikeyi. Without question, Ram accepted the exile, showing his devotion to his father and to duty. Sita and his brother Lakshman chose to go with him.            <br />
            During this exile, Sita was kidnapped by the demon king Ravana of Lanka. To rescue her, Ram formed an alliance with Hanuman and the vanar (monkey) army, led by Sugriva. With their help, Ram defeated Ravana in a great battle and brought Sita back. His return to Ayodhya is celebrated as Diwali, the festival of lights.
            <br />
            After returning, Ram became king and ruled justly, creating an ideal kingdom known as Ram Rajya, where everyone lived in peace and happiness. Ram life teaches us about honesty, sacrifice, respect for elders, love for family, and commitment to duty.
            <br />
            Today, Shri Ram is not just a religious figure—he is a symbol of truth, devotion, and justice. The Ram Mandir being built in Ayodhya, believed to be his birthplace, is a spiritual center and a reminder of his eternal presence in the hearts of millions.
          </p>
        </div>
      </div>
      {/* History */}
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img
          className="w-full sm:max-w-[200px] md:max-w-[300px] lg:max-w-[400px]"
          src={assets.old_ram_mandir}
          alt="old_ram_mandir"
        />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <h2 className='text-2xl text-orange-400'><b>History of Ram Mandir, Ayodhya</b></h2>
          <p className="text-justify">The Ram Mandir in Ayodhya is dedicated to Shri Ram, who is believed by Hindus to have been born at this sacred site, known as Ram Janmabhoomi. For centuries, it has been a place of deep religious significance.<br />

            In 1528 CE, the Babri Masjid was built by Mughal general Mir Baqi, reportedly after demolishing a temple at the site. This sparked long-standing disputes between Hindus and Muslims. In 1859, the British erected a fence, allowing Hindus to worship outside and Muslims inside the structure.<br />

            In 1949, idols of Shri Ram appeared inside the mosque, and the site was locked by authorities. Legal battles followed. In 1992, the Babri Masjid was demolished by kar sevaks, leading to nationwide unrest.<br />

            After years of legal proceedings, the Supreme Court of India ruled in 2019 that the land belonged to Hindus. It ordered a separate 5-acre plot for a mosque. The Shri Ram Janmabhoomi Teerth Kshetra Trust was formed to oversee the temple's construction.<br />
            The foundation ceremony was held on 5 August 2020, and the temple now symbolizes faith, justice, and cultural unity for millions of devotees.</p>
        </div>
      </div>
      {/* Court Case & Legal Timeline */}
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img
          className="w-full sm:max-w-[200px] md:max-w-[300px] lg:max-w-[400px]"
          src={assets.history}
          alt="history"
        />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <h2 className='text-2xl text-orange-400'><b>Court Case & Legal Timeline</b></h2>
          <p className="text-justify">First recorded communal clashes between Hindus and Muslims over the site.<br />

            1949: Idols of Lord Ram appeared inside the mosque; the site was locked and declared disputed by the government.<br />

            1986: The district court allowed Hindus to worship at the site, leading to national protests.<br />

            1990: BJP leaders and kar sevaks (volunteers) attempted to rally for temple construction; clashes followed.<br />

            6 December 1992: Babri Masjid was demolished by kar sevaks, triggering riots across the country.<br />

            9 November 2019: The Supreme Court of India, led by Chief Justice Ranjan Gogoi, gave a unanimous verdict:The land was awarded to the Hindus for temple construction.
            <br />
            A separate 5-acre plot was allotted to the Sunni Waqf Board for a mosque in Ayodhya.</p>
        </div>
      </div>
      {/* Role of Saints and Sadhus */}
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img
          className="w-full sm:max-w-[200px] md:max-w-[300px] lg:max-w-[400px]"
          src={assets.baba}
          alt="baba"
        />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <h2 className='text-2xl text-orange-400'><b>Role of Saints and Sadhus</b></h2>
          <p className="text-justify">The construction of the Ram Mandir in Ayodhya is the result of decades of spiritual leadership, public mobilization, and legal perseverance. Several key figures have played vital roles in this historic journey.

            Mahant Ramchandra Paramhans was one of the earliest and most respected saints associated with the Ram Janmabhoomi movement. He dedicated his life to the cause and was instrumental in keeping the movement alive through faith and devotion.

            Ashok Singhal, a senior leader of the Vishwa Hindu Parishad (VHP), played a critical role in organizing national-level support. He mobilized religious leaders, devotees, and political groups to advocate for the construction of the Ram temple.

            Mahant Nritya Gopal Das, a senior Hindu saint, is the current head of the Shri Ram Janmabhoomi Teerth Kshetra Trust, the body responsible for managing and overseeing the construction of the temple.

            Yogi Adityanath, the Chief Minister of Uttar Pradesh and a Hindu monk, has provided significant administrative and political support for the temple’s construction at the state level..</p>
        </div>
      </div>
      {/* Current Construction Status */}
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img
          className="w-full sm:max-w-[200px] md:max-w-[300px] lg:max-w-[400px]"
          src={assets.Current_Construction_Status}
          alt="future_vision"
        />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <h2 className='text-2xl text-orange-400'><b>Current Construction Status</b></h2>
          <p className="text-justify">On August 5, 2020, Prime Minister Narendra Modi laid the foundation stone for the construction of the Ram Mandir in Ayodhya, marking the beginning of a historic project for millions of Hindus. This event was a momentous occasion in the journey of building the temple at the revered Ram Janmabhoomi.

            The Ram Mandir is being constructed with a deep respect for traditional methods and ancient temple architecture. Bansi Paharpur pink sandstone, known for its durability and beauty, is being used for the temple structure, giving it a distinct and timeless appearance. The choice of materials reflects a commitment to preserving the heritage of ancient Indian temple architecture.

            In line with ancient practices, no steel or iron is being used in the construction, adhering strictly to traditional techniques. This ensures the temple construction remains authentic to the methods employed in historic temples across India, preserving the sanctity of the process. The use of these traditional materials and methods is a symbol of reverence for India cultural and architectural heritage.

            The ongoing construction of the Ram Mandir is seen as a symbol of faith, devotion, and the unity of the nation.</p>
        </div>
      </div>
      {/* Future Vision */}
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img
          className="w-full sm:max-w-[200px] md:max-w-[300px] lg:max-w-[400px]"
          src={assets.future_vision}
          alt="future_vision"
        />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <h2 className='text-2xl text-orange-400'><b>Future Vision</b></h2>
          <p className="text-justify">The Ram Mandir in Ayodhya is set for major milestones in its development. The Main Temple central sanctum (garbhagriha) is expected to be inaugurated by January 22, 2024. This marks a significant moment in the temple journey, bringing it closer to its completion.

            Alongside the temple, the Ramayan Museum & Cultural Complex will be developed to showcase the Ramayana, its historical significance, and the core spiritual values of India. The museum will serve as an educational and cultural hub, celebrating the rich legacy of Hinduism and the epic teachings.

            To support the growing number of pilgrims, large-scale guesthouses, food centers, and spiritual spaces are being built to ensure a comfortable and enriching experience for visitors. These facilities aim to enhance the overall pilgrimage experience, making it a place for both devotion and reflection.

            The Ram Mandir complex is envisioned as a global symbol of faith, heritage, and harmony, attracting millions of visitors from across the world. This project not only represents religious significance but also highlights India rich cultural and spiritual traditions.</p>
        </div>
      </div>
      {/* About Us */}
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img
          className="w-full sm:max-w-[200px] md:max-w-[300px] lg:max-w-[400px]"
          src={assets.torusim_promote}
          alt="torusim_promote"
        />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <h2 className='text-2xl text-orange-400'><b>About Us</b></h2>
          <p className="text-justify">Welcome to RamMandir Ayodhya Tours, your trusted companion for a peaceful and well-guided pilgrimage. We understand the needs of devotees and travelers when it comes to planning temple visits, finding trusted guides, and accessing reliable local services.</p>
            <p>Our platform is dedicated to offering an exceptional pilgrimage experience to Ram Mandir in Ayodhya. We continuously enhance our services to make your spiritual journey smoother, integrating the latest features to guide you with ease. Whether you are planning your first visit or returning for a deeper connection, we are here to support you every step of the way.</p>
            <b className='text-gray-800'>Our vision</b>
            <p>Our vision is to create a seamless and enriching experience for every devotee and traveler. We aim to bridge the gap between visitors and Ayodhya sacred sites, trusted guides, and local services—making it easier for you to explore, connect, and experience the divine presence of Lord Ram.</p>
        </div>
      </div>
      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-orange-400 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Efficient darshan bookings that align with your spiritual journey.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-orange-400 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience:</b>
          <p>Access to a network of trusted spiritual guides and community leaders in Ayodhya.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-orange-400 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization:</b>
          <p>Personalized guidance and reminders to help you stay connected to your spiritual journey.</p>
        </div>

      </div>
    </div>
  )
}

export default About
