import React from 'react'

const Skill = () => {

    // Skill about languages
    const skills = [
        {
            logo : 'logo-html5',
            level : 'Advance',
            count : 80,
        },
        {
            logo : 'logo-css3',
            level : 'Advance',
            count : 80,
        },
        {
            logo : 'logo-javascript',
            level : 'Medium',
            count : 60,
        },
        {
            logo : 'logo-react',
            level : ' Medium',
            count : 61,
        },
    ]
  return (
    <section
    id='skills'
    className=' py-10 bg-gray-800 relative'>
        <div className=' mt-8 text-center text-gray-100'>
            <h3 className=' text-4xl font-semibold '>
                My
                <span className=' text-cyan-600'>Skills</span>
            </h3>
            <p className=' text-gray-400 mt-3 text-lg'>My knowledge</p>

            <div className=' flex items-center justify-center mt-12 gap-10 flex-wrap'>
                {
                    skills?.map((skill,i) =>(
                        <div key={i} className=' group border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl'>
                            <div style={{
                                background : ` conic-gradient(rgb(8,145,170) ${skill.count}%, #add ${skill.count}%)`
                            }}
                            className=' w-32 h-32 flex items-center justify-center rounded-full'>
                                <div className=' text-6xl w-28 h-28 bg-gray-900 rounded-full  items-center justify-center flex group-hover:text-cyan-600'>
                                    <ion-icon name={skill.logo}></ion-icon>
                                </div>
                            </div>
                            <p className=' text-xl mt-3'>{skill.level}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Skill
