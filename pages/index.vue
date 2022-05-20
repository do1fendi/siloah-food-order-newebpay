<template>
  <div>
    <b-container>
      <Header />
      <!-- <p>{{GET_DATA}}</p> -->
      <div>
        <b-form @submit="checkForm" v-if="show" method="post">
          <b-form-group
            id="input-group-1"
            label="Email:"
            label-for="input-1"
            description=""
          >
            <b-form-input
              id="email"
              name="email"
              v-model="form.email"
              type="email"
              required
              placeholder="Enter email"
              ref="email"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-2"
            label="訂購人姓名:"
            label-for="input-2"
          >
            <b-form-input
              id="name"
              name="name"
              ref="name"
              v-model="form.name"
              required
              placeholder="Enter name"
            ></b-form-input>
          </b-form-group>

          <b-container class="forInline">
            <b-row>
              <b-col col sm="12">
                <b-form-group
                  id="input-group-3"
                  label="連絡電話:"
                  label-for="input-3"
                >
                  <b-form-input
                    id="phone"
                    name="phone"
                    v-model="form.phone"
                    placeholder="Enter phone"
                    ref="phone"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col col sm="12">
                <b-form-group
                  id="input-group-4"
                  label="行動電話:"
                  label-for="input-4"
                >
                  <b-form-input
                    id="mobile"
                    name="mobile"
                    v-model="form.mobile"
                    required
                    placeholder="Enter mobile"
                    ref="mobile"
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
          </b-container>

          <b-form-group label="地址:">
            <b-form-row class="mb-2">
              <b-col
                ><b-form-select
                  v-model="form.cityCounty"
                  :options="cityCountyOpt"
                  name="cityCounty"
                  @change="onChangeCityCounty(form.cityCounty)"
                  required
                ></b-form-select
              ></b-col>
              <b-col
                ><b-form-select
                  v-model="form.district"
                  :options="districtOpt"
                  name="district"
                  required
                ></b-form-select
              ></b-col>
            </b-form-row>

            <b-form-input
              id="address"
              name="address"
              v-model="form.address"
              required
              placeholder="Enter Address"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-6"
            label="訂購數量:"
            label-for="input-6"
            description=""
          >
            <b-form-select
              id="NoOfItem"
              name="NoOfItem"
              v-model="form.NoOfItem"
              :options="NoOfItemOpt"
              @change="onChangeNoOfItem(form.NoOfItem)"
              required
            ></b-form-select>
          </b-form-group>

          <b-row>
            <b-col col sm="6">
              <b-form-group
                id="input-group-7"
                label="收餐日期:"
                label-for="input-7"
                description=""
              >
                <b-form-datepicker
                  v-model="form.receiveDate"
                  :date-disabled-fn="dateDisabled"
                  placeholder="選日期"
                  locale="zh"
                  :hide-header="true"
                  id="receiveDate"
                  name="receiveDate"
                  ref="receiveDate"
                ></b-form-datepicker>
              </b-form-group>
            </b-col>
            <!-- <b-col col sm="6">
              <b-form-group id="input-group-8" label="收件時間:">
                <b-form-select
                  id="receiveTime"
                  name="receiveTime"
                  v-model="form.receiveTime"
                  :options="receiveTimeOpt"
                  required
                  ref="receiveTime"
                ></b-form-select>
              </b-form-group>
            </b-col> -->
          </b-row>

          <div>
            <b-tabs
              active-nav-item-class="font-weight-bold text-uppercase"
              active-tab-class="font-weight-bold text-success"
              content-class="mt-3"
            >
              <b-tab title="商品明細" active>
                <b-table :items="items" :fields="fields" caption-top></b-table>
              </b-tab>
            </b-tabs>
          </div>

          <div>
            <b-tabs
              active-nav-item-class="font-weight-bold text-uppercase"
              active-tab-class="font-weight-bold"
              content-class="mt-3"
            >
              <b-tab title="統一發票" active>
                <div>
                  <b-form-group label>
                    <b-form-row>
                      <b-col>
                        <b-form-radio
                          v-model="form.receiptSelected"
                          name="receiptSelected"
                          value="個人"
                          required
                          >個人</b-form-radio
                        >
                      </b-col>
                      <b-col>
                        <b-form-radio
                          v-model="form.receiptSelected"
                          name="receiptSelected"
                          value="公司"
                          required
                          >公司</b-form-radio
                        >
                      </b-col>
                      <b-col> </b-col>
                      <b-col> </b-col>
                    </b-form-row>
                  </b-form-group>
                  <b-form-group label>
                    <b-form-row>
                      <b-col>
                        <b-form-input
                          ref="companyTitle"
                          id="companyTitle"
                          name="companyTitle"
                          v-model="form.companyTitle"
                          placeholder="公司抬頭"
                        ></b-form-input>
                      </b-col>
                      <b-col>
                        <b-form-input
                          ref="taxId"
                          id="taxId"
                          name="taxId"
                          v-model="form.taxId"
                          placeholder="統編"
                        ></b-form-input>
                      </b-col>
                      <b-form-input
                        name="amt"
                        hidden
                        v-model="form.amt"
                      ></b-form-input>
                      <b-form-input
                        name="productCode"
                        hidden
                        v-model="form.productCode"
                      ></b-form-input>
                      <b-form-input
                        name="productName"
                        hidden
                        v-model="form.productName"
                      ></b-form-input>
                    </b-form-row>
                  </b-form-group>
                </div>
              </b-tab>
            </b-tabs>
          </div>

          <div class="mb-5">
            <b-tabs
              active-nav-item-class="font-weight-bold text-uppercase"
              active-tab-class="font-weight-bold text-success"
              content-class="mt-3"
            >
              <b-tab title="付款方式" active>
                <b-row class="center" >
                  <b-col class="center">
                    <b-button
                      size="lg"
                      type="submit"
                      variant="info btn-block"
                      formaction="https://www.taiwanviptravel.com/order/payment/credit.php"
                      >信用卡付款</b-button
                    >
                  </b-col>
                  <b-col>
                    <b-button
                      size="lg"
                      type="submit"
                      variant="info btn-block"
                      formaction="https://www.taiwanviptravel.com/order/payment/atm.php"
                      >ATM轉帳付款</b-button
                    >
                  </b-col>
                </b-row>
              </b-tab>
            </b-tabs>
          </div>
        </b-form>
      </div>
    </b-container>
    <!-- {{JSON.stringify(form)}} -->
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import axios from 'axios'
import Header from './../components/Header.vue'

export default {
  components: {
    Header,
  },
  data() {
    return {
      itemPrice: 0,
      shippingFee: 180,
      fields: ['商品', '數量', '小計'],
      items: [
        { 商品: '', 數量: 0, 小計: 0 },
         {
          商品: '運費',
          數量: '',
          小計: 180,
        },
        {
          商品: '總額',
          數量: '',
          小計: 0,
          _cellVariants: { 小計: 'important' },
        },
      ],

      form: {
        productCode: '',
        productName: '',
        email: '',
        name: '',
        phone: '',
        mobile: '',
        cityCounty: '臺北市',
        district: '',
        address: '',
        NoOfItem: 0,
        amt: 0,
        receiveDate: '',
        context: null,
        receiveTime: '',
        receiptSelected: '個人',
        companyTitle: '',
        taxId: '',
      },
      NoOfItemOpt: [],
      receiveTimeOpt: [],
      cityCountyOpt: [],
      districtOpt: [],
      show: true,
    }
  },
  computed: {
    ...mapGetters([
      'GET_ITEMNAME',
      'GET_PRICE',
      'GET_MINORDER',
      'GET_MINMULTIPLE',
      'GET_AVAILABLEORDER',
      'GET_DELIVERYSTARTDATE',
      'GET_DELIVERYENDDATE',
      'GET_CITYCOUNTY',
      'GET_DISTRICT',
    ]),
    ...mapMutations([
      'SET_ITEMNAME',
      'SET_PRICE',
      'SET_MINORDER',
      'SET_MINMULTIPLE',
      'SET_AVAILABLEORDER',
      'SET_DELIVERYSTARTDATE',
      'SET_DELIVERYENDDATE',
    ]),
  },
  methods: {
    loaData(apiData) {
      console.log(apiData)
      //set price and available delivery date
      let today = new Date()

      let updatePrice = async () => {
        this.$store.commit('SET_ITEMNAME', apiData.fieldData.name)
        this.$store.commit('SET_PRICE', apiData.fieldData.price_sales)
        this.$store.commit('SET_MINORDER', apiData.fieldData.min_per_order)
        this.$store.commit('SET_MINMULTIPLE', apiData.fieldData.min_multiple)
        this.$store.commit(
          'SET_AVAILABLEORDER',
          apiData.fieldData.available_order
        )
        if (today.getHours() < 12) {
          this.$store.commit(
            'SET_DELIVERYSTARTDATE',
            apiData.fieldData.API_RESTAURANT_deliverable_date_start - 1
          )
          this.$store.commit(
            'SET_DELIVERYENDDATE',
            apiData.fieldData.API_RESTAURANT_deliverable_date_end +
              apiData.fieldData.API_RESTAURANT_deliverable_date_start -
              1
          )
        } else {
          this.$store.commit(
            'SET_DELIVERYSTARTDATE',
            apiData.fieldData.API_RESTAURANT_deliverable_date_start
          )
          this.$store.commit(
            'SET_DELIVERYENDDATE',
            apiData.fieldData.API_RESTAURANT_deliverable_date_end +
              apiData.fieldData.API_RESTAURANT_deliverable_date_start
          )
        }

        //set avaialble order
        let min = this.GET_MINORDER
        let max = this.GET_AVAILABLEORDER
        let multiplication = this.GET_MINMULTIPLE
        for (let i = min; i < max; i += multiplication) {
          this.NoOfItemOpt.push({ value: i, text: i })
        }
        this.form.NoOfItem = min
        this.items[0].商品 = this.GET_ITEMNAME
        this.items[0].數量 = min
        this.form.amt = this.GET_PRICE * min
        this.cityCountyOpt = this.GET_CITYCOUNTY
        this.districtOpt = this.GET_DISTRICT.臺北市
        this.form.district = this.GET_DISTRICT.臺北市[0]

        //set available time for delivery
        // closed for hiding receive time 
        // let arr = JSON.parse(apiData.fieldData.deliverable_time_json)
        // this.receiveTimeOpt = arr.receiveTime
        
        this.form.productCode = this.$route.query.code
        this.form.productName = this.GET_ITEMNAME
      }
      updatePrice(apiData)
        .then((this.items[0].小計 = this.GET_PRICE))
        .then((this.itemPrice = this.GET_PRICE))
        .then(this.items[1].小計 = this.shippingFee)
        .then((this.items[2].小計 = this.itemPrice * this.form.NoOfItem + this.shippingFee))
       
    },

    dateDisabled(ymd, date) {
      //Disable days
      const curDate = new Date()

      const weekday = date.getDay()
      const month = date.getMonth()
      const day = date.getDate()

      const daysInMonth = new Date(
        curDate.getFullYear(),
        curDate.getMonth(),
        0
      ).getDate()

      const start = curDate.getDate() + parseInt(this.GET_DELIVERYSTARTDATE)
      const end = curDate.getDate() + parseInt(this.GET_DELIVERYENDDATE)

      // Return `true` if the date should be disabled
      /* disable saturday, sunday, days before start, days after end of current month
       if the desired days range is not over of this current month */
      if (end <= daysInMonth && month == curDate.getMonth()) {
        return weekday === 0 || weekday === 6 || day < start || day > end
      }
      if (end <= daysInMonth && month < curDate.getMonth()) {
        /* disable all days if the month in calendar is before of current month if days 
      range is not over dayscount of current month*/
        return day > 0
      }
      if (end <= daysInMonth && month > curDate.getMonth()) {
        /* disable all days if the month in calendar is after of current month if days 
      range is not over dayscount of current month*/
        return day > 0
      }
      if (end > daysInMonth && month < curDate.getMonth()) {
        /* similar calculation as above for days range is more than dayscount of current month */
        return day > 0
      }
      if (end > daysInMonth && month == curDate.getMonth()) {
        return weekday === 0 || weekday === 6 || day < start
      }
      if (end > daysInMonth && month == curDate.getMonth() + 1) {        
        let startOver = parseInt(this.GET_DELIVERYSTARTDATE) - (daysInMonth - curDate.getDate());
        let rest = parseInt(this.GET_DELIVERYENDDATE) - (daysInMonth - curDate.getDate())
        return weekday === 0 || weekday === 6 || day >= rest || day < startOver
      }
      if (end > daysInMonth && month > curDate.getMonth() + 1) {
        //let rest = end - daysInMonth
        return day > 0
      }
     
    },
    onChangeCityCounty(val) {
      this.districtOpt = this.GET_DISTRICT[val]
      this.form.district = this.GET_DISTRICT[val][0]
    },
    onChangeNoOfItem(val) {
      this.items[0].數量 = val
      // set totalPrice
      

      if (this.GET_PRICE * val > 3000){
        this.shippingFee = 0
        this.items[1].小計 =this.shippingFee
      }else{
        this.shippingFee = 180
        this.items[1].小計 =this.shippingFee
      }

      this.form.amt = this.GET_PRICE * val + this.shippingFee
      this.items[2].小計 = this.form.amt
    },
    checkForm(evt) {
      let error = false
      if (this.form.email == '') {
        alert('please insert Email')
        this.$refs.email.focus()
        error = true
      } else if (this.form.name == '') {
        alert('please insert name')
        this.$refs.name.focus()
        error = true
      } else if (this.form.mobile == '') {
        alert('please insert mobile')
        this.$refs.mobile.focus()
        error = true
      } else if (this.form.address == '') {
        alert('please insert address')
        this.$refs.address.focus()
        error = true
      } else if (!this.form.receiveDate) {
        alert('please insert receive date')
        this.$refs.receiveDate.focus()
        error = true
      }
      // close for hide receive time
      // else if (this.form.receiveTime == '') {
      //   alert('please insert receive Time')
      //   this.$refs.receiveTime.focus()
      //   error = true
      // }
      
      else if (
        this.form.receiptSelected == '公司' &&
        this.form.companyTitle == ''
      ) {
        alert('please insert 公司抬頭')
        this.$refs.companyTitle.focus()
        error = true
      } else if (this.form.receiptSelected == '公司' && this.form.taxId == '') {
        alert('please insert 統編')
        this.$refs.taxId.focus()
        error = true
      }

      if (error) evt.preventDefault()
    },
  },
  mounted() {
    //LfjY8d]eGWr9H APIACCESS

    /* Handle API */
    const config = {
      method: 'POST',
      url:
        'https://ofc.taiwanviptravel.com/fmi/data/v1/databases/zonepo/sessions',
      headers: {
        Authorization: 'Basic QVBJQUNDRVNTOkxmalk4ZF1lR1dyOUg=',
        'Content-Type': 'application/json',
      },
      data: {},
    }
    axios(config).then((response) => getApiData(response.data.response.token))
    const getApiData = (token) => {
      let query = JSON.stringify({
        query: [
          {
            product_code: this.$route.query.code,
          },
        ],
        sort: [
          {
            fieldName: 'product_code',
            sortOrder: 'ascend',
          },
        ],
      })
      const config = {
        method: 'POST',
        url:
          'https://ofc.taiwanviptravel.com/fmi/data/v1/databases/zonepo/layouts/API_CUISINE/_find',
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
        data: query,
      }
      axios(config).then((response) =>
        this.loaData(convertString(response.data.response.data[0]))
      )
    }

    //convert json response with :: symbol to _
    let convertString = (json) => {
      let ori = JSON.stringify(json)
      let converted = ori.split('::').join('_')
      let converted1 = converted.replace('\rt', '')
      return JSON.parse(converted1)
    }
  },
}
</script>

<style>
.table-important {
  font-weight: 800;
}
.nav-tabs .nav-link.active {
  background-color: #089790;
  border-color: #089790;
}
.btn-info {
  background-color: #dc8528;
  border-color: #dc8528;
}
.btn-info:hover {
  background-color: #d15e00;
  border-color: #d15e00;
}
.nav-tabs .nav-link.active {
  background-color: #17a2b8;
  border-color: #17a2b8;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  color: #fff;
}
.nav-tabs {
  border-bottom: 3px solid #17a2b8;
}
.center {
  text-align: center;
}
.tblreceipt {
  width: 100%;
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.forInline {
  padding-left: 0px;
  padding-right: 0px;
}
</style>
