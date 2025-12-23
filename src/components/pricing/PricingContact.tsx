import { useTranslation } from 'react-i18next'
import { PhoneInput, type PhoneValue } from '../compound/PhoneInput'
import React from 'react';

const PricingContact = () => {
    const { t } = useTranslation('pricing')
    const [phone, setPhone] = React.useState<PhoneValue>({
        code: "EG",
        number: "",
    });
    return (
        <section className="md:bg-[#F3F7FC]">
            <div className="container md:py-17 my-4">
                <h2 className="text-[#001B3F] md:text-[32px] text-base font-semibold leading-[100%] text-center">
                    {t('contact.heading')}
                </h2>

                <p className="text-[#565555] md:text-lg text-sm font-medium leading-[150%] mt-6 text-center">
                    {(() => {
                        const lines = t('contact.description').split('\n')
                        return lines.map((line: string, i: number) => (
                            <span key={i}>
                                {line}
                                {i < lines.length - 1 && <br />}
                            </span>
                        ))
                    })()}
                </p>

                <div className="flex md:flex-row flex-col-reverse items-center justify-between mt-12">
                    <form className="w-full">
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-[#0F0F0F] text-base font-medium">
                                {t('contact.form.name')}
                            </label>
                            <input 
                                type="text" 
                                name="name"
                                className="md:w-146 w-full h-14 border border-[#C8C8C8] rounded-4xl mt-4 px-4"
                                placeholder={t('contact.form.namePlaceholder')}
                            />
                        </div>

                        <div className="flex flex-col mt-6">
                            <label htmlFor="email" className="text-[#0F0F0F] text-base font-medium">
                                {t('contact.form.email')}
                            </label>
                            <input 
                                type="email" 
                                name="email"
                                className="md:w-146 w-full h-14 border border-[#C8C8C8] rounded-4xl mt-4 px-4"
                                placeholder={t('contact.form.emailPlaceholder')}
                            />
                        </div>

                        <div className="flex flex-col mt-6">
                            <label htmlFor="tel" className="text-[#0F0F0F] text-base font-medium mb-4">
                                {t('contact.form.phone')}
                            </label>
                            <PhoneInput
                                value={phone}
                                onChange={(newValue) => setPhone(newValue)}
                                className='md:w-146 w-full'
                                />
                        </div>

                        <div className="flex flex-col mt-6">
                            <label htmlFor="feature" className="text-[#0F0F0F] text-base font-medium">
                                {t('contact.form.feature')}
                            </label>
                            <textarea 
                                name="feature"
                                className="md:w-146 w-full h-36.75 border border-[#C8C8C8] rounded-4xl mt-4 p-4"
                                placeholder={t('contact.form.featurePlaceholder')}
                            >
                            </textarea>
                        </div>

                        <button className="md:w-146 w-full h-14 bg-[linear-gradient(90deg,#15509C_0%,#071C36_100%)] rounded-4xl mt-6 text-[#FEFEFE] text-lg font-semibold">
                            {t('contact.form.send')}
                        </button>
                    </form>
                    <div className="w-full">
                        <img 
                            src="/images/pricing/contact_img.png"
                            alt={t('contact.imageAlt')}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PricingContact
