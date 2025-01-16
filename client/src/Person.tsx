import { useState } from "react"

interface PersonProps {
    name: string,
    isMarried: boolean,
    age: number | null,
}


const Person = ({name,age, isMarried}: PersonProps) => {
    const [personalBio, setPersonalBio] = useState<string | null>();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPersonalBio(e.target.value);
    }

  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
    {isMarried != null && (
        <input type="text" placeholder="Enter shit" value={personalBio} onChange={handleInputChange}/>
    )}
    </div>
  )
}

export default Person
