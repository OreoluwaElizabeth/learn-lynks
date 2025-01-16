import React, { useState } from 'react'

const CreateCurriculum = () => {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        creator: "",
    })

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData((prevState) => ({...prevState, [name]: value
        }));
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };
  return (
    <form onSubmit={handleSubmit}>
    <label>
      Name:
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
    </label>
    <br />
    <label>
      Decription:
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />
    </label>
    <br />
    <label>
      Creator:
      <input
        type="text"
        name="creator"
        value={formData.creator}
        onChange={handleChange}
      />
    </label>
    <br />
    <button type="submit">Submit</button>
  </form>
);
  
}

export default CreateCurriculum