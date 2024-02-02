import {create} from "zustand";
import {httpsCallableFromURL} from 'firebase/functions'
import {FirebaseConfig, functions} from "../config/firebase-config.ts";
export interface TestStoreState{
    helloFireWorld:(payload:void) =>Promise<string>

}

export const useTestStore = create<TestStoreState>(()=>({
   helloFireWorld:async ():Promise<string> =>{
       try{
            const callable = httpsCallableFromURL<void,string>(
                functions,
                FirebaseConfig.getAllLocalFunctions.helloFireWorld
            )
           const response =await callable();
            console.log('🥶🥶🥶🥶',response.data)
            return response.data
       }catch(error){
            throw new Error(`Hello Fire World failed with error ${error}`)
       }
   }
}))