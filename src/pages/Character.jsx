import React from 'react'
import { useParams } from 'react-router-dom'
import { useCharacter } from '../hooks/useCharacter'

const Character = () => {
   const  {id} = useParams()
    const  {data,loading,error} =  useCharacter(id)
    console.log(data);

    if (loading) {
        return <h1>...Loading</h1>
    }
    if (error) {
        return <h1>...something went Wrong</h1>
    } 
  return   <div className='Character'>
        <img src={data.character.image} width={750} height={750} alt="" />
        <div className='Character-content'>
            <h1>{data.character.name}</h1>
            <p>{data.character.gender}</p>
            <div className="Character-episode">
                {data.character.episode.map((episode,index) => (
                    <div key={index}>
                        {episode.name} -  <b>{episode.episode}</b>
                    </div>
                ))}
            </div>
        </div>
    </div>
  
}

export default Character