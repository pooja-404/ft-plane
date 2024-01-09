import React from 'react'




const Backtop = () => {
    const [position, setPosition] = React.useState({ top: 0, left: 0 })
    React.useEffect(() => {
        window.scroll({
            top: position.top,
            left: position.left,
            behavior: 'smooth'
        })
    })
    const scrollTop = React.useRef()
    React.useEffect(() => {
        window.addEventListener('scroll', (e) => {
            window.scrollY > 200
                ? scrollTop.current.style.display = 'inline-block'
                : scrollTop.current.style.display = 'none'
        })
    })
    return (
        <>
            <div className='container mx-auto px-3 max-w-[1150px]'>
                <div onClick={() => setPosition({ ...position, position: { top: 0, left: 0 } })} className="fixed hidden bottom-[3%] right-[2%] z-30 translate-y-[0%] animate-bounce"
                    ref={scrollTop}
                ><div className='h-[52px] w-[52px] rounded-[50%] bg-[#313EF7]  cursor-pointer scroll-smooth transform-[all] transform-[.3s] transform-[linear]  flex justify-center items-center shadow-[0px_10px_14px_0px_#313EF740]'>
                        <svg width="59" height="60" viewBox="0 0 59 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.1401 17.5167L16.2798 19.0333H29H41.7202L41.8599 17.5167L42 16H29H16L16.1401 17.5167ZM23.737 27.8025L18.7069 33.0767L19.754 34.1053C20.3293 34.6704 20.9238 35.1333 21.0747 35.1333C21.2251 35.1333 22.6685 33.7599 24.2815 32.0818L27.2147 29.0298V36.5151V44H28.7768H30.339V36.7667C30.339 32.7883 30.4845 29.5333 30.6625 29.5333C30.8406 29.5333 32.3068 30.9039 33.9211 32.5788L36.8566 35.6243L37.9309 34.4287L39.0052 33.2326L33.8863 27.8804L28.767 22.5282L23.737 27.8025Z" fill="white" />
                        </svg>

                    </div>
                </div>
            </div>


        </>

    )
}

export default Backtop