import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';
import TextCenter from '../Libs/TextCenter';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles


  return (
    <div style={{ direction: "rtl", minHeight: "11vh", }}>
      <br-x />
      <Window title={"قیمت لحظه‌ای تتر (دلار)"} style={{ minHeight: 200, margin: 10, width: "calc(100% - 20px)", fontSize:20}}>
       
          <br-x/>
          <div style={{width:"%100", height:90, backgroundColor:"#97C2F7", borderRadius:10,
           textAlign:'center', border:"3px solid, #4878B4", fontSize:18}}> 

            <br-x/>
            <br-xx/>
           قیمت لحظه‌ای: {(props.p.price as number).toLocaleString("fa-IR")}

          </div> 

          <br-x/>
          

          <div style={{width:"100%", height:90, backgroundColor:"#97C2F7", borderRadius:10, 
           textAlign:'center', border:"3px solid, #4878B4", fontSize:18}}>

            <br-x/>
            <br-xx/>
            تغییرات ۲۴ ساعت: {"٪" + (Number(props.p.diff24d) as number).toLocaleString("fa-IR")} 

          </div>

          <br-x/>

          <div style={{width:"100%", height:90, backgroundColor:"#97C2F7", borderRadius:10, 
           textAlign:'center', border:"3px solid, #4878B4", fontSize:18}}>

            <br-x/>
            <br-xx/>
            تغییرات هفتگی: {"٪" + (Number(props.p.diff7d) as number).toLocaleString("fa-IR")} 

          </div>

          <br-x/>

          <div style={{width:"100%", height:90, backgroundColor:"#97C2F7", borderRadius:10, 
           textAlign:'center', border:"3px solid, #4878B4", fontSize:18}}>

            <br-x/>
            <br-xx/>
            تغییرات ماهانه: {"٪" + (Number(props.p.diff30d) as number).toLocaleString("fa-IR")} 

          </div>

            <br-x/>
            <br-x></br-x>
            <div style={{fontSize:16, textAlign:"center", backgroundColor:"#c1a076", borderTopLeftRadius:"0.5rem", 
            borderTopRightRadius: "0.5rem", borderBottomRightRadius: "0px", borderBottomLeftRadius: "0px", 
            justifyContent:"center", height:"25px" }}>
            spot dollar price
            </div>
          
          
          <br-x/>
          <div style={{width:"%100", height:90, backgroundColor:"#4878B4", borderRadius:10,
           textAlign:'center', border:"3px solid, #97C2F7", color:"white", fontSize:18}}> 

            <br-x/>
            <br-xx/>
           current price: {(props.p.price as number)}

          </div> 

          <br-x/>
          

          <div style={{width:"100%", height:90, backgroundColor:"#4878B4", borderRadius:10, 
           textAlign:'center', border:"3px solid, #97C2F7", color:"white", fontSize:18}}>

            <br-x/>
            <br-xx/>
           daily changes: {"٪" + (Number(props.p.diff24d) as number)} 

          </div>

          <br-x/>

          <div style={{width:"100%", height:90, backgroundColor:"#4878B4", borderRadius:10, 
           textAlign:'center', border:"3px solid, #97C2F7", color:"white", fontSize:18}}>

            <br-x/>
            <br-xx/>
            weekly changes: {"٪" + (Number(props.p.diff7d) as number)} 

          </div>

          <br-x/>

          <div style={{width:"100%", height:90, backgroundColor:"#4878B4", borderRadius:10, 
           textAlign:'center', border:"3px solid, #97C2F7", color:"white", fontSize:18}}>

            <br-x/>
            <br-xx/>
            monthly changes: {"٪" + (Number(props.p.diff30d) as number)} 

          </div>

            <br-x/>
          <div style={{fontSize:18, textAlign:'left'}}>
             helia hosseini (victory) 
          </div>

      </Window>
    </div>
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;

    let res = await fetch("https://api.tetherland.com/currencies")
    let data = await res.json()
    let p = data.data.currencies.USDT

    console.log("PRICEEEEEEEEEEE", p)

  return {
    props: {
      data: global.QSON.stringify({
        p,
        session,
        // nlangs,
      })
    },
  }
}