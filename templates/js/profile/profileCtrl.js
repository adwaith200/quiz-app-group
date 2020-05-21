import {getData} from './profilemodel';
import {showdata} from './profileViews'

export const profilectrl=async()=>{
    const data=await getData();
    const result=data.data.data.userdata;

    showdata(result);
    


}