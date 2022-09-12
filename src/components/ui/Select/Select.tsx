import React, { FC } from 'react'
import Select, { SingleValue } from 'react-select';
import { IMySelect, ValueSelect } from './select.interface';


const MySelect:FC<IMySelect> = ({value, setSortType, options}) => {
  const handleChange = (e: SingleValue<ValueSelect>) => {
    setSortType({value: e?.value || '', label: e?.label || ''})
  }

  return (
    <Select
    className='select-container'
    classNamePrefix="custom-select"
    isSearchable={false}
    name="sort"
    value={value}
    onChange={handleChange}
    placeholder={''}
    options={options}
  />
  )
}

export default MySelect