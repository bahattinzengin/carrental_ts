import CustomButton from "../CustomButton"
import { motion } from 'framer-motion';

const Hero = () => {
    const flyTo = (): void => {
        alert("Aşağıya kaydır")
    }

    return (
        <div className="hero">

            <div className="flex-1 pt-36 padding-x max-h-[920px]">
                <h1 className="hero__title">
                    Özgürlüğü Hisset, Yolculuğa Başla
                </h1>
                <p className="hero__subtitle text-gray-200">
                    Altın standartta hizmetle unutulmaz bir yolculuğa hazır
                    mısın? Araç kiralama deneyimini Altın Seçenekleri ile
                    taçlandırarak her anını özel kılabilirsin.
                </p>
                <CustomButton
                    designs="mt-10"
                    title="Arabaları Keşfet"
                    handleClick={flyTo}
                />
            </div>

            <div className="flex justify-center">
                <motion.img
                    initial={{ translateX: 200, scale: 0.7 }}
                    whileInView={{ translateX: 0, scale: 1 }}
                    // animate={{ translateX: 0, scale: 1 }}
                    transition={{ duration: 1 }}

                    className="object-contain"
                    src="/hero.png" />
            </div>


        </div>
    )
}

export default Hero