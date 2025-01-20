import Image from 'next/image'

function WorkCard({ data }) {
    return (
        <div className='flex flex-col lg:flex-row sm:items-center justify-center'>
            {/* IMAGE */}
            <div className='rounded-3xl overflow-hidden'><Image src={data.image} width={512} height={512} layout='responsive' className='sm:max-w-[500px] sm:min-w-[340px] transform transition duration-300 hover:scale-110 ease-in-out' /></div>
            {/* INFO */}
            <div className='bg-white backdrop-blur-sm bg-opacity-40 rounded-3xl p-8 sm:max-w-[400px] mt-[-40px] lg:ml-[-40px] flex flex-col gap-2 md:shadow-lg'>
                <h3 className='hidden sm:block'>{data.title}</h3>
                <h4 className='sm:hidden'>{data.title}</h4>
                <div className='flex relative mt-4'>
                    <div className='absolute left-[-30px] top-16 transform rotate-90 text-cyan-600 w-28'>{data.type}</div>
                    <div className='ml-16 flex flex-col'>
                        <div className='text-sm text-cyan-300'>{data.summary}</div>
                        <div className='font-light'>{data.text}</div>
                        {data.url && <div className='bg-white w-fit my-4 px-3 pxy-6 rounded-full flex gap-2 transform transition duration-300 hover:scale-110'>
                            <a href={data.url} target="_blank" className='text-xl'>Go to</a>
                            <Image src="/icons/arrow-up-right.svg" alt="email" width={12} height={12} />
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkCard
