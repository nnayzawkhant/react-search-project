import React, {useState} from 'react'

const Data = ({title, image, description, date}) => {
    const [readMore, setReadMore] = useState("");
  return (
    <section className='section'>
        <img src={image} alt={title} className="image"/>
        <div className='footer'>
            <h1>{title}</h1>
            <p>
            {readMore ? description : `${description.substring(0, 120)}...`}

            <button onClick={()=> setReadMore(!readMore)}>
                {readMore ? 'show less' : 'read more'}
            </button>
            </p>
            <p>{date}</p>
        </div>
    </section>
  )
}

export default Data;