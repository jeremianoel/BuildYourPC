import Content from '../../assets/content.jpg'
import NavBar from '../../components/NavBar'
import History from '../../assets/history.png'

const LandingPage = () => {
    return (
        <>
        <div className="container min-h-screen bg-[url('./assets/landingpage.png')] bg-center bg-cover pt-38 bg-fixed">
        <NavBar/>
        <div className="max-w-xl mt-48 ml-auto mr-10 text-right text-white">
            <h1 className="text-5xl font-semibold leading-normal mb-5">Build your very own PC.</h1>
            <p className="text-lg">Choose every part, customize every detail — experience the freedom to build a PC that is 
              truly yours, without compromise.
            </p>
            <div className="mt-10">
                <a href="https://play.google.com/store/apps?hl=id" target="_blank" 
                className="px-6 py-2 font-medium text-white duration-200 bg-cyan-600 rounded-3xl outline-2 outline-transparent hover:bg-white hover:text-cyan-600 hover:outline-cyan-600 hover:outline-4">Download Our PC Simulator</a>
            </div>
        </div>
    </div>
    <div className="container flex items-center justify-center min-h-screen gap-20 py-50">
        <img src={Content} className="duration-300 w-140 h-100 rounded-4xl hover:scale-105"/>
        <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-semibold leading-normal text-cyan-600">Built by You. Powered by Freedom.</h1>
            <p className="text-lg"> Pick every part, shape every detail — build the PC that fits your vision, your style,
             and your performance needs. No limits. No compromises.</p>
        </div>
    </div>
    <div className="container flex flex-row-reverse text-right items-center justify-center min-h-screen gap-20 py-50">
        <img src={History} className="duration-300 w-140 h-100 rounded-4xl hover:scale-105"/>
        <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-semibold leading-normal text-cyan-600">Who are we?</h1>
            <p className="text-lg">Build Your Computer began as a small local business founded in 2015 by a group of tech enthusiasts 
                passionate about custom PCs. Initially operating out of a modest workshop, the company quickly gained a reputation
                for its reliable service, deep hardware knowledge, and commitment to customer satisfaction. As demand grew, Build Your Computer expanded its services online and opened multiple outlets, making custom PC building accessible to a wider audience.</p>
        </div>
    </div>
    <div className="container min-h-screen flex justify-center gap-20 items-center bg-[url('./assets/content2.jpg')] bg-cover bg-center bg-fixed">
       <div className="flex flex-col hover:scale-105 duration-200 items-center justify-center text-center bg-white w-120 h-80 rounded-4xl">
        <h1 className="py-5 text-2xl font-bold text-cyan-600">Opening Hours</h1>
        <ul className="text-lg">
            <li className="py-1 list-none">Monday - Thursday : 10.00 - 23.00</li>
            <li className="py-1 list-none">Friday : 10.00 - 02.00</li>
            <li className="py-1 list-none">Saturday : 08.00 - 03.00</li>
            <li className="py-1 list-none">Sunday : 08.00 - 04.00</li>
        </ul>
       </div>
       <div className="flex flex-col hover:scale-105 duration-200 items-center justify-center text-center bg-white w-120 h-80 rounded-4xl">
        <h1 className="py-5 text-2xl font-bold text-cyan-600">Check Our Outlets</h1>
        <ul className="text-lg">
            <li className="py-1 list-none"><span className='font-bold'>Jakarta:</span> Jalan Melati Merah No. 57</li>
            <li className="py-1 list-none"><span className='font-bold'>Bandung:</span> Jalan Anggrek Biru No. 103</li>
            <li className="py-1 list-none"><span className='font-bold'>Surabaya:</span> Jalan Kenanga Putih No. 89</li>
        </ul>
       </div>
    </div>
        </>
    )
}

export default LandingPage