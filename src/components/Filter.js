import { useState } from 'react'

function Filter(props) {
  const { filterCatByTraits } = props
  const [formData, setFormData] = useState({
    affection_level: false,
    child_friendly: false,
    dog_friendly: false,
    energy_level: false,
    shedding_level: false
  })

  function handleTraitChange(event) {
    const trait = event.target.name;
    const isSelected = event.target.checked;
    setFormData({
      ...formData,
      [trait]: isSelected
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    filterCatByTraits(formData)
  }

  return (
    <div className="filter" style={{ textAlign: 'center' }}>
      <h1>Select Cat Traits</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input type="checkbox" name="affection_level" onChange={handleTraitChange} checked={formData.affection_level}/>
            Affectionate
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="child_friendly" onChange={handleTraitChange} checked={formData.child_friendly} />
            Child Friendly
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="dog_friendly" onChange={handleTraitChange} checked={formData.dog_friendly} />
            Dog Friendly
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="energy_level" onChange={handleTraitChange} checked={formData.energy_level} />
            Energetic
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="shedding_level" onChange={handleTraitChange} checked={formData.shedding_level} />
            Minimal Shedding
          </label>
        </div>
        <button type="submit">Filter</button>
      </form>
    </div>
  );
}

export default Filter;
