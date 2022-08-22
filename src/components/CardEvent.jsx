const CardEvent = ({ image, title, desc, noName, no }) => {
    return (
        <div className='py-10 flex flex-wrap justify-center items-center'>
            <img src={image} alt="" className="dark:bg-white p-5 rounded-t-full"/>
            <div className='lg:w-1/2 w-full px-5 mt-5'>
                <h4 className='font-semibold text-4xl lg:text-start text-center'>{title}</h4>
                <p className='py-3 text-xl'>{desc}</p>

                <p className='text-xl'>{noName} <br />
                    {no}</p>
            </div>
        </div>
    )
}

export default CardEvent;