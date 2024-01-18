import { AeSdkAepp, Node } from "@aeternity/aepp-sdk"



export const iniSdk= async()=>{
    const aeSdk = new AeSdkAepp({
        name: 'aepp-demo',
        nodes:[{
            name:'ae_uat',
            instance: new Node("hhtps://testnet.aeternity.io"),
        }],
        compilerUrl:"https://compiler.aepps.com",
        onAddressChange: (p) => console.info('onAdressChange',p),
        onDisconnect: (p) => console.info('onAdressChange',p),
        onNetworkChange: (a) => console.info('onAdressChange',a)
   
    })
}