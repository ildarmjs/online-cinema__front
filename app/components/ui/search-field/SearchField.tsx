import { ChangeEvent, FC } from 'react'
import MaterialIcon from '../MaterialIcon'



import s from './SearchField.module.scss'

interface ISearchField {
	searchTerm: string
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

const SearchField: FC<ISearchField> = ({ handleSearch, searchTerm }) => {
	return (
		<div className={s.search}>
			<MaterialIcon name='MdSearch' />
			<input placeholder='Search' value={searchTerm} onChange={handleSearch} />
		</div>
	)
}

export default SearchField
