interface InputFieldModel {
  setSearchValue: (value: string) => void
  searchValue: string
  type: string
  min: string | undefined
  max: string | undefined
}

export default InputFieldModel
