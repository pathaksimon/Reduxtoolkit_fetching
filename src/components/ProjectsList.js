import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchProjectsData} from '../features/projects/projectsSlice'
import Iterate from '../Iterate'
import './project.css'

const categoriesList = [
  {id: 'ALL', displayText: 'All'},
  {id: 'STATIC', displayText: 'Static'},
  {id: 'RESPONSIVE', displayText: 'Responsive'},
  {id: 'DYNAMIC', displayText: 'Dynamic'},
  {id: 'REACT', displayText: 'React'},
]

const ProjectsList = () => {
  const dispatch = useDispatch()
  const new1 = useSelector(state => state.projects)
  const [changing123, newChange] = useState('')

  console.log(new1)
  const changing = event => {
    const sami = event.target.value.toUpperCase()
    newChange(sami)
  }

  useEffect(() => {
    dispatch(fetchProjectsData(changing123))
  }, [dispatch, changing123])

  return (
    <div className="interface">
      <div className="header">
        <div className="logo">
          <img
            src="https://assets.ccbp.in/frontend/react-js/projects-showcase/website-logo-img.png "
            className="picslogo"
          />
        </div>
      </div>
      <div>
        <select onChange={changing}>
          {categoriesList.map(each => (
            <Iterate first={each} key={each.id} />
          ))}
        </select>
      </div>
    </div>
  )
}

export default ProjectsList
