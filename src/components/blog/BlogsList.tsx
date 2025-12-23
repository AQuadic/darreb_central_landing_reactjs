import ai_img from '../../../public/images/blog/ai_img.jpg'
import BeginnerGuide from '../../../public/images/blog/beginner’sGuide.jpg'
import gym from '../../../public/images/blog/gym.jpg'
import clients from '../../../public/images/blog/new_clients.jpg'
import gym_software from '../../../public/images/blog/gym_software.jpg'
import planing_gym from '../../../public/images/blog/planning_gym.jpg'
import NavyArrow from '../icons/blogs/NavyArrow'
import { useTranslation } from 'react-i18next'

const BlogsList = () => {
    const { t } = useTranslation('blog')

    const blogLists = [
        { image: ai_img, id: 'item1' },
        { image: BeginnerGuide, id: 'item2' },
        { image: gym, id: 'item3' },
        { image: clients, id: 'item4' },
        { image: gym_software, id: 'item5' },
        { image: planing_gym, id: 'item6' },
    ]
    return (
        <section className="md:pt-22 pt-8 container">
            <h2 className="text-[#001B3F] md:text-[32px] text-base font-semibold leading-[100%] text-center">{t('lists.heading')}</h2>
            <p className="text-[#565555] md:text-2xl text-sm font-medium leading-[150%] md:mt-6 mt-3 text-center">
                {(() => {
                    const lines = t('lists.description').split('\n')
                    return lines.map((line, i) => (
                        <span key={i}>
                            {line}
                            {i < lines.length - 1 && <br />}
                        </span>
                    ))
                })()}
            </p>

            <div className='md:mt-17 mt-6 flex flex-wrap gap-6'>
                {blogLists.map((item, index) => {
                    return (
                        <div key={index} className='w-[384px] h-78 border border-[#C8C8C8] rounded-[32px] py-6 px-3'>
                            <img 
                                src={item.image}
                                className='w-90 h-47 object-cover rounded-4xl'
                            />
                            <div className='flex items-center justify-between mt-4'>
                                <h2 className='text-[#001B3F] md:text-xl text-sm font-semibold'>{t(`lists.items.${item.id}`)}</h2>
                                <NavyArrow />
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default BlogsList
