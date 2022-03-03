interface CollectionDetailsModel {
  colors: string[]
  materials: string[]
  label: { description: string; makerLine: string; title: string }
  webImage: { url: string }
  dating: { presentingDate: string }
  principalMaker: string
}

export default CollectionDetailsModel
