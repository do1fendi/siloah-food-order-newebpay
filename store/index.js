export const state = () => ({
  itemName:'',
  itemPrice: 0,
  minOrder:0,
  minMultiple:0,
  availableOrder:0,
  deliveryStartDate: 0,
  deliveryEndDate: 0,
  cityCounty:['臺北市'],
  district:{'臺北市':['中正區','萬華區','南港區','大同區','信義區','文山區', '中山區','士林區','松山區','北投區','大安區','內湖區'],
  '新臺北':['板橋區','中和區'] }

})

export const mutations = {
  SET_ITEMNAME: (state, name) => {
    state.itemName = name
  },
  SET_PRICE: (state, price) => {
    state.itemPrice = price
  },
  SET_MINORDER: (state, order) => {
    state.minOrder = order
  },
  SET_MINMULTIPLE: (state, multiple) => {
    state.minMultiple = multiple
  },
  SET_AVAILABLEORDER: (state, avlorder) => {
    state.availableOrder = avlorder
  },
  SET_DELIVERYSTARTDATE: (state, startDate) =>{
    state.deliveryStartDate = startDate
  },
  SET_DELIVERYENDDATE: (state, endDate) =>{
    state.deliveryEndDate = endDate
  }
}
export const getters = {
  GET_ITEMNAME(state) {
    return state.itemName
  },
  GET_PRICE(state) {
    return state.itemPrice
  },
  GET_MINORDER: (state) => {
    return state.minOrder
  },
  GET_MINMULTIPLE: (state) => {
    return state.minMultiple
  },
  GET_AVAILABLEORDER: (state) => {
    return state.availableOrder
  },
  GET_DELIVERYSTARTDATE(state) {
    return state.deliveryStartDate
  },
  GET_DELIVERYENDDATE(state) {
    return state.deliveryEndDate
  },
  GET_CITYCOUNTY(state) {
    return state.cityCounty
  },
  GET_DISTRICT(state){
    return state.district
  }
}
